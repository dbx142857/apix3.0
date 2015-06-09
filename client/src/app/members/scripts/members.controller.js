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
        $scope.$on('cardSystemInitialEnd',function(oEvent,cardService){
            $scope.dialogScope=$scope;
            $scope.$on('dialogOpen',function(oEvent,nIndex){
                var oHttpClient = dataService(dataConstants.CONTENT_TYPE_USER_PROFILE);
                oHttpClient.get(cardService.currentCardData.id).then(function(oResponse){
                    $scope.memberDetail  = oResponse.data.message;
                    $scope.memberDetail.role = oResponse.data.message.organizations[0].role;
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
        //$scope.init_end=function(card,childScope){
        //
        //    $scope.click_card=function(index){
        //        var oHttpClient = dataService(dataConstants.CONTENT_TYPE_USER_PROFILE);
        //        oHttpClient.get(childScope.currentCardData.id).then(function(oResponse){
        //            $scope.memberDetail  = oResponse.data.message;
        //            $scope.memberDetail.role = oResponse.data.message.organizations[0].role;
        //        });
        //    };
        //
        //    card.
        //        on("create", function(){
        //            ngDialog.open({
        //                template: 'app/members/templates/members.dialog.tpl.html'
        //            });
        //        });
        //};
        //$scope.getData=function(){
        //
        //};
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