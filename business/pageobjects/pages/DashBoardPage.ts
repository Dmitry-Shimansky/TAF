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
    public firstWidgetSelector = '[class*="widgetsGrid__widget-view"]:first-child';
    public secondWidgetSelector = '[class*="widgetsGrid__widget-view"]:nth-child(2)';
    private firstResizeSelector = '[class*="react-resizable-handle"]';
    private sevenWidgetSelector = '[class*="widgetsGrid__widget-view"]:nth-child(7)';
    private firstWidgetHeaderTextSelector = '[class*="widgetHeader__widget-name-block"]';

    get demoDashboard(): UIElem {
        return UIElem.getInstance(this.baseContainer, '[data-id="18"] a[href*="18"]');
    }
    get firstWidget(): UIElem {
        return UIElem.getInstance(this.widgetContainer, this.firstWidgetSelector);
    }
    get secondWidget(): UIElem {
        return UIElem.getInstance(this.widgetContainer, this.secondWidgetSelector);
    }
    get firstWidgetHeaderText(): UIElem {
        return UIElem.getInstance(this.widgetContainer, this.firstWidgetHeaderTextSelector);
    }
    get sevenWidget(): UIElem {
        return UIElem.getInstance(this.widgetContainer, this.sevenWidgetSelector);
    }
    get widgetsContainer(): UIElem {
        return UIElem.getInstance(this.widgetContainer);
    }
    get firstResizeButton(): UIElem {
        return UIElem.getInstance(this.firstWidgetSelector, this.firstResizeSelector);
    }
    get widgetsArray(): UIElemArray {
        return UIElemArray.getInstanceArray(this.widgetContainer, this.firstWidgetSelector);
    }

    async clickOnDemoDashboardName(): Promise<void> {
        const element = await this.demoDashboard;
        this.logger.info('Click on Demo Dashboard')
        return element.click();
    }
}
