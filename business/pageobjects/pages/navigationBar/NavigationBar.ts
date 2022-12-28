import {BasePage} from "../BasePage";
import {UIElem} from "../../../wrappers/UI/UIElem";

export class NavigationBar extends BasePage {
    baseContainer: string;

    constructor() {
        super();
        this.baseContainer = '[class*="layout__sidebar-container"]';
    }

    dashBoardContainerSelector = this.baseContainer + ' a[href*="dashboard"]';

    get dashboardTab(): UIElem {
        return UIElem.getInstance(this.baseContainer,'a[href*="dashboard"]');
    }
    get launchesTab(): UIElem {
        return UIElem.getInstance(this.baseContainer, 'a[href*="launches"]');
    }
    get filtersTab(): UIElem {
        return UIElem.getInstance(this.baseContainer, 'a[href*="filters"]');
    }
    get bottomSidebarMenu(): UIElem {
        return UIElem.getInstance(this.baseContainer, '[class*="sidebar__bottom-block"]');
    }

    async clickOnLaunchButton(): Promise<void> {
        // if (await this.launchesTab.getProperty('aria-current') !== true) {
        //     await this.launchesTab.click()
        // }
        await this.launchesTab.click();
    }
    async clickOnDashboardButton(): Promise<void> {
        await this.dashboardTab.click();
    }
}
