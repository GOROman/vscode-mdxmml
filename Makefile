VERSION = 0.0.3dev
TARGET	= mdxmml-$(VERSION).vsix

all: $(TARGET)

$(TARGET): package.json syntaxes/mdx.tmLanguage.json snippets/mdx.snippets.json install-tools
	vsce package

install-tools:
	npm install -g vsce
#	npm install -g yo generator-code

