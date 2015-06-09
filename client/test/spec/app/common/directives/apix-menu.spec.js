/**
 * Created by huanli<klx211@gmail.com> on 12/24/14.
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

describe('The apix.directives.menu module', function () {

    var $compile,
        $rootScope,
        apixMenuService;

    beforeEach(module('apix.directives.menu'));

    beforeEach(module('external-templates'));

    beforeEach(inject(function (_$compile_, _$rootScope_, _apixMenuService_) {

        $compile = _$compile_;
        $rootScope = _$rootScope_;
        apixMenuService = _apixMenuService_;
    }));

    describe('The apixMenuService service', function () {

    });

    describe('The APIXMenuController controller', function () {

    });

    describe('The apixMenu directive', function () {

        var sDirectiveTpl = '<div data-apix-menu></div>';

        it('should create an apix-menu widget', function () {

            var element = $compile(sDirectiveTpl)($rootScope);

            $rootScope.$digest();

            expect(element.html()).toContain('<nav class="menu">');
        });
    });
});