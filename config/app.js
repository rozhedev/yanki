const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd,
    },
    webpack: {
        mode: isProd ? "production" : "development",
        output: {
            filename: "script.js"
        },
        // loader: {
        //     include: ["/js/**/_*.js", "!" + "/js/**/*.js"],
        // }

    },
    imagemin: {
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 4, // 0 to 7
        verbose: true,
    },
    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    },
}