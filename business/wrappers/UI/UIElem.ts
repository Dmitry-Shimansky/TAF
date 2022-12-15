import {getLogger} from "log4js";
import {DefaultTimeOut} from "../../../core/utilities/defaultTimeoutInterval";
import {ElementHandle} from "puppeteer";
const logger = getLogger('[Element]');

export class UIElem {

    constructor(
       private elementInstance: Promise<ElementHandle> | ElementHandle,
       public selector?: string
    ) {}

    get locator(): string {
        return this.selector;
    }

    static getInstance(parentSelector: string, childSelector?: string) {
        const selector = childSelector ? `${parentSelector} ${childSelector}` : parentSelector;
        logger.debug(`Create element with selector ${selector}`);
        return new UIElem(global.page.$(selector), selector);
    }

    async waitForElementExist(locator = this.locator, timeout: number = DefaultTimeOut.Timeout): Promise<void> {
        logger.debug(`Awaiting for element ${this.selector}`);
        await this.elementInstance;
        await global.page.waitForSelector(locator, {hidden: false, timeout: timeout});
    }
    async waitForElementIsDisplayed(locator = this.locator, timeout: number = DefaultTimeOut.Timeout) {
        logger.debug(`Awaiting for element ${this.selector}`);
        await this.elementInstance;
        await global.page.waitForSelector(locator, {visible: true, timeout: timeout});
    }
    async click(): Promise<void> {
        const element = await this.elementInstance;
        logger.info(`Click on "${this.selector}" element`);
        return element.click();
    }
    async addValue(value: string) {
        logger.debug(`Add "${value}" value into "${this.selector}" element`);
        const element = await this.elementInstance;
        return element.type(value);
    }
    async isExisting() {
        logger.debug(`Checking is element "${this.selector}" existing`);
        const element = await this.elementInstance;
        return element.isIntersectingViewport();
        // const exists = await global.page.$eval(this.locator, () => true).catch(() => false);
        // return exists;
    }
    async scrollIntoView() {
        const element = await this.elementInstance;
        logger.debug(`Scrolling to element "${this.selector}"`);
        return element.tap();
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
    async boundingBox() {
        const element = await this.elementInstance;
        return element.boundingBox();
    }
}
