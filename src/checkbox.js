import TaskList from './tasksList.js';

export default class CheckboxControl {
  constructor() {
    this.checkboxes = document.querySelectorAll('.checkbox');
    this.taskDescriptions = document.querySelectorAll('.taskDescriptions');
    this.taskArr = [];
    this.completed();
  }

  completed() {
    this.checkboxes.forEach((checkbox, index) => checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        this.taskDescriptions[index].style.textDecoration = 'line-through';
        const stored = JSON.parse(localStorage.getItem('storedTasks'));
        this.taskArr = stored.map((task) => new TaskList(task.id, task.completed, task.description),
        );
        this.taskArr[index].completed = true;
        localStorage.setItem('storedTasks', JSON.stringify(this.taskArr));
      }
      else {
        this.taskDescriptions[index].style.textDecoration = 'none';
        const stored = JSON.parse(localStorage.getItem('storedTasks'));
        this.taskArr = stored.map((task) => new TaskList(task.id, task.completed, task.description),
        );
        this.taskArr[index].completed = false;
        localStorage.setItem('storedTasks', JSON.stringify(this.taskArr));
      }
    }));
  }
}