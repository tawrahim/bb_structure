/**
 * TODO: add description of class
 * @author: 
 * @class: 
 * */

/* global define */
var App = App || {};

(function() {
    'use strict';

    define([
        'jquery',
        'underscore',
        'backbone',
        'text!templates/MainContent.Template.html',
        'models/MainContent.Model',
        'utility/Main.Utility',
        ], function($, _, Backbone, mainTemplate) {

            App.MainContentView= Backbone.View.extend({

            //Declare a hash to hold your model data
            model: {},

            el: "#maincontent",

            template: _.template(mainTemplate),

            //TODO: Put all event listener code here
            events: {
            },

            //TODO: Put all initialization code here
            initialize: function() {
                //Initialize our model
                this.model = new App.MainContentModel();

                //Render this view on when the class gets initialize
                this.render();
            },

            //TODO: Put all render logic here
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },


            });

            return App.MainContentView;
        });
}());
