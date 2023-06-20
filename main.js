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
//chaining


const todoCompleted = todos.filter(function(todo){
    return todos.isCompleted ===true;
}).map(function(todo){return todo.text});


 