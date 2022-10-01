import ToDolist from './todolist.js';

const myToDolist = new ToDolist();

function modificarBox(index, valor, myToDolist) {
  myToDolist.ToDo[index].completed = valor;
  myToDolist.SaveToDolistLocal();
}

function modifyDescription(index, valor, myToDolist) {
  myToDolist.ToDo[index].activity = valor;
  myToDolist.SaveToDolistLocal();
}

function deleteToDo(idToDelete, myToDolist, render) {
  myToDolist.DeleteToDo(idToDelete);
  myToDolist.reorder();
  myToDolist.SaveToDolistLocal();
  render();
}

const render = () => {
  document.querySelector('.ToDoList').innerHTML = '';
  for (let index = 0; index < myToDolist.ToDo.length; index += 1) {
    const toDo = myToDolist.ToDo[index];

    const List = document.querySelector('.ToDoList');
    const element = document.createElement('li');
    element.classList.add('eachToDo');
    const completed = document.createElement('input');
    completed.type = 'checkbox';
    const inputTask = document.createElement('input');
    inputTask.type = 'text';
    inputTask.classList.add('item-input');
    completed.classList.add('completed');
    inputTask.value = toDo.description;
    element.append(completed, inputTask);
    completed.setAttribute('id', toDo.id);
    inputTask.disabled = false;
    completed.checked = toDo.completed;
    if (completed.checked) {
      inputTask.style.textDecoration = 'line-through';
    }

    inputTask.addEventListener('change', () => {
      modifyDescription(index, inputTask.value, myToDolist);
    });

    completed.addEventListener('click', () => {
      modificarBox(index, completed.checked, myToDolist);

      if (completed.checked) {
        inputTask.style.textDecoration = 'line-through';
      } else {
        inputTask.style.textDecoration = 'none';
      }
    });

    List.appendChild(element);

    // Remove Button
    const deleteButton = document.createElement('input-btn');
    const idToDelete = deleteButton.id;

    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('delButton');
    deleteButton.onclick = deleteToDo(idToDelete, myToDolist, render);
    deleteButton.id = toDo.id;
    element.appendChild(deleteButton);
  }
};

export { render, myToDolist };