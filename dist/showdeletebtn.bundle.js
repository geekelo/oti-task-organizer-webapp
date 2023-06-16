"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["showdeletebtn"],{

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
    constructor(){
        this.threedotsIcon = document.querySelector(".moreIcon");
        this.deleteIcon = document.querySelector(".deleteBtn");
        this.setupListner();
    }


   setupListner() {
    this.threedotsIcon.addEventListener('click', () => {
        this.deleteIcon.style.display = "flex";
        alert("ok");
    })
   }
 
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/showDeletebtn.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2RlbGV0ZWJ0bi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2hvd0RlbGV0ZWJ0bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93RGVsZXRlQnRuIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy50aHJlZWRvdHNJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3JlSWNvblwiKTtcclxuICAgICAgICB0aGlzLmRlbGV0ZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZUJ0blwiKTtcclxuICAgICAgICB0aGlzLnNldHVwTGlzdG5lcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgIHNldHVwTGlzdG5lcigpIHtcclxuICAgIHRoaXMudGhyZWVkb3RzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLmRlbGV0ZUljb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGFsZXJ0KFwib2tcIik7XHJcbiAgICB9KVxyXG4gICB9XHJcbiBcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==