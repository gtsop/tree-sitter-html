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
    source_file: ($) => repeat(choice($.comment, $.start_tag, $.end_tag)),

    comment: (_) => seq("<!--", /[^-]*(-[^-]+)*?/, "-->"),

    start_tag: (_) => seq("<", /[a-z]*/, ">"),

    end_tag: (_) => seq("</", /[a-z]+/, ">"),
  },
});

