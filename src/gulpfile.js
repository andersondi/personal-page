const { series, parallel } = require('gulp')
const gulp = require('gulp')
const { appHtml, appCss, appJs, appImg } = require('./gulpTasks/app')
const { depsCss } = require('./gulpTasks/deps')
const { watchFiles, server } = require('./gulpTasks/server')

module.exports.default = series(
    parallel(
        series( appHtml, appCss, appJs, appImg ),
        series( depsCss )
    ),
    server,
    watchFiles
)