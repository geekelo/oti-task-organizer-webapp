"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["print"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3RDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscURBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscURBQVE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnNDO0FBQ1M7QUFDSDtBQUM1QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwySEFBMkgsaUJBQWlCO0FBQzVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseURBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscURBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zaG93RGVsZXRlYnRuLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy90YXNrc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2tMaXN0IGZyb20gJy4vdGFza3NMaXN0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94Q29udHJvbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcclxuICAgIHRoaXMudGFza0Rlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrRGVzY3JpcHRpb25zJyk7XHJcbiAgICB0aGlzLnRhc2tBcnIgPSBbXTtcclxuICAgIHRoaXMuY29tcGxldGVkKCk7XHJcbiAgfVxyXG5cclxuICBjb21wbGV0ZWQoKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gsIGluZGV4KSA9PiBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMudGFza0Rlc2NyaXB0aW9uc1tpbmRleF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICBjb25zdCBzdG9yZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRUYXNrcycpKTtcclxuICAgICAgICB0aGlzLnRhc2tBcnIgPSBzdG9yZWQubWFwKCh0YXNrKSA9PiBuZXcgVGFza0xpc3QodGFzay5pZCwgdGFzay5jb21wbGV0ZWQsIHRhc2suZGVzY3JpcHRpb24pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy50YXNrQXJyW2luZGV4XS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza0FycikpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFza0Rlc2NyaXB0aW9uc1tpbmRleF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFza3MnKSk7XHJcbiAgICAgICAgdGhpcy50YXNrQXJyID0gc3RvcmVkLm1hcCgodGFzaykgPT4gbmV3IFRhc2tMaXN0KHRhc2suaWQsIHRhc2suY29tcGxldGVkLCB0YXNrLmRlc2NyaXB0aW9uKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudGFza0FycltpbmRleF0uY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrQXJyKSk7XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgVGFza0xpc3QgZnJvbSAnLi90YXNrc0xpc3QuanMnO1xyXG5pbXBvcnQgU2hvd0RlbGV0ZUJ0biBmcm9tICcuL3Nob3dEZWxldGVidG4uanMnO1xyXG5pbXBvcnQgQ2hlY2tib3hDb250cm9sIGZyb20gJy4vY2hlY2tib3guanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbnRNZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFkZGVkVGFza3MgPSBbXTtcclxuICAgIHRoaXMubGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Q29udGFpbmVycycpO1xyXG4gICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuICAgIHRoaXMudGV4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGxpc3QnKTtcclxuICAgIHRoaXMuY2hlY2tTdG9yYWdlKCk7XHJcbiAgICB0aGlzLnNldHVwTGlzdGVuZXIoKTtcclxuICAgIHRoaXMudXBkYXRlVGFza0Rlc2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUYXNrcyh0YXNrKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsaXN0LmNsYXNzTmFtZSA9ICdsaXN0SXRlbXMgbGlzdHNiZ2NvbG9yJztcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gYDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGFza0Rlc2NyaXB0aW9uc1wiIHZhbHVlID0gJHt0YXNrLmRlc2NyaXB0aW9ufT48L2xhYmVsPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtb3JlSWNvblwiPm1vcmVfdmVydDwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZGVsZXRlQnRuXCI+ZGVsZXRlX291dGxpbmU8L3NwYW4+YDtcclxuICAgIHRoaXMubGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUJ0bkxpc3RlbmVyKGUpIHtcclxuICAgIGNvbnN0IHN0b3JlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2tzJykpO1xyXG4gICAgdGhpcy5hZGRlZFRhc2tzID0gc3RvcmVkLm1hcChcclxuICAgICAgKGl0ZW0pID0+IG5ldyBUYXNrTGlzdChpdGVtLmlkLCBpdGVtLmNvbXBsZXRlZCwgaXRlbS5kZXNjcmlwdGlvbiksXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZW1vdmVCdG4uZm9yRWFjaCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGVhY2ggPT09IGUudGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5hZGRlZFRhc2tzID0gdGhpcy5hZGRlZFRhc2tzLmZpbHRlcigodGFzaywgdGFza0luZGV4KSA9PiB0YXNrSW5kZXggIT09IGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICAvLyB1cGRhdGUgVGFzayBJRHNcclxuICAgICAgbGV0IG5ld0lkID0gMDtcclxuICAgICAgdGhpcy5hZGRlZFRhc2tzLmZvckVhY2goKGVhY2hJdGVtKSA9PiB7XHJcbiAgICAgICAgbmV3SWQgKz0gMTtcclxuICAgICAgICBlYWNoSXRlbS5pZCA9IG5ld0lkO1xyXG4gICAgICB9KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5hZGRlZFRhc2tzKSk7XHJcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRhc2tEZXNjcmlwdGlvbigpIHtcclxuICAgIHRoaXMudGFza0Rlc2NyaXB0aW9ucy5mb3JFYWNoKChlYWNoSW5wdXQpID0+IGVhY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBzdG9yZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRUYXNrcycpKTtcclxuICAgICAgdGhpcy5hZGRlZFRhc2tzID0gc3RvcmVkLm1hcChcclxuICAgICAgICAoaXRlbSkgPT4gbmV3IFRhc2tMaXN0KGl0ZW0uaWQsIGl0ZW0uY29tcGxldGVkLCBpdGVtLmRlc2NyaXB0aW9uKSxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb25zLmZvckVhY2goKGVhY2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVhY2ggPT09IGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICB0aGlzLmFkZGVkVGFza3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gdGhpcy50YXNrRGVzY3JpcHRpb25zW2luZGV4XS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFkZGVkVGFza3MpKTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlUYXNrcygpIHtcclxuICAgIHRoaXMubGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHRoaXMuYWRkZWRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB0aGlzLmNyZWF0ZVRhc2tzKHRhc2spKTtcclxuICAgIHRoaXMucmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZUJ0bicpO1xyXG4gICAgdGhpcy5oaWRlM2RvdHMgPSBuZXcgU2hvd0RlbGV0ZUJ0bigpO1xyXG4gICAgdGhpcy5oaWRlM2RvdHMuc2V0dXBMaXN0bmVyKCk7XHJcbiAgICB0aGlzLnJlbW92ZUJ0bi5mb3JFYWNoKChlYWNoKSA9PiBlYWNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmVCdG5MaXN0ZW5lcihlKTtcclxuICAgIH0pKTtcclxuICAgIHRoaXMudGFza0Rlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrRGVzY3JpcHRpb25zJyk7XHJcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcclxuICAgIHRoaXMuaWZDb21wbGV0ZWQgPSBuZXcgQ2hlY2tib3hDb250cm9sKCk7XHJcbiAgICB0aGlzLmlmQ29tcGxldGVkLmNvbXBsZXRlZCgpO1xyXG4gICAgdGhpcy51cGRhdGVUYXNrRGVzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIGNoZWNrU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IHN0b3JlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2tzJykpO1xyXG4gICAgaWYgKHN0b3JlZCkge1xyXG4gICAgICB0aGlzLmFkZGVkVGFza3MgPSBzdG9yZWQubWFwKFxyXG4gICAgICAgICh0YXNrKSA9PiBuZXcgVGFza0xpc3QodGFzay5pZCwgdGFzay5jb21wbGV0ZWQsIHRhc2suZGVzY3JpcHRpb24pLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U3RvcmFnZShpZCwgY29tcGxldGVkLCBkZXNjcmlwdGlvbikge1xyXG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrTGlzdChpZCwgY29tcGxldGVkLCBkZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLmFkZGVkVGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuYWRkZWRUYXNrcykpO1xyXG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcclxuICB9XHJcblxyXG4gIHNldHVwTGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAodGhpcy50ZXh0RmllbGQudmFsdWUpIHtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMudGV4dEZpZWxkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRlZFRhc2tzLmxlbmd0aCArIDE7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKGlkLCBjb21wbGV0ZWQsIGRlc2NyaXB0aW9uKTtcclxuICAgICAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd0RlbGV0ZUJ0biB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRocmVlZG90c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9yZUljb24nKTtcclxuICAgIHRoaXMuZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVCdG4nKTtcclxuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0SXRlbXMnKTtcclxuICAgIHRoaXMuc2V0dXBMaXN0bmVyKCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cExpc3RuZXIoKSB7XHJcbiAgICB0aGlzLnRocmVlZG90c0ljb24uZm9yRWFjaCgoZWFjaCkgPT4gZWFjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMudGhyZWVkb3RzSWNvbi5mb3JFYWNoKChlYWNoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlYWNoID09PSBlLnRhcmdldCkge1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVJY29uW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgZWFjaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VjZTlmMSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTGlzdCB7XHJcbiAgY29uc3RydWN0b3IoaWQsIGNvbXBsZXRlZCwgZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=