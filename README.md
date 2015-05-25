Created for [substack/node-browserify#1282](https://github.com/substack/node-browserify/issues/1283).

## To run

1. Open `index.html` in your browser.
2. Notice there's no `alert`
3. Remove the `insertGlobalVars` option in `gulpfile.coffee`
4. Uncomment the `global.app = {}` line in `src/common/init.coffee`
5. Re-build
6. Re-open in your browser
7. Notice `123` is `alert`ed

## To re-build

1. `npm install -g gulp`
2. `npm install`
3. `gulp`