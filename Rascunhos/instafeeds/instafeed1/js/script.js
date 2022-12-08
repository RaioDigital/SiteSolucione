var feed = new Instafeed({
    accessToken: 'IGQVJXN3hzSEpBaldmUllxM3pZAQUZAkQVdLbUkwZAkdFalpSLTVJVG53eWhRMEJyc2prcm12YzRsaUg5Q21LVkk1dGprcHpCMmdPOVdnZAFJDQ1ZAKNkw1TEdWOEphaFE0aDVCcnh0Q050d0tJNmJXZAmdicAZDZD',
    limit: 6,
    template:'<div class="item"><a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}"  /></a></div>',

    after: function(){
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop:true,
            nav:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },            
                960:{
                    items:5
                },
                1200:{
                    items:6
                }
            }
        });
        owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
    }});

feed.run();