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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/InputField */ "./components/InputField.tsx");
/* harmony import */ var _graphql_auth_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../graphql/auth/login */ "./graphql/auth/login.tsx");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utilities/errorMessages */ "./utilities/errorMessages.ts");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Alert */ "./components/Alert.tsx");
/* harmony import */ var _components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ButtonPrimary */ "./components/ButtonPrimary.tsx");
/* harmony import */ var _components_LoadingBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/LoadingBar */ "./components/LoadingBar.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);







var _jsxFileName = "/Users/lukas/Documents/GitHub/nextjs-graphql-typescript/pages/login.tsx";











var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      email: '',
      password: '',
      errorMessage: ''
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "handleSubmit",
    value: function handleSubmit(login, event) {
      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      event.preventDefault();
      var isInvalidInputs = this.validateInputs(email, password);

      if (isInvalidInputs) {
        this.setState({
          errorMessage: isInvalidInputs
        });
        return;
      }

      login({
        variables: {
          email: email,
          password: password
        }
      });
    }
  }, {
    key: "clearErrorMessage",
    value: function clearErrorMessage() {
      this.setState({
        errorMessage: ''
      });
    }
  }, {
    key: "onEmailChange",
    value: function onEmailChange(value) {
      var errorMessage = this.state.errorMessage;

      if (errorMessage) {
        this.clearErrorMessage();
      }

      this.setState({
        email: value
      });
    }
  }, {
    key: "onPasswordChange",
    value: function onPasswordChange(value) {
      var errorMessage = this.state.errorMessage;

      if (errorMessage) {
        this.clearErrorMessage();
      }

      this.setState({
        password: value
      });
    }
  }, {
    key: "validateInputs",
    value: function validateInputs(email, password) {
      if (!email || !password) {
        return _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_12__["UNFILLED_FIELDS_ERROR"];
      }

      ;
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errorMessage = this.state.errorMessage;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: 'Login',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_11__["Mutation"], {
        mutation: _graphql_auth_login__WEBPACK_IMPORTED_MODULE_10__["LOGIN_MUTATION"],
        onError: function onError() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, function (login, _ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;

        if (loading) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_LoadingBar__WEBPACK_IMPORTED_MODULE_15__["LoadingBar"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          });
        } else if (!error && data) {
          next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/');
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "form-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_13__["Alert"], {
          message: error.graphQLErrors[0].message,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }) : null, errorMessage ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_13__["Alert"], {
          message: errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "Login"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "row d-flex justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
          className: "d-flex flex-column col-10 col-sm-6 col-md-4",
          onSubmit: _this2.handleSubmit.bind(_this2, login),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_9__["InputField"], {
          labelTitle: 'Email',
          placeholderTitle: 'Enter your email',
          onTextChange: function onTextChange(e) {
            return _this2.onEmailChange(e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_9__["InputField"], {
          labelTitle: 'Password',
          type: "password",
          placeholderTitle: 'Enter your password',
          onTextChange: function onTextChange(e) {
            return _this2.onPasswordChange(e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_14__["ButtonPrimary"], {
          title: 'Login',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }))));
      }));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.d38a3e3b027990b0ee53.hot-update.js.map