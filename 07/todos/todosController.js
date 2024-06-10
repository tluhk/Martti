const todosService = require('./todosService');

const getAll = async (req, res) => {
  const done = req.query?.done;
  const todos = await todosService.getAll(done);
  return res.status(200).json({
    success: true,
    message: 'List of all todos',
    todos,
  });
};

const getById = async (req, res) => {
  const id = Number(req.params.id);
  const todo = await todosService.getById(id);
  if (!todo) {
    return res.status(404).json({
      success: false,
      message: `Todo with id: ${id} does not exist`,
    });
  }
  return res.status(200).json({
    success: true,
    message: `Todo with id: ${id}`,
    todo,
  });
};

const create = async (req, res) => {
  const {
    title, description,
  } = req.body;
  if (!title) {
    return res.status(400).json({
      success: false,
      message: 'User ID and title are required',
    });
  }
  const newTodo = {
    title,
    description,
  };
  const todo = await todosService.create(newTodo, res.locals.id);
  return res.status(201).json({
    success: true,
    message: 'New todo is created',
    todo,
  });
};

const update = async (req, res) => {
  const id = Number(req.params.id);
  const {
    title, description, isDone,
  } = req.body;
  const todo = await todosService.getById(id);
  console.log(todo);
  if (!todo) {
    return res.status(404).json({
      success: false,
      message: `Todo with id: ${id} does not exist`,
    });
  }
  const updatedTodo = {
    title: title || todo.title,
    description: description || todo.description,
    is_done: isDone || todo.is_done,
  };
  console.log(updatedTodo);
  const result = await todosService.update(id, updatedTodo);
  if (!result) {
    return res.status(500).json({
      success: false,
      message: `Todo with id: ${id} is not updated`,
    });
  }
  return res.status(200).json({
    success: true,
    message: `Todo with id: ${id} is updated`,
    result,
  });
};

module.exports = {
  getAll, getById, create, update,
};
