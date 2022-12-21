import {getLogger} from 'log4js';

class BrowserMethods {
    logger = getLogger('Browser');

    get defaultUrl(): string {
        return browser.config.baseUrl;
    }

    public navigateTo(path = this.defaultUrl): string {
        this.logger.info(`Opened url: ${path}`);
        return browser.url(path);
    }

}

export default BrowserMethods;
