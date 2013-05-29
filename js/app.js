window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

var fb = new MobileApp();

fb.slider = new PageSlider($('#container'));

fb.MobileRouter = Backbone.Router.extend({

    routes: {
        "": "home",
        "home": "home",
        "contact": "contact"
    },

    initialize: function () {
      $('#menu').html(new fb.views.Menu().$el);
    },

    home: function () {
        var view = new fb.views.Home();
        fb.slider.slidePageFrom(view.$el, "left");
    },

    contact: function () {
        fb.slider.slidePageFrom(new fb.views.Contact().$el, 'left');
    }

});

$(document).on('ready', function () {

    fb.templateLoader.load(['home', 'menu', 'contact'], function () {
        fb.router = new fb.MobileRouter();
        Backbone.history.start();
    });

});

$(document).on('click', '.button.back', function () {
    window.history.back();
    return false;
});