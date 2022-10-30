import { Given, When, Then } from '@wdio/cucumber-framework'
import {LoginPageReportPortal} from "../../business/pageobjects/pages/login/LoginPage";
import {NavigationBar} from "../../business/pageobjects/pages/navigationBar/NavigationBar";
import { expect } from 'chai';
import BrowserMethods from "../../business/wrappers/browser/browserMethods";

const loginPage = new LoginPageReportPortal();
const naviBar = new NavigationBar();

Given(/^User navigates to Report Portal$/, () => {
    loginPage.open();
});

When(/^I enter Username as "([^"]*)" and Password as "([^"]*)"$/, (userName: string, password: string) => {
    loginPage.addUserNameValue(userName);
    loginPage.addPasswordValue(password);
    loginPage.clickLogin();
});

Then(/^login should be successful$/, () => {
    expect(naviBar.dashboardTab.isExisting()).to.be.true;
    expect(naviBar.filtersTab.isExisting()).to.be.true;
    expect(naviBar.launchesTab.isExisting()).to.be.true;
    expect(naviBar.bottomSidebarMenu.isExisting()).to.be.true;
    BrowserMethods.reloadSession();
});
