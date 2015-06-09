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
        '$modal',
        'ngDialog',
        'dataConstants',
        'dataService'
    ];

    function OrganizationsController($scope,
        $filter,
        $modal,
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

        // List all organizations

        $scope.$on('cardSystemInitialEnd',function(oEvent,cardService){
            $scope.dialogScope=$scope;
            $scope.closeModal=function(){
                $modal.close();
            }
            oHttpClient.list().then(function(oResponse) {
                // Do something with the response object.
                $scope.organizations = oResponse.data.message;
                // This response object is just the one used in Angular's $http service.
            });
            $scope.$on('dialogOpen',function(oEvent,nIndex){
                oHttpClient.get(cardService.currentCardData._id).then(function(oResponse) {
                    $scope.promiseItem = oResponse.data.message;
                });
            })

            $scope.$on('beforeCardDelete',function(oEvent,nCurrentDeletingCardIndex){
                if(window.confirm('你真的要删除么')){
                    if(window.confirm('不好意思再问一下你真的真的要删除我么')){
                        cardService.confirmDeleteCurrentCard();
                    }else{
                        console.log('删除失败,你看着整吧');
                    }
                }else{
                    console.log('删除失败,你看着整吧');
                }
            });
            $scope.$on('beforeSelectedCardsDelete',function(oEvent,aSelectedCardsIndex){
                if(window.confirm('你真的要删除么')){
                    if(window.confirm('不好意思再问一下你真的真的要删除我么')){
                        cardService.confirmDeleteSelectedCards();
                    }else{
                        console.log('删除失败,你看着整吧');
                    }
                }else{
                    console.log('删除失败,你看着整吧');
                }
            });
            $scope.$on('selectedCardsDeleteSuccess',function(oEvent,aSelectedCardsIndex){
                console.log('恭喜，所有选中的卡片已经删除');
            })
            $scope.$on('cardDeleteSuccess',function(oEvent,nCurrentDeletingCardIndex){
                console.log("恭喜，你通过$on中制定的删除事件删除了"+nCurrentDeletingCardIndex+'号卡片');
            });
        })



        //$scope.init_end = function(card, childScope) {
        //    // List all organizations
        //    oHttpClient.list().then(function(oResponse) {
        //        // Do something with the response object.
        //        $scope.organizations = oResponse.data.message;
        //        oHttpClient.get(oResponse.data.message[0]._id).then(function(oData) {
        //            $scope.promiseItem = oData.data;
        //        });
        //        // This response object is just the one used in Angular's $http service.
        //    });
        //
        //    $scope.click_card = function(index) {
        //        oHttpClient.get(childScope.currentCardData._id).then(function(oResponse) {
        //            $scope.promiseItem = oResponse.data.message;
        //        });
        //    };
        //
        //};

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