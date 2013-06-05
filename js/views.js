fb.views.Home = Backbone.View.extend({

    initialize: function () {
        var self = this;
        fb.templateLoader.load('home', function (data) {
            self.template = data;
            self.render();
        });
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }

});

fb.views.Menu = Backbone.View.extend({

    initialize: function () {
        var self = this;
        fb.templateLoader.load('menu', function (data) {
            self.template = data;
            self.render();
        });
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }
});

fb.views.About = Backbone.View.extend({

    initialize: function () {
        var self = this;
        fb.templateLoader.load('about', function (data) {
            self.template = data;
            self.render();
        });
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }

});

fb.views.Info = Backbone.View.extend({

    initialize: function () {
        var self = this;
        fb.templateLoader.load('info', function (data) {
            self.template = data;
            self.render();
        });
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }

});

fb.views.Contact = Backbone.View.extend({

    initialize: function () {
        var self = this;
        fb.templateLoader.load('contact', function (data) {
            self.template = data;
            self.render();
        });
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }

});