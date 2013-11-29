(function() {
    require.config({
      paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',

        // storage has built in support for requirejs
        // hence, it doesn't need to configured in 'shim'
        storage: 'libs/backbone/backbone.localStorage',
        text: 'libs/require/text'
      },

      shim: {

        underscore: {
          exports: '_'
        },

        backbone: {
          deps: [ 'underscore', 'jquery' ],
          exports: 'Backbone'
        }
      }

    });


    require([
            'backbone',
    ], function (Backbone) {
        
    });
}());
