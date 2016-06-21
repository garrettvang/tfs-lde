(function ($) {
  // apply jwerty keys to listen for
  $(document).ready(function(){
    // voice based video controls... within reason
    Drupal.voicecommanderControlVideo = function(phrase) {
      if (phrase.indexOf('play') !== -1) {
        // @todo something like this...
        /*$( 'iframe[src*="youtube.com"]' ).each( function( i, el ) {
          var youtube_command = window.JSON.stringify( { event: 'command', func: 'playVideo' } );
          console.log(i);
          console.log(el);
          i.postMessage( youtube_command, 'https://www.youtube.com' );
        });*/
      }
      // travel to the top of the screen
      else if (phrase.indexOf('pause') !== -1) {
        /*$( 'iframe[src*="youtube.com"]' ).each( function( i, el ) {
          var youtube_command = window.JSON.stringify( { event: 'command', func: 'pauseVideo' } );
          console.log(i);
          console.log(el);
          i.postMessage( youtube_command, 'https://www.youtube.com' );
        });*/
      }
    };
    jwerty.key('↓,↓', function () {
      if (!$(document.activeElement).is(":focus")) {
        var height = $(window).height();
        $('html, body').animate({
            scrollTop: $(window).scrollTop()+(height*0.75)
        }, 1000);
      }
      return false;
    });
    jwerty.key('↑,↑', function () {
      if (!$(document.activeElement).is(":focus")) {
        var height = $(window).height();
        $('html, body').animate({
          scrollTop: $(window).scrollTop()-(height*0.75)
        }, 1000);
        return false;
      }
    });
    // network
    jwerty.key('alt+shift+n', function () {
      if (!$(document.activeElement).is(":focus")) {
        $('.apps-icon').click();
        $('#block-cis-lmsless-cis-lmsless-network-nav-modal').focus();
      }
    });
    // network
    jwerty.key('alt+shift+u', function () {
      if (!$(document.activeElement).is(":focus")) {
        $('.etb-nav_item_service_btn.user-icon').click();
        $('#block-cis-lmsless-cis-lmsless-user-nav-modal').focus();
      }
    });
    // edit
    jwerty.key('alt+shift+e', function () {
      if (!$(document.activeElement).is(":focus")) {
        window.location.href = window.location.href + '/edit';
      }
    });
    // share
    jwerty.key('alt+shift+s', function () {
      if (!$(document.activeElement).is(":focus")) {
        $('[data-reveal-id="block-cis-shortcodes-cis-shortcodes-block-nav-modal"]').click();
        $('#block-cis-shortcodes-cis-shortcodes-block-nav-modal').focus();
      }
    });
    // accessibility menu
    jwerty.key('alt+shift+a', function () {
      if (!$(document.activeElement).is(":focus")) {
        $('[data-reveal-id="page-accessibility-menu"]').click();
        $('#page-accessibility-menu').focus();
      }
    });
    // more
    jwerty.key('alt+shift+m', function () {
      if (!$(document.activeElement).is(":focus")) {
        $('[data-reveal-id="r-header__icon--advanced"]').click();
      }
    });
    // add
    jwerty.key('alt+shift++', function () {
      if (!$(document.activeElement).is(":focus")) {
        $('.add-menu-drop').focus().click();
      }
    });
  });
})(jQuery);