import './style.css';
import icon from './icon.png';
import ToDolist from './todolist.js';
import { modificarBox, modifyDescription } from './modify.js';
// import complete from './delete.js';

const myToDolist = new ToDolist();

myToDolist.LoadToDoFromLocal();

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

    // eslint-disable-next-line
    function deleteToDo() {
      const idToDelete = deleteButton.id;
      myToDolist.DeleteToDo(idToDelete);
      myToDolist.reorder();
      myToDolist.SaveToDolistLocal();
      render();
    }
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('delButton');
    deleteButton.onclick = deleteToDo;
    deleteButton.id = toDo.id;
    element.appendChild(deleteButton);
  }
};

render();
// Controller
const button = document.querySelector('.input-btn');
button.addEventListener('click', () => {
  const titletextbox = document.getElementById('activity');
  const toDop = titletextbox.value;
  myToDolist.AddToDo(toDop, false);
  myToDolist.SaveToDolistLocal();
  titletextbox.value = '';
  render();
});

// complete(myToDolist, render);

const myIcon = new Image();
myIcon.src = icon;
myIcon.className = 'my-icon';
const iconelement = document.querySelector('.header');

iconelement.appendChild(myIcon);