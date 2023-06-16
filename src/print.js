import TaskList from './tasksList.js';
import ShowDeleteBtn from './showDeletebtn.js';

export default class PrintMe {
  constructor() {
    this.addedTasks = [];
    this.listContainer = document.querySelector('.listContainers');
    this.form = document.querySelector('.form');
    this.textField = document.querySelector('.addlist');
    this.checkStorage();
    this.setupListener();
    this.updateTaskDescription();
  }

  createTasks(task) {
    const list = document.createElement('div');
    list.className = 'listItems listsbgcolor';
    list.innerHTML = `<input type="text" class="taskDescriptions" value = ${task.description}> <span class="material-icons moreIcon">more_vert</span> <span class="material-icons deleteBtn">delete_outline</span>`;
    this.listContainer.appendChild(list);
  }

  removeBtnListener(e) {
    const stored = JSON.parse(localStorage.getItem('storedTasks'));
    this.addedTasks = stored.map(
      (item) => new TaskList(item.id, item.completed, item.description),
    );
    this.removeBtn.forEach((each, index) => {
      if (each === e.target) {
        this.addedTasks = this.addedTasks.filter(function(task, taskIndex) {
          if (taskIndex !== index) {
            return task;
          }
        });

        // update Task IDs
        let newId = 0;
        this.addedTasks.forEach((eachItem) => {
          newId += 1;
          eachItem.id = newId;
        });
        localStorage.setItem('storedTasks', JSON.stringify(this.addedTasks));
        this.displayTasks();
      }
    });
  }

  updateTaskDescription() {
    this.taskDescriptions.forEach((eachInput) => eachInput.addEventListener('change', (e) => {
      const stored = JSON.parse(localStorage.getItem('storedTasks'));
      this.addedTasks = stored.map(
        (item) => new TaskList(item.id, item.completed, item.description),
      );
      this.taskDescriptions.forEach((each, index) => {
        if (each === e.target) {
          this.addedTasks[index].description = this.taskDescriptions[index].value;
        }
      });
      localStorage.setItem('storedTasks', JSON.stringify(this.addedTasks));
    }));
  }

  displayTasks() {
    this.listContainer.innerHTML = '';
    this.addedTasks.forEach((task) => this.createTasks(task));
    this.removeBtn = document.querySelectorAll('.deleteBtn');
    this.hide3dots = new ShowDeleteBtn();
    this.hide3dots.setupListner();
    this.removeBtn.forEach((each) => each.addEventListener('click', (e) => {
      this.removeBtnListener(e);
    }));
    this.taskDescriptions = document.querySelectorAll('.taskDescriptions');
    this.updateTaskDescription();
  }

  checkStorage() {
    const stored = JSON.parse(localStorage.getItem('storedTasks'));
    if (stored) {
      this.addedTasks = stored.map(
        (task) => new TaskList(task.id, task.completed, task.description),
      );
      this.displayTasks();
    }
  }

  setStorage(id, completed, description) {
    const newTask = new TaskList(id, completed, description);
    this.addedTasks.push(newTask);
    localStorage.setItem('storedTasks', JSON.stringify(this.addedTasks));
    this.displayTasks();
  }

  setupListener() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.textField.value) {
        const description = this.textField.value;
        const id = this.addedTasks.length + 1;
        const completed = false;
        this.setStorage(id, completed, description);
        this.textField.value = '';
      }
    });
  }
}
