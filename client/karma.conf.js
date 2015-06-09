/**
 * Created by huanli<klx211@gmail.com> on 11/27/14.
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

'use strict';

module.exports = function (config) {

    config.set({
        /**
         * Enable or disable watching files and executing the tests whenever one of these files changes.
         *
         * @type {Boolean}
         * @default true
         */
        autowatch: true,
        /**
         * The root path location that will be used to resolve all relative paths defined in files and exclude. If the
         * basePath configuration is a relative path then it will be resolved to the __dirname of the configuration file.
         *
         * @type {String}
         * @default ''
         */
        basePath: './',
        /**
         * A list of browsers to launch and capture. When Karma starts up, it will also start up each browser which is
         * placed within this setting. Once Karma is shut down, it will shut down these browsers as well. You can
         * capture any browser manually by opening the browser and visiting the URL where the Karma web server is
         * listening (by default it is http://localhost:9876/).
         *
         * @type {Array}
         * @default []
         */
        browsers: [
            'PhantomJS'
        ],
        /**
         * Enable or disable colors in the output (reporters and logs).
         *
         * @type {Boolean}
         * @default true
         */
        colors: true,
        /**
         * List of files/patterns to exclude from loaded files.
         *
         * @type {Array}
         * @default []
         */
        exclude: [],
        /**
         * List of test frameworks you want to use. Typically, you will set this to ['jasmine'], ['mocha'] or ['qunit']....
         * Please note just about all frameworks in Karma require an additional plugin/framework library to be installed
         * (via NPM). Additional information can be found in
         * <a href="http://karma-runner.github.io/0.12/config/plugins.html">plugins</a>.
         *
         * @type {Array}
         * @default []
         */
        frameworks: [
            'jasmine'
        ],
        /**
         * Level of logging.
         *
         * @type {String}
         * @default config.LOG_INFO
         */
        logLevel: config.LOG_INFO,
        /**
         * List of plugins to load. A plugin can be a string (in which case it will be required by Karma) or an inlined
         * plugin - Object. By default, Karma loads all sibling NPM modules which have a name starting with karma-*.
         *
         * @type {Array}
         * @default ['karma-*']
         */
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
        ],
        /**
         * The port where the web server will be listening.
         *
         * @type {Number}
         * @default 9876
         */
        port: 9876,
        /**
         * A map of preprocessors to use. Preprocessors can be loaded through
         * <a href="http://karma-runner.github.io/0.12/config/plugins.html">plugins</a>.
         *
         * @type {Object}
         * @default {'**\/*.coffee': 'coffee'}
         */
        preprocessors: {
            'src/app/common/**/*.tpl.html': ['ng-html2js']
        },
        /**
         * A list of reporters to use. Additional reporters, such as growl, junit, teamcity or coverage can be loaded
         * through <a href="http://karma-runner.github.io/0.12/config/plugins.html">plugins</a>.
         *
         * @type {Array}
         * @default ['progress']
         */
        reporters: [
            'spec'
        ],
        /**
         * Continuous Integration mode. If true, Karma will start and capture all configured browsers, run tests and
         * then exit with an exit code of 0 or 1 depending on whether all tests passed or any tests failed.
         *
         * @type {Boolean}
         * @default false
         */
        singleRun: false,
        /**
         * The configuration object for the plugin "karma-ng-html2js-preprocessor"
         *
         * @type {Object}
         */
        ngHtml2JsPreprocessor: {

            stripPrefix: 'src/',

            moduleName: 'external-templates'
        }
    });
};