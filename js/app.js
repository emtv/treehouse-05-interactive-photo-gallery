jQuery(document).ready(function () {

	// JUST MY SIGN
	console.log('Made with love and full Code! by @EmTv');

	//INIT MAGNIFIC MODAL
	// @see documentation http://dimsemenov.com/plugins/magnific-popup/documentation.html

	jQuery('.search-results__container').each(function () {
		// the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: 'title'
			},
			mainClass: 'mfp-with-zoom', // this class is for CSS animation below
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it
				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out' // CSS transition easing function

			}

		});
	});

	//ADD FILTER JQUERI API
	// @see documentation http://api.jquery.com/filter/

	jQuery('#input_search').on('keyup', function () {

		var get_value = jQuery(this).val().toLowerCase();
		var image_item__a = jQuery('.image-item > a');

		image_item__a.filter(function () {
			if (jQuery(this).attr('title').toLowerCase().indexOf(get_value) >= 0) {
				jQuery(this).parent().addClass('show-image');
				jQuery(this).parent().removeClass('hide-image');
				jQuery('.search-results__container').toggleClass('flex-start');
			} else {
				jQuery(this).parent().addClass('hide-image');
				jQuery(this).parent().removeClass('show-image');
			}
		});
	});
});
