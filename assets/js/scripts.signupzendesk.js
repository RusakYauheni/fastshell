/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2019. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell

	$('.number-of-agents').on('change', function() {
		$('.number-of-agents').not(this).prop('checked', false); 
		 
	});
	$('.number-of-tickets').on('change', function() {
		$('.number-of-tickets').not(this).prop('checked', false);  
	});

  });

})(jQuery, window, document);
