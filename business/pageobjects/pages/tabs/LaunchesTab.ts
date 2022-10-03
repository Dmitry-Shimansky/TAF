import {BasePage} from "../BasePage";
import {UIElem} from "../../../wrappers/UI/UIElem";
import {UIElemArray} from "../../../wrappers/UI/UIElemArray";

export class LaunchesTab extends BasePage {

    constructor() {
        super();
    }

    protected get url(): string {
        return '';
    }

    get testElem(): WebdriverIO.Element {
        return $('[class*="grid__grid"]');
    }
    get testElems(): WebdriverIO.ElementArray {
        return this.testElem.$$('[class*="gridRow"]');
    }

    get filtersToolbar(): UIElem {
        return UIElem.getInstance(this.baseElement.locator, '[class*="launch-filters-toolbar"]');
    }
    get actionPanel(): UIElem {
        return UIElem.getInstance(this.baseElement.locator, '[class*="action-panel"]');
    }
    get grid(): UIElem {
        return UIElem.getInstance(this.baseElement.locator, '[class*="grid__grid"]');
    }
    get paginationToolbar(): UIElem {
        return UIElem.getInstance(this.baseElement.locator, '[class*="pagination-toolbar"]');
    }
    get gridHeader(): UIElem {
        return UIElem.getInstance(this.grid.locator, '[class*="gridHeader"]');
    }
    get gridRowList(): UIElemArray {
        return UIElemArray.getInstanceArray(this.baseElement.locator, '[class*="grid__grid"] > [class*="gridRow"]');
    }
    get pageContainer(): UIElem {
        return UIElem.getInstance(this.baseElement.locator, '[class*="page-container"]');
    }

    public demoApiTestsList(index: number): UIElem {
        return UIElem.getInstance(this.gridRowList[index].selector, 'a[href*="personal/launches/all/"]');
    }
}
