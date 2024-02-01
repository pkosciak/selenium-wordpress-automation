import 'dotenv/config';
import { By } from 'selenium-webdriver';
import {driver} from "./driver.js";
export async function login() {
    await driver.get(process.env.WP_DASHBOARD);

    let user_login = await driver.findElement(By.id('user_login'));
    let user_password = await driver.findElement(By.id('user_pass'));
    let submitButton = await driver.findElement(By.id('wp-submit'));

    await user_login.sendKeys(process.env.WP_LOGIN);
    await user_password.sendKeys(process.env.WP_PASSWORD);
    await submitButton.click();

    /*
    * Admin email periodic check bypass
    * */
    await driver.findElement(By.xpath('//*[text()=\'Remind me later\']')).then(function(remindButton) {
        remindButton.click();
    }, error => {});

}
