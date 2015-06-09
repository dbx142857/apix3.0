/**
 * Created by huanli<huali@tibco-support.com> on 12/13/14.
 *
 * Variable prefixes' meanings:
 * -------------------------------------------------------------------------
 * --- The prefix of a variable's name reveals the type of data it holds ---
 * -------------------------------------------------------------------------
 *
 * a: Array
 * b: Boolean
 * d: DOM
 * f: Function
 * l: List(an array-like object)
 * n: Number
 * o: Object
 * r: Regular expression
 * s: String
 * x: More than one type
 *  : Special case or NOT my code
 *
 * *** These prefixes can be concatenated to indicate that the variable can
 *         hold the specified types of data ***
 */

(function () {
    'use strict';

    var oConfig = require('./config.json'),
        del = require('del'),
        extend = require('extend'),
        gulp = require('gulp'),
        gAT = require('gulp-angular-templatecache'),
        gAutoprefixer = require('gulp-autoprefixer'),
        gConcat = require('gulp-concat'),
        gConcatCss = require('gulp-concat-css'),
        gGA = require('gulp-group-aggregate'),
        gHtmlReplace = require('gulp-html-replace'),
        gIf = require('gulp-if'),
        gImageMin = require('gulp-imagemin'),
        gJshint = require('gulp-jshint'),
        gKarma = require('gulp-karma'),
        gMinifyCSS = require('gulp-minify-css'),
        gProtractor = require('gulp-protractor'),
        gSass = require('gulp-sass'),
        gUglify = require('gulp-uglify'),
        gUtil = require('gulp-util'),
        gWebserver = require('gulp-webserver'),
        pngquant = require('imagemin-pngquant'),
        vm = require('vinyl-map');

    /**
     * Proxies used with the gulp-webserver plugin. This is the counterpart of reverse proxies in Apache.
     *
     * @author Kevin Li<huali@tibco-support.com>
     * @type {Object}
     */
    var aProxies = [
        {
            source: '/services/user',
            target: 'http://localhost:3000/u'
        }, {
            source: '/services/organization',
            target: 'http://localhost:3000/org'
        }
    ];

    /**
     * Build all files and put them in the dist/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('build-all', [
        'clean-dist',
        'copy-index-to-dist',
        'copy-locales-to-dist'
    ]);

    /**
     * Build JavaScript files and put them in the dist/js/ folder. Whether the files are uglified or not is determined
     * by the presence of the "--production" parameter to this task. If the parameter is present the files will be
     * uglified. Otherwise the files will be in human readable format.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('build-js', [
        'clean-dist-js'
    ], function () {

        var rModuleDef = /(\.module\(('|")[^'"]+('|"),\s*\[)([^\]]*)(\s*\])/;

        return gulp
            .src(oConfig.scripts.srcModuleDefFirst.concat(oConfig.templates.src))
            .pipe(vm(function (oBuffer) {

                var sContent = oBuffer.toString();

                if (rModuleDef.test(sContent)) {

                    return sContent.replace(rModuleDef, '$1$4,\'' + oConfig.templates.templatesModuleName + '\'$5');
                }
            }))
            .pipe(gIf('*.tpl.html', gAT({
                module: oConfig.templates.templatesModuleName,
                root: 'app',
                standalone: true
            })))
            .pipe(gConcat(gUtil.env.production ?
                oConfig.scripts.outputMin :
                oConfig.scripts.output))
            .pipe(gIf(gUtil.env.production, gUglify({
                compress: {}
            })))
            .pipe(gulp.dest(oConfig.scripts.dist));
    });

    /**
     * Remove all CSS files in the src/assets/ folder and locale's JSON files in the src/locales/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('clean-dev', [
        'clean-dev-css',
        'clean-dev-locales'
    ]);

    /**
     * Remove all CSS files in the src/assets/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('clean-dev-css', function (cb) {

        del(oConfig.styles.dest.concat('/*.css'), function () {

            cb();
        });
    });

    /**
     * Removed the dist/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('clean-dist', function (cb) {

        del(oConfig.dist, function () {

            cb();
        });
    });

    /**
     * Remove the dist/assets/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('clean-dist-assets', function (cb) {

        del(oConfig.styles.dist, function () {

            cb();
        });
    });

    /**
     * Remove all CSS files in the dist/assets/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('clean-dist-css', function (cb) {

        del(oConfig.styles.dist + '/*.css', function () {

            cb();
        });
    });

    /**
     * Remove the dist/images/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('clean-dist-images', function (cb) {

        del(oConfig.styles.dist + '/images', function () {

            cb();
        });
    });

    /**
     * Remove the index.html file in the dist/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('clean-dist-index', function (cb) {

        del(oConfig.dist + '/index.html', function () {

            cb();
        });
    });

    /**
     * Remove the dist/js/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('clean-dist-js', function (cb) {

        del(oConfig.scripts.dist, function () {

            cb();
        });
    });

    /**
     * Remove the dist/locales/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('clean-dist-locales', function (cb) {

        del(oConfig.locales.dist, function () {

            cb();
        });
    });

    /**
     * Remove all locale's JSON files in the src/locales/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('clean-dev-locales', function (cb) {

        var oLocales = oConfig.locales;

        del(oLocales.dest
            .concat('/')
            .concat(oLocales.prefix)
            .concat('*')
            .concat(oLocales.suffix), function () {

            cb();
        });
    });

    /**
     * Copy all CSS files and image files to the dist/assets/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('copy-assets-to-dist', [
        'copy-css-to-dist',
        'copy-images-to-dist'
    ]);

    /**
     * Copy all CSS files from the src/assets/ folder to the dist/assets/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('copy-css-to-dist', [
        'clean-dist-css',
        'scss-to-css'
    ], function () {

        var oStyles = oConfig.styles;

        return gulp
            .src(oStyles.dest
                .concat('/')
                .concat(gUtil.env.production ?
                    oStyles.outputMin :
                    oStyles.output))
            .pipe(gulp.dest(oStyles.dist));
    });

    /**
     * Copy all index.html files from the src/ folder to the dist/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('copy-index-to-dist', [
        'clean-dist-index',
        'copy-assets-to-dist',
        'build-js'
    ], function () {

        return gulp
            .src(oConfig.index)
            .pipe(gHtmlReplace({
                js: oConfig.js
                    .concat('/')
                    .concat(gUtil.env.production ?
                        oConfig.scripts.outputMin :
                        oConfig.scripts.output),
                css: oConfig.assets
                    .concat('/')
                    .concat(gUtil.env.production ?
                        oConfig.styles.outputMin :
                        oConfig.styles.output)
            }))
            .pipe(gulp.dest(oConfig.dist));
    });

    /**
     * Copy all image files from the src/assets/images/ folder to the dist/assets/images/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('copy-images-to-dist', [
        'clean-dist-images'
    ], function () {

        return gulp
            .src(oConfig.images.src)
            .pipe(gIf(gUtil.env.production, gImageMin({
                progressive: true,
                svgoPlugins: [
                    {
                        removeViewBox: false
                    }
                ],
                use: [pngquant()]
            })))
            .pipe(gulp.dest(oConfig.images.dist));
    });

    /**
     * Copy all locale's JSON files from the src/locales/ folder to the dist/locales/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('copy-locales-to-dist', [
        'clean-dist-locales',
        'merge-locales'
    ], function () {

        var oLocales = oConfig.locales;

        return gulp
            .src(oLocales.dest
                .concat('/')
                .concat(oLocales.prefix)
                .concat('*')
                .concat(oLocales.suffix))
            .pipe(gulp.dest(oLocales.dist));
    });

    /**
     * The default Gulp task. It only runs the "test" and the "build-all" tasks.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('default', [
        'test',
        'build-all'
    ]);

    /**
     * Do end-to-end tests
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('e2e-test', function () {
    });

    /**
     * Validate all JavaScripts files in the src/app/ folder with JSHint. Generate a report in HTML format in the src/
     * folder with the timestamp in the file name.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('jshint', function () {

        return gulp
            .src(oConfig.scripts.src)
            .pipe(gJshint(gUtil.env.production ?
                '.jshintrc' :
                '.jshintrc.prod'))
            .pipe(gJshint.reporter('gulp-jshint-html-reporter', {
                filename: __dirname
                    .concat('/jshint-report_')
                    .concat(Date.now())
                    .concat('.html')
            }));
    });

    /**
     * Merge all locale's JSON files into one JSON file and put it in the src/locales/ folder.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('merge-locales', [
        'clean-dev-locales'
    ], function () {

        var sPrefix = oConfig.locales.prefix,
            sSuffix = oConfig.locales.suffix;

        return gulp
            .src(oConfig.locales.src)
            .pipe(gGA({
                group: function (oFile) {

                    var rFileName = new RegExp(sPrefix + '([^.]+)' + sSuffix);

                    return oFile.path.match(rFileName)[1];
                },
                aggregate: function (sGroup, aFiles) {

                    var o = {};

                    aFiles.forEach(function (oFile) {

                        extend(o, JSON.parse(oFile.contents));
                    });

                    return {
                        path: sPrefix + sGroup + sSuffix,
                        contents: new Buffer(JSON.stringify(o))
                    };
                }
            }))
            .pipe(gulp.dest(oConfig.locales.dest));
    });

    /**
     * Compile all SCSS files into CSS files and put them in the src/assets/ folder. Whether the files are minified  or
     * not is determined by the presence of the "--production" parameter to this task. If the parameter is present the
     * files will be minified. Otherwise the files will be in human readable format.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('scss-to-css', [
        'clean-dev-css'
    ], function () {

        var oStyles = oConfig.styles;

        return gulp
            .src(oStyles.src)
            .pipe(gSass())
            .pipe(gAutoprefixer({
                remove: true
            }))
            .pipe(gConcatCss(gUtil.env.production ?
                oStyles.outputMin :
                oStyles.output))
            .pipe(gIf(gUtil.env.production, gMinifyCSS()))
            .pipe(gulp.dest(oStyles.dest));
    });

    /**
     * Serve the project with source files and the ability of live-reload.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('serve-src', [
        'merge-locales',
        'scss-to-css',
        'watch-locales',
        'watch-scss'
    ], function () {

        gulp.src([
            '.', './src'
        ])
            .pipe(gWebserver({
                fallback: 'index.html',
                livereload: true,
                open: true,
                proxies: aProxies
            }));
    });

    /**
     * Serve the project with built files and without the ability of live-reload. Whether the files are minified and
     * uglified or not is determined by the presence of the "--production" parameter to this task. If the parameter is
     * present the files will be minified and uglified. Otherwise the files will be in human readable format.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('serve-dist', [
        'build-all'
    ], function () {

        gulp.src([
            '.', './dist'
        ])
            .pipe(gWebserver({
                fallback: 'index.html',
                livereload: false,
                open: true,
                port: 8111,
                proxies: aProxies
            }));
    });

    /**
     * Run unit tests and e2e tests.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('test', [
        'unit-test',
        'e2e-test'
    ]);

    /**
     * Run unit tests.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('unit-test', function () {

        var oKarma = oConfig.karma;

        return gulp.src([].concat(oKarma.vendorFiles, oKarma.commonFiles, oKarma.unitTestSpecs))
            .pipe(gKarma({
                configFile: oConfig.karma.configFileName,
                action: 'run'
            }))
    });

    /**
     * Watch the changes of all locale's JSON files. Re-run the "merge-locales" task when one of the files changed.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('watch-locales', function () {

        return gulp.watch(oConfig.locales.watch, [
            'merge-locales'
        ]);
    });

    /**
     * Watch the changes of all SCSS files. Re-run the "scss-to-css" task when one of the files changed.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    gulp.task('watch-scss', function () {

        return gulp.watch(oConfig.styles.watch, [
            'scss-to-css'
        ]);
    });

}());
