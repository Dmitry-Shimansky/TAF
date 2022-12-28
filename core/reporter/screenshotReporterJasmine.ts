import {getLogger} from 'log4js';

const logger = getLogger('[Screenshot Reporter]');

class ScreenshotReporter {

    screenshotMaker = {
        specDone : async function(result) {
            const screenshotName = new Date().getTime() + '.png';
            const path = `./testResultsScreenshot/${screenshotName}`;
            if (result.status === 'failed') {
                logger.info(`${result} \n Screenshot taken at ${new Date().toString()} for current step is ${screenshotName},
            folder: /${path}/${screenshotName}`);
                await global.page.screenshot({ path: path, fullPage: true, type: 'png' });
            }
        },
    }
};

export default new ScreenshotReporter();

