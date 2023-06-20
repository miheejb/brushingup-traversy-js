const todos = [
  {
    id: 1,
    text: "take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with bobo",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: true,
  },

];
//forEach, map(returns in array), filter

todos.forEach(function(todo){
    return console.log(todo.text);
})

const todoText = todo.map(function(todo){
    return todo.text;
})

const todoCompleted = todos.filter(function(todo){
    return todos.isCompleted ===true;
});

console.log(todoCompleted);

 