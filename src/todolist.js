export default class ToDolist {
  #toDo;

  constructor() {
    this.#toDo = [];
  }

  SetToDo(toDo) {
    this.#toDo = toDo;
  }

  get ToDo() {
    return this.#toDo;
  }

  reorder() {
    for (let Index = 0; Index < this.#toDo.length; Index += 1) {
      this.#toDo[Index].index = Index;
    }
  }

  // Methods
  AddToDo(description, completed) {
    const index = this.#toDo.length + 1;
    this.#toDo.push({
      description,
      completed,
      index,
    });
  }

  DeleteToDo(id) {
    this.#toDo.splice(id, 1);
  }

  SaveToDolistLocal() {
    localStorage.setItem('toDo', JSON.stringify(this.#toDo));
  }

  LoadToDoFromLocal() {
    const savedToDo = JSON.parse(localStorage.getItem('toDo'));

    if (Array.isArray(savedToDo)) {
      this.#toDo = savedToDo;
      return true;
    }
    return false;
  }
}