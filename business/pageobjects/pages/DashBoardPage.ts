import {BasePage} from "./BasePage";
import {UIElem} from "../../wrappers/UI/UIElem";
import {UIElemArray} from "../../wrappers/UI/UIElemArray";

export class DashBoardPage extends BasePage {
    baseContainer: string;

    constructor() {
        super();
        this.baseContainer = '[class*="layout__page-container"]';
    }

    private widgetContainer = '[class="react-grid-layout"]';
    private originSelector = '[class*="widgetsGrid__widget-view"]';
    private originResizeSelector = '[class*="react-resizable-handle"]';
    private widgetHeaderTextSelector = '[class*="widgetHeader__widget-name-block"]';

    get demoDashboard(): UIElem {
        return UIElem.getInstance(this.baseContainer, '[data-id="18"]');
    }
    get originWidget(): UIElem {
        return UIElem.getInstance(this.originSelector);
    }
    get originResizeButton(): UIElem {
        return UIElem.getInstance(this.originSelector, this.originResizeSelector);
    }
    get widgetsArray() {
        return UIElemArray.getInstanceArray(this.widgetContainer, this.originSelector);
    }

    async clickOnDemoDashboardName(): Promise<void> {
        const element = await this.demoDashboard;
        this.logger.info('Click on Demo Dashboard')
        return element.click();
    }
}
