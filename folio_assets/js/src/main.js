
/** @author Shihab PM ( UI Developer )
 *  Loading the main app module with the dependent modules 
 */

// ====================================================================
    // User Experience related JavaScript
//  ====================================================================

            //checking wether the user is using IE 
            function msieversion() {

                var ua = window.navigator.userAgent;
                var msie = ua.indexOf("MSIE ");

                if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
                {
                // pop up a modal box saying for better experience I recommend to use chrome or firefox or safari
                }
            

                return false;
            }

// msieversion(); // for the moment commented this code lot to work on this at last



// ====================================================================
    // Design Realted Javascript
//  ====================================================================

            // JavaScript
            window.sr = ScrollReveal();
            sr.reveal('#intro',{ duration: 2000 });
            sr.reveal('#my-work',{ duration: 3000 });

            // jQuery to collapse the navbar on scroll
            $(window).scroll(function() {
                if ($(".navbar").offset().top > 50) {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
            });

            //jQuery for page scrolling feature - requires jQuery Easing plugin
            $(function() {
                $(document).on('click', 'a.page-scroll', function(event) {
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500, 'easeInOutExpo');
                    event.preventDefault();
                });
            });


            // Tooltip Generator class 
            new Tippy('.tippy',{
                position: 'right',
                animation: 'fade',
                duration: 300,
                arrow: true,
                animateFill: true,
                size: 'big'
            });


// ====================================================================
    // API realted Javascript
//  ===================================================================



     $.get( "./folio_assets/json/instapost.json", function( data ) {
         
          
            var posts = data.items;
            var postCounter = 0;
            for(var i=0;i<5;i++){
                console.log(posts[i].images.standard_resolution.url);
            }
   


});