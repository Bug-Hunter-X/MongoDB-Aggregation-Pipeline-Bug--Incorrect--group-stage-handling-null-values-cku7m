# MongoDB Aggregation Pipeline Bug: Handling Null Values in $group

This repository demonstrates a common bug in MongoDB aggregation pipelines involving the `$group` operator and null values. The provided `bug.js` file contains an aggregation pipeline that produces incorrect results due to improper handling of nulls in the `$sum` accumulator.

The `bugSolution.js` file offers a corrected version of the pipeline, showcasing how to effectively handle null values to ensure accurate aggregation results.  The solution uses conditional aggregation to address the issue with nulls.