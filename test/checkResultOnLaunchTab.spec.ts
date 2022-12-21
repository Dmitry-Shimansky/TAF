import { expect } from 'chai';
import {NavigationBar} from "../business/pageobjects/pages/navigationBar/NavigationBar";
import {LaunchesTab} from "../business/pageobjects/pages/tabs/LaunchesTab";
import {LoginPageReportPortal} from "../business/pageobjects/pages/login/LoginPage";
import {DefaultUser} from "../core/configuration/users/reportPortalUsers";

describe('Verify launch Tab', function () {
    let naviBar: NavigationBar;
    let launchesBar: LaunchesTab;
    let loginPage: LoginPageReportPortal;

    beforeAll(function () {
        naviBar = new NavigationBar();
        launchesBar = new LaunchesTab()
        loginPage = new LoginPageReportPortal();
        loginPage.loginWithParameters(DefaultUser.NAME, DefaultUser.PASSWORD);
    });

    it('Check result of Demo Api Test 1', function () {
        naviBar.clickOnLaunchButton();
        launchesBar.grid.waitForElementIsDisplayed();
        expect(launchesBar.gridRowList.length).to.be.equal(5);
        expect(launchesBar.gridHeader.isExisting()).to.be.true;

        launchesBar.gridRowList.scrollIntoView(4);
        launchesBar.gridRowList.click(4);
        launchesBar.demoApiTestsList(4).click();
        launchesBar.grid.waitForElementIsDisplayed();
        expect(launchesBar.gridRowList.length).to.be.equal(4);
        expect(launchesBar.gridHeader.isExisting()).to.be.true;

        launchesBar.demoApiTestsList(3).click();
        launchesBar.grid.waitForElementIsDisplayed();
        expect(launchesBar.gridRowList.length).to.be.equal(4);

        launchesBar.demoApiTestsList(3).click();
        expect(launchesBar.pageContainer.isExisting()).to.be.true;
    });
})
