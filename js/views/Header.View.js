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
        'text!templates/Header.Template.html',
        ], function($, _, Backbone, headerTemplate) {

            App.HeaderView= Backbone.View.extend({

            //Declare a hash to hold your model data
            model: {},

            el: "#header",

            template: _.template(headerTemplate),

            //TODO: Put all event listener code here
            events: {
            },

            //TODO: Put all initialization code here
            initialize: function() {
                this.render();
            },

            //TODO: Put all render logic here
            render: function() {
                this.$el.html(this.template);
                return this;
            },


            });

            return App.HeaderView;
        });
}());
