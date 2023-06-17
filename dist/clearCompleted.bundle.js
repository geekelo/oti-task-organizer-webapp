"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["clearCompleted"],{

/***/ "./src/checkbox.js":
/*!*************************!*\
  !*** ./src/checkbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckboxControl)
/* harmony export */ });
/* harmony import */ var _tasksList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksList.js */ "./src/tasksList.js");


class CheckboxControl {
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
        this.taskArr = stored.map((task) => new _tasksList_js__WEBPACK_IMPORTED_MODULE_0__["default"](task.id, task.completed, task.description),
        );
        this.taskArr[index].completed = true;
        localStorage.setItem('storedTasks', JSON.stringify(this.taskArr));
      }
      else {
        this.taskDescriptions[index].style.textDecoration = 'none';
        const stored = JSON.parse(localStorage.getItem('storedTasks'));
        this.taskArr = stored.map((task) => new _tasksList_js__WEBPACK_IMPORTED_MODULE_0__["default"](task.id, task.completed, task.description),
        );
        this.taskArr[index].completed = false;
        localStorage.setItem('storedTasks', JSON.stringify(this.taskArr));
      }
    }));
  }
}

/***/ }),

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
    this.taskList = [];
    this.clearCompletedTasks();
  }

  clearCompletedTasks() {
    this.clearCompletedBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const stored = JSON.parse(localStorage.getItem('storedTasks'));
      this.taskList = stored.map((task) => new _tasksList_js__WEBPACK_IMPORTED_MODULE_0__["default"](task.id, task.completed, task.description));
      this.taskList = this.taskList.filter((each) => each.completed !== true);

      // update Task IDs
      let newId = 0;
      this.taskList.forEach((eachItem) => {
        newId += 1;
        eachItem.id = newId;
      });

      localStorage.setItem('storedTasks', JSON.stringify(this.taskList));
      this.taskDisplay = new _print_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.js */ "./src/checkbox.js");




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
    this.checkboxes = document.querySelectorAll('.checkbox');
    this.ifCompleted = new _checkbox_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.ifCompleted.completed();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXJDb21wbGV0ZWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3RDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscURBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscURBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCc0M7QUFDTDtBQUNqQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscURBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLDZCQUE2QixpREFBTztBQUNwQztBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCc0M7QUFDUztBQUNIO0FBQzVDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJIQUEySCxpQkFBaUI7QUFDNUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5REFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDJCQUEyQixvREFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEdlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY2xlYXJDb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zaG93RGVsZXRlYnRuLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy90YXNrc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2tMaXN0IGZyb20gJy4vdGFza3NMaXN0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94Q29udHJvbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcclxuICAgIHRoaXMudGFza0Rlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrRGVzY3JpcHRpb25zJyk7XHJcbiAgICB0aGlzLnRhc2tBcnIgPSBbXTtcclxuICAgIHRoaXMuY29tcGxldGVkKCk7XHJcbiAgfVxyXG5cclxuICBjb21wbGV0ZWQoKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gsIGluZGV4KSA9PiBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMudGFza0Rlc2NyaXB0aW9uc1tpbmRleF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICBjb25zdCBzdG9yZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRUYXNrcycpKTtcclxuICAgICAgICB0aGlzLnRhc2tBcnIgPSBzdG9yZWQubWFwKCh0YXNrKSA9PiBuZXcgVGFza0xpc3QodGFzay5pZCwgdGFzay5jb21wbGV0ZWQsIHRhc2suZGVzY3JpcHRpb24pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy50YXNrQXJyW2luZGV4XS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza0FycikpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFza0Rlc2NyaXB0aW9uc1tpbmRleF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFza3MnKSk7XHJcbiAgICAgICAgdGhpcy50YXNrQXJyID0gc3RvcmVkLm1hcCgodGFzaykgPT4gbmV3IFRhc2tMaXN0KHRhc2suaWQsIHRhc2suY29tcGxldGVkLCB0YXNrLmRlc2NyaXB0aW9uKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudGFza0FycltpbmRleF0uY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrQXJyKSk7XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgVGFza0xpc3QgZnJvbSAnLi90YXNrc0xpc3QuanMnO1xyXG5pbXBvcnQgUHJpbnRNZSBmcm9tICcuL3ByaW50LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsZWFyQ29tcGxldGVkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2xlYXJDb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXJDb250YWluZXInKTtcclxuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcclxuICAgIHRoaXMuY2xlYXJDb21wbGV0ZWRUYXNrcygpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJDb21wbGV0ZWRUYXNrcygpIHtcclxuICAgIHRoaXMuY2xlYXJDb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHN0b3JlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2tzJykpO1xyXG4gICAgICB0aGlzLnRhc2tMaXN0ID0gc3RvcmVkLm1hcCgodGFzaykgPT4gbmV3IFRhc2tMaXN0KHRhc2suaWQsIHRhc2suY29tcGxldGVkLCB0YXNrLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgIHRoaXMudGFza0xpc3QgPSB0aGlzLnRhc2tMaXN0LmZpbHRlcigoZWFjaCkgPT4gZWFjaC5jb21wbGV0ZWQgIT09IHRydWUpO1xyXG5cclxuICAgICAgLy8gdXBkYXRlIFRhc2sgSURzXHJcbiAgICAgIGxldCBuZXdJZCA9IDA7XHJcbiAgICAgIHRoaXMudGFza0xpc3QuZm9yRWFjaCgoZWFjaEl0ZW0pID0+IHtcclxuICAgICAgICBuZXdJZCArPSAxO1xyXG4gICAgICAgIGVhY2hJdGVtLmlkID0gbmV3SWQ7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrTGlzdCkpO1xyXG4gICAgICB0aGlzLnRhc2tEaXNwbGF5ID0gbmV3IFByaW50TWUoKTtcclxuICAgICAgdGhpcy50YXNrRGlzcGxheS5kaXNwbGF5VGFza3MoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImltcG9ydCBUYXNrTGlzdCBmcm9tICcuL3Rhc2tzTGlzdC5qcyc7XHJcbmltcG9ydCBTaG93RGVsZXRlQnRuIGZyb20gJy4vc2hvd0RlbGV0ZWJ0bi5qcyc7XHJcbmltcG9ydCBDaGVja2JveENvbnRyb2wgZnJvbSAnLi9jaGVja2JveC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmludE1lIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYWRkZWRUYXNrcyA9IFtdO1xyXG4gICAgdGhpcy5saXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXJzJyk7XHJcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG4gICAgdGhpcy50ZXh0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkbGlzdCcpO1xyXG4gICAgdGhpcy5jaGVja1N0b3JhZ2UoKTtcclxuICAgIHRoaXMuc2V0dXBMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy51cGRhdGVUYXNrRGVzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRhc2tzKHRhc2spIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxpc3QuY2xhc3NOYW1lID0gJ2xpc3RJdGVtcyBsaXN0c2JnY29sb3InO1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSBgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0YXNrRGVzY3JpcHRpb25zXCIgdmFsdWUgPSAke3Rhc2suZGVzY3JpcHRpb259PjwvbGFiZWw+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1vcmVJY29uXCI+bW9yZV92ZXJ0PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkZWxldGVCdG5cIj5kZWxldGVfb3V0bGluZTwvc3Bhbj5gO1xyXG4gICAgdGhpcy5saXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQnRuTGlzdGVuZXIoZSkge1xyXG4gICAgY29uc3Qgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFza3MnKSk7XHJcbiAgICB0aGlzLmFkZGVkVGFza3MgPSBzdG9yZWQubWFwKFxyXG4gICAgICAoaXRlbSkgPT4gbmV3IFRhc2tMaXN0KGl0ZW0uaWQsIGl0ZW0uY29tcGxldGVkLCBpdGVtLmRlc2NyaXB0aW9uKSxcclxuICAgICk7XHJcbiAgICB0aGlzLnJlbW92ZUJ0bi5mb3JFYWNoKChlYWNoLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoZWFjaCA9PT0gZS50YXJnZXQpIHtcclxuICAgICAgICB0aGlzLmFkZGVkVGFza3MgPSB0aGlzLmFkZGVkVGFza3MuZmlsdGVyKCh0YXNrLCB0YXNrSW5kZXgpID0+IHRhc2tJbmRleCAhPT0gaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHVwZGF0ZSBUYXNrIElEc1xyXG4gICAgICBsZXQgbmV3SWQgPSAwO1xyXG4gICAgICB0aGlzLmFkZGVkVGFza3MuZm9yRWFjaCgoZWFjaEl0ZW0pID0+IHtcclxuICAgICAgICBuZXdJZCArPSAxO1xyXG4gICAgICAgIGVhY2hJdGVtLmlkID0gbmV3SWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFkZGVkVGFza3MpKTtcclxuICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGFza0Rlc2NyaXB0aW9uKCkge1xyXG4gICAgdGhpcy50YXNrRGVzY3JpcHRpb25zLmZvckVhY2goKGVhY2hJbnB1dCkgPT4gZWFjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2tzJykpO1xyXG4gICAgICB0aGlzLmFkZGVkVGFza3MgPSBzdG9yZWQubWFwKFxyXG4gICAgICAgIChpdGVtKSA9PiBuZXcgVGFza0xpc3QoaXRlbS5pZCwgaXRlbS5jb21wbGV0ZWQsIGl0ZW0uZGVzY3JpcHRpb24pLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRhc2tEZXNjcmlwdGlvbnMuZm9yRWFjaCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZWFjaCA9PT0gZS50YXJnZXQpIHtcclxuICAgICAgICAgIHRoaXMuYWRkZWRUYXNrc1tpbmRleF0uZGVzY3JpcHRpb24gPSB0aGlzLnRhc2tEZXNjcmlwdGlvbnNbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuYWRkZWRUYXNrcykpO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVRhc2tzKCkge1xyXG4gICAgdGhpcy5saXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5hZGRlZFRhc2tzLmZvckVhY2goKHRhc2spID0+IHRoaXMuY3JlYXRlVGFza3ModGFzaykpO1xyXG4gICAgdGhpcy5yZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlQnRuJyk7XHJcbiAgICB0aGlzLmhpZGUzZG90cyA9IG5ldyBTaG93RGVsZXRlQnRuKCk7XHJcbiAgICB0aGlzLmhpZGUzZG90cy5zZXR1cExpc3RuZXIoKTtcclxuICAgIHRoaXMucmVtb3ZlQnRuLmZvckVhY2goKGVhY2gpID0+IGVhY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZUJ0bkxpc3RlbmVyKGUpO1xyXG4gICAgfSkpO1xyXG4gICAgdGhpcy50YXNrRGVzY3JpcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tEZXNjcmlwdGlvbnMnKTtcclxuICAgIHRoaXMuY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xyXG4gICAgdGhpcy5pZkNvbXBsZXRlZCA9IG5ldyBDaGVja2JveENvbnRyb2woKTtcclxuICAgIHRoaXMuaWZDb21wbGV0ZWQuY29tcGxldGVkKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVRhc2tEZXNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tTdG9yYWdlKCkge1xyXG4gICAgY29uc3Qgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFza3MnKSk7XHJcbiAgICBpZiAoc3RvcmVkKSB7XHJcbiAgICAgIHRoaXMuYWRkZWRUYXNrcyA9IHN0b3JlZC5tYXAoXHJcbiAgICAgICAgKHRhc2spID0+IG5ldyBUYXNrTGlzdCh0YXNrLmlkLCB0YXNrLmNvbXBsZXRlZCwgdGFzay5kZXNjcmlwdGlvbiksXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTdG9yYWdlKGlkLCBjb21wbGV0ZWQsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2tMaXN0KGlkLCBjb21wbGV0ZWQsIGRlc2NyaXB0aW9uKTtcclxuICAgIHRoaXMuYWRkZWRUYXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5hZGRlZFRhc2tzKSk7XHJcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0aGlzLnRleHRGaWVsZC52YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy50ZXh0RmllbGQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZGVkVGFza3MubGVuZ3RoICsgMTtcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFN0b3JhZ2UoaWQsIGNvbXBsZXRlZCwgZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHRoaXMudGV4dEZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93RGVsZXRlQnRuIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhyZWVkb3RzSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3JlSWNvbicpO1xyXG4gICAgdGhpcy5kZWxldGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZUJ0bicpO1xyXG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3RJdGVtcycpO1xyXG4gICAgdGhpcy5zZXR1cExpc3RuZXIoKTtcclxuICB9XHJcblxyXG4gIHNldHVwTGlzdG5lcigpIHtcclxuICAgIHRoaXMudGhyZWVkb3RzSWNvbi5mb3JFYWNoKChlYWNoKSA9PiBlYWNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgdGhpcy50aHJlZWRvdHNJY29uLmZvckVhY2goKGVhY2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVhY2ggPT09IGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZUljb25baW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICBlYWNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWNlOWYxJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSkpO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tMaXN0IHtcclxuICBjb25zdHJ1Y3RvcihpZCwgY29tcGxldGVkLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==