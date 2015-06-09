/**
 * Created by huanli<klx211@gmail.com> on 11/26/14.
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

describe('The data service', function () {

    var $httpBackend,
        dataConstants,
        uriPaths,
        dataService,
        aRecordResponse,
        aRecordsResponse;

    beforeEach(module('apix.services.data'));

    beforeEach(inject(function (_dataConstants_, _uriPaths_, _dataService_, _$httpBackend_) {

        dataConstants = _dataConstants_;
        uriPaths = _uriPaths_;
        dataService = _dataService_(dataConstants.CONTENT_TYPE_USER_PROFILE);
        $httpBackend = _$httpBackend_;
        aRecordResponse = [
            {
                "_id": "12254536-c37c-4545-a9ed-449b3326eb73",
                "email": "example@localhost.com",
                "password": "123654",
                "username": "test user",
                "sex": "male",
                "birthday": Date.now(),
                "address": "Beijing, China",
                "telephone": "+86118618264136",
                "country": "China",
                "organizationsId": [],
                "createTime": Date.now()
            }
        ];
        aRecordsResponse = [
            {
                "_id": "12254536-c37c-4545-a9ed-449b3326eb73",
                "email": "example@localhost.com",
                "password": "123654",
                "username": "test user",
                "sex": "male",
                "birthday": Date.now(),
                "address": "Beijing, China",
                "telephone": "+86118618264136",
                "country": "China",
                "organizationsId": [],
                "createTime": Date.now()
            }, {
                "_id": "12854536-c07c-4545-a9ed-449b3326eb73",
                "email": "example1@localhost.com",
                "password": "123654",
                "username": "test user 1",
                "sex": "male",
                "birthday": Date.now(),
                "address": "Beijing, China",
                "telephone": "+86118611461929",
                "country": "China",
                "organizationsId": [],
                "createTime": Date.now()
            }, {
                "_id": "12254536-c37c-4245-a9ed-449b3826eb73",
                "email": "example2@localhost.com",
                "password": "123654",
                "username": "test user 2",
                "sex": "female",
                "birthday": Date.now(),
                "address": "Beijing, China",
                "telephone": "+86118611112222",
                "country": "China",
                "organizationsId": [],
                "createTime": Date.now()
            }
        ];
    }));

    describe('when getting a record from the server', function () {

        beforeEach(function () {

            $httpBackend
                .expectGET(new RegExp(dataConstants.WEB_SERVICES_CONTEXT_PATH +
                uriPaths[dataConstants.CONTENT_TYPE_USER_PROFILE] +
                '/[a-fA-F0-9\\-]+'))
                .respond(function (method, url, data, headers) {

                    var ret = [200, []];

                    if (new RegExp('.+' + aRecordResponse[0]._id + '$').test(url)) {

                        ret = [200, aRecordResponse];
                    }
                    return ret;
                });
        });

        afterEach(function () {

            $httpBackend.flush();
        });

        it('returns a single record', function () {

            dataService
                .get('12254536-c37c-4545-a9ed-449b3326eb73')
                .success(function (data) {

                    expect(data.length).toBe(1);
                    expect(data).toEqual(aRecordResponse);
                });
        });

        it('does not return any record', function () {

            dataService
                .get('92254536-c37c-4545-a9ed-449b3326eb73')
                .success(function (data) {

                    expect(data.length).toBe(0);
                    expect(data).not.toEqual(aRecordResponse);
                });
        });
    });

    describe('when getting some records from the server', function () {

        beforeEach(function () {

            $httpBackend
                .expectGET(new RegExp(dataConstants.WEB_SERVICES_CONTEXT_PATH +
                uriPaths[dataConstants.CONTENT_TYPE_USER_PROFILE] +
                '(\\\\?[^&]+(&[^&]+)*)?'))
                .respond(function (method, url, data, headers) {

                    var ret = [200, []],
                        sSearch = '',
                        aSearch = [],
                        aKeyValue,
                        bMatch;

                    if (url.search(/\?/) < 0) {

                        ret[1] = aRecordsResponse;

                    } else {

                        sSearch = url.substring(url.indexOf('?') + 1);
                        aSearch = sSearch.split(/&/);

                        aRecordsResponse.forEach(function (oRecord) {

                            bMatch = true;
                            aSearch.forEach(function (sPair) {

                                aKeyValue = sPair.split(/=/);
                                if (oRecord[aKeyValue[0]] !== aKeyValue[1]) {

                                    bMatch = bMatch && false;
                                }
                            });

                            if (bMatch) {

                                ret[1].push(oRecord);
                            }
                        });
                    }
                    return ret;
                });
        });

        afterEach(function () {

            $httpBackend.flush();
        });

        it('returns all three records', function () {

            dataService
                .list()
                .success(function (data) {

                    expect(data.length).toBe(3);
                    expect(data).toEqual(aRecordsResponse);
                });
        });

        it('returns two records', function () {

            dataService
                .list({
                    sex: 'male'
                })
                .success(function (data) {

                    expect(data.length).toBe(2);
                    expect(data).toEqual(aRecordsResponse.slice(0, 2));
                });
        });

    });

    describe('when submitting a record to the server', function () {

        it('returns the id of the new record', function () {
        });
    });
});