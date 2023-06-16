import './style.css';
import PrintMe from './print.js';
import ShowDeleteBtn from './showDeletebtn.js';


const loadTasks = new PrintMe();
const updateIcon = new ShowDeleteBtn();

export default loadTasks;
export { updateIcon };