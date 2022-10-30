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
    public pause(ms: number): void {
        browser.pause(ms);
    }
    static reloadSession(): void {
        browser.reloadSession();
    }
}

export default BrowserMethods;
