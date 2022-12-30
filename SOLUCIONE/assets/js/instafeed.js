var feed = new Instafeed({
    accessToken: 'IGQVJWUmxTX3F3QmZAEREh4RHBVdXc2UVZATN1RvSTdmUHdXMHBrTlY4UU5BUlduekZAUV2wyTDZAwb1ZA0MWlvVkt1YWtjNmxpRU9JSjVOUDNRdkZA2dFAxRE1fa2xycjBaUEdhNlltdTRXNzBzc3dCcEd2QQZDZD',
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