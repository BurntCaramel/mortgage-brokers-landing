import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToRoot(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  navigateToLandingAsAnonymous(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}mortgage-brokers`) as Promise<unknown>;
  }

  navigateToLandingAsUser(): Promise<unknown> {
    console.log("BASE URL", browser.baseUrl);
    return browser.get(`${browser.baseUrl}mortgage-brokers?agentCode=gn905`) as Promise<unknown>;
  }

  getHeadlineText(): Promise<string> {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
