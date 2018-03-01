'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    
    /* in-package */
    , chc = require('../index')
    ;

describe('Basic', () => {
    
    it('lower', () => {
        let cs = chc.posix('lower');
        assert.equal(cs.length, 26);
    });

    it('upper', () => {
        let cs = chc.posix('upper');
        assert.equal(cs.length, 26);
    });

    it('number', () => {
        let cs = chc.posix('number');
        assert.equal(cs.length, 10);
    });
    
    it('alpha', () => {
        let cs = chc.posix('alpha');
        assert.equal(cs.length, 52);
    });

    it('alnum', () => {
        let cs = chc.posix('alnum');
        assert.equal(cs.length, 62);
    });

    it('xdigit', () => {
        let cs = chc.posix('xdigit');
        assert.equal(cs.length, 22);
    });
});