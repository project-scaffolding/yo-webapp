/* global mocha */
require(['../../app/scripts/labs/config/require'], function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        paths: {
            chai: '../../app/bower_components/chai/chai',
            sinon: '../../app/bower_components/sinon/lib/sinon'
        }
    });

    require([
        'chai'
    ], function (chai) {
        chai.should();
        window.expect = chai.expect;
        mocha.setup('bdd');

        require([
            'spec/specs.js'
        ], function () {
            mocha.run();
        });
    });

});