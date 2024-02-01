import { By } from 'selenium-webdriver';
import {driver} from "./driver.js";
export async function posts() {
    driver.findElement(By.id('menu-posts')).click();
}
