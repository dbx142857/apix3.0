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
        .module('apix.services.data', [])
        .constant('dataConstants', dataConstants)
        .constant('uriPaths', uriPaths)
        .value('bBackendLess', false)
        .config(config)
        .service('mockDataInterceptor', mockDataInterceptor)
        .service('mockUtils', mockUtils)
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

                    throw 'Setting content type failed. The content type "' + sCT + '" is not recognizable.';
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

                return dataConstants.WEB_SERVICES_CONTEXT_PATH +
                    uriPaths[sContentType] +
                    '/' +
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

        this.request = function (oConfig) {

            if (bBackendLess) {

                mockUtils.changeRoute(oConfig);
            }
            return oConfig;
        };

        this.response = function (oResponse) {

            return oResponse;
        };
    }

    /**
     *
     * @author Kevin Li<klx211@gmail.com>
     */
    function mockUtils() {
        /**
         * Change the route, which is actually the URL specified in the configuration object of $http service, to
         * retrieve the content of static files.
         *
         * @author Kevin Li<huali@tibco-support.com>
         * @param {Object} oConfig The configuration object of $http service.
         */
        this.changeRoute = function (oConfig) {

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
        };
    }

}());