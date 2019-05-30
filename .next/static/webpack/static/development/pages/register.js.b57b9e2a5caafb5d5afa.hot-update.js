webpackHotUpdate("static/development/pages/register.js",{

/***/ "./lib/redirect.ts":
false,

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/InputField */ "./components/InputField.tsx");
/* harmony import */ var _graphql_auth_register__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../graphql/auth/register */ "./graphql/auth/register.tsx");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _utilities_emailValidation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utilities/emailValidation */ "./utilities/emailValidation.ts");
/* harmony import */ var _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utilities/errorMessages */ "./utilities/errorMessages.ts");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Alert */ "./components/Alert.tsx");
/* harmony import */ var _components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/ButtonPrimary */ "./components/ButtonPrimary.tsx");
/* harmony import */ var _components_LoadingBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/LoadingBar */ "./components/LoadingBar.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _graphql_auth_getUser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../graphql/auth/getUser */ "./graphql/auth/getUser.tsx");









var _jsxFileName = "/Users/lukas/Documents/GitHub/nextjs-graphql-typescript/pages/register.tsx";













var Register =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Register, _Component);

  function Register() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Register)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      email: '',
      password: '',
      passwordConfirm: '',
      errorMessage: ''
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var user = this.props.user;

      if (user) {
        next_router__WEBPACK_IMPORTED_MODULE_19___default.a.push('/');
      }
    }
  }, {
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
    key: "onPasswordConfirmChange",
    value: function onPasswordConfirmChange(value) {
      var errorMessage = this.state.errorMessage;

      if (errorMessage) {
        this.clearErrorMessage();
      }

      this.setState({
        passwordConfirm: value
      });
    }
  }, {
    key: "validatePasswordMatch",
    value: function validatePasswordMatch(passwordOne, passwordTwo) {
      if (passwordOne !== passwordTwo) {
        return false;
      }

      return true;
    }
  }, {
    key: "validatePasswordLength",
    value: function validatePasswordLength(password) {
      if (password.length < 5) {
        return false;
      }

      return true;
    }
  }, {
    key: "validateInputs",
    value: function validateInputs(email, password, passwordConfirm) {
      if (!email || !password || !passwordConfirm) {
        return _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_15__["UNFILLED_FIELDS_ERROR"];
      } else if (!Object(_utilities_emailValidation__WEBPACK_IMPORTED_MODULE_14__["validateEmail"])(email)) {
        return _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_15__["INVALID_EMAIL_ERROR"];
      } else if (!this.validatePasswordLength(password)) {
        return _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_15__["PASS_LENGTH_ERROR"];
      } else if (!this.validatePasswordMatch(password, passwordConfirm)) {
        return _utilities_errorMessages__WEBPACK_IMPORTED_MODULE_15__["PASS_MISMATCH_ERROR"];
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var errorMessage = this.state.errorMessage;
      console.log('this', this.props);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: 'Register',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_13__["Mutation"], {
        mutation: _graphql_auth_register__WEBPACK_IMPORTED_MODULE_12__["REGISTER_MUTATION"],
        onError: function onError() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, function (register, _ref) {
        var loading = _ref.loading,
            error = _ref.error;

        if (loading) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_LoadingBar__WEBPACK_IMPORTED_MODULE_18__["LoadingBar"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "form-container d-flex flex-column justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, loading && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_LoadingBar__WEBPACK_IMPORTED_MODULE_18__["LoadingBar"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }), error && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_16__["Alert"], {
          message: error.graphQLErrors[0].message,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }), errorMessage && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_16__["Alert"], {
          message: errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "text-center heading heading-large",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, "Register"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "row d-flex justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
          className: "d-flex flex-column col-10 col-sm-6 col-md-3",
          onSubmit: _this2.handleSubmit.bind(_this2, register),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_11__["InputField"], {
          labelTitle: 'Email',
          placeholderTitle: 'Enter your email',
          onTextChange: function onTextChange(e) {
            return _this2.onEmailChange(e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_11__["InputField"], {
          labelTitle: 'Password',
          type: "password",
          placeholderTitle: 'Enter your password',
          onTextChange: function onTextChange(e) {
            return _this2.onPasswordChange(e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_InputField__WEBPACK_IMPORTED_MODULE_11__["InputField"], {
          labelTitle: 'Confirm password',
          type: "password",
          placeholderTitle: 'Repeat your password',
          onTextChange: function onTextChange(e) {
            return _this2.onPasswordConfirmChange(e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_17__["ButtonPrimary"], {
          title: 'Sign Up',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }))));
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", context.apolloClient.query({
                  query: _graphql_auth_getUser__WEBPACK_IMPORTED_MODULE_20__["GET_USER_QUERY"]
                }).then(function (res) {
                  console.log('res.data', res.data);

                  if (res.data.getUser) {
                    return {
                      user: res.data.getUser
                    };
                  }
                }).catch(function (e) {
                  console.log('error is', e);
                  return {
                    user: {}
                  };
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

})
//# sourceMappingURL=register.js.b57b9e2a5caafb5d5afa.hot-update.js.map