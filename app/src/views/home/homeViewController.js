/**
 * Created by brandonj on 2/3/16.
 */

(function() {
	"use strict";

	angular
		.module('newApp.ui')
		.controller('homeViewController', homeViewController);


	homeViewController.$inject = [
		'$log'
	];


	function homeViewController($log) {

		var vm = this;
		$log.debug("homeViewController");


		// Setup functions
		// setup functions here


		// Setup variables
		// setup variables here


		/*******************************************************************
		 * Public Functions
		 *******************************************************************/
	}
})();
