import TaskList from './tasksList.js';
import PrintMe from './print.js';

export default class ClearCompleted {
  constructor() {
    this.clearCompletedBtn = document.querySelector('#clearContainer');
    this.taskList = [];
    this.clearCompletedTasks();
  }

  clearCompletedTasks() {
    this.clearCompletedBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const stored = JSON.parse(localStorage.getItem('storedTasks'));
      this.taskList = stored.map((task) => new TaskList(task.id, task.completed, task.description));
      this.taskList = this.taskList.filter((each) => each.completed !== true);

      // update Task IDs
      let newId = 0;
      this.taskList.forEach((eachItem) => {
        newId += 1;
        eachItem.id = newId;
      });

      localStorage.setItem('storedTasks', JSON.stringify(this.taskList));
      this.taskDisplay = new PrintMe();
      this.taskDisplay.displayTasks();
    });
  }
}