'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , CharSet = require('chc').CharSet
    
    /* in-package */
    , PATTERNS = require('./charsets')
    ;

const chcPosix = { CharSet };

chcPosix.posix = function(name) {
    let pattern = PATTERNS[name];
    
    let charsets = [];
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] == '\u005c' /* anti-slash */ ) {
            i++;
        }
        if (pattern[i+1] == '-') {
            charsets.push(new CharSet(pattern[i], pattern[i+2]));
            i += 2;
        }
        else {
            charsets.push(pattern[i]);
        }
    }

    return CharSet.concat.apply(CharSet, charsets);
};

module.exports = chcPosix;