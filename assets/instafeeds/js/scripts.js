var feed = new Instafeed({
    accessToken: 'IGQVJWdkJLXzNkSkxhdEM2emYyWFZAveXhIVGllYU9VTXhmMmIyX1l4R0pTLWJMUk5lMDZAIYVY1cEk4VGVxbWJiY0UxNWJBTmZAfV29vNTN3dDJPdFNmYlczaUdFYnJCNGtkaEZA5SXJn',
    limit: 8,
    template:'<div class="item"><a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}"  /></a></div>',

    after: function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
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
                    loop:false
                }
            }
})
    }
});
feed.run();