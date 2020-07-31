const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHtml(cb){
    return gulp.src('src/**/*.html')
}

function appJs(cb){
    return cb()
}

function appCss(cb){
    return cb()
}

function appImg(cb){
    return cb()
}

module.exports = {
    appHtml,
    appCss,
    appJs,
    appImg
}