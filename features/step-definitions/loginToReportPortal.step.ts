import { Given, When, Then } from '@wdio/cucumber-framework'
import {LoginPageReportPortal} from "../../business/pageobjects/pages/login/LoginPage";
import {NavigationBar} from "../../business/pageobjects/pages/navigationBar/NavigationBar";
import { expect } from 'chai';
import {DefaultUser} from "../../core/configuration/users/reportPortalUsers";

const loginPage = new LoginPageReportPortal();
const naviBar = new NavigationBar();

Given(/^I am on the login page$/, () => {
    loginPage.open();
});

When(/^Enter default credential$/, () => {
    loginPage.addUserNameValue(DefaultUser.NAME);
    loginPage.addPasswordValue(DefaultUser.PASSWORD);
    loginPage.clickLogin();
});

Then(/^User see home page$/, () => {
    expect(naviBar.dashboardTab.isExisting()).to.be.true;
    expect(naviBar.filtersTab.isExisting()).to.be.true;
    expect(naviBar.launchesTab.isExisting()).to.be.true;
    expect(naviBar.bottomSidebarMenu.isExisting()).to.be.true;
});
