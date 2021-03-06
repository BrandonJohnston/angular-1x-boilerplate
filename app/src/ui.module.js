/**
 * Created by brandonj on 10/6/15.
 */

angular.module('newApp.ui', [
    'ui.router',
    'ngSanitize',
    'ngAnimate',
    'pascalprecht.translate',
    'ui.bootstrap'
])
    .config([
        '$stateProvider', '$urlRouterProvider', '$translateProvider', '$locationProvider', '$httpProvider',
        function($stateProvider, $urlRouterProvider, $translateProvider, $locationProvider, $httpProvider) {

            // Allows cross-domain api request / response
            $httpProvider.defaults.useXDomain = true;


            $locationProvider.hashPrefix(''); // Removes index.html in URL
            $locationProvider.html5Mode({enabled: true, requireBase: false});

            $urlRouterProvider.otherwise('/'); //redirects undefined states to /
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'views/home/homeView.html',
                    controller: 'homeViewController',
                    controllerAs: 'vm',
                    stateLabel: 'budget.TITLE'
                });


            // Configure translations
            // TODO: Update language keys section appropriately. See https://angular-translate.github.io/docs/#/guide/09_language-negotiation
            $translateProvider
                .useStaticFilesLoader({
                    prefix: 'i18n/',
                    suffix: '.json'
                })
                .registerAvailableLanguageKeys(['en'], {
                    'pseudo': 'pseudo',
                    'en_US': 'en'
                })
                .determinePreferredLanguage()
                .fallbackLanguage('en');

            // Protect from insertion attacks in the translation values.
            $translateProvider.useSanitizeValueStrategy("sanitizeParameters");

        }
    ])
    .run(['$rootScope', '$log', '$state', 'UserService',
        function($rootScope, $log, $state, UserService) {

            $log.debug('run block started');

			// Set the locale when app runs
			UserService.setLocale(UserService.getInUseLocaleKey());

        }
    ]);
