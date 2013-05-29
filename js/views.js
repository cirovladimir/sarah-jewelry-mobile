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

fb.views.Menu = Backbone.View.extend({

    initialize: function () {
        var self = this;
        this.template = fb.templateLoader.get('menu');
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }

});

fb.views.Contact = Backbone.View.extend({

    initialize: function () {
        var self = this;
        this.template = fb.templateLoader.get('contact');
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }

});