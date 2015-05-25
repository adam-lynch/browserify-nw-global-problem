gulp = require 'gulp'
$ = require('gulp-load-plugins')()
browserify = require 'browserify'
coffeeify = require 'coffeeify'
source = require 'vinyl-source-stream'
buffer = require 'vinyl-buffer'

gulp.task 'default', (done) ->
    browserified = browserify
        entries: './src/app/browser/scripts/app.coffee'
        extensions: ['.coffee']

    browserified.transform coffeeify

    browserified.bundle()
    .pipe source 'app.js'
    .pipe buffer()
    .pipe gulp.dest './_public'
    .on 'error' , (err) ->
        $.util.beep()
        $.util.log JSON.stringify err, null, 4
        throw err
    .on 'finish', done
    return