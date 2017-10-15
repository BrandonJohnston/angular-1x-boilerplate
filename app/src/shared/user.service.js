/**
 * Created by brandonj on 8/18/16.
 */

(function() {
    "use strict";

    angular
        .module('newApp.ui')
        .factory('UserService', UserService);

    UserService.$inject = ['$translate'];

    function UserService($translate) {

		var currUserData = {
			loggedin: false
		};

		var userLang;

        var service = {
			getInUseLocaleKey: getInUseLocaleKey,
			setLocale: setLocale
        };

        return service;


		/*
		 * getInUseLocale - returns the currently used locale
		 */
		function getInUseLocaleKey() {
			var langKey;

			if (userLang) {

				// If a langKey is already stored, return it
				langKey = userLang;

			} else {

				// langKey isn't stored and we don't have a cookie, return the in use language.
				langKey = $translate.use();
			}

			return langKey;
		}


		/*
		 * setLocale - sets all of the appropriate locale items
		 */
		function setLocale(langKey) {
			// Can only set a language on the login page, no need to set the cookie here

			// Save the langKey to the factory for future use
			userLang = langKey;

			// Tell the translate service to use the new key
			$translate.use(langKey);

			// Set the moment.js locale for date formatting
			moment.locale(langKey);
		}

    }
})();
