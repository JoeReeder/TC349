	$("#Content_Background").css("height", $("#Committees").css("height") );
	
	
	if ($(window).width() > 600){
	    var s = skrollr.init();
	   //The options (second parameter) are all optional. The values shown are the default values.
	   skrollr.menu.init(s, {
	       //skrollr will smoothly animate to the new position using `animateTo`.
	       animate: true,

	       //The easing function to use.
	       easing: 'sqrt',

	       //How long the animation should take in ms.
	       duration: function(currentTop, targetTop) {
	           //By default, the duration is hardcoded at 500ms.
	           return 500;

	           //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
	           //return Math.abs(currentTop - targetTop) * 10;
	       },

	       //If you pass a handleLink function you'll disable `data-menu-top` and `data-menu-offset`.
	       //You are in control where skrollr will scroll to. You get the clicked link as a parameter and are expected to return a number.
	      // handleLink: function(link) {
	        //   return 400;//Hardcoding 400 doesn't make much sense.
	       //}
	   });
	}
