const todoList = [{
  name: 'clean table',
  dueDate: '2022-12-22'
}, 
{ 
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList(); //show default values of todoList


function renderTodoList() { 
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {

    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    //const { name, dueDate } = todoObject;  => Destructuring

    
    //Generating the HTML
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick = "
        todoList.splice(${i}, 1);
        renderTodoList(); //display updated list after deletion
        " class = "delete-todo-button">Delete</button>
    `;
    
    todoListHTML += html; //collect each line
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML; //put collection of all lines inside "div"
}



function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  //nothing inside "input" so innerHTML & innerText not used
  const name = inputElement.value; 

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({name: name, dueDate: dueDate});
//todoList.push({name, dueDate}); => SHORT-HAND PROPERTY

  inputElement.value = '';

  renderTodoList();
}
