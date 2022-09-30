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

export { modificarBox, modifyDescription, deleteToDo };