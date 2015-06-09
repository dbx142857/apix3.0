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
        .module('apix.directives.menu', [
            'ngAnimate'
        ])
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
