const expectedStringFromGenerateDiff = `
[
  {
    "type": "nested",
    "key": "common",
    "oldValue": "object",
    "newValue": "object",
    "children": [
      {
        "type": "added",
        "key": "follow",
        "newValue": false,
        "children": []
      },
      {
        "type": "not_changed",
        "key": "setting1",
        "oldValue": "Value 1",
        "newValue": "Value 1",
        "children": []
      },
      {
        "type": "removed",
        "key": "setting2",
        "oldValue": 200,
        "children": []
      },
      {
        "type": "changed",
        "key": "setting3",
        "oldValue": true,
        "newValue": null,
        "children": []
      },
      {
        "type": "added",
        "key": "setting4",
        "newValue": "blah blah",
        "children": []
      },
      {
        "type": "added",
        "key": "setting5",
        "newValue": {
          "key5": "value5"
        },
        "children": []
      },
      {
        "type": "nested",
        "key": "setting6",
        "oldValue": "object",
        "newValue": "object",
        "children": [
          {
            "type": "nested",
            "key": "doge",
            "oldValue": "object",
            "newValue": "object",
            "children": [
              {
                "type": "changed",
                "key": "wow",
                "oldValue": "",
                "newValue": "so much",
                "children": []
              }
            ]
          },
          {
            "type": "not_changed",
            "key": "key",
            "oldValue": "value",
            "newValue": "value",
            "children": []
          },
          {
            "type": "added",
            "key": "ops",
            "newValue": "vops",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "type": "nested",
    "key": "group1",
    "oldValue": "object",
    "newValue": "object",
    "children": [
      {
        "type": "changed",
        "key": "baz",
        "oldValue": "bas",
        "newValue": "bars",
        "children": []
      },
      {
        "type": "not_changed",
        "key": "foo",
        "oldValue": "bar",
        "newValue": "bar",
        "children": []
      },
      {
        "type": "changed",
        "key": "nest",
        "oldValue": {
          "key": "value"
        },
        "newValue": "str",
        "children": []
      }
    ]
  },
  {
    "type": "removed",
    "key": "group2",
    "oldValue": {
      "abc": 12345,
      "deep": {
        "id": 45
      }
    },
    "children": []
  },
  {
    "type": "added",
    "key": "group3",
    "newValue": {
      "deep": {
        "id": {
          "number": 45
        }
      },
      "fee": 100500
    },
    "children": []
  }
]
`;

export default expectedStringFromGenerateDiff;
