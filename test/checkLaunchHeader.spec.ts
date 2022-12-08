import { expect } from 'chai';
import {NavigationBar} from "../business/pageobjects/pages/navigationBar/NavigationBar";
import {LaunchesTab} from "../business/pageobjects/pages/tabs/LaunchesTab";
import {launchesHeaderLabels} from "../business/pageobjects/pages/tabs/expectedResult/launchesTabHeader";
import {demoApiTestResult} from "../business/pageobjects/pages/tabs/expectedResult/demoApiTestResult";
import {LoginPageReportPortal} from "../business/pageobjects/pages/login/LoginPage";
import {DefaultUser} from "../core/configuration/users/reportPortalUsers";

describe('Verify launch Tab', function () {
    let naviBar: NavigationBar;
    let launchesBar: LaunchesTab;
    let loginPage: LoginPageReportPortal;

    beforeAll(async () => {
        naviBar = new NavigationBar();
        launchesBar = new LaunchesTab();
        loginPage = new LoginPageReportPortal();
        await loginPage.loginWithParameters(DefaultUser.NAME, DefaultUser.PASSWORD);
    });

    it('Check header on Launch tab', async () => {
        await naviBar.clickOnLaunchButton();
        await launchesBar.grid.waitForElementIsDisplayed();
        await launchesBar.launchHeadersArray().then((value) => value.forEach((label) => {
                expect(launchesHeaderLabels).to.include(label);
            })
        );
    });

    it('Check result for each test', async () => {
        await naviBar.clickOnLaunchButton();
        await launchesBar.grid.waitForElementIsDisplayed();
        demoApiTestResult.forEach((expectedResult, index) => {
            expect(expectedResult).to.deep.equal(launchesBar.getResultForTest(index + 1));
        });
    });
})
