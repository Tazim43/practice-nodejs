/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todo = [];

  add(item) {
    this.todo.push(item);
  }
  remove(idx) {
    this.todo.splice(idx, 1);
  }
  get(idx) {
    if (idx < this.todo.length) return this.todo[idx];
    else return null;
  }
  getAll() {
    return this.todo;
  }
  update(idx, item) {
    if (idx < this.todo.length) this.todo[idx] = item;
  }
  clear() {
    this.todo = [];
  }
}

module.exports = Todo;
