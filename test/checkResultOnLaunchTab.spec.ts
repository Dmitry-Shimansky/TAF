import { expect } from 'chai';
import {NavigationBar} from "../business/pageobjects/pages/navigationBar/NavigationBar";
import {LaunchesTab} from "../business/pageobjects/pages/tabs/LaunchesTab";
import {LoginPageReportPortal} from "../business/pageobjects/pages/login/LoginPage";
import {DefaultUser} from "../core/configuration/users/reportPortalUsers";

describe('Verify launch Tab', function () {
    let naviBar: NavigationBar;
    let launchesBar: LaunchesTab;
    let loginPage: LoginPageReportPortal;

    beforeAll(async () => {
        naviBar = new NavigationBar();
        launchesBar = new LaunchesTab()
        loginPage = new LoginPageReportPortal();
        await loginPage.loginWithParameters(DefaultUser.NAME, DefaultUser.PASSWORD);
    });

    it('Check result of Demo Api Test 1', async () => {
        await naviBar.clickOnLaunchButton();
        await launchesBar.grid.waitForElementExist();
        expect(launchesBar.gridRowList.length).to.be.equal(5);
        expect(await launchesBar.gridHeader.isExisting()).to.be.true;

        await launchesBar.gridRowList.scrollIntoView(4);
        await launchesBar.gridRowList.clickByElemIndex(4);
        await launchesBar.demoApiTestsListClick(4);
        await launchesBar.grid.waitForElementExist();
        expect(launchesBar.gridRowList.length).to.be.equal(4);
        expect(await launchesBar.gridHeader.isExisting()).to.be.true;

        await launchesBar.demoApiTestsListClick(3);
        await launchesBar.grid.waitForElementIsDisplayed();
        expect(launchesBar.gridRowList.length).to.be.equal(4);
        await launchesBar.demoApiTestsListClick(3);
        expect(await launchesBar.pageContainer.isExisting()).to.be.true;
    });
})
