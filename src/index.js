import './style.css';
import icon from './icon.png';
import { render, myToDolist } from './modify.js';
import complete from './delete.js';

myToDolist.LoadToDoFromLocal();

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

complete(myToDolist, render);

const myIcon = new Image();
myIcon.src = icon;
myIcon.className = 'my-icon';
const iconelement = document.querySelector('.header');

iconelement.appendChild(myIcon);