import TaskList from './tasksList.js';

export default class CheckboxControl {
  constructor() {
    this.checkboxes = document.querySelectorAll('.checkbox');
    this.taskDescriptions = document.querySelectorAll('.taskDescriptions');
    this.taskList = [];
    this.completed();
  }

  completed() {
    this.checkboxes.forEach((checkbox, index) => checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        this.taskDescriptions[index].style.textDecoration = 'line-through';
        const stored = JSON.parse(localStorage.getItem('storedTasks'));
        this.taskList = stored.map((task) => {
          return new TaskList(task.id, task.completed, task.description)
        },);
        this.taskList[index].completed = true;
        localStorage.setItem('storedTasks', JSON.stringify(this.taskList));
      }
      else {
        this.taskDescriptions[index].style.textDecoration = 'none';
        const stored = JSON.parse(localStorage.getItem('storedTasks'));
        this.taskList = stored.map((task) => {
          new TaskList(task.id, task.completed, task.description)
        });
        this.taskList[index].completed = false;
        localStorage.setItem('storedTasks', JSON.stringify(this.taskList));
      }
    }));
  }
}