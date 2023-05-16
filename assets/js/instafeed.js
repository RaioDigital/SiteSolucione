var feed = new Instafeed({
    accessToken: 'IGQVJVNDB4aVI3WDNrNkJ1ZAEtXZAmtuY1dqQTBZAeHZA6QW5rcnFueEZAGRmZAMTzNJM1U2djVUallySF9seEoyeHJnYzM1VHRUZAWw0VTFLTlV2Q2M3SmFhNFdzN1JoaWFmR0JDM3U4dVFrVjRzRk5PX3luNgZDZD',
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