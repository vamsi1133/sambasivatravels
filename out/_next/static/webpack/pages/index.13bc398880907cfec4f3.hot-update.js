webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Car/Car.js":
/*!*******************************!*\
  !*** ./components/Car/Car.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Slideshow_Slideshow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Slideshow/Slideshow */ "./components/Slideshow/Slideshow.js");
/* harmony import */ var _Car_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Car.module.css */ "./components/Car/Car.module.css");
/* harmony import */ var _Car_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Car_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Card/Card */ "./components/Card/Card.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\vamsi\\OneDrive\\Desktop\\sivasambatravels\\components\\Car\\Car.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var car = function car(props) {
  return __jsx("div", {
    className: _Car_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Car + " " + "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_Card_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), __jsx(_Slideshow_Slideshow__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 32
    }
  }, "Price:")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, " ", props.price + "₹", "/Day")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "Availability:"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, " ", props.availability))));
};

/* harmony default export */ __webpack_exports__["default"] = (car);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXIvQ2FyLmpzIl0sIm5hbWVzIjpbImNhciIsInByb3BzIiwiY2xhc3NlcyIsIkNhciIsInByaWNlIiwiYXZhaWxhYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFBQyxLQUFLLEVBQUk7QUFDakIsU0FDSTtBQUFNLGFBQVMsRUFBRUMsc0RBQU8sQ0FBQ0MsR0FBUixHQUFZLEdBQVosR0FBZ0IsVUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUSxFQUVJLE1BQUMsNERBQUQseUZBQWVGLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZKLEVBSVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpSLEVBTVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVAsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUUEsS0FBSyxDQUFDRyxLQUFOLEdBQWMsR0FBdEIsU0FGSixDQU5SLEVBVVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVFILEtBQUssQ0FBQ0ksWUFBZCxDQUZKLENBVlIsQ0FESixDQURKO0FBbUJILENBcEJEOztBQXNCZUwsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTNiYzM5ODg4MDkwN2NmZWM0ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlU2hvdyBmcm9tIFwiLi4vU2xpZGVzaG93L1NsaWRlc2hvd1wiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0Nhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL0NhcmQvQ2FyZFwiO1xyXG5cclxuY29uc3QgY2FyID0gcHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e2NsYXNzZXMuQ2FyK1wiIFwiK1wiY29sLW1kLTZcIn0+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgPGgyPnt9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZVNob3cgey4uLnByb3BzfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48ZW0+UHJpY2U6PC9lbT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3Byb3BzLnByaWNlICsgXCLigrlcIn0vRGF5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BdmFpbGFiaWxpdHk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHtwcm9wcy5hdmFpbGFiaWxpdHl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcjsiXSwic291cmNlUm9vdCI6IiJ9