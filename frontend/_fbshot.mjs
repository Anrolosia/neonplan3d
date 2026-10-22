// Screenshot of the Facebook helper with two sample groups (untracked).
import puppeteer from "puppeteer-core";
import { pathToFileURL } from "node:url";
const file = "C:/Users/Becke/OneDrive/Desktop/NeonPlan Facebook-Helfer.html";
const executablePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--allow-file-access-from-files"] });
const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 900 });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.goto(pathToFileURL(file).href);
for (const [name, url, lang, note] of [["Home Assistant Deutschland", "https://www.facebook.com/groups/example1", "DE", "Werbung nur mit Projekt-Bezug"], ["Home Assistant Italia", "https://www.facebook.com/groups/example2", "IT", ""]]) {
  await page.type("#gName", name);
  await page.type("#gUrl", url);
  await page.select("#gLang", lang);
  if (note) await page.type("#gNote", note);
  await page.click("#gAdd");
}
await page.click('#groups tr:first-child [data-a="done"]');
await page.screenshot({ path: process.env.TEMP + "/fbhelper.png" });
// clean the sample groups again
await page.evaluate(() => localStorage.clear());
console.log("errors:", errors);
await browser.close();
