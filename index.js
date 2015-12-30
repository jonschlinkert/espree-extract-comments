/*!
 * espree-extract-comments <https://github.com/jonschlinkert/espree-extract-comments>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var espree = require('espree');

/**
 * Extract code comments from the given `string`.
 *
 * ```js
 * var extract = require('espree-extract-comments');
 * extract('// this is a code comment');
 * ```
 * @param  {String} `string`
 * @param  {Object} `options` Options to pass to espree.
 * @return {Object} Object of code comments.
 * @api public
 */

module.exports = function(str) {
  var ast = espree.parse(str, {
    // attach range information to each node
    range: true,

    // attach line/column location information to each node
    loc: true,

    // create a top-level comments array containing all comments
    comments: true,

    // attach comments to the closest relevant node
    // as leadingComments and trailingComments
    attachComment: true,
  });

  return ast.comments;
};
