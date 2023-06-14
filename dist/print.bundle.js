"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["print"],{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
class printMe {
  constructor(){
    this.addedTasks = [
      {
        id: 1,
        completed: false,
        description: "Setup webpack",
      },
      {
        id: 1,
        completed: false,
        description: "Set up webpack dev-server",
      },
      {
        id: 1,
        completed: false,
        description: "Work on project",
      }
    ];

    this.listContainer = document.querySelector('.listContainers');
    this.displayTasks();
  }

  createTasks(task){
    const list = document.createElement('li');
    list.className = "listItems listsbgcolor";
    list.innerHTML = `${task.description} <span class="material-icons">more_vert</span>`;

    this.listContainer.appendChild(list);
  }

  displayTasks(){
    this.listContainer.innerHTML = '';
    this.addedTasks.forEach((task) => this.createTasks(task))
  };
  
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBwcmludE1lIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5hZGRlZFRhc2tzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTZXR1cCB3ZWJwYWNrXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNldCB1cCB3ZWJwYWNrIGRldi1zZXJ2ZXJcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV29yayBvbiBwcm9qZWN0XCIsXHJcbiAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5saXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250YWluZXJzJyk7XHJcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGFza3ModGFzayl7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpc3QuY2xhc3NOYW1lID0gXCJsaXN0SXRlbXMgbGlzdHNiZ2NvbG9yXCI7XHJcbiAgICBsaXN0LmlubmVySFRNTCA9IGAke3Rhc2suZGVzY3JpcHRpb259IDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5tb3JlX3ZlcnQ8L3NwYW4+YDtcclxuXHJcbiAgICB0aGlzLmxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5VGFza3MoKXtcclxuICAgIHRoaXMubGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHRoaXMuYWRkZWRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB0aGlzLmNyZWF0ZVRhc2tzKHRhc2spKVxyXG4gIH07XHJcbiAgXHJcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==