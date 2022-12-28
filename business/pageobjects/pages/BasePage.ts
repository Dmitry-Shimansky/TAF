import { Logger } from 'log4js';
import log4js from '../../../core/logger/log4js/log4js';
import BrowserMethods from '../../wrappers/browser/browserMethods';
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export abstract class BasePage {
    logger: Logger;
    baseContainer: string;
    browserWrap: BrowserMethods;

    protected constructor() {
        this.logger = log4js.getLogger(this.constructor.name);
        this.baseContainer = '[class*="layout__content"]';
        this.browserWrap = new BrowserMethods();
    }

    async open(path?: string): Promise<void> {
        await this.browserWrap.navigateTo(path);
        this.logger.info(`I open ${this.constructor.name}`);
    }
}
