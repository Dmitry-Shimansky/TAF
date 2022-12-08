import { BasePage } from '../BasePage';
import {UIElem} from "../../../wrappers/UI/UIElem";

export class LoginPageReportPortal extends BasePage {

    constructor() {
        super();
    }

    get container(): UIElem {
        return UIElem.getInstance(this.baseContainer);
    }
    get userName(): UIElem {
        return UIElem.getInstance('[class*="loginForm__login-field"]', 'input');
    }
    get password(): UIElem {
        return UIElem.getInstance('[class*="loginForm__password"]', 'input');
    }
    get loginButton(): UIElem {
        return UIElem.getInstance('button[type="submit"]');
    }

    async clickLogin() {
        await this.loginButton.click();
        await this.container.waitForElementExist();
    }
    async addUserNameValue(value: string) {
        await this.userName.addValue(value);
    }
    async addPasswordValue(value: string) {
        await this.password.addValue(value);
    }
    async loginWithParameters(username, password) {
        await this.addUserNameValue(username);
        await this.addPasswordValue(password);
        await this.clickLogin();
        await this.logger.info(`I login in Report Portal`);
        await this.container.waitForElementExist()
    }
}
