const { src, dest } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");

// * Plugins

const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
// const webp = require("gulp-webp");
const gulpIf = require("gulp-if");

// * IMG

const img = () => {
    return src(path.img.src)
        .pipe(plumber())
        .pipe(newer(path.img.dest))
        // .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
        .pipe(dest(path.img.dest));
}

module.exports = img;