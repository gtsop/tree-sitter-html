/**
 * @file html syntax
 * @author George Tsopanoglou <gtsop+github@protonmail.com>
 * @license AGPLv3
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "html",

  rules: {
    source_file: ($) => repeat($.comment),

    comment: (_) => seq("<!--", /[^-]*(-[^-]+)*?/, "-->"),
  },
});

