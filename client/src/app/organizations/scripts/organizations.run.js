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