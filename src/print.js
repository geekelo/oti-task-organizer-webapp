export default class PrintMe {
  constructor() {
    this.addedTasks = [
      {
        id: 1,
        completed: false,
        description: 'Setup webpack',
      },
      {
        id: 2,
        completed: false,
        description: 'Set up webpack dev-server',
      },
      {
        id: 3,
        completed: false,
        description: 'Work on project',
      },
    ];

    this.listContainer = document.querySelector('.listContainers');
    this.displayTasks();
  }

  createTasks(task) {
    const list = document.createElement('li');
    list.className = 'listItems listsbgcolor';
    list.innerHTML = `${task.description} <span class="material-icons">more_vert</span>`;

    this.listContainer.appendChild(list);
  }

  displayTasks() {
    this.listContainer.innerHTML = '';
    this.addedTasks.forEach((task) => this.createTasks(task));
  }
}
