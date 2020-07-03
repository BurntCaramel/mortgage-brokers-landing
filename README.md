# Mortgage Brokers Landing

```console
npm ci
npm start
npm test
```

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Pages

### Landing page for anonymous user

What anyone sees: http://localhost:4200/mortgage-brokers

### Landing page for a particular mortgage broker

A mortgage broker will see an enhanced version of the landing page with their reviews up to: http://localhost:4200/mortgage-brokers?agentCode=gn905

### Profile page

A simplified version of the existing profile page with a prominent call to action: http://localhost:4200/mortgage-brokers/agents/gn905

### Join page

A placeholder for the real checkout form: http://localhost:4200/mortgage-brokers/join

## Copy

I played around with several headlines:

- Attract new clients with a dedicated Mortgage Broker profile by RateMyAgent
- Great Mortgage Brokers should have a great profile. Here, we already build you one.
- Great Mortgage Brokers should have a great online presence. Damien, luckily we already built you one.
- People trust you as the best mortgage broker they know. Let everyone know online.
- Let your old clients attract new clients
- Stand out from the rest with a Mortgage Broker profile you own.

I annotated the reviews page screenshot from the existing landing page with notes that call out the benefits:

- Here’s you a mortgage broker — _A dedicated profile page just for them._
- Here’s people saying nice stuff about you. (Five stars, nice work!) — _Being a bit playful, which may not quite fit with the existing RMA brand. It encourages them to be excited!_
- With links to your social media, embedded video, and more — _Showing how the profile page is quite customisable to their desires._
- And property photos and details automatically added by us — _Emphasising the power of the RMA system and how it can save a lot of time and effort to get all the property photos, etc_

The three main points I rewrote to sell more of the benefits of having a profile:

- **Authentic reviews:** 76% of people trust online reviews as much as a personal recommendation¹. — _This stat really sells why online reviews matter, but was hidden down the old landing page, so I pulled it up front-and-centre.
- **Be found online:** A powerful SEO boost so prospective clients can find you easily on Google. — _Mortgage brokers probably have no idea how to be found in Google, so it’s worth touting this as a strength._
- **Quick for clients:** Reviews take minutes to fill out, and there’s no limit to how many you can request. — _Emphasises how quick the workflow is, and that it’s unlimited which may help understand the value when they come to see the price in the checkout.

I also brought the other statistic to the forefront: _Did you know that 89% of consumers read online reviews²?_ I brought it alongside a scaled-up screenshot of the write a review form, making the process pretty clear while emphasising the benefits of online reviews.

I also added a paragraph: _RateMyAgent makes it quick and easy to request reviews. A handful of genuine reviews could yield dividends for years._ This highlights that with a little bit of effort of asking for reviews, they could see a substantial change in their business.

## Metrics

- The brief stated high time on page being the priority. For this reason, I design the reviews carousel which brings the person’s actual reviews to be showcased at the top of the page. I believe most people would spend a decent amount of time to see what has been said about them. You could measure each click through the slider to get a sense of how engaging it is, and to whom. Additional features like sharing could be added to make it even more engaging.
- The metrics would require an integration with your specific analytics tools, so I have not implemented any code here.

## Angular

- There are two services for each of the APIs: `AgentsService` and `ReviewsService` that call out to their respective APIs. I use the built-in proxy of `ng` using a `src/proxy.conf.json` file. This was required to perform the `POST` request to the reviews API.
- The built-in router is used with dynamic parameters.
- The `async` pipe is used to handle subscribing to observable, so I don’t have to manage them. As the docs say: _when the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks_ which is exactly what I desired.
- Most of the smaller leaf components like review card, star rating, review carousel have some test using [Angular Testing Library](https://testing-library.com/docs/angular-testing-library/intro). These allow using higher level roles to query elements on the page, which makes for more robust and easier to write tests.
- Ideally I’d add more testing, especially one that mocks out the services. I’d be keen for some helpful advice on RMA’s preferred approaches to testing. The e2e tests use protractor which I’m not familiar with, but I would pick it up quickly.
- [NGRX](https://ngrx.io/) looks like it would provide a lot of conveniences for managing state and observables in Angular, but decided not to add it to keep things simpler, so keen to hear opinions around this topic.

## Styling

- I used mostly utility classes inspired by [TailwindCSS](https://tailwindcss.com/).
- These allow a high level of reuse and consistency, which allows me to rapidly create page, and then tweak stuff without getting bogged down in actual CSS rules.
- CSS variables also allow reuse and consistency. They are not officially supported in IE, but can be compiled using [PostCSS’s preset env](https://github.com/csstools/postcss-preset-env) plugin which hasn’t been used here but could easily be used on the real site.
- The font is a system font, I notice a custom font ‘Circular’ is being used on the live site. They should look very similar, so would be easy to swap over.
- The rest of the styles use a BEM-like approach.
- The pages are responsive, and done in a mobile-first manner, so that the base styles affects all experiences, and then just a small amount of media queries enhance the layout for wider screens.
- There’s a little bit of squishing of photos on the profile page, if I had a little more time I would find a better solution like cropping instead of stretching.


----

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
