install:
	npm ci

gendiff-h:
	node ./src/gendiff.js --help

lint:
	npm run lint

test:
	npm test

.PHONY: editjson gendiff