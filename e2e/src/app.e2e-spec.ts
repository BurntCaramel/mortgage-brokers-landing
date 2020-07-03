import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });

  describe('landing as anonymous user', () => {
    it('shows headline', () => {
      page.navigateToLandingAsAnonymous();
      expect(page.getHeadlineText()).toEqual(
        'Attract new clients with a dedicated Mortgage Broker profile by RateMyAgent'
      );
    });

    it('has no carousel', async () => {
      page.navigateToLandingAsAnonymous();
      const hasCarousel = await element(
        by.css('.ReviewsCarousel')
      ).isPresent();
      expect(hasCarousel).toBe(false);
    });
  });

  describe('landing as user Damien', () => {
    it('shows headline', () => {
      page.navigateToLandingAsUser();
      expect(page.getHeadlineText()).toEqual(
        'Attract new clients with a dedicated Mortgage Broker profile by RateMyAgent'
      );
    });

    it('shows personalised heading', async () => {
      page.navigateToLandingAsUser();
      const heading = await element(by.css('h2')).getText();
      expect(heading).toMatch(
        /Great Mortgage Brokers should have a great online presence\.\s+Damien, luckily we already built you one\./
      );
    });

    it('shows carousel', async () => {
      page.navigateToLandingAsUser();
      const hasCarousel = await element(
        by.css('.ReviewsCarousel')
      ).isDisplayed();
      expect(hasCarousel).toBe(true);
    });
  });
});
