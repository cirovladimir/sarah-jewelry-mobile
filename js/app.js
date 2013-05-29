window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

var fb = new MobileApp();

fb.slider = new PageSlider($('#container'));

fb.MobileRouter = Backbone.Router.extend({

    routes: {
        "": "home",
        "home": "home"
    },

    home: function () {
        // Reset cached views
        fb.myView = null;
        fb.myFriendsView = null;
        var view = new fb.views.Home();
        fb.slider.slidePageFrom(view.$el, "left");
    }

});

$(document).on('ready', function () {

    fb.templateLoader.load(['home'], function () {
        fb.router = new fb.MobileRouter();
        Backbone.history.start();
    });

});

$(document).on('click', '.button.back', function () {
    window.history.back();
    return false;
});