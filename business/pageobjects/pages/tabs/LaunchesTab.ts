import {BasePage} from "../BasePage";
import {UIElem} from "../../../wrappers/UI/UIElem";
import {UIElemArray} from "../../../wrappers/UI/UIElemArray";
import CommonUtils from "../../../../core/utilities/CommonUtils";

export class LaunchesTab extends BasePage {

    constructor() {
        super();
    }

    protected get url(): string {
        return '';
    }

    get filtersToolbar(): UIElem {
        return UIElem.getInstance(this.baseContainer, '[class*="launch-filters-toolbar"]');
    }
    get actionPanel(): UIElem {
        return UIElem.getInstance(this.baseContainer, '[class*="action-panel"]');
    }
    get grid(): UIElem {
        return UIElem.getInstance(this.baseContainer, '[class*="grid__grid"]');
    }
    get paginationToolbar(): UIElem {
        return UIElem.getInstance(this.baseContainer, '[class*="pagination-toolbar"]');
    }
    get gridHeader(): UIElem {
        return UIElem.getInstance(this.grid.locator, '[class*="gridHeader"]');
    }
    get gridRowList(): UIElemArray {
        return UIElemArray.getInstanceArray(this.baseContainer, '[class*="grid__grid"] > [class*="gridRow"]');
    }
    get pageContainer(): UIElem {
        return UIElem.getInstance(this.baseContainer, '[class*="page-container"]');
    }

    async demoApiTestsListClick(index: number): Promise<void> {
        return UIElem.getInstance(this.gridRowList[index].selector, 'a[href*="personal/launches/all/"]').click();
    }
    async launchHeadersArray(): Promise<string[]> {
        return CommonUtils.deleteUnnecessaryItem(await UIElemArray.getInstanceArray(
            this.gridHeader.locator, 'span[class*="headerCell__title-full"]').getTextArray(), "");
    }
    async getResultForTest(testNumber: number): Promise<string[]> {
        return await UIElemArray.getInstanceArray(
            this.baseContainer, `[class*="grid__grid"] [data-id="${testNumber}"] a[class*="executionStatistics__value"]`
        ).getTextArray();
    }
}
