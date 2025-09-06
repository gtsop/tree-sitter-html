package tree_sitter_html_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_html "github.com/gtsop/tree-sitter-html.git/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_html.Language())
	if language == nil {
		t.Errorf("Error loading Html grammar")
	}
}
