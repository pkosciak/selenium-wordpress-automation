import {Builder} from 'selenium-webdriver';
import chrome from "selenium-webdriver/chrome.js";

const options = new chrome.Options();
options.detachDriver(true); // keep window open after script finishes
export const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

