import {LoginPageReportPortal} from "../pages/login/LoginPage";
import {DefaultUser} from "../../../core/configuration/users/reportPortalUsers";

const general = {
    login: function (): void {
        const loginPage = new LoginPageReportPortal();
        loginPage.open();
        loginPage.loginWithParameters(DefaultUser.NAME, DefaultUser.PASSWORD);
        loginPage.baseElement.waitForElementIsDisplayed()
    },
};
export { general };
