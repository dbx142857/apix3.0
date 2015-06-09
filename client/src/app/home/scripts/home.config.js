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
