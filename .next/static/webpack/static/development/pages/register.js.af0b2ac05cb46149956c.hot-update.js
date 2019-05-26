webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/Alert.tsx":
/*!******************************!*\
  !*** ./components/Alert.tsx ***!
  \******************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/lukas/Documents/GitHub/nextjs-graphql-typescript/components/Alert.tsx";

var Alert = function Alert(_ref) {
  var message = _ref.message,
      isSuccess = _ref.isSuccess;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert__success d-flex justify-content-center flex-column align-items-center p-3 ".concat(isSuccess ? "alert__success" : "alert__error"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, isSuccess ? "Success!" : "Error!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-white text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, message));
};
Alert.defaultProps = {
  isSuccess: false
};

/***/ })

})
//# sourceMappingURL=register.js.af0b2ac05cb46149956c.hot-update.js.map