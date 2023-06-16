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



class PrintMe {
  constructor() {
    this.addedTasks = [];
    this.listContainer = document.querySelector('.listContainers');
    this.form = document.querySelector(".form");
    this.textField = document.querySelector(".addlist");
    this.checkStorage();
    this.setupListener();
  }

  createTasks(task) {
    const list = document.createElement('li');
    list.className = 'listItems listsbgcolor';
    // list.setAttribute('contenteditable', 'true');
    list.innerHTML = `${task.description} <span class="material-icons moreIcon">more_vert</span> <span class="material-icons deleteBtn">delete_outline</span>`;
    this.listContainer.appendChild(list);
  }

  displayTasks() {
    this.listContainer.innerHTML = '';
    this.addedTasks.forEach((task) => this.createTasks(task));
  }

  checkStorage() {
    const stored = JSON.parse(localStorage.getItem('storedTasks'));
    if (stored) {
        this.addedTasks = stored.map((task) => new _tasksList_js__WEBPACK_IMPORTED_MODULE_0__["default"](task.id, task.completed, task.description));
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
          const description = this.textField.value;
          const id = this.addedTasks.length + 1;
          const completed = false;
          this.setStorage(id, completed, description);
          this.textField.value = '';
      });
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
        this.description = description
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3RDO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHFEQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JEZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdGFza3NMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi90YXNrc0xpc3QuanNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmludE1lIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYWRkZWRUYXNrcyA9IFtdO1xyXG4gICAgdGhpcy5saXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXJzJyk7XHJcbiAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XHJcbiAgICB0aGlzLnRleHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkbGlzdFwiKTtcclxuICAgIHRoaXMuY2hlY2tTdG9yYWdlKCk7XHJcbiAgICB0aGlzLnNldHVwTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRhc2tzKHRhc2spIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGlzdC5jbGFzc05hbWUgPSAnbGlzdEl0ZW1zIGxpc3RzYmdjb2xvcic7XHJcbiAgICAvLyBsaXN0LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gYCR7dGFzay5kZXNjcmlwdGlvbn0gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtb3JlSWNvblwiPm1vcmVfdmVydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBkZWxldGVCdG5cIj5kZWxldGVfb3V0bGluZTwvc3Bhbj5gO1xyXG4gICAgdGhpcy5saXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVRhc2tzKCkge1xyXG4gICAgdGhpcy5saXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5hZGRlZFRhc2tzLmZvckVhY2goKHRhc2spID0+IHRoaXMuY3JlYXRlVGFza3ModGFzaykpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tTdG9yYWdlKCkge1xyXG4gICAgY29uc3Qgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFza3MnKSk7XHJcbiAgICBpZiAoc3RvcmVkKSB7XHJcbiAgICAgICAgdGhpcy5hZGRlZFRhc2tzID0gc3RvcmVkLm1hcCgodGFzaykgPT4gbmV3IFRhc2tMaXN0KHRhc2suaWQsIHRhc2suY29tcGxldGVkLCB0YXNrLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBzZXRTdG9yYWdlKGlkLCBjb21wbGV0ZWQsIGRlc2NyaXB0aW9uKSB7XHJcblxyXG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrTGlzdChpZCwgY29tcGxldGVkLCBkZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLmFkZGVkVGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuYWRkZWRUYXNrcykpO1xyXG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcclxuICB9XHJcblxyXG4gIHNldHVwTGlzdGVuZXIoKSB7XHJcbiAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLnRleHRGaWVsZC52YWx1ZTtcclxuICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRlZFRhc2tzLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RvcmFnZShpZCwgY29tcGxldGVkLCBkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICB0aGlzLnRleHRGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0xpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoaWQsIGNvbXBsZXRlZCwgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9