[![test all branches except master](https://github.com/cheshirecode/restcountries/actions/workflows/base.yml/badge.svg)](https://github.com/cheshirecode/restcountries/actions/workflows/base.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/0338e9a8-b60c-4f0a-a1ed-7dcef9237558/deploy-status)](https://app.netlify.com/sites/loving-minsky-ace9dd/deploys)
# Countries page

## Background
I started by figuring out the approach to theming with design tokens as I used [styled-system and guiding specification](https://styled-system.com/theme-specification/) and other atomic libraries before (let's say Rebass + Emotion + TailwindCSS have better Developer Experience over Bootstrap/Antd) and really enjoyed the benefits in terms of mental models and code reusability. Data fetching and rendering tasks were much simpler by comparison as CRUD problems have been solved and re-thought over and over, plus the API surface for that is small and stable and the process straight forward - make HTTP calls, parse response into custom HTML. On the other hand, components are much more unforgiving in terms of usage, especially the more powerful and somewhat customisable ones like dropdown list or libraries like Bootstrap/Antd. Thus I approach the problem from the bottoms up - figuring out the building blocks and add more on top, slowly.

## Tech stack
### Rendering
I am most familiar with React/Preact and thinking in components. Having said that, with atomic themeing approach alot of the code would be View-agnostic and less tied to React (more on that later).

### Styling
Reusable design system styles tokens like styling values (colours, fonts etc) and scales (paddings/margins, widths/heights etc) might sound overkill for a small app but getting up and running is relatively painless (little boilerplate footprint to start and user can always start with inline styling in SFC or other styling solutions then refactor/migrate to design tokens). I went with [Rebass](https://github.com/rebassjs/rebass) initially but since React 17 support wasn't there, I switched to [Theme UI](https://theme-ui.com/) instead. For general CSS, I use CSS-in-JS solution ([Emotion](https://emotion.sh/) for a much lighter alternative to styled-components but still powerful) to better support reusable . Atomic CSS might also work, but CSS variables are horrible to work with and maintain at any scales.

### API models and handling
I come up with Models as extendable Typescript interfaces as I go along the tasks, again with small building blocks and add more on top. To handle API calls, I use polyfilled native [fetch](https://github.com/developit/unfetch) with a small [wrapper](https://swr.vercel.app/) for caching and re-validation.

#### No API requests currently
 - https://restcountries.eu/ is no more and redirects to a paid version.
 - Attempt to use https://restcountries.com/  got CORS error [issue](https://gitlab.com/amatos/rest-countries/-/issues/34)

### Tests
I use the following
- [Headless browser wrapper](https://modern-web.dev/docs/test-runner/overview/) 
- [React Testing library](https://testing-library.com/docs/react-testing-library/intro)
to write tests as close to how the live site is accessed.

> ✨ Bootstrapped with Create Snowpack App (CSA).
## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.mjs` config file.

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.
