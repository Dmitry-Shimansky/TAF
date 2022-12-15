import {getLogger} from 'log4js';
import {ReportPortalUrls} from "../../../core/utilities/urls";

class BrowserMethods {
    logger = getLogger('[Browser]');

    async navigateTo(path?: string) {
        const url = path ? `${ReportPortalUrls.BASEURL}${path}` : ReportPortalUrls.BASEURL;
        this.logger.info(`Opened url: ${url}`);
        if (!global.page) {
            await global.page;
        }
        await global.page.goto(url);
    }

    async refreshPage() {
        return global.page.reload();
    }
}

export default BrowserMethods;
