import {LoginPageReportPortal} from "../business/pageobjects/pages/login/LoginPage";
import {NavigationBar} from "../business/pageobjects/pages/navigationBar/NavigationBar";
import {DefaultUser} from "../core/configuration/users/reportPortalUsers";
import {DashBoardPage} from "../business/pageobjects/pages/DashBoardPage";
import CommonUtils from "../core/utilities/CommonUtils";


describe('Puppeteer tests', function () {
    let loginPage: LoginPageReportPortal;
    let naviBar: NavigationBar;
    let dashboardPage: DashBoardPage;

    beforeAll(async function () {
        loginPage = new LoginPageReportPortal();
        naviBar = new NavigationBar();
        dashboardPage = new DashBoardPage();
        await loginPage.open();
        await loginPage.loginWithParameters(DefaultUser.NAME,DefaultUser.PASSWORD);
        await naviBar.clickOnDashboardButton();
        await dashboardPage.demoDashboard.waitForElementIsDisplayed();
    });

    it('Using Drag and Drop', async function () {
        await dashboardPage.clickOnDemoDashboardName();
        await dashboardPage.originWidget.waitForElementIsDisplayed();
        const widgetsArray = dashboardPage.widgetsArray.getElementsArray();
        await CommonUtils.dragAndDrop(widgetsArray[0].locator, widgetsArray[1].locator);

    });
});
