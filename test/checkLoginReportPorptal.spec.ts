import {LoginPageReportPortal} from "../business/pageobjects/pages/login/LoginPage";
import {DefaultUser} from "../core/configuration/users/reportPortalUsers";
import {NavigationBar} from "../business/pageobjects/pages/navigationBar/NavigationBar";
import { expect } from 'chai';

describe('Check login functionalities', function () {
    let loginPage: LoginPageReportPortal;
    let naviBar: NavigationBar;

    beforeEach(async function () {
        loginPage = new LoginPageReportPortal();
        naviBar = new NavigationBar();
        await loginPage.open();
        await loginPage.userName.waitForElementExist();
    });

    it('Default user should logged in', async function () {
        await loginPage.addUserNameValue(DefaultUser.NAME);
        await loginPage.addPasswordValue(DefaultUser.PASSWORD);
        await loginPage.clickLogin();
        await naviBar.dashboardTab.waitForElementExist(naviBar.dashBoardContainerSelector);
        expect(await naviBar.dashboardTab.isExisting()).to.be.true;
        expect(await naviBar.filtersTab.isExisting()).to.be.true;
        expect(await naviBar.launchesTab.isExisting()).to.be.true;
        expect(await naviBar.bottomSidebarMenu.isExisting()).to.be.true;
    });
})
