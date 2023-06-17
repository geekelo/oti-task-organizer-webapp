"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["checkboxControl"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/checkbox.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3hDb250cm9sLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUN0QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHFEQUFRO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHFEQUFRO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2NoZWNrYm94LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy90YXNrc0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2tMaXN0IGZyb20gJy4vdGFza3NMaXN0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94Q29udHJvbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcclxuICAgIHRoaXMudGFza0Rlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrRGVzY3JpcHRpb25zJyk7XHJcbiAgICB0aGlzLnRhc2tBcnIgPSBbXTtcclxuICAgIHRoaXMuY29tcGxldGVkKCk7XHJcbiAgfVxyXG5cclxuICBjb21wbGV0ZWQoKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gsIGluZGV4KSA9PiBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMudGFza0Rlc2NyaXB0aW9uc1tpbmRleF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICBjb25zdCBzdG9yZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRUYXNrcycpKTtcclxuICAgICAgICB0aGlzLnRhc2tBcnIgPSBzdG9yZWQubWFwKCh0YXNrKSA9PiBuZXcgVGFza0xpc3QodGFzay5pZCwgdGFzay5jb21wbGV0ZWQsIHRhc2suZGVzY3JpcHRpb24pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy50YXNrQXJyW2luZGV4XS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRUYXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza0FycikpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFza0Rlc2NyaXB0aW9uc1tpbmRleF0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFza3MnKSk7XHJcbiAgICAgICAgdGhpcy50YXNrQXJyID0gc3RvcmVkLm1hcCgodGFzaykgPT4gbmV3IFRhc2tMaXN0KHRhc2suaWQsIHRhc2suY29tcGxldGVkLCB0YXNrLmRlc2NyaXB0aW9uKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudGFza0FycltpbmRleF0uY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrQXJyKSk7XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTGlzdCB7XHJcbiAgY29uc3RydWN0b3IoaWQsIGNvbXBsZXRlZCwgZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=