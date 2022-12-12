var feed = new Instafeed({
    accessToken: 'IGQVJYRHVOQmFmZA2UxTGxwSkZApc0FsNGlJeWxEUjhqQlBKNkhVZA1dSMC1ZAWmFOMndmLW9KRFRYbDdJM0ZADRmp4ems3aGRJcHhFZAHk5R2puZAE85Q05Hcjd3U2dmNjdrMGNCLTVlamZAKQkl1ci1tdm5DSQZDZD',
    limit: 10,
    template:'<div class="item"><a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}"/></a></div>',

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