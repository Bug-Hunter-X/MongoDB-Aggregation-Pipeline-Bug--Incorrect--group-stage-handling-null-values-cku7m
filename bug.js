```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* filter */ } },
  {$group: {_id: '$fieldName', sum: {$sum: '$value'}}},
  {$sort: {sum: -1}},
  {$limit: 10}
])
```