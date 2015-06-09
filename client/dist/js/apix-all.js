/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/16/14.
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

    angular
        .module('apix', ["apix.services.data","apix.services.authentication","home","organizations","members","ngAnimate","ngCookies","ngRoute","ngSanitize","ui.bootstrap.dropdown","pascalprecht.translate","__apix.templates__"]);

}());
/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/16/14.
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

    angular
        .module('apix')
        .config(config);

    config.$inject = [
        '$translateProvider',
        '$locationProvider'
    ];

    function config($translateProvider, $locationProvider) {

        $translateProvider
            .useStaticFilesLoader({
                prefix: 'locales/lang.',
                suffix: '.json'
            })
            .preferredLanguage('en_US');

        $locationProvider
            .html5Mode(true);
    }

}());

/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/11/14.
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

    angular
        .module('home', ["apix.directives.menu","ngRoute","__apix.templates__"]);

}());

/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/16/14.
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

    angular
        .module('apix')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                redirectTo: '/home'
            })
            .when('/404', {
                templateUrl: 'app/common/templates/404.tpl.html'
            })
            .otherwise({
                redirectTo: '/404'
            });
    }

}());

/**
 * Created by Vivian Ma<xima@tibco-support.com> on 12/18/14.
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
(function(){
'use strict';

angular.module('members', ["ngRoute","ngDialog","xeditable","apixCard","apix.services.data","multi-select","__apix.templates__"]);
}());
/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/4/14.
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

(function () {

    angular
        .module('apix')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = [
        '$scope'
    ];

    function HeaderController($scope) {

        $scope.oStatus = {
            bCreateOpen: false,
            bLoginOpen: false,
            bLogoutOpen: false
        };
    }

}());
/**
 * Created by Crystal on 12/18/14.
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

angular.module('organizations', ["apix.services.data","apix.services.authentication","apixCard","ngRoute","ngDialog","xeditable","__apix.templates__"]);
/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/3/14.
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

    angular
        .module('apix')
        .controller('LoginController', LoginController);

    LoginController.$inject = [
        '$scope',
        'authenticationService'
    ];

    function LoginController($scope, authenticationService) {

        $scope.oUser = authenticationService.getCurrentUser();
        $scope.bLoggedIn = $scope.oUser ? true : !($scope.oUser = {});
        $scope.sStatusMessage = '';
        $scope.login = login;
        $scope.logout = logout;
        $scope.register = reigster;

        function login() {

            if (authenticationService.login($scope.oUser.username, $scope.oUser.password)) {
                $scope.oUser = authenticationService.getCurrentUser();
                $scope.bLoggedIn = true;
            }
        }

        function logout() {

            if (authenticationService.logout()) {
                $scope.oUser = null;
                $scope.bLoggedIn = false;
            }
        }

        function reigster() {

            $scope.sStatusMessage = 'Not yet implemented';
        }

    }

}());

/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/28/14.
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

    var authenticationEvents = {
        LOGGED_IN: 'logged_in',
        LOGGED_OUT: 'logged_out'
    };

    angular
        .module('apix.services.authentication', ["apix.services.data","ngCookies","__apix.templates__"])
        .constant('CURRENT_USER', 'apix-current-user')
        .constant('SESSION_TIMEOUT', 10 * 60 * 1000) // milliseconds
        .constant('authenticationEvents', authenticationEvents)
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = [
        'CURRENT_USER',
        'SESSION_TIMEOUT',
        'authenticationEvents',
        'dataService',
        '$rootScope',
        '$cookieStore'
    ];

    function authenticationService(CURRENT_USER,
                                   SESSION_TIMEOUT,
                                   authenticationEvents,
                                   dataService,
                                   $rootScope,
                                   $cookieStore) {

        return {
            login: login,
            logout: logout,
            register: register,
            getCurrentUser: getCurrentUser
        };

        /**
         * Log in with the user name and password which are passed in as arguments.
         *
         * @author Kevin Li<huali@tibco-support.com>
         * @param {string} sUsername The user name.
         * @param {string} sPassword The password.
         * @returns {boolean} True if logged in successfully. False otherwise.
         */
        function login(sUsername, sPassword) {

            var ret = false,
                oUser = {
                    username: sUsername,
                    loggedInAt: Date.now()
                };

            try {
                $cookieStore.put(CURRENT_USER, oUser);
                ret = true;
                $rootScope.$broadcast(authenticationEvents.LOGGED_IN, oUser);

            } catch (e) {

                ret = false;
            }
            return ret;
        }

        /**
         * Log out the current user.
         *
         * @author Kevin Li<huali@tibco-support.com>
         * @returns {boolean} True if logged out successfully. False otherwise.
         */
        function logout() {

            var ret = false;

            try {
                $cookieStore.remove(CURRENT_USER);
                ret = true;
                $rootScope.$broadcast(authenticationEvents.LOGGED_OUT);

            } catch (e) {

                ret = false;
            }
            return ret;
        }

        /**
         *
         */
        function register() {

        }

        /**
         * Get the information of the currently logged-in user.
         *
         * @author Kevin Li<huali@tibco-support.com>
         * @returns {Object} An object containing the information of the currently logged-in user or null if no user
         * has logged in.
         */
        function getCurrentUser() {

            var oUser = $cookieStore.get(CURRENT_USER) || null;

            if (oUser && Date.now() - oUser.loggedInAt >= SESSION_TIMEOUT) {

                oUser = null;
                this.logout();
            }
            return oUser;
        }
    }

}());
/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/28/14.
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

    angular
        .module('home')
        .config(config);

    config.$inject = [
        'apixMenuServiceProvider',
        'HOME_MENU_ITEM'
    ];

    function config(aMSP, HMI) {

        aMSP.addMenuItem(HMI);
    }

}());

/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/11/14.
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

    angular
        .module('home')
        .constant('HOME_MENU_ITEM', {
            sLabel: 'Home',
            sHref: '/home',
            aMatchKeywords: ['/home'],
            nOrder: 0
        });

}());

/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/30/14.
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

    var dataConstants = {
            CONTENT_TYPE_API: 'api',
            CONTENT_TYPE_APPLICATION: 'application',
            CONTENT_TYPE_ENVIRONMENT: 'environment',
            CONTENT_TYPE_GATEWAY: 'gateway',
            CONTENT_TYPE_KEY: 'key',
            CONTENT_TYPE_ORGANIZATION: 'organization',
            CONTENT_TYPE_OPERATION: 'operation',
            CONTENT_TYPE_PLAN: 'plan',
            CONTENT_TYPE_PRODUCT: 'product',
            CONTENT_TYPE_REQUEST: 'request',
            CONTENT_TYPE_SCOPE: 'scope',
            CONTENT_TYPE_SUBSCRIPTION: 'subscription',
            CONTENT_TYPE_USER_PROFILE: 'userProfile',
            RESOURCE_ID_PLACE_HOLDER: ':_id',
            WEB_SERVICES_CONTEXT_PATH: '/services'
        },
        uriPaths = {};
    /**
     * Populate "uriPaths" with key/value pairs of content type and URI path.
     * The value of the content type takes the one from the constant values of "dataConstants".
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    uriPaths[dataConstants.CONTENT_TYPE_API] = '/api';
    uriPaths[dataConstants.CONTENT_TYPE_APPLICATION] = '/application';
    uriPaths[dataConstants.CONTENT_TYPE_ENVIRONMENT] = '/environment';
    uriPaths[dataConstants.CONTENT_TYPE_GATEWAY] = '/gateway';
    uriPaths[dataConstants.CONTENT_TYPE_KEY] = '/key';
    uriPaths[dataConstants.CONTENT_TYPE_ORGANIZATION] = '/organization';
    uriPaths[dataConstants.CONTENT_TYPE_OPERATION] = '/operation';
    uriPaths[dataConstants.CONTENT_TYPE_PLAN] = '/plan';
    uriPaths[dataConstants.CONTENT_TYPE_PRODUCT] = '/product';
    uriPaths[dataConstants.CONTENT_TYPE_REQUEST] = '/request';
    uriPaths[dataConstants.CONTENT_TYPE_SCOPE] = '/scope';
    uriPaths[dataConstants.CONTENT_TYPE_SUBSCRIPTION] = '/subscription';
    uriPaths[dataConstants.CONTENT_TYPE_USER_PROFILE] = '/user';

    angular
        .module('apix.services.data', ["__apix.templates__"])
        .constant('dataConstants', dataConstants)
        .constant('uriPaths', uriPaths)
        .value('bBackendLess', false)
        .config(config)
        .factory('mockDataInterceptor', mockDataInterceptor)
        .factory('mockUtils', mockUtils)
        .provider('dataService', dataService);

    config.$inject = [
        '$httpProvider'
    ];

    mockDataInterceptor.$inject = [
        'bBackendLess',
        'mockUtils'
    ];

    function config($httpProvider) {

        $httpProvider.interceptors.push('mockDataInterceptor');
    }

    function dataService() {
        /**
         * Some default configurations for Angular's $http service.
         *
         * @author Kevin Li<huali@tibco-support.com>
         */
        var oDefaultConfig = {
            cache: false,
            headers: {
                contentType: 'json'
            },
            method: 'GET',
            responseType: 'json',
            timeout: 30 * 1000 // 30 seconds
        };

        $get.$inject = [
            '$http',
            'uriPaths',
            'dataConstants'
        ];

        /**
         * Methods available on "dataServiceProvider" in config time.
         *
         * @author Kevin Li<huali@tibco-support.com>
         */
        return {
            setCache: setCache,
            setResponseType: setResponseType,
            setTimeout: setTimeout,
            $get: $get
        };

        /**
         * Set whether the $http cache should be used for GET requests. Default is false.
         *
         * @author Kevin Li<huali@tibco-support.com>
         * @param {boolean} bCache True if the $http cache should be used. False otherwise.
         */
        function setCache(bCache) {

            oDefaultConfig.cache = !!bCache;
        }

        /**
         * Set the expected type of the response data. Default is "json".
         *
         * @author Kevin Li<huali@tibco-support.com>
         * @param {string} sType A string representing the expected type of the response data.
         */
        function setResponseType(sType) {

            oDefaultConfig.responseType = sType;
        }

        /**
         * Set how long the $http service should be waiting before aborting an HTTP request.
         *
         * @author Kevin Li<huali@tibco-support.com>
         * @param {number} nTimeout The amount of waiting time in milliseconds.
         */
        function setTimeout(nTimeout) {

            if (angular.isNumber(nTimeout) && nTimeout > 0) {
                oDefaultConfig.timeout = nTimeout;
            }
        }

        function $get($http, uriPaths, dataConstants) {

            var sContentType;

            return initialize;

            /**
             * Check if the content type is valid.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {string} sCT The content type to be checked.
             * @returns {boolean} True if the content type is valid. undefined otherwise.
             * @throws Will throw an error if the content type passed in as the only argument is not one of the content
             * types defined in the constant "dataConstants".
             */
            function checkContentType(sCT) {

                if (sCT in uriPaths) {

                    return true;

                } else {

                    throw 'Setting content type failed. The content type "' + sCT +
                    '" is not recognizable.', 'The content type should be one of the constants defined by "dataConstants".';
                }
            }

            /**
             * Initialize "dataService" with the provided content type.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {string} sCT One of the content types defined in the constant "dataConstants".
             * @returns {Object} An object containing all the methods for handling HTTP requests.
             * @throws Will throw an error if the content type passed in as the only argument is not one of the content
             * types defined in the constant "dataConstants".
             */
            function initialize(sCT) {

                if (checkContentType(sCT)) {

                    sContentType = sCT;

                    return {
                        setContentType: setContentType,
                        get: get,
                        list: list,
                        create: create,
                        update: update,
                        remove: remove
                    };
                }
            }

            /**
             * Map the content type to the corresponding URL.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {string} sContentType The content type of which the corresponding URL is to be looked up. This
             * content type must be one of the pre-defined one in the constant "dataConstants".
             * @returns {string} The URL for HTTP requests corresponding to the provided content type.
             */
            function mapURI(sContentType) {

                return dataConstants.WEB_SERVICES_CONTEXT_PATH + uriPaths[sContentType] + '/' +
                    dataConstants.RESOURCE_ID_PLACE_HOLDER;
            }

            /**
             * Replace the variables in the URL with values provided in the parameters. Or just remove the
             * variable if no value is provided.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {string} sURL The URL in which the variables is to be searched for.
             * @param {Object} oParams An object containing all the parameters of the HTTP request.
             * @returns {string} The URL in which the variables have been replaced or removed.
             * @throws Will throw an error when the URL which is passed in as the first argument is not a string.
             */
            function populateParamValues(sURL, oParams) {

                if (angular.isString(sURL)) {

                    var rTargetParams = /\/:[a-zA-Z_]+/g,
                        aMatches = sURL.match(rTargetParams),
                        sKey;

                    angular.forEach(aMatches, function (sMatch) {

                        // Find the name of the variable.
                        sKey = sMatch.substring(sMatch.indexOf(':') + 1);

                        if (!angular.isObject(oParams)) {

                            oParams = {};
                        }

                        if (sKey in oParams) {
                            // The value for the variable whose name is the value of "sKey" is present in the parameters
                            // object.
                            sURL = sURL.replace('/:' + sKey, '/' + oParams[sKey]);
                            delete oParams[sKey];

                        } else {
                            // The value for the variable whose name is the value of "sKey" is absent in the parameters
                            // object.
                            sURL = sURL.replace('/:' + sKey, '');
                        }
                    });

                    return sURL;

                } else {

                    throw 'The sURL "' + sURL + '" is not a valid string.';
                }
            }

            /**
             * Send request to the server with the configuration object provided as the only argument.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {Object} oConfig The configuration object that will passed into the Angular's $http service.
             * @returns {HttpPromise} Same as the return value of invoking Angular's $http service.
             * @throws Will throw error when no arguments or the passed argument is not an object.
             */
            function request(oConfig) {

                if (angular.isObject(oConfig)) {

                    var oConf = {};

                    angular.extend(oConf, oDefaultConfig, oConfig);

                    oConf.url = populateParamValues(mapURI(sContentType), oConf.params);

                    return $http(oConf);

                } else {

                    throw 'Configuration object must be provided.';
                }
            }

            /**
             * Set the content type so that the same instance of "dataService" can be used for different content types.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {string} sCT One of the content types defined in the constant "dataConstants".
             * @throws Will throw an error if the content type passed in as the only argument is not one of the content
             * types defined in the constant "dataConstants".
             */
            function setContentType(sCT) {

                if (checkContentType(sCT)) {

                    sContentType = sCT;
                }
            }

            /**
             * Get a record with the id passed in as the only argument.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {string} sId The id of the record to be retrieved.
             * @returns {HttpPromise} Same as the return value of invoking Angular's $http service.
             * @throws Will throw an error if the id passed in as the only argument is not a string.
             */
            function get(sId) {

                if (angular.isString(sId)) {

                    return request({
                        method: 'GET',
                        params: {
                            _id: sId
                        }
                    });
                } else {

                    throw 'Id must be a string.';
                }
            }

            /**
             * Get a list of records with the parameters passed in as the only argument.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {Object} oParams An object containing all the parameters for querying a set of records.
             * @returns {HttpPromise} Same as the return value of invoking Angular's $http service.
             */
            function list(oParams) {

                if (angular.isUndefined(oParams) || !angular.isObject(oParams)) {
                    oParams = {};
                }

                return request({
                    method: 'GET',
                    params: oParams
                });
            }

            /**
             * Create a new record.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {Object} oData An object containing all the data for the new record.
             * @returns {HttpPromise} Same as the return value of invoking Angular's $http service.
             * @throws Will throw an error if the only argument is not a valid JavaScript object.
             */
            function create(oData) {

                if (angular.isObject(oData)) {

                    return request({
                        method: 'POST',
                        data: oData
                    });
                } else {

                    throw 'The data must be a JavaScript object.';
                }
            }

            /**
             * Update an existing record.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {string} sId The id of the record to be udpated.
             * @param {Object} oData An object containing all the data to be udpated for the record.
             * @returns {HttpPromise} Same as the return value of invoking Angular's $http service.
             * @throws Will throw an error if the id passed in as the first argument is not a string.
             */
            function update(sId, oData) {

                if (angular.isString(sId)) {

                    if (!angular.isObject(oData)) {
                        oData = {};
                    }

                    return request({
                        method: 'POST',
                        data: oData,
                        params: {
                            _id: sId
                        }
                    });
                } else {

                    throw 'Id must be a string.';
                }
            }

            /**
             * Delete a record by id.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {string} sId The id of the record to be deleted.
             * @returns {HttpPromise} Same as the return value of invoking Angular's $http service.
             * @throws Will throw an error if the id passed in as the only argument is not a string.
             */
            function remove(sId) {

                if (angular.isString(sId)) {

                    return request({
                        method: 'DELETE',
                        params: {
                            _id: sId
                        }
                    });
                } else {

                    throw 'Id must be a string.';
                }
            }
        }
    }

    /**
     * An interceptor to provide static data when working in backendless mode.
     *
     * @author Kevin Li<huali@tibco-support.com>
     * @param {boolean} bBackendLess Whether the "dataService" is working in backendless mode.
     * @param {Object} mockUtils A service containing utility functions for mocking data.
     * @returns {Object} An object containing different interceptors.
     */
    function mockDataInterceptor(bBackendLess, mockUtils) {

        return {
            request: function (oConfig) {

                if (bBackendLess) {

                    mockUtils.changeRoute(oConfig);
                }

                return oConfig;
            },
            response: function (oResponse) {

                return oResponse;
            }
        };
    }

    function mockUtils() {

        return {
            /**
             * Change the route, which is actually the URL specified in the configuration object of $http service, to
             * retrieve the content of static files.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {Object} oConfig The configuration object of $http service.
             */
            changeRoute: function (oConfig) {

                var rUrlWithId = /\/services\/([^\/]+)\/([a-zA-Z0-9]{24})/,
                    rUrlWithoutId = /\/services\/([^\/]+)/,
                    sUrlPrefix = '/mock/',
                    aContentTypePath;

                if (aContentTypePath = oConfig.url.match(rUrlWithId)) {

                    if (angular.uppercase(oConfig.method) === 'GET') {

                        oConfig.url = sUrlPrefix + '/' + aContentTypePath[1] + '/' + aContentTypePath[2] + '.json';

                    } else if (angular.uppercase(oConfig.method) === 'POST') {
                        // TODO: deal with update request
                    } else if (angular.uppercase(oConfig.method) === 'DELETE') {
                        // TODO: deal with delete request
                    }
                } else if (aContentTypePath = oConfig.url.match(rUrlWithoutId)) {

                    if (angular.uppercase(oConfig.method) === 'GET') {

                        oConfig.url = sUrlPrefix + aContentTypePath[1] + 's.json';

                    } else if (angular.uppercase(oConfig.method) === 'POST') {
                        // TODO: deal with create request
                    }
                }
            }
        };
    }

}());
/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/3/14.
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

    angular
        .module('home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        '$scope'
    ];

    function HomeController($scope) {

    }

}());
(function() {
	"use strict";

	angular
		.module("apixCard", [
			"ngDialog"
		])
		.controller("apixCardCtrl", apixCardCtrl)
		.directive("compileHtml", compileHtml)
		.directive("cardsLayout", cardsLayout)
		.factory("card", card)
		.factory("eventManager", eventManager)
		.factory("page", page)
		.factory("cardEvent", cardEvent);




	apixCardCtrl.$inject = ['$scope', 'card', 'page', 'cardEvent', 'eventManager', 'ngDialog'];
	//The main controller of the card system
	function apixCardCtrl(
		$scope,
		card,
		page,
		cardEvent,
		eventManager,
		ngDialog
	) {
		$scope.ngDialog = ngDialog;
		$scope.eventManager = eventManager;
		card = $scope.card = card($scope, page);
		$scope.cardEvent = cardEvent($scope);
		$scope.page = page($scope);
		//Initial the card system
		card.init();

		var $parent = $scope.$parent,
			config = $parent.apixConfig;
		var onCardSystemInitialEndVar = config.oncardsysteminitialend;
		onCardSystemInitialEndVar = onCardSystemInitialEndVar.split("(");
		onCardSystemInitialEndVar = onCardSystemInitialEndVar[0];
		$scope.$parent[onCardSystemInitialEndVar](card,$scope);

	}

	/**
	 * It use custome template(initHtml),and compile it,then append to current element;
	 *
	 * @author John Du<bdu@tibco-support.com>
	 *
	 */
	compileHtml.$inject = ['$compile'];

	function compileHtml($compile) {
		return function($scope, $element, $attrs) {
			$element.html('').append($compile($attrs.initHtml)($scope));
		};
	}

	/**
	 *
	 * A card directive is actually a div which include many div(card),and it will automaticly render a template
	 *      and define stylesheet according to the attributes in card directive
	 *      and assign the controller of the card system
	 *
	 * @author John Du<bdu@tibco-support.com>
	 *
	 */
	cardsLayout.$inject = ['$compile'];

	function cardsLayout($compile) {
		return {
			restrict: 'EA',
			link: function($scope, $element, $attr) {
				var apixConfig = $scope.apixConfig = {};
				for (var i in $attr) {
					if (typeof($attr[i]) === 'string' && $attr[i].indexOf('ng-') === -1) {
						var v = $attr[i];
						if (v.indexOf('()') != -1) {
							v = v.substring(0, v.length - 2);
						}
						$scope.apixConfig[i] = v;
					}
				}
				var $obj = $($element['context']);
				var tpl = [
					'<div ng-controller="apixCardCtrl">',
					$obj.html(),
					'<div class="apixCardBox clearfix">',
					'   <div ',
					'     ng-mouseenter="cardEvent.onCardMouseEnter($index)" ',
					'    ng-mousemove="cardEvent.onCardMouseMove($index)" ',
					'   ng-mouseleave="cardEvent.onCardMouseLeave($index)" ',
					'  ng-click="card.onCardClick($event,$index)" ',
					' style="margin-top:' + $attr['marginTop'] + ';padding-left:' + $attr['paddingLeft'] + ';padding-right:' + $attr['paddingRight'] + '"',
					'ng-repeat="' + $attr['apixDataRepeat'] + '" class="col-md-' + (12 / $attr['numOfColumn'] || 4) + '">',
					'   <div class="apix-card-container clearfix"  ng-if="apixConfig.cardTemplate" compile-html init-html="{{apixConfig.cardTemplate}}"></div>',
					'  <div class="apix-card-container clearfix"  ng-if="!apixConfig.cardTemplate" ng-include="apixConfig.cardTemplateUrl"></div>',
					'</div>',
					'</div>',
					'</div>'
				].join('');
				$obj.replaceWith($compile(tpl)($scope));
			}
		};
	}


	/**
	 * Here are some basic operate so that make sure the card system can be work normally
	 *
	 * @author John Du<bdu@tibco-support.com>
	 * @returns returns a json object:
	 *      currentActivedCardIndex:it means the index of current actived
	 *      init:initial the card system
	 *      onCardClick:when the card is clicked,something may be handle
	 *
	 */
	function card() {
		returnFun.$inject = ['$scope', 'page'];

		function returnFun($scope, page) {
			var o = {
				currentActivedCardIndex: null,
				parentScopeDataStoreVar: (function() {
					var $parent = $scope.$parent,
						config = $parent.apixConfig,
						variable = config['apixDataRepeat'].trim();
					variable = variable.split(' ');
					variable = variable[variable.length - 1];
					$scope.$parent[variable] = [];
					return variable;
				})(),
				init: function() {
					$scope.cardEvent.onBeforeLoadingNewData();
					$scope.page.getDataWhenScroll();
				},
				onCardClick: function(event, index) {
					var target = event.target,targetNodeType=target.nodeName.toLowerCase();
					if(targetNodeType!='button'&&targetNodeType!='input'){
						o.currentActivedCardIndex = index;
						$scope.currentCardData = $scope.$parent[$scope.card.parentScopeDataStoreVar][index];
						$scope.ngDialog.openConfirm({
							template: $scope.$parent.apixConfig.dialogTemplateUrl,
							className: 'ngdialog-theme-default',
							scope: $scope.$parent
						});
						$scope.cardEvent.onCardClick(index);
					}
					
					
				}
			};
			return o;
		};
		return returnFun;
		// return function($scope, page) {
		//                 
		// };
	}





	/**
	 * A simple event manager system
	 *
	 * @author John Du<bdu@tibco-support.com>
	 * @returns returns a json object:
	 *      key{on} bind an event for card or poplayer
	 *      key{off} unbind one event
	 *      key{trigger}trigger a event
	 *      key{init}initial the eventManager system
	 */
	function eventManager() {
		var o = {
			on: function(funName, funAction) {
				if (typeof(this.eventExecuter[funName]) === 'undefined') {
					this.eventLists[funName] = [];
				}
				var module = this;
				this.eventLists[funName].push(funAction);
				this.eventExecuter[funName] = function(p1, p2, p3, p4, p5) {
					for (var i in module.eventLists[funName]) {
						module.eventLists[funName][i](p1, p2, p3, p4, p5);
					}
				};
				return this;
			},
			off: function(funName) {
				this.eventLists[funName] = [];
				this.eventExecuter[funName] = function() {};
				return this;
			},
			trigger: function(funName, p1, p2, p3, p4, p5) {
				for (var i in this.eventLists[funName]) {
					this.eventLists[funName][i](p1, p2, p3, p4, p5);
				}
				return this;
			},
			init: function(moduleName, $scope) {
				var module = $scope[moduleName];
				module.eventLists = {};
				module.eventExecuter = this;
				for (var i in this) {
					module.eventLists[i] = [this[i]];
				}
				for (var j in o) {
					if (j != 'init') {
						module[j] = o[j].bind(module);
					}
				}
				return this;
			}
		};
		return o;
	}



	/**
	 * It defineds any possibile events in the card system
	 *
	 * @author John Du<bdu@tibco-support.com>
	 * @returns returns a json object which include all the event:
	 *  {onCardMouseEnter}when mouse enters any card will trigger it
	 *  {onCardMouseMove}when mouse moves any card will trigger it
	 *  {onCardMouseLeave}when mouse leaves any card will trigger it
	 *  {onCardDelete}when delete one card will trigger it
	 *  {onCardClick}when click one card will trigger it
	 *  {onAllDataLoaded}when all of the card datas loaded will trigger it
	 *  {onBeforeLoadingNewData}when fetching new datas will trigger it
	 *  {onNewDataLoadEnd}when the new data loaded will trigger it
	 */



	/**
	 * It defineds any possibile events in the card system
	 *
	 * @author John Du<bdu@tibco-support.com>
	 * @returns returns a json object which include all the event:
	 *  {onCardMouseEnter}when mouse enters any card will trigger it
	 *  {onCardMouseMove}when mouse moves any card will trigger it
	 *  {onCardMouseLeave}when mouse leaves any card will trigger it
	 *  {onCardDelete}when delete one card will trigger it
	 *  {onCardClick}when click one card will trigger it
	 *  {onAllDataLoaded}when all of the card datas loaded will trigger it
	 *  {onBeforeLoadingNewData}when fetching new datas will trigger it
	 *  {onNewDataLoadEnd}when the new data loaded will trigger it
	 * {deleteCards}It's used for delete a group of card
	 */
	function cardEvent() {
		returnFun.$inject = ['$scope'];

		function returnFun($scope) {
			var getAttrEvent = function(eventName) {
				var $parent = $scope.$parent,
					config = $parent.apixConfig,
					eventNameInParent = config[eventName];
				if (typeof(eventNameInParent) === 'undefined') {
					return function() {

					};
				} else {
					if (eventNameInParent.indexOf('(') != -1) {
						eventNameInParent = eventNameInParent.substring(0, eventNameInParent.indexOf('('));
					}
					return $parent[eventNameInParent];
				}
			};
			var o = {
				/**
				 * @param{index} the index of current operating card
				 */
				onCardMouseEnter: function(index) {
					getAttrEvent('oncardmouseenter')(index);
				},
				onCardMouseMove: function(index) {
					getAttrEvent('oncardmousemove')(index);
				},
				onCardMouseLeave: function(index) {
					getAttrEvent('oncardmouseleave')(index);
				},
				onCardDelete: function(index) {
					getAttrEvent('oncarddelete')(index);
				},
				onCardClick: function(index) {
					getAttrEvent('oncardclick')(index);
				},
				onAllDataLoaded: function() {
					getAttrEvent('onalldataloaded')();
				},
				onBeforeLoadingNewData: function() {
					getAttrEvent('onbeforeloadingnewdata')();
				},
				onNewDataLoadEnd: function() {
					getAttrEvent('onnewdataloadend')();
				},
				deleteCards: function(arr) {
					var count = 0;
					for (var i = 0; i < arr.length; i++) {
						$scope.card.trigger('onCardDelete', arr[i - count]);
						count++;
					}
				}
			};
			return $scope.eventManager.init.call(o, 'card', $scope);
		};
		return returnFun;
	}


	/**
	 * Here are some basic operate so that make sure the pagination or drop-down-refresh can be work normally
	 *
	 * @author John Du<bdu@tibco-support.com>
	 * @returns returns a json object
	 */
	function page() {
		returnFun.$inject = ['$scope'];

		function returnFun($scope) {
			var o = {
				curPage: 0,
				allowRequest: true,
				ifLoadAllData: false,
				init: function() {
					$(window).scroll(function() {
						var st = $(document).scrollTop();
						var wh = $(window).height();
						var doc_h = $(document).height();
						if (st + wh >= doc_h) {
							if (o.allowRequest === true) {
								if (!o.ifLoadAllData) {
									$scope.cardEvent.onBeforeLoadingNewData();
								}
								o.allowRequest = false;
								o.getDataWhenScroll();
							}
						}
					});
				},
				getDataWhenScroll: function() {
					var $parent = $scope.$parent,
						data = $parent[$parent.apixConfig.apixData](),
						ifLoadAllData = ((angular.isArray(data) === true && data.length === 0) || (data === null) || ([0, -1].indexOf(parseInt(data, 10)) > -1) || (typeof(data) === 'undefined')) ? true : false;
					o.allowRequest = true;
					if (ifLoadAllData === true) {
						$scope.cardEvent.onAllDataLoaded();
						return false;
					}
					o.curPage++;
					if (o.curPage === 1) {
						$scope.$parent[$scope.card.parentScopeDataStoreVar] = data;
					} else {
						$scope.$apply(function() {
							for (var j in data) {
								$scope.$parent[$scope.card.parentScopeDataStoreVar].push(data[j]);
							}
						});
					}
					$scope.cardEvent.onNewDataLoadEnd();
				}
			};
			o.init();
			return o;
		};
		return returnFun;
	}





})();
/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/31/14.
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

    angular
        .module('home')
        .config(config);

    config.$inject = [
        '$routeProvider'
    ];

    function config($routeProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: 'app/home/templates/home.tpl.html',
                controller: 'HomeController'
            });
    }

}());

/**
 * Created by Kevin Li<huali@tibco-support.com> on 12/13/14.
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

    /**
     * This module takes in arbitrary number of menu items and display them in the menu bar in runtime.
     * Menu items can be added in both the config time and the run time.
     *
     * @author Kevin Li<huali@tibco-support.com>
     */
    angular
        .module('apix.directives.menu', ["ngAnimate","__apix.templates__"])
        .provider('apixMenuService', apixMenuService)
        .controller('APIXMenuController', APIXMenuController)
        .directive('apixMenu', apixMenu);

    APIXMenuController.$inject = [
        'apixMenuService',
        '$scope'
    ];

    apixMenu.$inject = [
        'apixMenuService'
    ];

    function apixMenuService() {
        /**
         * An array containing all the menu items.
         *
         * @author Kevin Li<huali@tibco-support.com>
         * @type {Array}
         * @example
         * [
         *     {
         *         sLabel: {string} - The text label for the menu item. Required.
         *         sHref: {string} - The URL to be redirected to when clicking the menu item. Required.
         *         aMatchKeywords: {Array} - An array of keywords used to match against the URL to determine whether
         *                                      this menu item should be selected or not.
         *         nOrder: {number} - The ordinal number of the menu item. Required.
         *         fClickListener: {Function} - A listener listening on the click event of this menu item.
         *         aSubMenuItems: {Array} - An array containing all submenu items of this menu item.
         *     }
         * ]
         */
        var aMenuItems = [],
            /**
             * The scope of the controller of the directive. It's used to call the $digest method so that the menu bar
             * can be updated as any menu item got added or removed during the runtime.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @type {Object}
             */
            oScope = null;

        $get.$inject = [
            '$location',
            '$timeout'
        ];

        return {
            addMenuItem: addMenuItem,
            $get: $get
        };

        /**
         * Add a menu item to the menu bar in order.
         *
         * @author Kevin Li<huali@tibco-support.com>
         * @param {Object} oMenuItem An object containing all information pertaining to the menu item which is to be
         * added.
         * @returns {Object} The object that this function is bound to when it's invoked.
         */
        function addMenuItem(oMenuItem) {

            if (checkMenuItem(oMenuItem)) {

                var i;

                for (i = 0; i < aMenuItems.length; i += 1) {

                    if (oMenuItem.nOrder < aMenuItems[i].nOrder) {

                        aMenuItems.splice(i, 0, oMenuItem);
                        break;
                    }
                }
                // This condition check must be put outside the for loop.
                // Otherwise no menu items can be added when the aMenuItems is empty 'cause the for loop doesn't
                // even run once.
                if (i === aMenuItems.length) {

                    aMenuItems.push(oMenuItem);
                }
            }
            return this;
        }

        /**
         * Check whether all required properties are present in the menu item definition object.
         *
         * @param {Object} oMenuItem The menu item definition object.
         * @returns {boolean} True if all required properties are present. undefined otherwise.
         * @throws Will throw an error if any of the required properties are not present.
         */
        function checkMenuItem(oMenuItem) {

            if (angular.isNumber(oMenuItem.nOrder)) {

                if (angular.isArray(oMenuItem.aMatchKeywords)) {

                    if(aMenuItems.indexOf(oMenuItem) < 0) {

                        return true;
                    }
                } else {
                    throw '"aMatchKeywords" must be defined for the menu item.';
                }
            } else {
                throw '"nOrder" must be defined for the menu item.';
            }
        }

        /**
         * The return value of this function is what you'll be provided when declaring this provider as an
         * injectable argument.
         *
         * @author Kevin Li<huali@tibco-support.com>
         * @returns {Object} An object containing all the things you'll be provided when declaring this provider as
         * an injectable argument.
         */
        function $get($location, $timeout) {

            return {
                addMenuItem: addItem,
                getAllMenuItems: getAllMenuItems,
                removeMenuItem: removeMenuItem,
                selectMenuItem: selectMenuItem,
                selectMenuItemByPath: selectMenuItemByPath
            };

            /**
             * Add a menu item to the menu bar in order.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {Object} oMenuItem An object containing all information pertaining to the menu item which is to be
             * added.
             * @returns {Object} The object that this function is bound to when it's invoked.
             */
            function addItem(oMenuItem) {

                $timeout(function () {
                    addMenuItem(oMenuItem);
                    selectMenuItemByPath();
                });
                return this;
            }

            /**
             * Get all menu items.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @returns {Array} An array containing all menu items.
             */
            function getAllMenuItems() {

                return aMenuItems;
            }

            /**
             * Remove a menu item from the menu bar.
             *
             * @author Kevin Li<huali@tibo-support.com>
             * @param {Object} oMenuItem An object containing all information pertaining to the menu item which is to be
             * removed.
             * @returns {Object} The object that this function is bound to when it's invoked.
             */
            function removeMenuItem(oMenuItem) {

                angular.forEach(aMenuItems, function (oItem, nIndex) {

                    if (angular.equals(oMenuItem, oItem)) {

                        $timeout(function () {
                            aMenuItems.splice(nIndex, 1);
                            selectMenuItemByPath();
                        });
                    }
                });

                return this;
            }

            /**
             * Remove the selection on any menu items.
             *
             * @author Kevin Li<huali@tibco-support.com>
             */
            function removeSelection() {

                angular.forEach(aMenuItems, function (oItem) {

                    oItem.bActive = false;
                });
            }

            function isPathMached(sKeyword) {

                return $location.path().search(sKeyword) >= 0;
            }

            /**
             * Select a menu item based on the URL in the browser's address bar.
             *
             * @author Kevin Li<huali@tibco-support.com>
             */
            function selectMenuItemByPath() {

                angular.forEach(aMenuItems, function (oItem) {

                    if ($location.path().search(oItem.sHref) >= 0 ||
                        oItem.aMatchKeywords.some(isPathMached)) {

                        selectMenuItem(oItem, true);
                    }
                });
            }

            /**
             * Select one menu item and deselect others.
             *
             * @author Kevin Li<huali@tibco-support.com>
             * @param {Object} oMenuItem An object containing all information pertaining to the menu item which is to be
             * selected.
             * @param {boolean} bFirstTime Whether this is the first time trying to select a menu item in the menu bar.
             */
            function selectMenuItem(oMenuItem, bFirstTime) {

                if (angular.isObject(oMenuItem)) {

                    removeSelection();
                    oMenuItem.bActive = true;
                }
            }
        }
    }

    function APIXMenuController(aMS, $scope) {

        $scope.aMenuItems = aMS.getAllMenuItems();

        $scope.selectMenuItem = function(oMenuItem) {

            aMS.selectMenuItem(oMenuItem);
        }
    }

    function apixMenu(aMS) {

        return {
            controller: 'APIXMenuController',
            link: function () {

                aMS.selectMenuItemByPath();
            },
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/common/directives/apix-menu/apix-menu.tpl.html'
        };
    }

}());

/**
 * Created by Vivian Ma<xima@tibco-support.com> on 12/18/14.
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
(function() {
    'use strict';

    angular
        .module('members')
        .config(config);

    config.$inject = [
        'apixMenuServiceProvider'
    ];

    function config(apixMenuServiceProvider) {
        // apixMenuServiceProvider.addMenuItem({
        //     sLabel: 'members',
        //     sHref: '/members',
        //     sMatchKeyword: '/members',
        //     nOrder: 3
        // });
    }

}());
/**
 * Created by Vivian Ma<xima@tibco-support.com> on 12/18/14.
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

    angular
        .module('members')
        .controller('MembersController', MembersController);

    MembersController.$inject = [
        '$scope',
        '$filter',
        'ngDialog',
        'dataConstants',
        'dataService',
        '$routeParams',
        '$location'
    ];



    function MembersController($scope, $filter, ngDialog, dataConstants, dataService,$routeParams,$location) {
        $scope.organizationId = $routeParams.org_id;
        getMembers();
        $scope.roles = ['manager','developer','contact'];   
        getOrganization();
        $scope.phoneNumberRegex = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
        function getOrganization() {
            var oHttpClient = dataService(dataConstants.CONTENT_TYPE_ORGANIZATION);
            oHttpClient.list().then(function(oResponse){
                $scope.organizations  = oResponse.data.message;
            });
        };

        function getMembers(){
            if($scope.organizationId){
                var oHttpClient = dataService(dataConstants.CONTENT_TYPE_ORGANIZATION);
                oHttpClient.get($scope.organizationId).then(function(oResponse){
                    $scope.members  = oResponse.data.message.members;
                });
            }else{
               $location.path('/404');     
            }
        };

        $scope.init_end=function(card,childScope){

            $scope.click_card=function(index){
                var oHttpClient = dataService(dataConstants.CONTENT_TYPE_USER_PROFILE);
                oHttpClient.get(childScope.currentCardData.id).then(function(oResponse){
                    $scope.memberDetail  = oResponse.data.message;
                    $scope.memberDetail.role = oResponse.data.message.organizations[0].role;
                });
            };        

            card.
                on("create", function(){
                    ngDialog.open({ 
                        template: 'app/members/templates/members.dialog.tpl.html'
                    });
                });
        };
        $scope.getData=function(){

        };
        $scope.saveMembers = function(){
            $scope.member.organizations = [{id:$scope.organizationId,role:$scope.member.role,name:'org1',type:'host'}];
            var oHttpClient = dataService(dataConstants.CONTENT_TYPE_USER_PROFILE);
            oHttpClient.create($scope.member).then(function(oResponse){
                if(oResponse.data.result=="error"){
                   $scope.errorFlag = true;
                }else{
                    getMembers();
                }
            });
        };

        $scope.deleteMember = function(Id){
            var oHttpClient = dataService(dataConstants.CONTENT_TYPE_USER_PROFILE);
            oHttpClient.remove(Id).then(function(oResponse){
                getMembers();
            });
        };

        $scope.editMember = function(sId, oData){
            var oHttpClient = dataService(dataConstants.CONTENT_TYPE_USER_PROFILE);
            oData.organizations = [{id:$scope.organizationId,role:oData.role,name:'org1',type:'host'}];
            oHttpClient.update(sId, oData).then(function(oResponse){
                getMembers();
            });
        }
    }
}());
/**
 * Created by Vivian Ma<xima@tibco-support.com> on 12/18/14.
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
(function(){
    'use strict';

    angular
        .module('members')
        .config(config);

    config.$inject = [
            '$routeProvider'
    ];
    
    function config($routeProvider) {
            $routeProvider
                // .when('/members/org_id=:id', {
                    .when('/members', {
                    templateUrl: 'app/members/templates/members-index.tpl.html',
                    controller: 'MembersController',
                    controllerAs: 'mem'
                });
        }

}());
'use strict';
angular.module('OrganizationsApp', [
    'ngRoute',
    'ngDialog',
    'xeditable'
]);
'use strict';

angular.module('OrganizationsApp')
  .controller('OrganizationItemCtrl', ['$scope','Organizations',function ($scope,Organizations) {
    var promise = Organizations.get();
    $scope.noun = "Organizations";
    promise.then(function(data) {
        $scope.item = data;  
    }, function(data) {
        $scope.item = {};  
    }); 
  }]);

'use strict';

angular.module('OrganizationsApp')
    .controller('OrganizationListCtrl', ['$scope', '$filter', 'ngDialog', 'Organizations',
        function($scope, $filter, ngDialog, Organizations) {
            var promise = Organizations.query();
            var promiseItem = Organizations.get();
            promise.then(function(data) {
                $scope.organizations = data;
            }, function(data) {
                $scope.organizations = [];
            });
            promiseItem.then(function(data) {
                $scope.promiseItem = data;
                console.log(data);
            }, function(data) {
                $scope.promiseItem = {};
            });

            //ngDialog 
            $scope.openConfirm = function() {
                ngDialog.openConfirm({
                    template: 'organizationDialog',
                    controller: 'OrganizationListCtrl',
                    className: 'ngdialog-theme-default'
                }).then(function(value) {
                    console.log('Modal promise resolved. Value: ', value);
                }, function(reason) {
                    console.log('Modal promise rejected. Reason: ', reason);
                });
            };
        }
    ]);
/**
 * Created by Crystal on 12/18/14.
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
(function() {
    'use strict';

    angular
        .module('organizations')
        .controller('OrganizationsController', OrganizationsController);

    OrganizationsController.$inject = [
        '$scope',
        '$filter',
        'ngDialog',
        'dataConstants',
        'dataService'
    ];

    function OrganizationsController($scope,
        $filter,
        ngDialog,
        dataConstants,
        dataService

    ) {

        $scope.countries = ['Afghanistan', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica'];
        $scope.orgTypes = ['Individual', 'Host', 'Partner'];
        $scope.roles = ['manager', 'develpor', 'contact'];

        /*calendar*/
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function() {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        var oHttpClient = dataService(dataConstants.CONTENT_TYPE_ORGANIZATION);
        function getOrganization(){
           oHttpClient.list().then(function(oResponse) {
                $scope.organizations = oResponse.data.message;
            });
        };
        
        /* card */
        $scope.init_end = function(card, childScope) {
            // List all organizations
            oHttpClient.list().then(function(oResponse) {
                // Do something with the response object.
                $scope.organizations = oResponse.data.message;
                oHttpClient.get(oResponse.data.message[0]._id).then(function(oData) {
                    $scope.promiseItem = oData.data;
                });
                // This response object is just the one used in Angular's $http service.
            });

            $scope.click_card = function(index) {
                oHttpClient.get(childScope.currentCardData._id).then(function(oResponse) {
                    $scope.promiseItem = oResponse.data.message;
                });
            };

        };

        $scope.getData = function() {};

        /*create an organization*/
        $scope.fOrganizationsCreate = function() {
            oHttpClient.create($scope.organization).then(function(oResponse) {
                if (oResponse.data.result == "error") {
                    alert(oResponse.data.message);
                } else {
                    $scope.organization = oResponse.data.message;
                    $scope.organizations.unshift(oResponse.data.message);
                }
            });
        };

        /*update an organization*/
        $scope.fOrganizationsUpdate = function() {
            oHttpClient.update($scope.promiseItem._id, $scope.promiseItem).then(function(oResponse) {
                if (oResponse.data.result == "error") {
                    alert(oResponse.data.message);
                }
            });
        };
        
        

        /*remove an organization*/
        $scope.fDeleteOrganization = function(orgId){
            oHttpClient.remove(orgId).then(function(oResponse){
                getOrganization();
            });
        }

        /*create a member*/
        $scope.fMembersCreate = function() {
            $scope.newMember.organizations = [{
                id: $scope.promiseItem._id,
                role: $scope.newMember.organizations.role
            }];
            oHttpClient.setContentType(dataConstants.CONTENT_TYPE_USER_PROFILE);
            oHttpClient.create($scope.newMember).then(function(oResponse) {
                if (oResponse.data.result == "error") {
                    alert(oResponse.data.message);
                } else {
                    $scope.newMember = oResponse.data.message;
                    $scope.promiseItem.members.unshift(oResponse.data.message);
                }
            });
        };
    }

}());
/**
 * Created by Crystal on 12/18/14.
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
(function() {
    'use strict';

    angular
        .module('organizations')
        .config(config);

    config.$inject = [
        '$routeProvider'
    ];

    function config($routeProvider) {
        $routeProvider
            .when('/organizations', {
                templateUrl: 'app/organizations/templates/organizations-index.tpl.html',
                controller: 'OrganizationsController',
                controllerAs: 'oc'
            });
    }

}());
/**
 * Created by Crystal on 12/18/14.
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
(function() {
    'use strict';

    angular
        .module('organizations')
        .constant('ORGANIZATION_MENU_ITEM', {
            sLabel: 'Organizations',
            sHref: '/organizations',
            aMatchKeywords: ['/organizations', 'members'],
            nOrder: 3
        })
        .run(organizationRun);

    organizationRun.$inject = [
        'authenticationEvents',
        'authenticationService',
        'apixMenuService',
        'ORGANIZATION_MENU_ITEM',
        '$rootScope',
        '$location'
    ];

    /* authentication for organization menu item */
    function organizationRun(authenticationEvents,
        authenticationService,
        apixMenuService,
        ORGANIZATION_MENU_ITEM,
        $rootScope,
        $location) {

        $rootScope.$on(authenticationEvents.LOGGED_IN, function(authenticationResponse) {
            if (authenticationResponse) {
                apixMenuService.addMenuItem(ORGANIZATION_MENU_ITEM);
            }
        });
        $rootScope.$on(authenticationEvents.LOGGED_OUT, function(authenticationResponse) {
            if (authenticationResponse) {
                apixMenuService.removeMenuItem(ORGANIZATION_MENU_ITEM);
                $location.path('/home');
            }
        });
        var current_user = authenticationService.getCurrentUser();
        if (current_user !== null) {
            apixMenuService.addMenuItem(ORGANIZATION_MENU_ITEM);
        } else {
            //if current_user is null, the organiztions menu item will not be displayed
            apixMenuService.removeMenuItem(ORGANIZATION_MENU_ITEM);
            $location.path('/home');
        }

    }

}());
angular.module("__apix.templates__", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/common/templates/404.tpl.html","<div class=\"error-404\">\n    <img src=\"assets/images/404.png\" />\n</div>\n");
$templateCache.put("app/footer/templates/footer.tpl.html","<footer>\n    <noscript>\n        <p>This site makes heavy use of JavaScript. Please enable JavaScript to continue.</p>\n\n        <p>\n            Enabling JavaScript\n            <br>\n            In Internet Explorer, this can be set in Tools > Options > Security tab and then clicking on the Custom\n            Level button.\n            <br>\n            In Firefox, this can be set in Tools > Options > Content tab.\n            <br>\n            In Chrome, this can be set in Wrench Icon (\"Customize and Control Google Chrome\") > Options (Preferences on\n            Mac) > Under the Hood > Privacy section > Content Settings.\n            <br>\n            In Safari, this can be set in Preferences > Security.\n        </p>\n    </noscript>\n    <div class=\"container-fluid\">\n        <div class=\"uxpl_footer\">\n            <img src=\"assets/images/logo_footer.png\" />\n            <span>TIBCO Product Subhead Copyright @2014 TIBCO Software Inc All rights reserved.</span>\n        </div>\n    </div>\n</footer>\n");
$templateCache.put("app/header/templates/header.tpl.html","<header ng-controller=\"HeaderController\">\n    <div class=\"navbar\">\n        <div class=\"uxpl_header\">\n            <img src=\"assets/images/logo_header_placeholder.png\" />\n            <ul class=\"nav pull-right\" ng-controller=\"LoginController\">\n                <li class=\"btn-group\" dropdown ng-cloak is-open=\"oStatus.bLogoutOpen\" ng-show=\"bLoggedIn\">\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdown-toggle>\n                        Hello, {{oUser.username}}<span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n                        <li>\n                            <form class=\"uxpl_login_form\">\n                                <div>\n                                    <a ng-click=\"logout()\">Log Out</a>\n                                </div>\n                            </form>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"btn-group\" dropdown ng-cloak is-open=\"oStatus.bCreateOpen\" ng-hide=\"bLoggedIn\">\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdown-toggle\n                            translate=\"header.BUTTON_CREATE_A_NEW_ACCOUNT\"></button>\n                    <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n                        <li>\n                            <form class=\"uxpl_login_form\">\n                                <input type=\"text\" name=\"firstname\" placeholder=\"First name\">\n                                <input type=\"text\" name=\"lastname\" placeholder=\"Last name\">\n                                <input type=\"text\" name=\"email\" placeholder=\"Email\">\n                                <input type=\"text\" name=\"password\" placeholder=\"Password\">\n\n                                <div>\n                                    <a ng-click=\"\" translate=\"header.BUTTON_CREATE\"></a>\n                                </div>\n                            </form>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"btn-group\" dropdown ng-cloak is-open=\"oStatus.bLoginOpen\" ng-hide=\"bLoggedIn\">\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" dropdown-toggle\n                            translate=\"header.BUTTON_LOGIN\"></button>\n                    <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n                        <li>\n                            <form class=\"uxpl_login_form\" name=\"login-form\" ng-submit=\"login()\">\n                                <input type=\"text\" name=\"email\" placeholder=\"Email\" ng-model=\"oUser.username\"\n                                       tabindex=\"1\">\n                                <input type=\"password\" name=\"password\" placeholder=\"Password\"\n                                       ng-model=\"oUser.password\" tabindex=\"2\">\n\n                                <div ng-show=\"sStatusMessage\">\n                                    <span style=\"font-family: Open Sans Regular; font-size: 12px; color: #eb5448;\">{{sStatusMessage}}</span>\n                                </div>\n                                <div style=\"vertical-align: middle; box-sizing: border-box;\">\n                                    <a class=\"uxpl_login_a\" ng-click=\"login()\">Log In</a>\n                                    <input style=\"margin-bottom: 4px\" type=\"checkbox\" name=\"rememberme\" />\n                                    <label style=\"color: #a6a6a6; padding-top: 7px\">Remember me</label>\n                                </div>\n                                <div>\n                                    <a style=\"word-wrap: normal\" ng-click=\"\">Forgot password</a>\n                                </div>\n                                <input type=\"submit\"\n                                       style=\"position: absolute; left: -9999px; width: 1px; height: 1px;\" />\n                            </form>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</header>\n");
$templateCache.put("app/home/templates/home.tpl.html","<div class=\"banner\">\n    <img src=\"assets/images/banner.jpg\" />\n</div>");
$templateCache.put("app/members/templates/members-card.tpl.html","\r\n    <div class=\"col-md-12 list-box\" >\r\n        <div class=\"col-md-12 list-content\" ng-click=\"userCreateForm.$hide();\">\r\n            <img src=\"assets/images/ic_ProductReview_OpenAPI.png\" alt=\"membersPic\" class=\"pull-left\" />\r\n            <h2 ng-bind=\"member.username\"></h2>\r\n            <button type=\"button\" class=\"btn btn-default pull-right\" ng-click=\"deleteMember(member.id)\">Delete</button>\r\n        </div>\r\n    </div>\r\n");
$templateCache.put("app/members/templates/members-dialog.tpl.html","<div class=\"well\">\r\n<form editable-form name=\"editableForm\">\r\n   <div class=\"row\">\r\n       <div class=\"col-md-4 text-right\">\r\n           <span style=\"color:#f00;\">*</span><span>Username</span>\r\n       </div>\r\n       <div class=\"col-md-8\">\r\n          <span editable-text=\"memberDetail.username\" e-name=\"username\">{{memberDetail.username||\'empty\'}}</span>\r\n        </div>\r\n   </div>\r\n     <div class=\"row\">\r\n        <div class=\"col-md-4 text-right\">\r\n            <span style=\"color:#f00;\">*</span><span>Email</span>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <span editable-text=\"memberDetail.email\" e-name=\"email\">{{memberDetail.email||\'empty\'}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 text-right\">\r\n            <span style=\"color:#f00;\">*</span><span>First Name</span>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n        <span editable-text=\"memberDetail.firstName\" e-name=\"firstName\">{{memberDetail.firstName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 text-right\">\r\n            <span style=\"color:#f00;\">*</span><span>Last Name</span>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n             <span editable-text=\"memberDetail.lastName\" e-name=\"lastName\">{{memberDetail.lastName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 text-right\">\r\n            <span style=\"color:#f00;\">*</span><span>Telephone</span>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <span editable-text=\"memberDetail.telephone\">{{memberDetail.telephone}}</span>\r\n        </div>\r\n\r\n    </div>    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 text-right\">\r\n            <span style=\"color:#f00;\">*</span><span>Role</span>\r\n        </div>\r\n         <div class=\"col-md-8\">\r\n            <span editable-select=\"memberDetail.role\" e-name=\"role\" e-ng-options=\'role for role in roles\'>{{memberDetail.role}}</span>\r\n        </div>\r\n\r\n    </div>\r\n\r\n        <div class=\"buttons\">\r\n          <button type=\"button\" class=\"btn btn-default\" ng-click=\"editableForm.$show()\" ng-show=\"!editableForm.$visible\">\r\n            Edit\r\n          </button>\r\n          <span ng-show=\"editableForm.$visible\">\r\n            <button type=\"submit\" ng-click=\"editMember(memberDetail._id,editableForm.$data)\" class=\"btn btn-primary\" ng-disabled=\"editableForm.$waiting\">\r\n              Save\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"editableForm.$waiting\" ng-click=\"editableForm.$cancel()\">\r\n              Cancel\r\n            </button>\r\n          </span>\r\n        </div>\r\n</form>\r\n</div>");
$templateCache.put("app/members/templates/members-index.tpl.html","<div>\r\n<div class=\"row-fluid tool-bar\">\r\n    <div class=\"col-md-3\">\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"userCreateForm.$show()\" ng-show=\'!userCreateForm.$visible\'>Create New Members</button>\r\n        <span ng-show=\"userCreateForm.$visible\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"userCreateForm.$invalid\" ng-click=\"userCreateForm.$hide();saveMembers()\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"userCreateForm.$waiting\" ng-click=\"userCreateForm.$cancel()\">Cancel</button>\r\n        </span>\r\n    </div>\r\n    \r\n\r\n    <div class=\"col-md-3 col-md-offset-6\">\r\n        <input type=\"text\" class=\"pull-left search-input\" />\r\n        <div dropdown ng-cloak is-open=\"oStatus.bLogoutOpen\">\r\n            <a class=\"dropdown-toggle\" dropdown-toggle>\r\n                <span class=\"glyphicon glyphicon-stats\" style=\"color:#fff;\"></span>\r\n            </a>\r\n            </a>\r\n            <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" >Order By Time Create</a></li>\r\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" >Order By Time Modified</a></li>\r\n                <li role=\"presentation\"><a role=\"mneuitem\" tabindex=\"-1\" href=\"#\" >Title</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div>\r\n<form editable-form name=\"userCreateForm\" ng-show=\"userCreateForm.$visible\" class=\"edit\">\r\n  \r\n   <div class=\"row\">\r\n       <div class=\"col-md-4 text-right\">\r\n           <span style=\"color:#f00;\">*</span><span>Username</span>\r\n       </div>\r\n       <div class=\"col-md-8\">\r\n           <input type=\"text\" name=\"username\" placeholder=\"username\" ng-model=\"member.username\" required ng-minlength=3 />\r\n           <div class=\"error\" ng-show=\"userCreateForm.username.$dirty && userCreateForm.username.$invalid\">\r\n            <small class=\"error\" ng-show=\"userCreateForm.username.$error.required\">\r\n                Your name is required.\r\n            </small>\r\n            <small class=\"error\" \r\n                  ng-show=\"userCreateForm.username.$error.minlength\">\r\n                  Your name is required to be at least 3 characters\r\n            </small>          \r\n          </div>\r\n       </div>\r\n   </div>\r\n\r\n  <div class=\"row\">\r\n      <div class=\"col-md-4 text-right\">\r\n          <span style=\"color:#f00;\">*</span><span>Password</span>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n          <input type=\"password\" name=\"password\" ng-model=\"member.password\" required>\r\n          <div class=\"error\" ng-show=\"userCreateForm.password.$dirty && userCreateForm.password.$invalid\">\r\n            <small class=\"error\" ng-show=\"userCreateForm.password.$error.required\">\r\n                password is required.\r\n            </small>          \r\n          </div>           \r\n      </div>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div class=\"col-md-4 text-right\">\r\n          <span style=\"color:#f00;\">*</span><span>Confirm password</span>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n          <input type=\"password\" name=\"confirmPassword\" ng-model=\"member.confirmPassword\" ng-pattern=\"member.password\" required>\r\n          <div class=\"error\" ng-show=\"userCreateForm.confirmPassword.$dirty && userCreateForm.confirmPassword.$invalid\">\r\n            <small class=\"error\" ng-show=\"userCreateForm.confirmPassword.$error.required\">\r\n                Confirm password is required.\r\n            </small>\r\n            <small class=\"error\" \r\n                  ng-show=\"userCreateForm.confirmPassword.$error.pattern\">\r\n                  Confirm password should be compare with password.\r\n            </small>          \r\n          </div>          \r\n      </div>\r\n  </div>\r\n\r\n    <div class=\"row\">\r\n       <div class=\"col-md-4 text-right\">\r\n           <span style=\"color:#f00;\">*</span><span>Email</span>\r\n       </div>\r\n       <div class=\"col-md-8\">\r\n           <input type=\"email\" name=\"email\" placeholder=\"email\"  ng-model=\"member.email\" ng-maxlength=20 required/>\r\n          <div class=\"error\" \r\n                   ng-show=\"userCreateForm.email.$dirty && userCreateForm.email.$invalid\">\r\n              <small class=\"error\" \r\n                     ng-show=\"userCreateForm.email.$error.required\">\r\n                     Your email is required.\r\n              </small>\r\n              <small class=\"error\" \r\n                     ng-show=\"userCreateForm.email.$error.email\">\r\n                     That is not a valid email. Please input a valid email.\r\n              </small>\r\n              <small class=\"error\" \r\n                     ng-show=\"userCreateForm.email.$error.maxlength\">\r\n                      Your email cannot be longer than 20 characters\r\n              </small>\r\n          </div>           \r\n       </div>\r\n   </div>\r\n   <div class=\"row\">\r\n       <div class=\"col-md-4 text-right\">\r\n           <!-- <span style=\"color:#f00;\">*</span> --><span>First Name</span>\r\n       </div>\r\n       <div class=\"col-md-8\">\r\n           <input type=\"text\" name=\"firstname\" placeholder=\"firstname\"  ng-model=\"member.firstName\"/>\r\n       </div>\r\n   </div>\r\n   <div class=\"row\">\r\n       <div class=\"col-md-4 text-right\">\r\n           <!-- <span style=\"color:#f00;\">*</span> --><span>Last Name</span>\r\n       </div>\r\n       <div class=\"col-md-8\">\r\n           <input type=\"text\" name=\"lastname\" placeholder=\"lastname\"  ng-model=\"member.lastName\"/>\r\n       </div>\r\n   </div>\r\n   <div class=\"row\">\r\n       <div class=\"col-md-4 text-right\">\r\n           <span style=\"color:#f00;\">*</span><span>Telephone</span>\r\n       </div>\r\n       <div class=\"col-md-8\">\r\n            <input type=\"text\" placeholder=\"telephone\" name=\"telephone\"  ng-model=\"member.telephone\" required ng-pattern=\"phoneNumberRegex\"/>\r\n            <div class=\"error\" ng-show=\"userCreateForm.telephone.$dirty && userCreateForm.confirmPassword.$invalid\">\r\n              <small class=\"error\" ng-show=\"userCreateForm.telephone.$error.required\">\r\n                  Your telephone is required.\r\n              </small>\r\n              <small class=\"error\" \r\n                    ng-show=\"userCreateForm.telephone.$error.pattern\">\r\n                    Should be the format DDD-DDD-DDDD\r\n              </small>          \r\n            </div>            \r\n       </div>\r\n   </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 text-right\">\r\n            <!-- <span style=\"color:#f00;\">*</span> --><span>Member of organizations</span>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n          <multi-select    \r\n            input-model=\"organizations\"   \r\n            button-label=\"name\" \r\n            item-label=\"name\"\r\n            tick-property=\"ticked\"\r\n            output-model=\"member.organizations\"\r\n          >\r\n          </multi-select>\r\n<!--           <div class=\"error\" ng-show=\"member.organizations.length<1\">\r\n            <small class=\"error\">\r\n                organizations is required.\r\n            </small>         \r\n          </div>   -->         \r\n        </div>\r\n\r\n    </div>   \r\n<!--    <div class=\"row\">\r\n       <div class=\"col-md-4 text-right\">\r\n           <span style=\"color:#f00;\">*</span><span>Member of organizations</span>\r\n       </div>\r\n       <div class=\"col-md-8\">\r\n           <span ng-bind=\"promiseItem.name\"></span>\r\n       </div>\r\n   </div>\r\n   <input type=\"hidden\" ng-model=\"promiseItem._id\" ng-bind=\"promiseItem._id\">\r\n   <input type=\"hidden\" ng-model=\"promiseItem.type\" ng-bind=\"promiseItem.type\"> -->\r\n\r\n   <div class=\"row\">\r\n       <div class=\"col-md-4 text-right\">\r\n           <span>Role</span>\r\n       </div>\r\n       <!-- <pre>\r\n           PromiseItem._id = {{promiseItem._id}}\r\n           member.role = {{member.role.name}}\r\n       </pre> -->\r\n       \r\n       <div class=\"col-md-8\">\r\n           <select name=\"role\" ng-model=\"member.role\" ng-options=\"role for role in roles\" required>\r\n              <option value=\"\">- Select Element -</option>\r\n            </select>\r\n            <div class=\"error\" ng-show=\"userCreateForm.role.$dirty && userCreateForm.role.$invalid\">\r\n              <small class=\"error\" ng-show=\"userCreateForm.role.$error.required\">\r\n                  Role is required.\r\n              </small>         \r\n            </div>             \r\n       </div>\r\n   </div>\r\n</form>\r\n</div>\r\n<cards-layout\r\n    num-of-column=\'3\'\r\n    dialog-template-url= \'app/members/templates/members-dialog.tpl.html\'\r\n    card-template-url= \'app/members/templates/members-card.tpl.html\'\r\n    padding-right= \'5px\'\r\n    padding-left=\'15px\'\r\n    apix-data=\'getData()\'\r\n    apix-data-repeat=\'member in members\'\r\n    onCardClick=\'click_card($index)\'\r\n    onCardSystemInitialEnd=\'init_end(card)\'>\r\n    <div>\r\n<!--         <button ng-click=\'card.trigger(\"deleteCards\",[0])\'>Delete</button>\r\n        <button ng-click=\'card.trigger(\"create\")\'>Create</button> -->\r\n    </div>\r\n                  \r\n</cards-layout>\r\n</div>\r\n");
$templateCache.put("app/organizations/templates/form.tpl.html","");
$templateCache.put("app/organizations/templates/item.tpl.html","<h3 ng-bind=\"item.name\"></h3>\n<div class=\"col-xs-12 org-toolbar\">\n  <button class=\"btn btn-primary\" type=\"button\" ng-bind=\"\'RE_SYNC\' | translate\"></button>\n  <button class=\"btn btn-primary\" type=\"button\" ng-bind=\"\'SHOW_STATISTICS\' | translate\"></button>\n  <div class=\"btn-group pull-right\">\n    <button type=\"button\" class=\"glyphicon glyphicon-cog pull-right\" data-toggle=\"dropdown\" style=\"width: 30px;\"></button>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n      <li>\n        <a href=\"\"> <i class=\"glyphicon glyphicon-pencil\"></i>\n          <span ng-bind-html=\"\'EDIT\' | translate\"></span>\n        </a>\n      </li>\n      <li>\n        <a href=\"\"> <i class=\"glyphicon glyphicon-file\"></i>\n          <span ng-bind-html=\"\'AUDIT_LOG\' | translate\"></span>\n        </a>\n      </li>\n      <li>\n        <a href=\"\">\n          <i class=\"glyphicon glyphicon-pushpin\"></i>\n          <span ng-bind-html=\"\'SET_MODERATOR\' | translate\"></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"row-fluid accordion\" style=\"margin-bottom: 15px;\">\n  <div class=\"col-xs-8\" style=\"padding-left: 0; margin-bottom: 15px;\">\n    <div class=\"org-cnt\" id=\"accordion-622356\">\n       <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion-622356\" href=\"#accordion-element-123149\">\n        <h3 accordion>\n          <i class=\"glyphicon glyphicon-chevron-down\"></i>\n          <span ng-bind=\"\'APPLICATIONS\' | translate\"></span>\n        </h3>\n      </a>\n      <div class=\"row-fluid accordion-body collapse in\" id=\"accordion-element-123149\" >\n          <table  class=\"table table-hover accordion-inner\" ng-controller=\"ApplicationItemCtrl\">\n            <thead>\n              <tr>\n                <th ng-bind=\"\'APPLICATIONS\' | translate\"></th>\n                <th ng-bind=\"\'PRODUCTS\' | translate\"></th>\n                <th ng-bind=\"\'PLANS\' | translate\"></th>\n                <th ng-bind=\"\'USAGE\' | translate\"></th>\n              </tr>\n            </thead>\n            <tbody>\n\n              <tr ng-repeat=\"appProductItem in item.products\">\n                <td ng-bind=\"item.name\"></td>\n                <td ng-bind=\"appProductItem.name\"></td>\n                <td>\n                  <span  ng-bind=\"appProductItem.subscription.plan.quotaLimit\"></span>\n                  <span ng-bind-html=\"\'PER_DAY\' | translate\"></span>\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%;\">\n                     \n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n            </tbody>\n          </table>\n    </div>\n    </div>\n\n    <div class=\"org-cnt accordion\" id=\"accordion-535179\">\n\n       <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion-535179\" href=\"#accordion-element-243622\">\n        <h3 class=\"accordion-heading\">\n          <i class=\"glyphicon glyphicon-chevron-down\"></i>\n          <span ng-bind=\"\'SUBSCRIPTIONS\' | translate\"></span>\n        </h3>\n      </a>\n      <div class=\"row-fluid accordion-body collapse in\" id=\"accordion-element-243622\" >\n          <table  class=\"table accordion-inner\">\n            <thead>\n              <tr>\n                <th ng-bind=\"\'SUBSCRIPTIONS\' | translate\"></th>\n                <th ng-bind=\"\'SUBSCRIPTION_PERIOD\' | translate\"></th>\n                <th ng-bind=\"\'PLANS\' | translate\"></th>\n                <th ng-bind=\"\'USAGE\' | translate\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr ng-repeat=\"orgSubscription in item.subscriptions\">\n                <td style=\"max-width:120px;\">\n                  <a href=\"#!/subscriptions/item/{{subscription.id}}\" ng-bind=\"orgSubscription.name\"></a>\n                </td>\n                <td style=\"max-width:120px;\">\n                  <span ng-bind-html=\"\'FROM\' | translate\"></span>\n                  <span ng-bind=\"orgSubscription.start\"></span>\n                  <br>\n                 <span ng-bind-html=\"\'TO\' | translate\"></span>\n                  &nbsp;&nbsp;&nbsp;&nbsp;<span ng-bind=\"orgSubscription.end\"></span>\n                </td>\n                <td>\n                  <span ng-bind=\"orgSubscription.plan.name\" class=\"org-plan\"></span>\n                  &nbsp;&nbsp;&nbsp;&nbsp;<span ng-bind=\"orgSubscription.plan.quotaLimit\"></span>\n                 <span ng-bind-html=\"\'PER_DAY\' | translate\"></span>\n                  <br>\n                   &nbsp;&nbsp;&nbsp;&nbsp;<span ng-bind=\"orgSubscription.plan.rateLimit\"></span>\n                 <span ng-bind-html=\"\'PER_SECOND\' | translate\"></span>\n                </td>\n                <td>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 10%;\">\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n    </div>\n      <div class=\"clearfix\"></div>\n        <button class=\"btn btn-primary\" type=\"button\">\n          <span ng-bind-html=\"\'NEW_SUBSCRIPTION\' | translate\"></span>\n          <i class=\"glyphicon glyphicon-play\"></i>\n        </button>\n      </div>\n  </div>\n  <div class=\"col-xs-4 org-cnt accordion\" id=\"accordion-764209\">\n\n    <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion-764209\" href=\"#accordion-element-581596\">\n      <h3 class=\"accordion-heading\">\n        <i class=\"glyphicon glyphicon-chevron-down\"></i>\n        <span ng-bind=\"\'ALERTS\' | translate\"></span>\n      </h3>\n    </a>\n\n    <div  id=\"accordion-element-581596\" class=\"alert-cnt accordion-body collapse in\" style=\"padding: 10px;\">\n      <p ng-bind=\"item.alerts.description\"></p>\n      <span ng-bind=\"item.alerts.time\" class=\"org-text-info\"></span>\n    </div>\n  </div>\n\n\n<div class=\"clearfix\"></div>\n\n<div class=\"row-fluid accordion\" id=\"accordion-893102\">\n  <div class=\"col-xs-12 org-cnt\">\n    <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion-893102\" href=\"#accordion-element-730058\">\n      <h3 class=\"accordion-heading\">\n        <i class=\"glyphicon glyphicon-chevron-down\"></i>\n         <span ng-bind=\"\'MEMBERS\' | translate\"></span>\n      </h3>\n    </a>\n    <div class=\"row-fluid accordion-body collapse in\" id=\"accordion-element-730058\" >\n      <div class=\"col-xs-8 accordion-inner\">\n        <table class=\"table \">\n          <thead>\n            <tr>\n              <th ng-bind=\"\'NAME\' | translate\"></th>\n              <th ng-bind=\"\'EMAIL\' | translate\"></th>\n              <th ng-bind=\"\'ROLE\' | translate\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr ng-repeat=\"orgMember in item.members\">\n              <td>\n                <span ng-bind=\"orgMember.username\"></span>\n              </td>\n              <td>\n                <span ng-bind=\"orgMember.email\"></span>\n              </td>\n              <td>\n                <span ng-bind=\"orgMember.role\"></span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n      <div class=\"col-xs-4\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th ng-bind=\"\'CONTACT\' | translate\"></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td class=\"org-contact\">\n                <span ng-bind=\"item.contact.username\"></span>\n                <br>\n                <span ng-bind=\"item.contact.email\"></span>\n                <br>\n                <span ng-bind=\"item.contactDetails.address.address1\"></span>\n                <br>\n                <span ng-bind=\"item.contactDetails.telephone\"></span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <button class=\"btn btn-primary\" type=\"button\">\n   <span ng-bind-html=\"\'NEW_MEMBER\' | translate\"></span>\n    <i class=\"glyphicon glyphicon-play\"></i>\n  </button>\n</div>\n\n");
$templateCache.put("app/organizations/templates/list.tpl.html","<div class=\"row-fluid tool-bar\">\n    <div class=\"col-md-3\">\n        <button class=\"btn btn-primary\" >Create New Organization</button>\n    </div>\n    <div class=\"col-md-3 col-md-offset-6\">\n        <input type=\"text\" class=\"pull-left search-input\" />\n        <div class=\"dropdown pull-left\">\n            <a id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"/page.html\">\n            <span class=\"glyphicon glyphicon-stats\" style=\"color:#fff;\"></span>\n            </a>\n            <ul id=\"menu1\" class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"drop4\">\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" ng-bind=\"\'ORDER_BY_TIME_CREATED\' | translate\"></a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" ng-bind=\"\'ORDER_BY_TIME_MODIFIED\' | translate\"></a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" ng-bind=\"\'TITLE\' | translate\"></a></li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"env-list row\" >\n        <div class=\"col-md-4 list-box\" ng-repeat=\"organization in organizations\">\n            <div class=\"col-md-12 env-profile\" ng-click=\"openConfirm()\">\n                <h2 ng-bind=\"organization.name\"></h2>\n                <div class=\"profile-content\">\n                    <div class=\"col-md-12\">\n                        <div class=\"col-md-3\">Email:</div>\n                        <div class=\"col-md-9\">\n                            <a href=\"\" ng-bind=\"organization.email\"></a>\n                            <button class=\"btn btn-primary\">Send email online<i class=\"glyphicon glyphicon-play\"></i></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<script type=\"text/ng-template\" id=\"organizationDialog\">\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"page-header\"><h1 ng-bind=\"promiseItem.name\"></h1></div>\n    </div>\n    <div class=\"row-fluid tool-bar\">\n        <div class=\"col-md-4\">\n            <button class=\"btn btn-primary\" >Re-Sync</button>\n            <button class=\"btn btn-primary\" >Show Statistics</button>\n        </div>\n        <div class=\"col-md-1 col-md-offset-7\">\n            <div class=\"dropdown pull-left\">\n                <a id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" href=\"/page.html\">\n                <span class=\"glyphicon glyphicon-stats\" style=\"color:#fff;\"></span>\n                </a>\n                <ul id=\"menu1\" class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"drop4\">\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" ng-bind=\"\'ORDER_BY_TIME_CREATED\' | translate\"></a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" ng-bind=\"\'ORDER_BY_TIME_MODIFIED\' | translate\"></a></li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" ng-bind=\"\'TITLE\' | translate\"></a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <form editable-form name=\"tableform\" onaftersave=\"saveTable()\" oncancel=\"cancel()\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <h3 class=\"org-title\"><i class=\"glyphicon glyphicon-chevron-down\"></i>Application</h3>\n                <table  class=\"table table-bordered table-hover table-condensed\" ng-controller=\"ApplicationListCtrl\">\n                    <thead>\n                        <tr>\n                            <th style=\"width:20%;\">Applications</th>\n                            <th style=\"width:20%;\">Products</th>\n                            <th style=\"width:40%;\">Plans</th>\n                            <th style=\"width:30%;\">Usage</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr ng-repeat=\"appProductItem in promiseItem.products\">\n                            <td ><span editable-text=\"promiseItem.name\" ng-bind=\"promiseItem.name\"></span></td>\n                            <td editable-text=\"appProductItem.name\" ng-bind=\"appProductItem.name\"></td>\n                            <td>\n                                <span editable-text=\"appProductItem.subscription.plan.quotaLimit\"  ng-bind=\"appProductItem.subscription.plan.quotaLimit\"></span>\n                                <span>/day</span>\n                            </td>\n                            <td>\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%;\">\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h3 class=\"org-title\"><i class=\"glyphicon glyphicon-chevron-down\"></i>Subscriptions</h3>\n                <table  class=\"table table-bordered table-hover table-condensed\">\n                    <thead>\n\n                        <tr>\n\n                            <th style=\"width:20%;\">Subscriptions</th>\n                            <th style=\"width:30%;\">Subscription period</th>\n                            <th style=\"width:30%;\">Plans</th>\n                            <th style=\"width:20%;\">Usage</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr ng-repeat=\"orgSubscription in promiseItem.subscriptions\">\n                            <td class=\"col-md-3\">\n                                <span editable-text=\"orgSubscription.name\"  ng-bind=\"orgSubscription.name\"></span>\n                            </td>\n                            <td class=\"col-md-3\">\n                                <span>From</span>\n                                <span editable-text=\"orgSubscription.start\" ng-bind=\"orgSubscription.start\"></span>\n                                <br>\n                                <span ng-bind-html=\"\'TO\' | translate\">To</span>\n                                &nbsp;&nbsp;&nbsp;&nbsp;<span editable-text=\"orgSubscription.end\" ng-bind=\"orgSubscription.end\"></span>\n                            </td>\n                            <td class=\"col-md-3\">\n                                <span ng-bind=\"orgSubscription.plan.name\" class=\"org-plan\"></span>\n                                &nbsp;&nbsp;&nbsp;&nbsp;<span editable-text=\"orgSubscription.plan.quotaLimit\" ng-bind=\"orgSubscription.plan.quotaLimit\"></span>\n                                <span>/day</span>\n                                <br>\n                                &nbsp;&nbsp;&nbsp;&nbsp;<span editable-text=\"orgSubscription.plan.rateLimit\" ng-bind=\"orgSubscription.plan.rateLimit\"></span>\n                                <span>/s</span>\n                            </td>\n                            <td class=\"col-md-3\">\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 10%;\">\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr><td colspan=\"4\"> <button class=\"btn btn-primary\" type=\"button\">\n                            <span>New Subscription</span>\n                            <i class=\"glyphicon glyphicon-play\"></i>\n                        </button></td></tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"col-md-4\">\n                 <h3 class=\"org-title\"><i class=\"glyphicon glyphicon-chevron-down\"></i>Alerts</h3>\n                <p ng-bind=\"promiseItem.alerts.description\"></p>\n                <span ng-bind=\"promiseItem.alerts.time\" class=\"org-text-info\"></span>\n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div classdiv=\"row\">\n            <div class=\"col-md-8\">\n                <h3 class=\"org-title\"><i class=\"glyphicon glyphicon-chevron-down\"></i>Members</h3>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <thead>\n                        <tr>\n                            <th >Name</th>\n                            <th>Email</th>\n                            <th>Role</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr ng-repeat=\"orgMember in promiseItem.members\">\n                            <td>\n                                <span editable-text=\"orgMember.username\" ng-bind=\"orgMember.username\"></span>\n                            </td>\n                            <td>\n                                <span editable-text=\"orgMember.email\" ng-bind=\"orgMember.email\"></span>\n                            </td>\n                            <td>\n                                <span editable-text=\"orgMember.role\" ng-bind=\"orgMember.role\"></span>\n                            </td>\n                        </tr>\n                        <tr><td colspan=\"3\"> <button class=\"btn btn-primary\" type=\"button\">\n                            <span>New Member</span>\n                            <i class=\"glyphicon glyphicon-play\"></i>\n                        </button></td></tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"col-md-4\">\n                <table class=\"table  table-condensed\">\n                    <thead>\n                        <tr>\n                            <th>Contact</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td class=\"org-contact\">\n                                <span  editable-text=\"promiseItem.contact.username\"  ng-bind=\"promiseItem.contact.username\"></span>\n                                <br>\n                                <span  editable-text=\"promiseItem.contact.email\"  ng-bind=\"promiseItem.contact.email\"></span>\n                                <br>\n                                <span  editable-text=\"promiseItem.contactDetails.address.address1\"  ng-bind=\"promiseItem.contactDetails.address.address1\"></span>\n                                <br>\n                                <span  editable-text=\"promiseItem.contactDetails.telephone\" ng-bind=\"promiseItem.contactDetails.telephone\"></span>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-2 col-md-offset-10\">\n                <button  type=\"button\" class=\"btn btn-default\" ng-click=\"tableform.$show()\" ng-show=\'!tableform.$visible\'>Edit</button>\n                <span ng-show=\"tableform.$visible\">\n                <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"tableform.$waiting\">Save</button>\n                <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"tableform.$waiting\" ng-click=\"tableform.$cancel()\">Cancel</button>\n                </span>\n            </div>\n        </div>\n    </form>\n</div>\n</script>");
$templateCache.put("app/organizations/templates/organizations-cards.tpl.html","<div class=\"col-md-12 list-box\" >\r\n    <div class=\"col-md-12 list-content\" ng-click=\"orgCreateForm.$hide();\">\r\n        <img src=\"assets/images/ic_ProductReview_OpenAPI.png\" alt=\"orgnizationPic\" class=\"pull-left\" />\r\n        <h2 ng-bind=\"organization.name\" class=\"pull-left\"></h2>\r\n        <button type=\"button\" class=\"btn btn-default pull-right\" ng-click=\"fDeleteOrganization(organization._id)\" style=\"margin-top: 55px;\">Delete</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n");
$templateCache.put("app/organizations/templates/organizations-dialog.tpl.html","<!-- organization dialog S -->\r\n<div type=\"text/ng-template\" id=\"organizationDialog\" ng-controller=\"OrganizationsController\"> \r\n<div class=\"container-fluid dialogContent\">\r\n    <div class=\"row\">\r\n        <div class=\"page-header\"><h1 ng-bind=\"promiseItem.name\"></h1></div>\r\n    </div>\r\n    <div class=\"row-fluid tool-bar\">\r\n        <div class=\"col-md-4\">\r\n            <button class=\"btn btn-primary\" >Re-Sync</button>\r\n            <button class=\"btn btn-primary\" >Show Statistics</button>\r\n        </div>\r\n        <div class=\"col-md-3 col-md-offset-5\">\r\n            <button type=\"button\" class=\"btn btn-default\" ng-click=\"orgEditableForm.$show()\" ng-show=\'!orgEditableForm.$visible\'>Edit</button>\r\n            <span ng-show=\"orgEditableForm.$visible\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"orgEditableForm.$waiting\" ng-click=\"fOrganizationsUpdate(); orgEditableForm.$hide(); \">Save</button>\r\n            <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"orgEditableForm.$waiting\" ng-click=\"orgEditableForm.$cancel()\">Cancel</button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <!-- edit organization form S -->\r\n    <form editable-form name=\"orgEditableForm\" ng-show=\"orgEditableForm.$visible\" onaftersave=\"saveOrganization()\">\r\n        <div class=\"row\">\r\n            <span class=\"col-md-4 text-right\"><strong>Enviroments</strong></span>\r\n            <span class=\"col-md-6 alert1\" name=\"alert\">\r\n            You cannot edit this field\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <span class=\"col-md-4 text-right\"><strong>Description</strong></span>\r\n            <div class=\"col-md-8\">\r\n                <textarea class=\"col-md-8\" row=\"10\" ng-model=\"promiseItem.description\" >\r\n                    {{promiseItem.description}}\r\n                </textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <span class=\"col-md-4 text-right\"><strong>Organization Type</strong></span>\r\n            <div class=\"col-md-8\">\r\n                <select ng-options = \"orgType for orgType in orgTypes\" ng-model=\"promiseItem.type\">\r\n                    <option value=\"\">- Select Element -</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <span class=\"col-md-4 text-right\"><strong>Usage alert threshold</strong></span>\r\n            <div class=\"col-md-8\">\r\n                <input type=\"text\" ng-model=\"promiseItem.threshold.value\" value=\"{{promiseItem.threshold.value}}\" name=\"usage\" ></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <span class=\"col-md-4 text-right\"><strong>Contact details</strong></span>\r\n            <span class=\"col-md-8\">\r\n            <h5>Address</h5>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <small>Country</small><br/>\r\n                    <select name=\"country\" ng-options=\"country for country in countries\" ng-model=\"promiseItem.contactDetails.address.country\">>\r\n                        <option value=\"\">- Select Country -</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <small>State</small><br/>\r\n                    <input type=\"text\" name=\"state\" ng-model=\"promiseItem.contactDetails.address.state\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <small>City</small><br/>\r\n                    <input type=\"text\" name=\"city\" ng-model=\"promiseItem.contactDetails.address.city\" />\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <small>Zip</small><br/>\r\n                    <input type=\"text\" name=\"zip\" ng-model=\"promiseItem.contactDetails.address.zip\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <small>Address1</small><br/>\r\n                    <input type=\"text\" name=\"address1\" ng-model=\"promiseItem.contactDetails.address.address1\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <small>Address2</small><br/>\r\n                    <input type=\"text\" name=\"address2\" ng-model=\"promiseItem.contactDetails.address.address2\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <small>Instant Contacts</small><br/>\r\n                    Telephone\r\n                     <input type=\"text\" name=\"telephone\" ng-model=\"promiseItem.contactDetails.telephone\" />\r\n                </div>\r\n            </div>\r\n            </span>\r\n        </div>\r\n    </form>\r\n    <!-- edit organization form E -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <h3 class=\"org-title\">Application</h3>\r\n            <table  class=\"table table-bordered table-hover table-condensed\">\r\n                <thead>\r\n                    <tr>\r\n                        <th style=\"width:20%;\">Applications</th>\r\n                        <th style=\"width:20%;\">Products</th>\r\n                        <th style=\"width:40%;\">Plans</th>\r\n                        <th style=\"width:30%;\">Usage</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr >\r\n                        <td>1</td>\r\n                        <td>2</td>\r\n                        <td>3</td>\r\n                        <td>\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%;\">\r\n                                </div>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <h3 class=\"org-title\">Subscriptions</h3>\r\n            <table  class=\"table table-bordered table-hover table-condensed\">\r\n                <thead>\r\n                    <tr>\r\n                        <th style=\"width:20%;\">Subscriptions</th>\r\n                        <th style=\"width:30%;\">Subscription period</th>\r\n                        <th style=\"width:30%;\">Plans</th>\r\n                        <th style=\"width:20%;\">Usage</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr ng-repeat=\"orgSubscription in promiseItem.subscriptions\">\r\n                        <td class=\"col-md-3\">\r\n                            <span ng-bind=\"orgSubscription.name\"></span>\r\n                        </td>\r\n                        <td class=\"col-md-3\">\r\n                            <span>From</span>\r\n                            <span ng-bind=\"orgSubscription.start\"></span>\r\n                            <br>\r\n                            <span ng-bind-html=\"\'TO\' | translate\">To</span>\r\n                            &nbsp;&nbsp;&nbsp;&nbsp;<span ng-bind=\"orgSubscription.end\"></span>\r\n                        </td>\r\n                        <td class=\"col-md-3\">\r\n                            <span ng-bind=\"orgSubscription.plan.name\" class=\"org-plan\"></span>\r\n                            &nbsp;&nbsp;&nbsp;&nbsp;<span ng-bind=\"orgSubscription.plan.quotaLimit\"></span>\r\n                            <span>/day</span>\r\n                            <br>\r\n                            &nbsp;&nbsp;&nbsp;&nbsp;<span ng-bind=\"orgSubscription.plan.rateLimit\"></span>\r\n                            <span>/s</span>\r\n                        </td>\r\n                        <td class=\"col-md-3\">\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 10%;\">\r\n                                </div>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"4\">\r\n                            <button class=\"btn btn-primary pull-left\" type=\"button\" ng-click=\"subEditableForm.$show()\" ng-show=\'!subEditableForm.$visible\'>\r\n                            <span>New Subscription</span>\r\n                            </button>\r\n                            <span ng-show=\"subEditableForm.$visible\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"subEditableForm.$waiting\">Save</button>\r\n                            <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"subEditableForm.$waiting\" ng-click=\"subEditableForm.$cancel()\">Cancel</button>\r\n                            </span>\r\n                            <!-- edit subscription form S -->\r\n                            <form editable-form name=\"subEditableForm\" ng-show=\"subEditableForm.$visible\">\r\n                                <h2>Create New Subscription</h2>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4 text-right\">\r\n                                        <span>Description</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <textarea name=\"subDescription\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4 text-right\">\r\n                                        <span>*</span><span>Product</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <span>Book Catalog</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4 text-right\">\r\n                                        <span style=\"color:#f00;\">*</span><span>Plan</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <select name=\"Plan\">\r\n                                            <option value=\"\">- Select Element -</option>\r\n                                            <option value=\"gold\">Gold</option>\r\n                                            <option value=\"silver\">Silver</option>\r\n                                            <option value=\"Community\">community</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4 text-right\">\r\n                                        <span style=\"color:#f00;\">*</span><span>Start date</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <p class=\"input-group\">\r\n                                          <input type=\"text\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"dt\" is-open=\"opened\" min-date=\"minDate\" max-date=\"\'2015-06-22\'\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\" />\r\n                                          <span class=\"input-group-btn\">\r\n                                            <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r\n                                          </span>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4 text-right\">\r\n                                        <span style=\"color:#f00;\">*</span><span>End date</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <p class=\"input-group\">\r\n                                          <input type=\"text\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"dt\" is-open=\"opened\" min-date=\"minDate\" max-date=\"\'2015-06-22\'\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\" />\r\n                                          <span class=\"input-group-btn\">\r\n                                            <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r\n                                          </span>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4 text-right\">\r\n                                        <span style=\"color:#f00;\">*</span><span>Subscribging organization</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <span xeditable-text=\"promiseItem.name\" e-name=\"subName\" ng-bind=\"promiseItem.name\"></span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4 text-right\">\r\n                                        <span style=\"color:#f00;\">*</span><span>Status</span>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"col-md-3\"><input type=\"radio\" name=\"status\" value=\"active\" checked> Active</div>\r\n                                        <div class=\"col-md-9\"><input type=\"radio\" name=\"status\" value=\"inactive\"> Inactive</div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                            <!-- edit subscription form E -->\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <h3 class=\"org-title\">Alerts</h3>\r\n            <p ng-bind=\"promiseItem.alerts.description\"></p>\r\n            <span ng-bind=\"promiseItem.alerts.time\" class=\"org-text-info\"></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n             <h3 class=\"org-title\"><a href=\"members?org_id={{promiseItem._id}}\" ng-click=\"closeThisDialog(\'Cancel\')\">Members</a></h3>\r\n            <table class=\"table table-bordered table-hover table-condensed\">\r\n                <thead>\r\n                    <tr>\r\n                        <th >Name</th>\r\n                        <th>Email</th>\r\n                        <th>Role</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr ng-repeat=\"orgMember in promiseItem.members\">\r\n                        <td>\r\n                            <span ng-bind=\"orgMember.username\"></span>\r\n                        </td>\r\n                        <td>\r\n                            <span ng-bind=\"orgMember.email\"></span>\r\n                        </td>\r\n                        <td>\r\n                            <span ng-bind=\"orgMember.organizations[0].role\"></span>\r\n                        </td>\r\n                    </tr>\r\n                   <tr>\r\n                       <td colspan=\"3\">\r\n                           <button class=\"btn btn-primary pull-left\" type=\"button\" ng-click=\"memEditableForm.$show()\" ng-show=\'!memEditableForm.$visible\'>\r\n                           <span>New Member</span>\r\n                           </button>\r\n                           <span ng-show=\"memEditableForm.$visible\">\r\n                           <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"memEditableForm.$waiting\" ng-click=\"fMembersCreate(); memEditableForm.$hide();\">Save</button>\r\n                           <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"memEditableForm.$waiting\" ng-click=\"memEditableForm.$cancel()\">Cancel</button>\r\n                           </span>\r\n                          <!--  create member form S -->\r\n                           <form editable-form name=\"memEditableForm\" ng-show=\"memEditableForm.$visible\" onaftersave=\"saveMember()\">\r\n                              \r\n                               <div class=\"row\">\r\n                                   <div class=\"col-md-4 text-right\">\r\n                                       <span style=\"color:#f00;\">*</span><span>Username</span>\r\n                                   </div>\r\n                                   <div class=\"col-md-8\">\r\n                                       <input type=\"text\" name=\"username\" placeholder=\"username\" ng-model=\"newMember.username\" >\r\n                                   </div>\r\n                               </div>\r\n                   \r\n                              <div class=\"row\">\r\n                                  <div class=\"col-md-4 text-right\">\r\n                                      <span style=\"color:#f00;\">*</span><span>Password</span>\r\n                                  </div>\r\n                                  <div class=\"col-md-8\">\r\n                                      <input type=\"password\" name=\"password\" ng-model=\"newMember.password\" >\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-md-4 text-right\">\r\n                                      <span style=\"color:#f00;\">*</span><span>Confirm password</span>\r\n                                  </div>\r\n                                  <div class=\"col-md-8\">\r\n                                      <input type=\"password\" name=\"confirmPassword\" ng-model=\"newMember.confirmPassword\">\r\n                                  </div>\r\n                              </div>\r\n\r\n                                <div class=\"row\">\r\n                                   <div class=\"col-md-4 text-right\">\r\n                                       <span style=\"color:#f00;\">*</span><span>Email</span>\r\n                                   </div>\r\n                                   <div class=\"col-md-8\">\r\n                                       <input type=\"email\" name=\"email\" placeholder=\"email\"  ng-model=\"newMember.email\">\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"row\">\r\n                                   <div class=\"col-md-4 text-right\">\r\n                                       <span style=\"color:#f00;\">*</span><span>First Name</span>\r\n                                   </div>\r\n                                   <div class=\"col-md-8\">\r\n                                       <input type=\"text\" name=\"firstname\" placeholder=\"firstname\"  ng-model=\"newMember.firstName\">\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"row\">\r\n                                   <div class=\"col-md-4 text-right\">\r\n                                       <span style=\"color:#f00;\">*</span><span>Last Name</span>\r\n                                   </div>\r\n                                   <div class=\"col-md-8\">\r\n                                       <input type=\"text\" name=\"lastname\" placeholder=\"lastname\"  ng-model=\"newMember.lastName\">\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"row\">\r\n                                   <div class=\"col-md-4 text-right\">\r\n                                       <span style=\"color:#f00;\">*</span><span>Telephone</span>\r\n                                   </div>\r\n                                   <div class=\"col-md-8\">\r\n                                       <input type=\"text\" placeholder=\"telephone\" name=\"telephone\"  ng-model=\"newMember.telephone\">\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"row\">\r\n                                   <div class=\"col-md-4 text-right\">\r\n                                       <span style=\"color:#f00;\">*</span><span>Member of organizations</span>\r\n                                   </div>\r\n                                   <div class=\"col-md-8\">\r\n                                       <span ng-bind=\"promiseItem.name\"></span>\r\n                                   </div>\r\n                               </div>\r\n                               <div class=\"row\">\r\n                                   <div class=\"col-md-4 text-right\">\r\n                                       <span>Role</span>\r\n                                   </div>\r\n                                   <div class=\"col-md-8\">\r\n                                       <select ng-model=\"newMember.organizations.role\" ng-options=\"role for role in roles\">\r\n                                          <option value=\"\">- Select Element -</option>\r\n                                        </select>\r\n                                   </div>\r\n                               </div>\r\n                           </form>\r\n                          <!--  create member form E -->\r\n                       </td>\r\n                   </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <table class=\"table  table-condensed\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Contact</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td class=\"org-contact\">\r\n                            <span  ng-bind=\"promiseItem.contact.username\"></span>\r\n                            <br>\r\n                            <span ng-bind=\"promiseItem.contact.email\"></span>\r\n                            <br>\r\n                            <span ng-bind=\"promiseItem.contactDetails.address.address1\"></span>\r\n                            <br>\r\n                            <span ng-bind=\"promiseItem.contactDetails.telephone\"></span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n<!-- organization dialog S -->\r\n\r\n\r\n");
$templateCache.put("app/organizations/templates/organizations-index.tpl.html","<!-- organization toolbar S -->\r\n<div class=\"row-fluid tool-bar\">\r\n    <div class=\"col-md-3\">\r\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"orgCreateForm.$show()\" ng-show=\'!orgCreateForm.$visible\'>Create New Organization</button>\r\n        <span ng-show=\"orgCreateForm.$visible\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"orgCreateForm.$waiting\" ng-click=\"fOrganizationsCreate(); orgCreateForm.$hide();\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-default\" ng-disabled=\"orgCreateForm.$waiting\" ng-click=\"orgCreateForm.$cancel()\">Cancel</button>\r\n        </span>\r\n    </div>\r\n    \r\n\r\n    <div class=\"col-md-3 col-md-offset-6\">\r\n        <input type=\"text\" class=\"pull-left search-input\" />\r\n        <div dropdown ng-cloak is-open=\"oStatus.bLogoutOpen\">\r\n            <a class=\"dropdown-toggle\" dropdown-toggle>\r\n                <span class=\"glyphicon glyphicon-stats\" style=\"color:#fff;\"></span>\r\n            </a>\r\n            </a>\r\n            <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" >Order By Time Create</a></li>\r\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\" >Order By Time Modified</a></li>\r\n                <li role=\"presentation\"><a role=\"mneuitem\" tabindex=\"-1\" href=\"#\" >Title</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- create organization form S -->\r\n    <div class=\"clearfix\"></div>\r\n    <form editable-form name=\"orgCreateForm\" ng-show=\"orgCreateForm.$visible\" onaftersave=\"saveOrganization()\" class=\"edit\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2 col-md-offset-2 text-left\"><span style=\"color: #f00;\">*</span><strong>Title</strong></div>\r\n            <div class=\"col-md-8\">\r\n                <input type=\"text\" ng-model=\"organization.name\" required />\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <span class=\"col-md-2 col-md-offset-2 text-left\"><strong>Enviroments</strong></span>\r\n            <span class=\"col-md-6 alert1\" name=\"alert\">\r\n            You cannot submit this field\r\n            </span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <span class=\"col-md-2 col-md-offset-2 text-left\"><strong>Description</strong></span>\r\n            <div class=\"col-md-8\">\r\n                <textarea class=\"col-md-8\" row=\"10\" ng-model=\"organization.description\">\r\n                </textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2 col-md-offset-2 text-left\"><span style=\"color: #f00;\">*</span><strong>Organization Type</strong></div>\r\n            <div class=\"col-md-8\">\r\n                <select ng-options = \"orgType for orgType in orgTypes\" ng-model=\"organization.type\">\r\n                    <option value=\"\">- Select Element -</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2 col-md-offset-2 text-left\"><span style=\"color: #f00;\">*</span><strong>Email</strong></div>\r\n            <div class=\"col-md-8\">\r\n                <input type=\"email\" ng-model=\"organization.createdBy.email\" required>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <span class=\"col-md-2 col-md-offset-2 text-left\"><strong>Usage alert threshold</strong></span>\r\n            <div class=\"col-md-8\">\r\n                <input  type=\"text\" ng-model=\"organization.threshold.value\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <span class=\"col-md-2 col-md-offset-2 text-left\"><strong>Contact details</strong></span>\r\n            <span class=\"col-md-8\">\r\n            <h5>Address</h5>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <small>Country</small><br/>\r\n                    <select name=\"country\" ng-options=\"country for country in countries\" ng-model=\"organization.contactDetails.address.country\">\r\n                        <option value=\"\">- Select Country -</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <small>State</small><br/>\r\n                    <input type=\"text\" name=\"state\" ng-model=\"organization.contactDetails.address.state\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <small>City</small><br/>\r\n                    <input type=\"text\" name=\"city\" ng-model=\"organization.contactDetails.address.city\" />\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <small>Zip</small><br/>\r\n                    <input type=\"text\" name=\"zip\" ng-model=\"organization.contactDetails.address.zip\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <small>Address1</small><br/>\r\n                    <input type=\"text\" name=\"address1\" ng-model=\"organization.contactDetails.address.address1\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <small>Address2</small><br/>\r\n                    <input type=\"text\" name=\"address2\" ng-model=\"organization.contactDetails.address.address2\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <small>Instant Contacts</small><br/>\r\n                    Telephone \r\n                    <input type=\"text\" name=\"telephone\" ng-model=\"organization.contactDetails.telephone\" />\r\n                </div>\r\n            </div>\r\n            </span>\r\n        </div>\r\n    </form>\r\n    <!-- create organization form E -->\r\n<!-- organization toolbar E -->\r\n\r\n\r\n<cards-layout\r\n    num-of-column=\'3\'\r\n    dialog-template-url= \'app/organizations/templates/organizations-dialog.tpl.html\'\r\n    card-template-url= \'app/organizations/templates/organizations-cards.tpl.html\'\r\n    padding-right= \'5px\'   \r\n    apix-data=\'getData()\'\r\n    apix-data-repeat=\'organization in organizations\'\r\n    onCardClick=\'click_card($index)\'\r\n    onCardSystemInitialEnd=\'init_end(card)\'\r\n    >\r\n</cards-layout>\r\n");
$templateCache.put("app/common/components/apixCards/apixCards.tpl.html","<div>\r\n        <div ng-transclude>\r\n\r\n        </div>\r\n        <div\r\n            ng-mouseenter=\"card.cardMouseEnter($event,$index)\"\r\n            ng-mousemove=\"cardEvent.onCardMouseMove($index)\"\r\n            ng-mouseleave=\"card.cardMouseLeave($event,$index)\"\r\n            ng-click=\"card.cardClick($event,$index)\"\r\n            style=\"position:relative;height:{{card.cardHeight}};overflow:hidden;margin-top:{{marginTop}};padding-left:{{paddingLeft}};padding-right:{{paddingRight}}\"\r\n            ng-repeat=\"data in cardDatas\"\r\n            class=\"apix-card-container col-md-{{(12/numOfColumn||4)}}\">\r\n            <div ng-mouseleave=\"card.cardMouseLeave($event,$index)\" class=\"apix-card-toolbar\" style=\"display:none;margin-left:{{paddingLeft}};margin-right:{{paddingRight}};width:100%;height:40%;background:rgba(1,2,3,0.5);position:absolute;left:0;bottom:0;z-index:100;\">\r\n                <input type=\"button\" value=\"delete\" ng-click=\"card.deleteCurrentCard($index)\">\r\n            </div>\r\n            <div class=\"apix-card-wrapper\" ng-if=\"cardTemplate\" compile-html init-html=\"{{cardTemplate}}\"></div>\r\n            <div class=\"apix-card-wrapper\" ng-if=\"!cardTemplate\" ng-include=\"cardTemplateUrl\"></div>\r\n        </div>\r\n</div>");
$templateCache.put("app/common/components/apixCards/cards.tpl.html","\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nthis is template_url test file<br>\r\nname:<input  type=\"text\" value=\"{{data.name}}\"/>\r\ncurrentCardData:<input type=\"text\" value=\"{{currentCardData | json}}\" />\r\n<input type=\"button\" value=\"delete test\" ng-click=\"card.trigger(\'onCardDelete\',$index)\" />\r\n");
$templateCache.put("app/common/components/apixCards/dialog.tpl.html","this template use the scope of card\'s scope\'s parent scope<br>\r\n{{testvalue}}\r\n");
$templateCache.put("app/common/directives/apix-menu/apix-menu.tpl.html","<nav class=\"menu\">\n    <ul>\n        <li ng-repeat=\"oItem in aMenuItems\">\n            <a href=\"{{oItem.sHref}}\" class=\"btn btn-primary\" ng-class=\"{active: oItem.bActive}\"\n               ng-click=\"selectMenuItem(oItem)\">{{oItem.sLabel}}</a>\n        </li>\n    </ul>\n</nav>");}]);
'use strict';
angular.module('OrganizationsApp')
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
    .when('/organizations', {
      templateUrl: 'app/organizations/templates/list.tpl.html',
      controller: 'OrganizationListCtrl'
    })
    .when('/organizations/item/:id', {
      templateUrl: 'app/organizations/templates/item.tpl.html',
      controller: 'OrganizationItemCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'app/organizations/templates/item.tpl.html',
      controller: 'OrganizationItemCtrl'
    });
  }]);
'use strict';
angular.module('OrganizationsApp')
  .service('Organizations',["$http", "$q", function Organizations($http, $q) {

    return {  
      query : function() {  
        var deferred = $q.defer();
        $http({method: 'GET', url: '../mock/organizations.json'}).  
        success(function(data, status, headers, config) {  
          deferred.resolve(data);
        }).  
        error(function(data, status, headers, config) {  
          deferred.reject(data);
        });  
        return deferred.promise;
      }, // end query
      get : function(){
        var deferred = $q.defer();
        $http({method: 'GET', url: '../mock/organization.json'}).  
        success(function(data, status, headers, config) {  
          deferred.resolve(data);
        }).  
        error(function(data, status, headers, config) {  
          deferred.reject(data);
        });  
        return deferred.promise;
      }  
    }; 
    // AngularJS will instantiate a singleton by calling "new" on this function
  }]);
