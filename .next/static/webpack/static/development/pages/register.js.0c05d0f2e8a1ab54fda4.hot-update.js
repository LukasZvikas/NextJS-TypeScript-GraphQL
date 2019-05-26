webpackHotUpdate("static/development/pages/register.js",{

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
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
/* harmony import */ var _graphql_auth_register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphql/auth/register */ "./graphql/auth/register.tsx");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _utilities_emailValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/emailValidation */ "./utilities/emailValidation.ts");
/* harmony import */ var _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilities/errorMessages */ "./utilities/errorMessages.ts");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Alert */ "./components/Alert.tsx");
/* harmony import */ var _components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ButtonPrimary */ "./components/ButtonPrimary.tsx");
/* harmony import */ var _components_LoadingBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/LoadingBar */ "./components/LoadingBar.tsx");





var _jsxFileName = "/Users/lukas/Documents/GitHub/nextjs-graphql-typescript/pages/register.tsx";











var Register =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Register, _Component);

  function Register(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Register);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Register).call(this, props));
    _this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      errorMessage: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Register, [{
    key: "handleSubmit",
    value: function handleSubmit(register, event) {
      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password,
          passwordConfirm = _this$state.passwordConfirm;
      event.preventDefault();
      var isInvalidInputs = this.validateInputs(email, password, passwordConfirm);

      if (isInvalidInputs) {
        this.setState({
          errorMessage: isInvalidInputs
        });
        return;
      }

      register({
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
        errorMessage: ""
      });
    }
  }, {
    key: "onEmailChange",
    value: function onEmailChange(value) {
      var errorMessage = this.state.errorMessage;
      if (errorMessage) this.clearErrorMessage();
      this.setState({
        email: value
      });
    }
  }, {
    key: "onPasswordChange",
    value: function onPasswordChange(value) {
      var errorMessage = this.state.errorMessage;
      if (errorMessage) this.clearErrorMessage();
      this.setState({
        password: value
      });
    }
  }, {
    key: "onPasswordConfirmChange",
    value: function onPasswordConfirmChange(value) {
      var errorMessage = this.state.errorMessage;
      if (errorMessage) this.clearErrorMessage();
      this.setState({
        passwordConfirm: value
      });
    }
  }, {
    key: "validatePasswordMatch",
    value: function validatePasswordMatch(passwordOne, passwordTwo) {
      if (passwordOne !== passwordTwo) return false;
      return true;
    }
  }, {
    key: "validatePasswordLength",
    value: function validatePasswordLength(password) {
      if (password.length < 5) return false;
      return true;
    }
  }, {
    key: "validateInputs",
    value: function validateInputs(email, password, passwordConfirm) {
      if (!email || !password || !passwordConfirm) {
        return _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_11__["UNFILLED_FIELDS_ERROR"];
      } else if (!Object(_utilities_emailValidation__WEBPACK_IMPORTED_MODULE_10__["validateEmail"])(email)) {
        return _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_11__["INVALID_EMAIL_ERROR"];
      } else if (!this.validatePasswordMatch(password, passwordConfirm)) {
        return _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_11__["PASS_MISMATCH_ERROR"];
      } else if (!this.validatePasswordLength(password)) {
        return _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_11__["PASS_LENGTH_ERROR"];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errorMessage = this.state.errorMessage;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: 'Register',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
        mutation: _graphql_auth_register__WEBPACK_IMPORTED_MODULE_8__["REGISTER_MUTATION"],
        onError: function onError() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, function (register, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_LoadingBar__WEBPACK_IMPORTED_MODULE_14__["LoadingBar"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        });
        if (error) console.log("err", error.graphQLErrors[0].message);
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, error ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_12__["Alert"], {
          message: error.graphQLErrors[0].message,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }) : null, errorMessage ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_12__["Alert"], {
          message: errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "Register"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "row d-flex justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
          className: "d-flex flex-column col-10 col-sm-6 col-md-4",
          onSubmit: _this2.handleSubmit.bind(_this2, register),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], {
          labelTitle: "Email",
          placeholderTitle: "Enter your email",
          onTextChange: function onTextChange(e) {
            return _this2.onEmailChange(e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], {
          labelTitle: "Password",
          type: "password",
          placeholderTitle: "Enter your password",
          onTextChange: function onTextChange(e) {
            return _this2.onPasswordChange(e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_7__["InputField"], {
          labelTitle: "Confirm password",
          type: "password",
          placeholderTitle: "Repeat your password",
          onTextChange: function onTextChange(e) {
            return _this2.onPasswordConfirmChange(e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_13__["ButtonPrimary"], {
          title: "Sign Up",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }))));
      }));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

})
//# sourceMappingURL=register.js.0c05d0f2e8a1ab54fda4.hot-update.js.map