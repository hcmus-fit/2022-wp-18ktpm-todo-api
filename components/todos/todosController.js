const todosService = require('./todosService');
exports.list = async function(req, res) {
  const todos = await todosService.list();
  res.json(todos);
};

exports.delete = async function(req, res) {
  const {id}  = req.params;
  await todosService.delete(id);
  res.status(200).end();
};