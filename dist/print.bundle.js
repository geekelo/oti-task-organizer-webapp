"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["print"],{

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
    list.innerHTML = `<input type="text" class="taskDescriptions" value = ${task.description}> <span class="material-icons moreIcon">more_vert</span> <span class="material-icons deleteBtn">delete_outline</span>`;
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNTO0FBQy9DO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxpQkFBaUI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlEQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEdlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2hvd0RlbGV0ZWJ0bi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdGFza3NMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrTGlzdCBmcm9tICcuL3Rhc2tzTGlzdC5qcyc7XHJcbmltcG9ydCBTaG93RGVsZXRlQnRuIGZyb20gJy4vc2hvd0RlbGV0ZWJ0bi5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmludE1lIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYWRkZWRUYXNrcyA9IFtdO1xyXG4gICAgdGhpcy5saXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXJzJyk7XHJcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG4gICAgdGhpcy50ZXh0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkbGlzdCcpO1xyXG4gICAgdGhpcy5jaGVja1N0b3JhZ2UoKTtcclxuICAgIHRoaXMuc2V0dXBMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy51cGRhdGVUYXNrRGVzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRhc2tzKHRhc2spIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxpc3QuY2xhc3NOYW1lID0gJ2xpc3RJdGVtcyBsaXN0c2JnY29sb3InO1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0YXNrRGVzY3JpcHRpb25zXCIgdmFsdWUgPSAke3Rhc2suZGVzY3JpcHRpb259PiA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1vcmVJY29uXCI+bW9yZV92ZXJ0PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGRlbGV0ZUJ0blwiPmRlbGV0ZV9vdXRsaW5lPC9zcGFuPmA7XHJcbiAgICB0aGlzLmxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVCdG5MaXN0ZW5lcihlKSB7XHJcbiAgICBjb25zdCBzdG9yZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRUYXNrcycpKTtcclxuICAgIHRoaXMuYWRkZWRUYXNrcyA9IHN0b3JlZC5tYXAoXHJcbiAgICAgIChpdGVtKSA9PiBuZXcgVGFza0xpc3QoaXRlbS5pZCwgaXRlbS5jb21wbGV0ZWQsIGl0ZW0uZGVzY3JpcHRpb24pLFxyXG4gICAgKTtcclxuICAgIHRoaXMucmVtb3ZlQnRuLmZvckVhY2goKGVhY2gsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChlYWNoID09PSBlLnRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuYWRkZWRUYXNrcyA9IHRoaXMuYWRkZWRUYXNrcy5maWx0ZXIoKHRhc2ssIHRhc2tJbmRleCkgPT4gdGFza0luZGV4ICE9PSBpbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXBkYXRlIFRhc2sgSURzXHJcbiAgICAgIGxldCBuZXdJZCA9IDA7XHJcbiAgICAgIHRoaXMuYWRkZWRUYXNrcy5mb3JFYWNoKChlYWNoSXRlbSkgPT4ge1xyXG4gICAgICAgIG5ld0lkICs9IDE7XHJcbiAgICAgICAgZWFjaEl0ZW0uaWQgPSBuZXdJZDtcclxuICAgICAgfSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuYWRkZWRUYXNrcykpO1xyXG4gICAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYXNrRGVzY3JpcHRpb24oKSB7XHJcbiAgICB0aGlzLnRhc2tEZXNjcmlwdGlvbnMuZm9yRWFjaCgoZWFjaElucHV0KSA9PiBlYWNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgY29uc3Qgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFza3MnKSk7XHJcbiAgICAgIHRoaXMuYWRkZWRUYXNrcyA9IHN0b3JlZC5tYXAoXHJcbiAgICAgICAgKGl0ZW0pID0+IG5ldyBUYXNrTGlzdChpdGVtLmlkLCBpdGVtLmNvbXBsZXRlZCwgaXRlbS5kZXNjcmlwdGlvbiksXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudGFza0Rlc2NyaXB0aW9ucy5mb3JFYWNoKChlYWNoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlYWNoID09PSBlLnRhcmdldCkge1xyXG4gICAgICAgICAgdGhpcy5hZGRlZFRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbiA9IHRoaXMudGFza0Rlc2NyaXB0aW9uc1tpbmRleF0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5hZGRlZFRhc2tzKSk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5VGFza3MoKSB7XHJcbiAgICB0aGlzLmxpc3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aGlzLmFkZGVkVGFza3MuZm9yRWFjaCgodGFzaykgPT4gdGhpcy5jcmVhdGVUYXNrcyh0YXNrKSk7XHJcbiAgICB0aGlzLnJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVCdG4nKTtcclxuICAgIHRoaXMuaGlkZTNkb3RzID0gbmV3IFNob3dEZWxldGVCdG4oKTtcclxuICAgIHRoaXMuaGlkZTNkb3RzLnNldHVwTGlzdG5lcigpO1xyXG4gICAgdGhpcy5yZW1vdmVCdG4uZm9yRWFjaCgoZWFjaCkgPT4gZWFjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQnRuTGlzdGVuZXIoZSk7XHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLnRhc2tEZXNjcmlwdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza0Rlc2NyaXB0aW9ucycpO1xyXG4gICAgdGhpcy51cGRhdGVUYXNrRGVzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIGNoZWNrU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IHN0b3JlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2tzJykpO1xyXG4gICAgaWYgKHN0b3JlZCkge1xyXG4gICAgICB0aGlzLmFkZGVkVGFza3MgPSBzdG9yZWQubWFwKFxyXG4gICAgICAgICh0YXNrKSA9PiBuZXcgVGFza0xpc3QodGFzay5pZCwgdGFzay5jb21wbGV0ZWQsIHRhc2suZGVzY3JpcHRpb24pLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U3RvcmFnZShpZCwgY29tcGxldGVkLCBkZXNjcmlwdGlvbikge1xyXG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrTGlzdChpZCwgY29tcGxldGVkLCBkZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLmFkZGVkVGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuYWRkZWRUYXNrcykpO1xyXG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcclxuICB9XHJcblxyXG4gIHNldHVwTGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAodGhpcy50ZXh0RmllbGQudmFsdWUpIHtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMudGV4dEZpZWxkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRlZFRhc2tzLmxlbmd0aCArIDE7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdG9yYWdlKGlkLCBjb21wbGV0ZWQsIGRlc2NyaXB0aW9uKTtcclxuICAgICAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd0RlbGV0ZUJ0biB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRocmVlZG90c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9yZUljb24nKTtcclxuICAgIHRoaXMuZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVCdG4nKTtcclxuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0SXRlbXMnKTtcclxuICAgIHRoaXMuc2V0dXBMaXN0bmVyKCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cExpc3RuZXIoKSB7XHJcbiAgICB0aGlzLnRocmVlZG90c0ljb24uZm9yRWFjaCgoZWFjaCkgPT4gZWFjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMudGhyZWVkb3RzSWNvbi5mb3JFYWNoKChlYWNoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlYWNoID09PSBlLnRhcmdldCkge1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVJY29uW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgZWFjaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VjZTlmMSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTGlzdCB7XHJcbiAgY29uc3RydWN0b3IoaWQsIGNvbXBsZXRlZCwgZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=