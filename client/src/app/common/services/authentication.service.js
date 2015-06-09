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
        .module('apix.services.authentication', [
            'apix.services.data',
            'ngCookies'
        ])
        .constant('CURRENT_USER', 'apix-current-user')
        .constant('SESSION_TIMEOUT', 10 * 60 * 1000) // milliseconds
        .constant('authenticationEvents', authenticationEvents)
        .service('authenticationService', authenticationService);

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

        this.login = login;
        this.logout = logout;
        this.register = register;
        this.getCurrentUser = getCurrentUser;

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