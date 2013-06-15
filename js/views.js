fb.views.Home = Backbone.View.extend({

    initialize: function () {
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
        this.template = fb.templateLoader.get('menu');
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }

});

fb.views.About = Backbone.View.extend({

    initialize: function () {
        this.template = fb.templateLoader.get('about');
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }

});

fb.views.Info = Backbone.View.extend({

    initialize: function () {
        this.template = fb.templateLoader.get('info');
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }

});

fb.views.Contact = Backbone.View.extend({

    initialize: function () {
        this.template = fb.templateLoader.get('contact');
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }

});