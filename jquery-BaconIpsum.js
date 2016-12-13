( function( $ ) {

	$.fn.BaconIpsum = function( options ) {  

		var settings = $.extend( {
			'type' : 'meat-and-filler',
			'start_with_lorem' : true,
			'paras' : 3,
			'sentences' : 0,
			// Added the no_tags option (Joel Lord joel@engrenage.com)
			'no_tags' : false,
			// Added the set_value option (Justin Sternberg justin@dsgnwrks.pro)
			'set_value' : false
		}, options );

		return this.each( function() {

			var $this = $(this);

			$.getJSON('https://baconipsum.com/api/?callback=?', { 
				'type':settings.type, 
				'start-with-lorem':settings.start_with_lorem ? 1 : 0, 
				'paras':settings.paras, 
				'sentences':settings.sentences 
			}, function(baconGoodness) {
				if (baconGoodness && baconGoodness.length > 0) {
					for (var i = 0; i < baconGoodness.length; i++) {
						//Check if the rendering should be with or without tags
						if(settings.no_tags || settings.set_value)
							$this[settings.set_value ? 'val' : 'append'](baconGoodness[i]);
						else 
							$this.append('<p>' + baconGoodness[i] + '</p>');
					}
				}
			});

		});

	};
}) ( jQuery );
