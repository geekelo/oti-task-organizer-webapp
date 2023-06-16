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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/showDeletebtn.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2RlbGV0ZWJ0bi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3Nob3dEZWxldGVidG4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd0RlbGV0ZUJ0biB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRocmVlZG90c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9yZUljb24nKTtcclxuICAgIHRoaXMuZGVsZXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVCdG4nKTtcclxuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0SXRlbXMnKTtcclxuICAgIHRoaXMuc2V0dXBMaXN0bmVyKCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cExpc3RuZXIoKSB7XHJcbiAgICB0aGlzLnRocmVlZG90c0ljb24uZm9yRWFjaCgoZWFjaCkgPT4gZWFjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMudGhyZWVkb3RzSWNvbi5mb3JFYWNoKChlYWNoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlYWNoID09PSBlLnRhcmdldCkge1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVJY29uW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgZWFjaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VjZTlmMSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=