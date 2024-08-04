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

//forEach() loops through array, store in variable, print in console
  todoList.forEach((todoObject, index) => {
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    
    //Generating the HTML
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class = "delete-todo-button js-delete-todo-button">Delete</button>
    `;
    
    todoListHTML += html; //collect each line
  });


  document.querySelector('.js-todo-list').innerHTML =   todoListHTML; //put collection of all lines inside "div" on webpage


  //.querySelectorAll gives all elements on webpage
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {

        console.log(index); //CLOSURE (index)

        todoList.splice(index, 1);
        renderTodoList();
      });
  });
}

/*
***CLOSURE***
- If a function has access to a value, it will always have access to that value. The value gets packaged together (enclosed) with the function
*/


document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

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
