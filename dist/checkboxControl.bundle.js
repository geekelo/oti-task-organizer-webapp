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
/* harmony import */ var _tasksList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksList */ "./src/tasksList.js");


class CheckboxControl {
  constructor(){
    this.checkboxes = document.querySelectorAll('.checkbox');
    this.taskDescriptions = document.querySelectorAll('.taskDescriptions');
    this.taskList = [];
    this.completed();
  }
  completed() {
    this.checkboxes.forEach((checkbox, index) => checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
          this.taskDescriptions[index].style.textDecoration = 'line-through';
          const stored = JSON.parse(localStorage.getItem('storedTasks'));
          this.taskList = stored.map((task) => new _tasksList__WEBPACK_IMPORTED_MODULE_0__["default"](task.id, task.completed, task.description));
          this.taskList[index].completed = true;
          localStorage.setItem('storedTasks', JSON.stringify(this.taskList));
      }
      else {
          this.taskDescriptions[index].style.textDecoration = 'none';
          const stored = JSON.parse(localStorage.getItem('storedTasks'));
          this.taskList = stored.map((task) => new _tasksList__WEBPACK_IMPORTED_MODULE_0__["default"](task.id, task.completed, task.description));
          this.taskList[index].completed = false;
          localStorage.setItem('storedTasks', JSON.stringify(this.taskList));

      }
    }))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3hDb250cm9sLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNuQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxrREFBUTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsa0RBQVE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3Rhc2tzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFza0xpc3QgZnJvbSBcIi4vdGFza3NMaXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveENvbnRyb2wge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcclxuICAgIHRoaXMudGFza0Rlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrRGVzY3JpcHRpb25zJyk7XHJcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XHJcbiAgICB0aGlzLmNvbXBsZXRlZCgpO1xyXG4gIH1cclxuICBjb21wbGV0ZWQoKSB7XHJcbiAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gsIGluZGV4KSA9PiBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb25zW2luZGV4XS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgICAgY29uc3Qgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFza3MnKSk7XHJcbiAgICAgICAgICB0aGlzLnRhc2tMaXN0ID0gc3RvcmVkLm1hcCgodGFzaykgPT4gbmV3IFRhc2tMaXN0KHRhc2suaWQsIHRhc2suY29tcGxldGVkLCB0YXNrLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICB0aGlzLnRhc2tMaXN0W2luZGV4XS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrTGlzdCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb25zW2luZGV4XS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgICAgIGNvbnN0IHN0b3JlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2tzJykpO1xyXG4gICAgICAgICAgdGhpcy50YXNrTGlzdCA9IHN0b3JlZC5tYXAoKHRhc2spID0+IG5ldyBUYXNrTGlzdCh0YXNrLmlkLCB0YXNrLmNvbXBsZXRlZCwgdGFzay5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgdGhpcy50YXNrTGlzdFtpbmRleF0uY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tMaXN0KSk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTGlzdCB7XHJcbiAgY29uc3RydWN0b3IoaWQsIGNvbXBsZXRlZCwgZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=