/**
 * Created by brandonj on 7/7/17.
 */

(function() {
	"use strict";

	angular.module('newApp.ui')
		.constant('CalendarConstants', {
			'DATE_SHORT_FORMAT': 'L',
			'DATE_LONG_FORMAT': 'll',
			'DATE_TIME_FORMAT': 'lll',
			'DATE_ID_FORMAT': 'YYYY-MM-DD',
			'DATE_NICE_FORMAT': 'MMM. DD'
		})
		.constant('moment', moment);
})();
