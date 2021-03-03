// Function to animate elements to appear
function apparitionWhenVisible (element, animation) {
    var elements = $(element);
    for (var i = 0, count = elements.length; i < count; i++) {
        if (($(window).height()+$(window).scrollTop())>$(elements[i]).offset().top) {
            $(elements[i]).css( "visibility", "visible" );
            $(elements[i]).addClass(animation);
        }
    }    
}

// Function to precise which elements should appear
function apparitionWhenVisibleAllAnimations () {
    apparitionWhenVisible('.apparition-bright', 'apparition-bright-animation');
    apparitionWhenVisible('.apparition-scale', 'apparition-scale-animation');
    apparitionWhenVisible('.apparition-scale-1', 'apparition-scale-1-animation');
    apparitionWhenVisible('.apparition-scale-2', 'apparition-scale-2-animation');
    apparitionWhenVisible('.apparition-scale-3', 'apparition-scale-3-animation');
    apparitionWhenVisible('.apparition-bottom', 'apparition-bottom-animation');
    apparitionWhenVisible('.apparition-left-1', 'apparition-left-1-animation');
    apparitionWhenVisible('.apparition-left-2', 'apparition-left-2-animation');
    apparitionWhenVisible('.apparition-right-1', 'apparition-right-1-animation');
    apparitionWhenVisible('.apparition-right-2', 'apparition-right-2-animation');
    apparitionWhenVisible('.apparition-right-3', 'apparition-right-3-animation');
    apparitionWhenVisible('.apparition-bottom-1', 'apparition-bottom-1-animation');
    apparitionWhenVisible('.apparition-bottom-2', 'apparition-bottom-2-animation');
    apparitionWhenVisible('.apparition-bottom-3', 'apparition-bottom-3-animation');
    apparitionWhenVisible('.yellow-underline', 'yellow-underline--bg-size');
    }

// Function to make elements appear when we scroll
$(function () {
    $(window).on('scroll', function () {
        apparitionWhenVisibleAllAnimations();
    });
});

// Function to make elements appear when we land on them at the load of the page
apparitionWhenVisibleAllAnimations ()

// Function to see preload image when we go on webpage with .preloader
$(function () {
    jQuery('.preloader').fadeOut(1000)
})
