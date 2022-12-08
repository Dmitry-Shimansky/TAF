import {LoginPageReportPortal} from "../business/pageobjects/pages/login/LoginPage";
import {DefaultUser} from "../core/configuration/users/reportPortalUsers";
import {NavigationBar} from "../business/pageobjects/pages/navigationBar/NavigationBar";
import { expect } from 'chai';

describe('Check login functionalities', function () {
    let loginPage: LoginPageReportPortal;
    let naviBar: NavigationBar;

    beforeAll(async function () {
        loginPage = new LoginPageReportPortal();
        naviBar = new NavigationBar();
        await loginPage.open();
    });

    it('Default user should logged in', async function () {
        await loginPage.addUserNameValue(DefaultUser.NAME);
        await loginPage.addPasswordValue(DefaultUser.PASSWORD);
        await loginPage.clickLogin();
        expect(naviBar.dashboardTab.isExisting()).to.be.true;
        expect(naviBar.filtersTab.isExisting()).to.be.true;
        expect(naviBar.launchesTab.isExisting()).to.be.true;
        expect(naviBar.bottomSidebarMenu.isExisting()).to.be.true;
    });
})
