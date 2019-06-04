webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/InputField */ "./components/InputField.tsx");
/* harmony import */ var _graphql_auth_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphql/auth/login */ "./graphql/auth/login.tsx");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/errorMessages */ "./utilities/errorMessages.ts");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Alert */ "./components/Alert.tsx");
/* harmony import */ var _components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ButtonPrimary */ "./components/ButtonPrimary.tsx");
/* harmony import */ var _components_LoadingBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/LoadingBar */ "./components/LoadingBar.tsx");
/* harmony import */ var _components_AuthRender__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AuthRender */ "./components/AuthRender.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_withAuthPages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/withAuthPages */ "./components/withAuthPages.tsx");





var _jsxFileName = "/Users/lukas/Documents/GitHub/nextjs-graphql-typescript/pages/login.tsx";













var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _Component);

  function Login() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "validateInputs",
    value: function validateInputs(_ref) {
      var email = _ref.email,
          password = _ref.password;

      if (!email || !password) {
        return _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_10__["UNFILLED_FIELDS_ERROR"];
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AuthRender__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, function (_ref2) {
        var handleSubmit = _ref2.handleSubmit,
            _onInputChange = _ref2.onInputChange,
            errorMessage = _ref2.errorMessage,
            auth = _ref2.auth;
        console.log('err', errorMessage);
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
          title: 'Login',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
          mutation: _graphql_auth_login__WEBPACK_IMPORTED_MODULE_8__["LOGIN_MUTATION"],
          onError: function onError() {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, function (mutate, _ref3) {
          var loading = _ref3.loading,
              error = _ref3.error,
              data = _ref3.data;

          if (!error && data) {
            next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push('/');
          }

          console.log('data', data, 'error', error);
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "form-container d-flex flex-column justify-content-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, loading && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_LoadingBar__WEBPACK_IMPORTED_MODULE_13__["LoadingBar"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }), error && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_11__["Alert"], {
            message: error.graphQLErrors[0].message,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }), errorMessage && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_11__["Alert"], {
            message: errorMessage,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "text-center heading heading-large",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, "Login"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "row d-flex justify-content-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
            className: "d-flex flex-column col-10 col-sm-8 col-md-3",
            onSubmit: handleSubmit.bind(_this, {
              auth: auth,
              mutate: mutate,
              validateInputs: _this.validateInputs
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], {
            name: 'email',
            labelTitle: 'Email',
            placeholderTitle: 'Enter your email',
            onInputChange: function onInputChange(e) {
              return _onInputChange(e);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], {
            name: 'password',
            labelTitle: 'Password',
            type: "password",
            placeholderTitle: 'Enter your password',
            onInputChange: function onInputChange(e) {
              return _onInputChange(e);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_12__["ButtonPrimary"], {
            title: 'Login',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }))));
        }));
      });
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withAuthPages__WEBPACK_IMPORTED_MODULE_16__["withAuthPages"])(Login));

/***/ })

})
//# sourceMappingURL=login.js.72b138114f4a0a64b4d3.hot-update.js.map