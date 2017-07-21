/*
  Copyright IBM Corp. 2017. All Rights Reserved.

  This code may only be used under the Apache 2.0 license found at
  http://www.apache.org/licenses/LICENSE-2.0.txt.

  Authors:
  - Jesús Pérez <jesusper@us.ibm.com>
*/

'use strict';

const assert = require('assert');

const method = require('../lib/utils').pathToTag;


describe('sim:utils:pathToTag', () => {
  // We can use this function here to get the name of this file
  // because we're testing it.
  it('should work with a valid file name', () => assert.equal('index', method('./a/b/c/index.js')));


  it('should fail with an invalid file name', () => assert.throws(
    () => { method('a'); },
    // eslint-disable-next-line comma-dangle
    /Not valid path/
  ));
});
