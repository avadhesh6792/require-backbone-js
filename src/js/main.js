require.config({
    paths: {
        "jquery": 'lib/jquery',
        "backbone": 'lib/backbone',
        "underscore": 'lib/underscore',
        "text": 'plugin/text',
        "bootstrapJs": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.bundle.min"
    },
    shim: {
        'myuser': {
            deps : ['backbone'],
        }
    }
});

require(['app/router/app-router']);