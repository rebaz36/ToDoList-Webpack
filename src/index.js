import './style.css';
import icon from './icon.png';

const todolist = [{ description: 'Learn webpack', completed: false, index: 1 }, { description: 'Learn React', completed: false, index: 2 }, { description: 'Learn React Native', completed: false, index: 0 }];

todolist.sort((a, b) => a.index - b.index);

// eslint-disable-next-line no-unused-vars
window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.todo-list').innerHTML = todolist.map((todo) => `<li class="todo-item">
                <input class="item-input" type="checkbox" data-index="${todo.index}" id="item${todo.index}" ${todo.completed ? 'checked' : ''}/>
                <label class="item-label" for="item${todo.index}">${todo.description}</label>
            </li>`).join('');
});

const myIcon = new Image();
myIcon.src = icon;
myIcon.className = 'my-icon';
const iconelement = document.querySelector('.header');
iconelement.appendChild(myIcon);