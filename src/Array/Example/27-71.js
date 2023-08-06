const todos = [
  {id: 1, content: "HTML", complete: false},
  {id: 2, content: "CSS", complete: true},
  {id: 3, content: "Javascript", complete: false},
];
const _todos = todos.slice();
console.log(_todos === todos);
console.log(_todos[0] === todos[0]);
