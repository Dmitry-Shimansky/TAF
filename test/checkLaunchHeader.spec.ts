import { expect } from 'chai';
import {NavigationBar} from "../business/pageobjects/pages/navigationBar/NavigationBar";
import { general } from "../business/pageobjects/helpers/general"
import {LaunchesTab} from "../business/pageobjects/pages/tabs/LaunchesTab";
import {launchesHeaderLabels} from "../business/pageobjects/pages/tabs/expectedResult/launchesTabHeader";
import {demoApiTestResult} from "../business/pageobjects/pages/tabs/expectedResult/demoApiTestResult";

describe('Verify launch Tab', function () {
    let naviBar: NavigationBar;
    let launchesBar: LaunchesTab

    beforeAll(function () {
        general.login();
        naviBar = new NavigationBar();
        launchesBar = new LaunchesTab()
    });

    it('Check header on Launch tab', function () {
        naviBar.clickOnLaunchButton();
        launchesBar.waitUntilElementIsDisplayed(launchesBar.grid);
        launchesBar.launchHeadersArray().forEach((label) => {
            expect(launchesHeaderLabels).to.include(label);
        });
    });

    it('Check result for each test', function () {
        naviBar.clickOnLaunchButton();
        launchesBar.waitUntilElementIsDisplayed(launchesBar.grid);
        demoApiTestResult.forEach((expectedResult, index) => {
            expect(expectedResult).to.deep.equal(launchesBar.getResultForTest(index + 1));
        });
    });
})
