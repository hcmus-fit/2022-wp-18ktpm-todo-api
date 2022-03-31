const { db } = require('../../models/db');
const { ObjectId } = require('mongodb');

exports.list = async function() {
  const todos = await db().collection('todos').find().toArray();
  return todos;
};

exports.delete = async function(id) {
  await db().collection('todos').deleteOne({_id: new ObjectId(id) });
};