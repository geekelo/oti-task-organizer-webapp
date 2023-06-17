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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNTO0FBQy9DO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJIQUEySCxpQkFBaUI7QUFDNUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5REFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscURBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3Nob3dEZWxldGVidG4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3Rhc2tzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFza0xpc3QgZnJvbSAnLi90YXNrc0xpc3QuanMnO1xyXG5pbXBvcnQgU2hvd0RlbGV0ZUJ0biBmcm9tICcuL3Nob3dEZWxldGVidG4uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbnRNZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFkZGVkVGFza3MgPSBbXTtcclxuICAgIHRoaXMubGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Q29udGFpbmVycycpO1xyXG4gICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuICAgIHRoaXMudGV4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZGxpc3QnKTtcclxuICAgIHRoaXMuY2hlY2tTdG9yYWdlKCk7XHJcbiAgICB0aGlzLnNldHVwTGlzdGVuZXIoKTtcclxuICAgIHRoaXMudXBkYXRlVGFza0Rlc2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUYXNrcyh0YXNrKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsaXN0LmNsYXNzTmFtZSA9ICdsaXN0SXRlbXMgbGlzdHNiZ2NvbG9yJztcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gYDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGFza0Rlc2NyaXB0aW9uc1wiIHZhbHVlID0gJHt0YXNrLmRlc2NyaXB0aW9ufT48L2xhYmVsPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtb3JlSWNvblwiPm1vcmVfdmVydDwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgZGVsZXRlQnRuXCI+ZGVsZXRlX291dGxpbmU8L3NwYW4+YDtcclxuICAgIHRoaXMubGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUJ0bkxpc3RlbmVyKGUpIHtcclxuICAgIGNvbnN0IHN0b3JlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlZFRhc2tzJykpO1xyXG4gICAgdGhpcy5hZGRlZFRhc2tzID0gc3RvcmVkLm1hcChcclxuICAgICAgKGl0ZW0pID0+IG5ldyBUYXNrTGlzdChpdGVtLmlkLCBpdGVtLmNvbXBsZXRlZCwgaXRlbS5kZXNjcmlwdGlvbiksXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZW1vdmVCdG4uZm9yRWFjaCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGVhY2ggPT09IGUudGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5hZGRlZFRhc2tzID0gdGhpcy5hZGRlZFRhc2tzLmZpbHRlcigodGFzaywgdGFza0luZGV4KSA9PiB0YXNrSW5kZXggIT09IGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICAvLyB1cGRhdGUgVGFzayBJRHNcclxuICAgICAgbGV0IG5ld0lkID0gMDtcclxuICAgICAgdGhpcy5hZGRlZFRhc2tzLmZvckVhY2goKGVhY2hJdGVtKSA9PiB7XHJcbiAgICAgICAgbmV3SWQgKz0gMTtcclxuICAgICAgICBlYWNoSXRlbS5pZCA9IG5ld0lkO1xyXG4gICAgICB9KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5hZGRlZFRhc2tzKSk7XHJcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRhc2tEZXNjcmlwdGlvbigpIHtcclxuICAgIHRoaXMudGFza0Rlc2NyaXB0aW9ucy5mb3JFYWNoKChlYWNoSW5wdXQpID0+IGVhY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBzdG9yZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZWRUYXNrcycpKTtcclxuICAgICAgdGhpcy5hZGRlZFRhc2tzID0gc3RvcmVkLm1hcChcclxuICAgICAgICAoaXRlbSkgPT4gbmV3IFRhc2tMaXN0KGl0ZW0uaWQsIGl0ZW0uY29tcGxldGVkLCBpdGVtLmRlc2NyaXB0aW9uKSxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy50YXNrRGVzY3JpcHRpb25zLmZvckVhY2goKGVhY2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVhY2ggPT09IGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICB0aGlzLmFkZGVkVGFza3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gdGhpcy50YXNrRGVzY3JpcHRpb25zW2luZGV4XS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFkZGVkVGFza3MpKTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlUYXNrcygpIHtcclxuICAgIHRoaXMubGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHRoaXMuYWRkZWRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB0aGlzLmNyZWF0ZVRhc2tzKHRhc2spKTtcclxuICAgIHRoaXMucmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZUJ0bicpO1xyXG4gICAgdGhpcy5oaWRlM2RvdHMgPSBuZXcgU2hvd0RlbGV0ZUJ0bigpO1xyXG4gICAgdGhpcy5oaWRlM2RvdHMuc2V0dXBMaXN0bmVyKCk7XHJcbiAgICB0aGlzLnJlbW92ZUJ0bi5mb3JFYWNoKChlYWNoKSA9PiBlYWNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmVCdG5MaXN0ZW5lcihlKTtcclxuICAgIH0pKTtcclxuICAgIHRoaXMudGFza0Rlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrRGVzY3JpcHRpb25zJyk7XHJcbiAgICB0aGlzLnVwZGF0ZVRhc2tEZXNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tTdG9yYWdlKCkge1xyXG4gICAgY29uc3Qgc3RvcmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkVGFza3MnKSk7XHJcbiAgICBpZiAoc3RvcmVkKSB7XHJcbiAgICAgIHRoaXMuYWRkZWRUYXNrcyA9IHN0b3JlZC5tYXAoXHJcbiAgICAgICAgKHRhc2spID0+IG5ldyBUYXNrTGlzdCh0YXNrLmlkLCB0YXNrLmNvbXBsZXRlZCwgdGFzay5kZXNjcmlwdGlvbiksXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTdG9yYWdlKGlkLCBjb21wbGV0ZWQsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2tMaXN0KGlkLCBjb21wbGV0ZWQsIGRlc2NyaXB0aW9uKTtcclxuICAgIHRoaXMuYWRkZWRUYXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlZFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5hZGRlZFRhc2tzKSk7XHJcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0aGlzLnRleHRGaWVsZC52YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy50ZXh0RmllbGQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZGVkVGFza3MubGVuZ3RoICsgMTtcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFN0b3JhZ2UoaWQsIGNvbXBsZXRlZCwgZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHRoaXMudGV4dEZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93RGVsZXRlQnRuIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhyZWVkb3RzSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3JlSWNvbicpO1xyXG4gICAgdGhpcy5kZWxldGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZUJ0bicpO1xyXG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3RJdGVtcycpO1xyXG4gICAgdGhpcy5zZXR1cExpc3RuZXIoKTtcclxuICB9XHJcblxyXG4gIHNldHVwTGlzdG5lcigpIHtcclxuICAgIHRoaXMudGhyZWVkb3RzSWNvbi5mb3JFYWNoKChlYWNoKSA9PiBlYWNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgdGhpcy50aHJlZWRvdHNJY29uLmZvckVhY2goKGVhY2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVhY2ggPT09IGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZUljb25baW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICBlYWNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWNlOWYxJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSkpO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tMaXN0IHtcclxuICBjb25zdHJ1Y3RvcihpZCwgY29tcGxldGVkLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==