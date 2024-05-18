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

class Todo{
  todo = []

  add(item){
    this.todo.push(item);
  }
  remove(idx){
    if(idx>=this.todo.length)throw new Error('index out of range')
    this.todo.splice(idx, 1)
  }
  get(idx){
    return this.todo[idx];
  }
  getAll(){
    return this.todo;
  }
  update(idx, item){
    if(idx>=this.todo.length)throw new Error('index out of range')
    this.todo[idx] = item;
  }
  clear(){
    this.todo = []
  }
  
}

try{
  let todo = new Todo()

  todo.add('finish the assignment')
  todo.add('go to the gym')

  todo.update(1, 'abc')

  console.log(todo.getAll())

  todo.clear()
  console.log(todo.getAll())
}
catch(err){
  console.log(err.message)
}
