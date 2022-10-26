import { BasePage } from '../BasePage';
import {UIElem} from "../../../wrappers/UI/UIElem";

export class LoginPageReportPortal extends BasePage {
    constructor() {
        super();
    }

    protected get url(): string {
        return '';
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

    public clickLogin(): void {
        this.loginButton.click();
        // this.baseElement.waitForElementExist();
        this.browserWrap.pause(2000);
    }
    public addUserNameValue(value: string): void {
        this.userName.addValue(value);
    }
    public addPasswordValue(value: string): void {
        this.password.addValue(value);
    }
    public loginWithParameters(username, password): void {
        this.addUserNameValue(username);
        this.addPasswordValue(password);
        this.clickLogin();
        this.logger.info(`I login in Report Portal`);
        // this.baseElement.waitForElementExist();
        this.browserWrap.pause(2000);
    }
}
