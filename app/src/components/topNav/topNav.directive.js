/**
 * Created by brandonj on 6/7/16.
 */

angular
    .module('newApp.ui')
    .directive('appTopNav', [
        function () {
            return {
                restrict: 'E',
				replace: true,
                scope: {},
                templateUrl: 'components/topNav/topNavView.html',
                controller: 'topNavController',
                controllerAs: 'vm'
            };
        }
    ]);
