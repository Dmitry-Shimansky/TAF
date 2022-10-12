import { expect } from 'chai';
import {NavigationBar} from "../business/pageobjects/pages/navigationBar/NavigationBar";
import { general } from "../business/pageobjects/helpers/general"
import {LaunchesTab} from "../business/pageobjects/pages/tabs/LaunchesTab";

describe('Verify launch Tab', function () {
    let naviBar: NavigationBar;
    let launchesBar: LaunchesTab

    beforeAll(function () {
        general.login();
        naviBar = new NavigationBar();
        launchesBar = new LaunchesTab()
    });

    it('Check result of Demo Api Test 1', function () {
        naviBar.clickOnLaunchButton();
        launchesBar.waitUntilElementIsDisplayed(launchesBar.grid)
        expect(launchesBar.gridRowList.length).to.be.equal(5);
        expect(launchesBar.gridHeader.isExisting()).to.be.true;

        launchesBar.gridRowList.scrollIntoView(4);
        launchesBar.gridRowList.click(4);
        launchesBar.demoApiTestsList(4).click();
        launchesBar.waitUntilElementIsDisplayed(launchesBar.grid);
        expect(launchesBar.gridRowList.length).to.be.equal(4);
        expect(launchesBar.gridHeader.isExisting()).to.be.true;

        launchesBar.demoApiTestsList(3).click();
        launchesBar.waitUntilElementIsDisplayed(launchesBar.grid);
        expect(launchesBar.gridRowList.length).to.be.equal(4);

        launchesBar.demoApiTestsList(3).click();
        expect(launchesBar.pageContainer.isExisting()).to.be.true;
    });
})
