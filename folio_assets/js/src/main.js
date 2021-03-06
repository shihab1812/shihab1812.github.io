/** @author Shihab PM ( UI Developer )
 *  Loading the main app module with the dependent modules 
 */

// ====================================================================
// User Experience related JavaScript
//  ====================================================================
//Decalare vars


//checking wether the user is using IE 
function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
        // pop up a modal box saying for better experience I recommend to use chrome or firefox or safari
    }


    return false;
}

// msieversion(); // for the moment commented this code lot to work on this at last



// ====================================================================
// Design Realted Javascript
//  ====================================================================



//sr.reveal('#my-work',{ duration: 3000 });

// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    // Intializing PopOver
       $('[data-toggle="popover"]').popover();

    // Tooltip Generator class 
    new Tippy('.tippy', {
        position: 'right',
        animation: 'fade',
        duration: 300,
        arrow: true,
        animateFill: true,
        size: 'big'
    });
    //show the loader for intial Second's
    $("#loader-sec").show().delay(3800).fadeOut(function() {
    // Animation complete.
  
    $('.animated-fInDown').removeClass('vs-none').addClass('animated fadeInDown');
    $('.animated-fInUp').removeClass('vs-none').addClass('animated fadeInUp');
       $('.animated-fIn').removeClass('vs-none').addClass('animated fadeIn');
  });

    //intro animation
 
    //set any element to act like anchor tag

    $(".external").click(function (e) {
        e.preventDefault();
        var tempLink = $(this).data('link');

        window.open(tempLink, '_blank');
    });


    $(document).on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //AutoType Js function
    $(".element").typed({
        strings: ["First sentence.", "Second sentence."],
        typeSpeed: 0,
        loop: true
    });
   // setTimeout(function () {
        // JavaScript
        //window.sr = ScrollReveal();
        //sr.reveal('#intro', {
          //  duration: 2000
        //});
       /*sr.reveal('#project-1', {
            duration: 2600
        });
        sr.reveal('#project-2', {
            duration: 2600
        });
        sr.reveal('#project-3', {
            duration: 2600
        });
        sr.reveal('#heading-1', {
            duration: 2600
        });
        sr.reveal('#heading-2', {
            duration: 2600
        });
        sr.reveal('#heading-3', {
            duration: 2600
        });
        sr.reveal('#heading-4', {
            duration: 2600
        });*/

  //  }, 3750);

    //Intiate the carousel
    $(".owl-carousel").owlCarousel({

        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
                margin: 10,
                responsiveClass: true,
                autoplay: true,
                autoplayTimeout: 3000,

                autoplayHoverPause: false
            },
            600: {
                items: 3,
                nav: false,
                loop: true,
                margin: 10,
                responsiveClass: true,
                autoplay: true,
                autoplayTimeout: 3000,

                autoplayHoverPause: false
            },
            1000: {
                items: 5,
                nav: true,
                dots: true,
                center: true,
                loop: true,
                margin: 10,
                responsiveClass: true,
                autoplay: true,
                autoplayTimeout: 3000,

                autoplayHoverPause: false,
            }
        }
    });
    $('section#skillset .owl-nav .owl-prev').html("<i class='fa fa-angle-left fa-3x custom-prev-owl-btn'></i>");
    $('section#skillset .owl-nav .owl-next').html("<i class='fa fa-angle-right fa-3x custom-next-owl-btn'></i>");

});




// ====================================================================
// API realted Javascript
//  ===================================================================

// on success of instapost API
function gridLayouter(posts) {
    console.log(posts);
    var counter = 1;
    for (var i = 0; i < posts.length; i++) {

        //console.log( $('#instagrid'+counter));
        $('#instagrid' + counter).append('<div class="col-md-12  no-padding insta-post-appender"><img src="' + posts[i] + '"></div>');
        console.log("hi");
        counter++;
        if (counter == 4) {
            counter = 1;
        }



    }

}


$.get("./folio_assets/json/instapost.json", function (data) {

    var postCollector = [];
    var posts = data.items;
    var postCounter = 0;
    for (var i = 0; i < 9; i++) {
        postCollector.push(posts[i].images.low_resolution.url);
    }

    // callback function
    gridLayouter(postCollector);


});