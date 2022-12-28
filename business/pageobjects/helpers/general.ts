import {LoginPageReportPortal} from "../pages/login/LoginPage";
import {DefaultUser} from "../../../core/configuration/users/reportPortalUsers";

const general = {
    login: async function (): Promise<void> {
        const loginPage = new LoginPageReportPortal();
        await loginPage.open();
        await loginPage.loginWithParameters(DefaultUser.NAME, DefaultUser.PASSWORD);
        await loginPage.container.waitForElementIsDisplayed()
    },
};
export { general };
