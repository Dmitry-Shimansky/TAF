import {getLogger} from "log4js";
import {DefaultInterval, DefaultTimeOut} from "../../../core/utilities/defaultTimeoutInterval";
const logger = getLogger('ElementArray');

export class UIElemArray {

    constructor(
        private elementInstanceArray: ReturnType<WebdriverIO.Browser['$$']>,
        private selector?: string
    ) {}

    get locator(): string {
        return this.selector;
    }
    get length(): number {
        return this.elementInstanceArray.length;
    }

    static getInstanceArray(parentSelector: string, childSelector?: string) {
        const selector = `${parentSelector} ${childSelector}`;
        logger.debug(`Create element with selector ${selector}`);
        return new UIElemArray($$(selector), selector);
    }

    public click(index: number): void {
        this.waitForElementIsDisplayed(index);
        this.waitForElementIsClickable(index);
        logger.info(`Click on "${this.selector[index]}" element`);
        this.elementInstanceArray[index].click();
    }
    public scrollIntoView(index: number): void {
        logger.debug(`Scrolling to element "${this.selector[index]}"`);
        this.elementInstanceArray[index].scrollIntoView({ block: 'center' })
    }
    public waitForElementIsDisplayed(index: number, timeout: number = DefaultTimeOut.Timeout, interval: number = DefaultInterval.Interval, reverse = false, errorMsg = `Element "${this.selector}" is not displayed on page`): void {
        logger.debug(`Awaiting for element ${this.selector}`);
        this.elementInstanceArray[index].waitForDisplayed({
            timeout: timeout,
            interval: interval,
            reverse: reverse,
            timeoutMsg: errorMsg
        });
    }
    public waitForElementIsClickable(index: number, timeout: number = DefaultTimeOut.Timeout, interval: number = DefaultInterval.Interval, reverse = false, errorMsg = `Element "${this.selector}" is not displayed on page`): void {
        logger.debug(`Awaiting for element ${this.selector}`);
        this.elementInstanceArray[index].waitForClickable({
            timeout: timeout,
            interval: interval,
            reverse: reverse,
            timeoutMsg: errorMsg
        });
    }
}
