"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["clearCompleted"],{

/***/ "./src/clearCompleted.js":
/*!*******************************!*\
  !*** ./src/clearCompleted.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClearCompleted)
/* harmony export */ });
/* harmony import */ var _tasksList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksList.js */ "./src/tasksList.js");
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");



class ClearCompleted {
  constructor() {
    this.clearCompletedBtn = document.querySelector('#clearContainer');
    this.taskDisplay = new _print_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.taskList = [];
    this.clearCompletedBtn();
  }

  ClearCompleted() {
    this.clearCompletedBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const stored = JSON.parse(localStorage.getItem('storedTasks'));
      this.taskList = stored.map((task) => new _tasksList_js__WEBPACK_IMPORTED_MODULE_0__["default"](task.id, task.completed, task.description));
      this.taskList = this.taskList.filter((each) => each.completed !== true);

            // update Task IDs
            let newId = 0;
            this.addedTasks.forEach((eachItem) => {
              newId += 1;
              eachItem.id = newId;
            });
            
      localStorage.setItem('storedTasks', JSON.stringify(this.taskList));
      this.taskDisplay.displayTasks();
    });
      
  }
}

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrintMe)
/* harmony export */ });
/* harmony import */ var _tasksList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksList.js */ "./src/tasksList.js");
/* harmony import */ var _showDeletebtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showDeletebtn.js */ "./src/showDeletebtn.js");



class PrintMe {
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
    list.innerHTML = `<label><input type="checkbox" class="checkbox"><input type="text" class="taskDescriptions" value = ${task.description}></label>
    <span class="material-icons moreIcon">more_vert</span>
    <span class="material-icons deleteBtn">delete_outline</span>`;
    this.listContainer.appendChild(list);
  }

  removeBtnListener(e) {
    const stored = JSON.parse(localStorage.getItem('storedTasks'));
    this.addedTasks = stored.map(
      (item) => new _tasksList_js__WEBPACK_IMPORTED_MODULE_0__["default"](item.id, item.completed, item.description),
    );
    this.removeBtn.forEach((each, index) => {
      if (each === e.target) {
        this.addedTasks = this.addedTasks.filter((task, taskIndex) => taskIndex !== index);
      }
      // update Task IDs
      let newId = 0;
      this.addedTasks.forEach((eachItem) => {
        newId += 1;
        eachItem.id = newId;
      });
      localStorage.setItem('storedTasks', JSON.stringify(this.addedTasks));
      this.displayTasks();
    });
  }

  updateTaskDescription() {
    this.taskDescriptions.forEach((eachInput) => eachInput.addEventListener('change', (e) => {
      const stored = JSON.parse(localStorage.getItem('storedTasks'));
      this.addedTasks = stored.map(
        (item) => new _tasksList_js__WEBPACK_IMPORTED_MODULE_0__["default"](item.id, item.completed, item.description),
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
    this.hide3dots = new _showDeletebtn_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
        (task) => new _tasksList_js__WEBPACK_IMPORTED_MODULE_0__["default"](task.id, task.completed, task.description),
      );
      this.displayTasks();
    }
  }

  setStorage(id, completed, description) {
    const newTask = new _tasksList_js__WEBPACK_IMPORTED_MODULE_0__["default"](id, completed, description);
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


/***/ }),

/***/ "./src/showDeletebtn.js":
/*!******************************!*\
  !*** ./src/showDeletebtn.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowDeleteBtn)
/* harmony export */ });
class ShowDeleteBtn {
  constructor() {
    this.threedotsIcon = document.querySelectorAll('.moreIcon');
    this.deleteIcon = document.querySelectorAll('.deleteBtn');
    this.list = document.querySelectorAll('.listItems');
    this.setupListner();
  }

  setupListner() {
    this.threedotsIcon.forEach((each) => each.addEventListener('click', (e) => {
      this.threedotsIcon.forEach((each, index) => {
        if (each === e.target) {
          this.deleteIcon[index].style.display = 'flex';
          each.style.display = 'none';
          this.list[index].style.backgroundColor = '#ece9f1';
        }
      });
    }));
  }
}

/***/ }),

/***/ "./src/tasksList.js":
/*!**************************!*\
  !*** ./src/tasksList.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskList)
/* harmony export */ });
class TaskList {
  constructor(id, completed, description) {
    this.id = id;
    this.completed = completed;
    this.description = description;
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/clearCompleted.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXJDb21wbGV0ZWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNMO0FBQ2pDO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsMkJBQTJCLGlEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscURBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCc0M7QUFDUztBQUMvQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwySEFBMkgsaUJBQWlCO0FBQzVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseURBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwR2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NsZWFyQ29tcGxldGVkLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2hvd0RlbGV0ZWJ0bi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdGFza3NMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi90YXNrc0xpc3QuanNcIjtcclxuaW1wb3J0IFByaW50TWUgZnJvbSBcIi4vcHJpbnQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsZWFyQ29tcGxldGVkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2xlYXJDb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXJDb250YWluZXInKTtcclxuICAgIHRoaXMudGFza0Rpc3BsYXkgPSBuZXcgUHJpbnRNZSgpO1xyXG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5jbGVhckNvbXBsZXRlZEJ0bigpO1xyXG4gIH1cclxuXHJcbiAgQ2xlYXJDb21wbGV0ZWQoKSB7XHJcbiAgICB0aGlzLmNsZWFyQ29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBzdG9yZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRUYXNrcycpKTtcclxuICAgICAgdGhpcy50YXNrTGlzdCA9IHN0b3JlZC5tYXAoKHRhc2spID0+IG5ldyBUYXNrTGlzdCh0YXNrLmlkLCB0YXNrLmNvbXBsZXRlZCwgdGFzay5kZXNjcmlwdGlvbikpO1xyXG4gICAgICB0aGlzLnRhc2tMaXN0ID0gdGhpcy50YXNrTGlzdC5maWx0ZXIoKGVhY2gpID0+IGVhY2guY29tcGxldGVkICE9PSB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBUYXNrIElEc1xyXG4gICAgICAgICAgICBsZXQgbmV3SWQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmFkZGVkVGFza3MuZm9yRWFjaCgoZWFjaEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBuZXdJZCArPSAxO1xyXG4gICAgICAgICAgICAgIGVhY2hJdGVtLmlkID0gbmV3SWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrTGlzdCkpO1xyXG4gICAgICB0aGlzLnRhc2tEaXNwbGF5LmRpc3BsYXlUYXNrcygpO1xyXG4gICAgfSk7XHJcbiAgICAgIFxyXG4gIH1cclxufSIsImltcG9ydCBUYXNrTGlzdCBmcm9tICcuL3Rhc2tzTGlzdC5qcyc7XHJcbmltcG9ydCBTaG93RGVsZXRlQnRuIGZyb20gJy4vc2hvd0RlbGV0ZWJ0bi5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmludE1lIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYWRkZWRUYXNrcyA9IFtdO1xyXG4gICAgdGhpcy5saXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXJzJyk7XHJcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG4gICAgdGhpcy50ZXh0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkbGlzdCcpO1xyXG4gICAgdGhpcy5jaGVja1N0b3JhZ2UoKTtcclxuICAgIHRoaXMuc2V0dXBMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy51cGRhdGVUYXNrRGVzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRhc2tzKHRhc2spIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxpc3QuY2xhc3NOYW1lID0gJ2xpc3RJdGVtcyBsaXN0c2JnY29sb3InO1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSBgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0YXNrRGVzY3JpcHRpb25zXCIgdmFsdWUgPSAke3Rhc2suZGVzY3JpcHRpb259PjwvbGFiZWw+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1vcmVJY29uXCI+bW9yZV92ZXJ0PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkZWxldGVCdG5cIj5kZWxldGVfb3V0bGluZTwvc3Bhbj5gO1xyXG4gICAgdGhpcy5saXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQnRuTGlzdGVuZXIoZSkge1xyXG4gICAgY29uc3Qgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFza3MnKSk7XHJcbiAgICB0aGlzLmFkZGVkVGFza3MgPSBzdG9yZWQubWFwKFxyXG4gICAgICAoaXRlbSkgPT4gbmV3IFRhc2tMaXN0KGl0ZW0uaWQsIGl0ZW0uY29tcGxldGVkLCBpdGVtLmRlc2NyaXB0aW9uKSxcclxuICAgICk7XHJcbiAgICB0aGlzLnJlbW92ZUJ0bi5mb3JFYWNoKChlYWNoLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoZWFjaCA9PT0gZS50YXJnZXQpIHtcclxuICAgICAgICB0aGlzLmFkZGVkVGFza3MgPSB0aGlzLmFkZGVkVGFza3MuZmlsdGVyKCh0YXNrLCB0YXNrSW5kZXgpID0+IHRhc2tJbmRleCAhPT0gaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHVwZGF0ZSBUYXNrIElEc1xyXG4gICAgICBsZXQgbmV3SWQgPSAwO1xyXG4gICAgICB0aGlzLmFkZGVkVGFza3MuZm9yRWFjaCgoZWFjaEl0ZW0pID0+IHtcclxuICAgICAgICBuZXdJZCArPSAxO1xyXG4gICAgICAgIGVhY2hJdGVtLmlkID0gbmV3SWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFkZGVkVGFza3MpKTtcclxuICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGFza0Rlc2NyaXB0aW9uKCkge1xyXG4gICAgdGhpcy50YXNrRGVzY3JpcHRpb25zLmZvckVhY2goKGVhY2hJbnB1dCkgPT4gZWFjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2tzJykpO1xyXG4gICAgICB0aGlzLmFkZGVkVGFza3MgPSBzdG9yZWQubWFwKFxyXG4gICAgICAgIChpdGVtKSA9PiBuZXcgVGFza0xpc3QoaXRlbS5pZCwgaXRlbS5jb21wbGV0ZWQsIGl0ZW0uZGVzY3JpcHRpb24pLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRhc2tEZXNjcmlwdGlvbnMuZm9yRWFjaCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZWFjaCA9PT0gZS50YXJnZXQpIHtcclxuICAgICAgICAgIHRoaXMuYWRkZWRUYXNrc1tpbmRleF0uZGVzY3JpcHRpb24gPSB0aGlzLnRhc2tEZXNjcmlwdGlvbnNbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuYWRkZWRUYXNrcykpO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVRhc2tzKCkge1xyXG4gICAgdGhpcy5saXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5hZGRlZFRhc2tzLmZvckVhY2goKHRhc2spID0+IHRoaXMuY3JlYXRlVGFza3ModGFzaykpO1xyXG4gICAgdGhpcy5yZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlQnRuJyk7XHJcbiAgICB0aGlzLmhpZGUzZG90cyA9IG5ldyBTaG93RGVsZXRlQnRuKCk7XHJcbiAgICB0aGlzLmhpZGUzZG90cy5zZXR1cExpc3RuZXIoKTtcclxuICAgIHRoaXMucmVtb3ZlQnRuLmZvckVhY2goKGVhY2gpID0+IGVhY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZUJ0bkxpc3RlbmVyKGUpO1xyXG4gICAgfSkpO1xyXG4gICAgdGhpcy50YXNrRGVzY3JpcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tEZXNjcmlwdGlvbnMnKTtcclxuICAgIHRoaXMudXBkYXRlVGFza0Rlc2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja1N0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCBzdG9yZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRUYXNrcycpKTtcclxuICAgIGlmIChzdG9yZWQpIHtcclxuICAgICAgdGhpcy5hZGRlZFRhc2tzID0gc3RvcmVkLm1hcChcclxuICAgICAgICAodGFzaykgPT4gbmV3IFRhc2tMaXN0KHRhc2suaWQsIHRhc2suY29tcGxldGVkLCB0YXNrLmRlc2NyaXB0aW9uKSxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFN0b3JhZ2UoaWQsIGNvbXBsZXRlZCwgZGVzY3JpcHRpb24pIHtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFza0xpc3QoaWQsIGNvbXBsZXRlZCwgZGVzY3JpcHRpb24pO1xyXG4gICAgdGhpcy5hZGRlZFRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFkZGVkVGFza3MpKTtcclxuICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cExpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHRoaXMudGV4dEZpZWxkLnZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLnRleHRGaWVsZC52YWx1ZTtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkZWRUYXNrcy5sZW5ndGggKyAxO1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RvcmFnZShpZCwgY29tcGxldGVkLCBkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgdGhpcy50ZXh0RmllbGQudmFsdWUgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dEZWxldGVCdG4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aHJlZWRvdHNJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vcmVJY29uJyk7XHJcbiAgICB0aGlzLmRlbGV0ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlQnRuJyk7XHJcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdEl0ZW1zJyk7XHJcbiAgICB0aGlzLnNldHVwTGlzdG5lcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBMaXN0bmVyKCkge1xyXG4gICAgdGhpcy50aHJlZWRvdHNJY29uLmZvckVhY2goKGVhY2gpID0+IGVhY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnRocmVlZG90c0ljb24uZm9yRWFjaCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZWFjaCA9PT0gZS50YXJnZXQpIHtcclxuICAgICAgICAgIHRoaXMuZGVsZXRlSWNvbltpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgIGVhY2guc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlY2U5ZjEnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0xpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBjb21wbGV0ZWQsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9