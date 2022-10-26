import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from 'chai';
import {LoginPageReportPortal} from "../../business/pageobjects/pages/login/LoginPage";
import {DefaultUser} from "../../core/configuration/users/reportPortalUsers";
import {NavigationBar} from "../../business/pageobjects/pages/navigationBar/NavigationBar";
import {LaunchesTab} from "../../business/pageobjects/pages/tabs/LaunchesTab";
import CommonUtils from "../../core/utilities/CommonUtils";

const loginPage = new LoginPageReportPortal();
const naviBar = new NavigationBar();
const launchesBar = new LaunchesTab();

Given(/^Login to the Report Portal$/, () => {
    loginPage.open();
    loginPage.loginWithParameters(DefaultUser.NAME, DefaultUser.PASSWORD)
});

When(/^Switch tab to the Launch$/, () => {
    naviBar.clickOnLaunchButton();
    launchesBar.grid.waitForElementIsDisplayed();
});

Then(/^Get result from each test$/, (table) => {
    table.hashes().forEach((expectedResult, index) => {
        expect(CommonUtils.deleteUnnecessaryItem(
            Object.values(expectedResult), '')
        ).to.deep.equal(launchesBar.getResultForTest(index + 1));
    });
});

Then(/^Get launch tab header$/, (table) => {
    const actualResult = launchesBar.launchHeadersArray();
    table.raw().forEach((expectedResult) => {
            expect(actualResult).to.include(expectedResult[0]);
    });
});
