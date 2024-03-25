const expectedStringFromGenerateDiff = `
[                             
  {                           
    "type": "nested",         
    "key": "common",          
    "oldValue": "object",     
    "newValue": "object",     
    "children": [             
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
        "newValue": "-",
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
        "type": "nested",
        "key": "setting6",
        "oldValue": "object",
        "newValue": "object",
        "children": [
          {
            "type": "not_changed",
            "key": "key",
            "oldValue": "value",
            "newValue": "value",
            "children": []
          },
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
            "type": "added",
            "key": "ops",
            "oldValue": "-",
            "newValue": "vops",
            "children": []
          }
        ]
      },
      {
        "type": "added",
        "key": "follow",
        "oldValue": "-",
        "newValue": false,
        "children": []
      },
      {
        "type": "added",
        "key": "setting4",
        "oldValue": "-",
        "newValue": "blah blah",
        "children": []
      },
      {
        "type": "nested",
        "key": "setting5",
        "oldValue": "-",
        "newValue": "object",
        "children": [
          {
            "type": "added",
            "key": "key5",
            "oldValue": "-",
            "newValue": "value5",
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
        "type": "nested",
        "key": "nest",
        "oldValue": "object",
        "newValue": "str",
        "children": [
          {
            "type": "removed",
            "key": "key",
            "oldValue": "value",
            "newValue": "-",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "type": "nested",
    "key": "group2",
    "oldValue": "object",
    "newValue": "-",
    "children": [
      {
        "type": "removed",
        "key": "abc",
        "oldValue": 12345,
        "newValue": "-",
        "children": []
      },
      {
        "type": "nested",
        "key": "deep",
        "oldValue": "object",
        "newValue": "-",
        "children": [
          {
            "type": "removed",
            "key": "id",
            "oldValue": 45,
            "newValue": "-",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "type": "nested",
    "key": "group3",
    "oldValue": "-",
    "newValue": "object",
    "children": [
      {
        "type": "nested",
        "key": "deep",
        "oldValue": "-",
        "newValue": "object",
        "children": [
          {
            "type": "nested",
            "key": "id",
            "oldValue": "-",
            "newValue": "object",
            "children": [
              {
                "type": "added",
                "key": "number",
                "oldValue": "-",
                "newValue": 45,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "type": "added",
        "key": "fee",
        "oldValue": "-",
        "newValue": 100500,
        "children": []
      }
    ]
  }
]
`;

export default expectedStringFromGenerateDiff;
