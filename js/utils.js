var MobileApp = function () {

    this.initialize = function () {
        this.models = {};
        this.views = {};
        this.templateLoader = new this.TemplateLoader();
    };

    this.TemplateLoader = function () {

        this.templates = {};

        this.load = function (name, callback) {
            var self = this;
            if (self.templates[name]) {
                callback(self.templates[name]);
            } else {
                $.get('tpl/' + name + '.html', function (data) {
                    self.templates[name] = Handlebars.compile(data);
                    callback(self.templates[name]);
                }, 'text');
            }
        };

        // Get template by name from hash of preloaded templates
        this.get = function (name) {
            return this.templates[name];
        };

    };

    this.alert = function (message, title) {
        if (typeof(title) === 'undefined') title = "Sarah";
        if (navigator.notification) {
            navigator.notification.alert(
                message,
                null, // callback
                title,
                'OK' // Button label
            );
        } else {
            alert(title + ": " + message);
        }
    };

    this.initialize();

};