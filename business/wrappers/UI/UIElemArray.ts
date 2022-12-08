import {getLogger} from "log4js";
import {ElementHandle} from "puppeteer";
import {UIElem} from "./UIElem";
const logger = getLogger('ElementArray');

export class UIElemArray {

    constructor(
        private elementInstanceArray: Promise<Array<ElementHandle>>,
        private selector?: string
    ) {}

    static getInstanceArray(parentSelector: string, childSelector?: string) {
        const selector = `${parentSelector} ${childSelector}`;
        logger.debug(`Create element with selector ${selector}`);
        return new UIElemArray(global.page.$$(selector), selector);
    }

    async length(): Promise<number> {
        return (await this.elementInstanceArray).length;
    }
    async getElementsArray(): Promise<UIElem[]> {
        return (await this.elementInstanceArray).map(element => new UIElem(element));
    }
    async elementByIndex(index: number) {
        logger.debug(`Get ${index} element from array`);
        return (await this.elementInstanceArray[index])
    }
    getElementByIndex(index: number): UIElem {
        return new UIElem(this.elementByIndex(index));
    }
    clickByElemIndex(index: number): Promise<void> {
        const element = this.getElementByIndex(index);
        logger.info(`Click on ${index} element`);
        return element.click();
    }
    scrollIntoView(index: number) {
        logger.debug(`Scrolling to element "${this.selector[index]}"`);
        this.elementInstanceArray[index].scrollIntoView({ block: 'center' })
    }
    async getTextArray(firstNElements?: number): Promise<string[]> {
        let elements = await this.getElementsArray();
        if (firstNElements) {
            elements = elements.slice(0, firstNElements);
        }
        return Promise.all(elements.map(e => e.getText()));
    }
}
