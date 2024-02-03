.PHONY: editjson gendiff

editjson:
	nano package.json

gendiff-h:
	node gendiff.js -h
