import {getLogger} from "log4js";
import {DefaultTimeOut} from "../../../core/utilities/defaultTimeoutInterval";
import {ElementHandle} from "puppeteer";
const logger = getLogger('[Element]');

export class UIElem {

    constructor(
       private elementInstance: Promise<ElementHandle> | ElementHandle,
       private selector?: string
    ) {}

    get locator(): string {
        return this.selector;
    }

    static getInstance(parentSelector: string, childSelector?: string) {
        const selector = childSelector ? `${parentSelector} ${childSelector}` : parentSelector;
        logger.debug(`Create element with selector ${selector}`);
        return new UIElem(global.page.$(selector), selector);
    }

    async waitForElementExist(timeout: number = DefaultTimeOut.Timeout) {
        logger.debug(`Awaiting for element ${this.selector}`);
        const element = await this.elementInstance;
        await element.waitForSelector('hidden', {timeout: timeout});
    }
    async waitForElementIsDisplayed(timeout: number = DefaultTimeOut.Timeout) {
        logger.debug(`Awaiting for element ${this.selector}`);
        const element = await this.elementInstance;
        await element.waitForSelector('visible', {timeout: timeout});
    }
    async click(): Promise<void> {
        const element = await this.elementInstance;
        await this.waitForElementIsDisplayed();
        logger.info(`Click on "${this.selector}" element`);
        return element.click();
    }
    async addValue(value: string): Promise<void> {
        logger.debug(`Add "${value}" value into "${this.selector}" element`);
        const element = await this.elementInstance;
        element.type(value);
    }
    async isExisting(): Promise<boolean> {
        logger.debug(`Checking is element "${this.selector}" existing`);
        const element = await this.elementInstance;
        return element.isIntersectingViewport();
    }
    async scrollIntoView() {
        await this.waitForElementIsDisplayed();
        const element = document.querySelector(this.selector);
        logger.debug(`Scrolling to element "${this.selector}"`);
        return element.scrollIntoView({ block: 'center' });
    }
    async getProperty(attribute: string) {
        const element = await this.elementInstance;
        await this.waitForElementIsDisplayed();
        return element.getProperty(attribute);
    }
    async getText() {
        const element = await this.elementInstance;
        return element.evaluate(el => el.textContent);
    }
}
