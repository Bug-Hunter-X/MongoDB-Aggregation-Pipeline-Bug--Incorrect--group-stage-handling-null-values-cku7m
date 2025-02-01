```javascript
db.collection.aggregate([
  {$match: { /* filter */ } },
  {$group: {_id: '$fieldName', sum: {$sum: {$ifNull: ['$value', 0]}}}},
  {$sort: {sum: -1}},
  {$limit: 10}
])
```