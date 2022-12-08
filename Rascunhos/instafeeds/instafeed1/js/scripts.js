var feed = new Instafeed({
    accessToken: 'IGQVJXN3hzSEpBaldmUllxM3pZAQUZAkQVdLbUkwZAkdFalpSLTVJVG53eWhRMEJyc2prcm12YzRsaUg5Q21LVkk1dGprcHpCMmdPOVdnZAFJDQ1ZAKNkw1TEdWOEphaFE0aDVCcnh0Q050d0tJNmJXZAmdicAZDZD',
    limit: 10,
    template:'<div class="item"><a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}"  /></a></div>',

    after: function(){
        $('.owl-carousel').owlCarousel({ 
            loop:true,
            margin:10,        
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                
                600:{
                    items:3
                },

                1000:{
                    items:5,	
                    nav:true,
                    loop:false
                }
            }
})
    }
});
feed.run();