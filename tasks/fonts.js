const { src, dest } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");

// * Plugins

const plumber = require("gulp-plumber");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const filter = require("gulp-filter");

// * FONTS

const fonts = () => {
    const fontsFilter = filter(["**", "!*.{eot,otf,ttf}"]);
    return src(path.fonts.src)
        .pipe(plumber())
        .pipe(newer(path.fonts.dest))
        .pipe(fonter(app.fonter))
        .pipe(ttf2woff2())
        .pipe(fontsFilter)
        .pipe(dest(path.fonts.dest));
}

module.exports = fonts;