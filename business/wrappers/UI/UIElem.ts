import {getLogger} from "log4js";
import {DefaultInterval, DefaultTimeOut} from "../../../core/utilities/defaultTimeoutInterval";
const logger = getLogger('Element');

export class UIElem {

    constructor(
       private elementInstance: ReturnType<WebdriverIO.Browser['$']> | WebdriverIO.Element,
       private selector?: string
    ) {}

    get locator(): string {
        return this.selector;
    }

    static getInstance(parentSelector: string, childSelector?: string) {
        const selector = childSelector ? `${parentSelector} ${childSelector}` : parentSelector;
        logger.debug(`Create element with selector ${selector}`);
        return new UIElem($(selector), selector);
    }

    public waitForElementExist(timeout: number = DefaultTimeOut.Timeout, interval: number = DefaultInterval.Interval, reverse = false, errorMsg = `Element "${this.selector}" didn't exist on page`): void {
        logger.debug(`Awaiting for element ${this.selector}`);
        this.elementInstance.waitForExist({
            timeout: timeout,
            interval: interval,
            reverse: reverse,
            timeoutMsg: errorMsg
        });
    }
    public waitForElementIsDisplayed(timeout: number = DefaultTimeOut.Timeout, interval: number = DefaultInterval.Interval, reverse = false, errorMsg = `Element "${this.selector}" is not displayed on page`): void {
        logger.debug(`Awaiting for element ${this.selector}`);
        this.elementInstance.waitForDisplayed({
            timeout: timeout,
            interval: interval,
            reverse: reverse,
            timeoutMsg: errorMsg
        });
    }
    public waitForElementIsClickable(timeout: number = DefaultTimeOut.Timeout, interval: number = DefaultInterval.Interval, reverse = false, errorMsg = `Element "${this.selector}" is not displayed on page`): void {
        logger.debug(`Awaiting for element ${this.selector}`);
        this.elementInstance.waitForClickable({
            timeout: timeout,
            interval: interval,
            reverse: reverse,
            timeoutMsg: errorMsg
        });
    }
    public click(): void {
        this.waitForElementIsDisplayed();
        this.waitForElementIsClickable();
        logger.info(`Click on "${this.selector}" element`);
        this.elementInstance.click();
    }
    public addValue(value: string, waitForClickable = true): void {
        if (waitForClickable) this.waitForElementIsClickable();
        logger.debug(`Add "${value}" value into "${this.selector}" element`);
        this.elementInstance.addValue(value);
    }
    public isExisting(): boolean {
        logger.debug(`Checking is element "${this.selector}" existing`);
        return this.elementInstance.isExisting();
    }
    public isDisplayed(): boolean {
        logger.debug(`Checking is element "${this.selector}" displayed`);
        return this.elementInstance.isDisplayed();
    }
    public scrollIntoView(): void {
        logger.debug(`Scrolling to element "${this.selector}"`);
        this.elementInstance.scrollIntoView({ block: 'center' })
    }
}
