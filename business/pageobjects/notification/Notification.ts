import log4js from "../../../core/logger/log4js/log4js";
import {Logger} from "log4js";
import {UIElem} from "../../wrappers/UI/UIElem";
import {UIElemArray} from "../../wrappers/UI/UIElemArray";

export class Notification {
    baseElement: UIElem;
    logger: Logger;

    constructor() {
        this.logger = log4js.getLogger(this.constructor.name);
        this.baseElement = UIElem.getInstance('[id="notification-root"]');
    }

    get notificationList(): UIElemArray {
        return UIElemArray.getInstanceArray(this.baseElement, '[class*="notificationList"] div[class*="transition-enter"]');
    }
}
