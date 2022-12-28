import log4js from "../../../core/logger/log4js/log4js";
import {Logger} from "log4js";
import {UIElemArray} from "../../wrappers/UI/UIElemArray";

export class Notification {
    baseElement: string;
    logger: Logger;

    constructor() {
        this.logger = log4js.getLogger(this.constructor.name);
        this.baseElement = '[id="notification-root"]';
    }

    get notificationList(): UIElemArray {
        return UIElemArray.getInstanceArray(this.baseElement, '[class*="notificationList"] div[class*="transition-enter"]');
    }
}
