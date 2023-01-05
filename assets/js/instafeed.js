var feed = new Instafeed({
    accessToken: 'IGQVJVUDhDUVBxVXowX1ZAJVFp3TENSMUlGU0FXUUxTS3U3UlZA2Vzg3THE3MDhEakVXV0E3SThvQ1hYdlN4MWdJT1BXbU5Ub1I5UDNxeFlsT0M2cWRMM3RwSTZAnUDNJaHBPLV9MN25ZAOUp1SVB4a29iYwZDZD',
    limit: 10,
    template:'<div class="item"><a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}"/></a></div>',

    after: function(){
        $('.owl-carousel').owlCarousel({ 
            loop:true,
            margin:10,        
            responsiveClass:true,
            responsive:{
                0:{
                    items:3
                },
                
                600:{
                    items:4
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