fb.views.Home = Backbone.View.extend({

    initialize: function () {
        var self = this;
        this.template = fb.templateLoader.get('home');
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }

});