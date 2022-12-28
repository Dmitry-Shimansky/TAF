import puppeteer from 'puppeteer';
import {getLogger} from 'log4js';
import {DefaultTimeOut} from "../../../core/utilities/defaultTimeoutInterval";

const logger = getLogger('[Window]');

beforeAll(async function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = DefaultTimeOut.Timeout;
});

beforeAll(async function () {
    global.browser = await puppeteer.launch({
        headless: false,
        waitForInitialPage: true,
        args: [
            '--window-position=-5,-5',
            "--window-size=1520,1080"
        ],
        defaultViewport: {
            width: 1520,
            height: 1080
        }
    });
    // global.browserContext = global.browser.browserContexts();
    global.page = await global.browser.newPage();
    await global.page.setRequestInterception(true);
    global.page.on('request', interceptedRequest => {
        if (interceptedRequest.isInterceptResolutionHandled()) return;
        if (
            // interceptedRequest.url().endsWith('8080/')
            interceptedRequest.url().endsWith('pornhub.com')
        )
            interceptedRequest.abort();
        else interceptedRequest.continue();
    });
});

afterAll(async function () {
    await global.browser.close();
});
