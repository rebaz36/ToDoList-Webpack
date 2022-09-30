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
    for (let index = 0; index < this.#toDo.length; index += 1) {
      this.#toDo[index].id = index;
    }
  }
}