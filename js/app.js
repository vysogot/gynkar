$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        centerMode: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.module-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        variableWidth: true
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 154)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });
});

$(document).ready(function() {
    $("#playlist").youtube_video({
        playlist: 'PLncTFGctaqZupp4iNer4nKBqXCrhcszvC',
        channel: false,
        user: false,
        videos: false,
        shuffle: false,
        max_results: 50,
        pagination: true,
        continuous: true,
        first_video: 0,
        show_playlist: 'auto',
        playlist_type: 'horizontal',
        show_channel_in_playlist: true,
        show_channel_in_title: true,
        width: false,
        show_annotations: false,
        now_playing_text: 'Now Playing',
        load_more_text: 'Load More',
        autoplay: false,
        force_hd: false,
        hide_youtube_logo: false,
        play_control: true,
        time_indicator: 'full',
        volume_control: true,
        share_control: true,
        fwd_bck_control: true,
        youtube_link_control: true,
        fullscreen_control: true,
        playlist_toggle_control: true,
        volume: false,
        show_controls_on_load: true,
        show_controls_on_pause: true,
        show_controls_on_play: false,
        related: false,
        require_cookie_accept: true,
        require_cookie_accept_message: 'Click here to accept youtube cookies to play this video. By accepting you will be accessing a service provided by a third party external to this website.',
        player_vars: {},
        colors: {},

        on_load: function(snippet) {
            set_log('loaded', snippet)
        },
        on_done_loading: function(videos) {
            set_log('videos', videos)
        },
        on_state_change: function(state) {
            set_log('state', state)
        },
        on_seek: function(seconds) {
            set_log('seek', seconds)
        },
        on_volume: function(volume) {
            set_log('volume', volume)
        },
        on_time_update: function(seconds) {
            set_log('time', seconds)
        },

    });

    $(document.body).css('visibility', 'visible');

});

function set_log(title, val) {
    $(".log").html('<div><span>' + title + '</span>' + val + '</div>' + $(".log").html());
}