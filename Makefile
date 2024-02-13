install:
	npm ci

gendiff-h:
	node ./src/gendiff.js --help

lint:
	npm run lint

test:
	npm test

test-coverage:
	npm run test-coverage
    

.PHONY: editjson gendiff