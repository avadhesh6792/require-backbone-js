require.config({
    paths: {
        "jquery": 'lib/jquery',
        "backbone": 'lib/backbone',
        "underscore": 'lib/underscore',
        "text": 'plugin/text'
    },
    shim: {
        'myuser': {
            deps : ['backbone'],
        }
    }
});

require(['app/router/app-router']);