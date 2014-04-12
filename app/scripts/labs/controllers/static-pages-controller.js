/*global define*/
define(function (require) {
    'use strict';

    var StaticPagesController,
        Backbone = require('backbone'),
        HomeView = function () {},
        HelpView = function () {};

    StaticPagesController = function () {};

    StaticPagesController.prototype = {

        home: function () {
            this.view = new HomeView();
        },

        help: function () {
            this.view = new HelpView();
        }

    }

    return StaticPagesController;

});