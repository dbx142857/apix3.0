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
