function modificarBox(index, valor, myToDolist) {
  myToDolist.ToDo[index].completed = valor;
  myToDolist.SaveToDolistLocal();
}

function modifyDescription(index, valor, myToDolist) {
  myToDolist.ToDo[index].activity = valor;
  myToDolist.SaveToDolistLocal();
}

export { modificarBox, modifyDescription };