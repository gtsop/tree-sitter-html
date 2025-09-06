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
    source_file: ($) => repeat(choice($.comment, $._full_tag)),

    comment: (_) => seq("<!--", /[^-]*(-[^-]+)*?/, "-->"),

    start_tag: ($) =>
      seq(
        "<",
        /[a-z]*/,
        optional(
          repeat(seq($.attribute_name, optional(seq("=", $.attribute_value)))),
        ),
        ">",
      ),

    _full_tag: ($) =>
      seq(
        $.start_tag,
        optional(repeat(choice($.text, $._full_tag, $.comment))),
        $.end_tag,
      ),

    end_tag: (_) => seq("</", /[a-z]+/, ">"),

    attribute_name: (_) => token(/[a-z]+/),

    attribute_value: (_) => seq('"', /[a-z]+/, '"'),

    text: (_) => /[^<]+/,
  },
});

