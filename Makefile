VERSION = 0.0.2
TARGET	= mdxmml-$(VERSION).vsix

all: $(TARGET) install-tools

$(TARGET): package.json syntaxes/mdx.tmLanguage.json snippets/mdx.snippets.json
	vsce package

install-tools:
#	npm install -g yo generator-code
	npm install -g vsce
