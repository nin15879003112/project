var { series, src, dest, watch } = require("gulp");

var minifyCss = require("gulp-cssmin");
var minifyHtml = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");
var babel = require("gulp-babel");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");
var clean = require("gulp-clean");

// function doCss() {
//     return src("./origin/css/**/*.css")
//         .pipe(sass())
//         .pipe(autoprefixer())
//         .pipe(minifyCss())
//         .pipe(dest("./publish/css"));
// }

function doJS() {
    return src("./origin/js/**/*.js")
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(uglify())
        .pipe(dest("./publish/js"));
}


function doHTML() {
    return src("./origin/html/*.html")
        .pipe(minifyHtml({
            collapseWhitespace: true,
            "minifyCSS": true,
            "minifyJS": true
        }))
        .pipe(dest("./publish/html"))
}

// function doResource() {
//     return src("./origin/resource/**/*.*")
//         .pipe(dest("./publish/resource/"))
// }


function dorcss() {
    return src("./origin/resource/css/*.css")
        .pipe(minifyCss())
        .pipe(dest("./public/resource/css"));
}

function doClean() {
    return src("./publish/", { read: false, allowEmpty: true })
        .pipe(clean())
}

function webServer() {
    // 定位资源 
    return src("./publish", { allowEmpty: true })
        .pipe(webserver({
            host: "localhost",
            port: 3003,
            livereload: true,
            open: "./index.html",
            // proxies: [
            //     {
            //         source:"/php/",
            //                          target:"http//10.3.144.102:80/php/"
            //     },
            // ]
        }))
}
function refresh() {
    return watch("./origin", series(doClean, [doHTML, doJS, dorcss]))
}

module.exports.webserver = webserver;
// module.exports.doResource = doResource;
// module.exports.a = series(doClean, [doHTML, doJS, doResource], webServer);
module.exports.aa = series(webServer, refresh);