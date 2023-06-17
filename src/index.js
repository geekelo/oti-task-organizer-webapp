import './style.css';
import ClearCompleted from './clearCompleted.js';
import PrintMe from './print.js';
import ShowDeleteBtn from './showDeletebtn.js';
import CheckboxControl from './checkbox.js';

const clearAllCompleted = new ClearCompleted();
const loadTasks = new PrintMe();
const updateIcon = new ShowDeleteBtn();
const ifchecked = new CheckboxControl();

export default clearAllCompleted;
export { updateIcon, ifchecked, loadTasks };