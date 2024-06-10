/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const db = require('../db');

// Kõikide todos-de toomine
const getAll = async (done) => {
  let query = 'SELECT * FROM todos WHERE deleted_at IS NULL';
  if (done) {
    query += ' AND is_done = ?';
  }
  try {
    const [todosFromDB] = await db.query(query, [done]);
    return todosFromDB;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Todo toomine ID järgi
const getById = async (id) => {
  try {
    // const [todo] = await db.query('SELECT * FROM todos WHERE id = ?', [id]);
    const [result] = await db.query('UPDATE todos SET deleted_at = NOW() WHERE id = ?', [id]);
    console.log(result);
    return result[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Uue todo loomine
const create = async (newTodo, userId) => {
  const todo = {
    title: newTodo.title,
    description: newTodo.description || null,
    user_id: userId,
  };
  try {
    const [result] = await db.query('INSERT INTO todos SET ?', [todo]);
    console.log(result.insertId);
    return result.insertId;
  } catch (error) {
    return null;
  }
};

const update = async (id, updatedTodo) => {
  try {
    const [result] = await db.query('UPDATE todos SET ? WHERE id = ?', [updatedTodo, id]);
    return result.affectedRows;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
