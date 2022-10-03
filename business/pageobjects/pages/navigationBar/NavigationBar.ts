import {BasePage} from "../BasePage";
import {UIElem} from "../../../wrappers/UI/UIElem";

export class NavigationBar extends BasePage {
    baseElement: UIElem;

    constructor() {
        super();
        this.baseElement = UIElem.getInstance('[class*="layout__sidebar-container"]');
    }

    protected get url(): string {
        return '';
    }

    get dashboardTab(): UIElem {
        return UIElem.getInstance(this.baseElement.locator,'a[href*="dashboard"]');
    }
    get launchesTab(): UIElem {
        return UIElem.getInstance(this.baseElement.locator, 'a[href*="launches"]');
    }
    get filtersTab(): UIElem {
        return UIElem.getInstance(this.baseElement.locator, 'a[href*="filters"]');
    }
    get bottomSidebarMenu(): UIElem {
        return UIElem.getInstance(this.baseElement.locator, '[class*="sidebar__bottom-block"]');
    }

    public clickOnLaunchButton(): void {
        this.launchesTab.click()
    }
}
