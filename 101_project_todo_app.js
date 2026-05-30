// 101_project_todo_app.js
// Minimal in-memory to-do list CLI example

const todos = [];

function addTodo(text) {
  const id = todos.length + 1;
  todos.push({ id, text, done: false });
  return id;
}

function listTodos() {
  return todos.map(t => `${t.id}. [${t.done ? 'x' : ' '}] ${t.text}`).join('\n');
}

// Example usage
addTodo('Learn JavaScript basics');
addTodo('Build a small project');
console.log(listTodos());

// Next steps: persist to file, add CLI args, or build a web UI.