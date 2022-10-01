const removeCompleted = document.querySelector('.clear-btn');
export default function complete(myToDolist, render) {
  removeCompleted.addEventListener('click', () => {
    const temp = myToDolist.ToDo.filter(({ completed }) => !completed);
    myToDolist.SetToDo(temp);
    myToDolist.reorder();
    myToDolist.SaveToDolistLocal();
    render();
  });
}