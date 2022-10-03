import { Logger } from 'log4js';
import log4js from '../../../core/logger/log4js/log4js';
import BrowserMethods from '../../wrappers/browser/browserMethods';
import {UIElem} from "../../wrappers/UI/UIElem";
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export abstract class BasePage {
    logger: Logger;
    baseElement: UIElem;
    browserWrap: BrowserMethods;

    protected abstract get url(): string;

    protected constructor() {
        this.logger = log4js.getLogger(this.constructor.name);
        this.baseElement = UIElem.getInstance('[class*="layout__content"]');
        this.browserWrap = new BrowserMethods();
    }

    public open(): void {
        this.browserWrap.navigateTo();
        this.logger.info(`I open ${this.constructor.name}`);
    }

    public waitUntilElementIsDisplayed(element: UIElem, waitingTime?: number, interval?: number, reverse?: boolean, errorText?: string): void {
        element.waitForElementIsDisplayed(waitingTime, interval, reverse, errorText);
    }
}
