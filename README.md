Created for [substack/node-browserify#1282](https://github.com/substack/node-browserify/issues/1282).

## To run

1. `npm install -g nw@0.11.2`
2. `nw _public`
3. You'll see `Uncaught ReferenceError: app is not defined` in the terminal. If you're on Windows, click the cog in the top right of the app when it opens to see the error in devtools.

## To re-build

1. `npm install -g gulp`
2. `npm install`
3. `gulp`