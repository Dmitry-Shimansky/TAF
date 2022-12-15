import {LoginPageReportPortal} from "../business/pageobjects/pages/login/LoginPage";
import {NavigationBar} from "../business/pageobjects/pages/navigationBar/NavigationBar";
import {DefaultUser} from "../core/configuration/users/reportPortalUsers";
import {DashBoardPage} from "../business/pageobjects/pages/DashBoardPage";
import CommonUtils from "../core/utilities/CommonUtils";
import { expect } from 'chai';


describe('Puppeteer tests', function () {
    let loginPage: LoginPageReportPortal;
    let naviBar: NavigationBar;
    let dashboardPage: DashBoardPage;
    let headerTextBefore;

    beforeAll(async function () {
        loginPage = new LoginPageReportPortal();
        naviBar = new NavigationBar();
        dashboardPage = new DashBoardPage();
        await loginPage.open();
        await loginPage.loginWithParameters(DefaultUser.NAME,DefaultUser.PASSWORD);
        await naviBar.clickOnDashboardButton();
        await dashboardPage.demoDashboard.waitForElementExist();
        await dashboardPage.clickOnDemoDashboardName();
        headerTextBefore = await dashboardPage.firstWidgetHeaderText.boundingBox();
    });

    it('Using Drag and Drop', async function () {
        const firstWidget = await dashboardPage.firstWidget;
        const secondWidget = await dashboardPage.secondWidget;
        await firstWidget.waitForElementExist();
        await secondWidget.waitForElementExist();
        const firstWidgetSizeBefore = await firstWidget.boundingBox();
        await CommonUtils.dragAndDrop(firstWidget, secondWidget);
        const firstWidgetSizeAfter = await firstWidget.boundingBox();
        expect(firstWidgetSizeAfter).to.be.not.equal(firstWidgetSizeBefore);
    });

    it('The content of widget resize as well', async function () {
        const headerTextAfter = await dashboardPage.firstWidgetHeaderText.boundingBox();
        expect(headerTextBefore).to.be.not.equal(headerTextAfter);
    });

    it('Verification if element is scrolled into view', async function () {
        await dashboardPage.sevenWidget.scrollIntoView();
        expect(await dashboardPage.sevenWidget.isExisting()).to.be.true;
    });
});
