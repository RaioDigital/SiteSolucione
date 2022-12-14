var feed = new Instafeed({
    accessToken: 'IGQVJWbTl1ZAEhyUlg5V3hrOWhLRkFLb0tlV0RjYi10QUpmcUhQTHVLdkhUWm1TTmM5LTBSRnM5ZAkMwVTh0eWowVU56Y2N4Ry1PV0VLc0VFWjVSU2szVWx1REdNR0dNSmJkQ1dRendpV1BHR1JHTU9pTgZDZD',
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