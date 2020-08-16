webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Slideshow/Slideshow.js":
/*!*******************************************!*\
  !*** ./components/Slideshow/Slideshow.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/esm/Carousel.js");


var _jsxFileName = "C:\\Users\\vamsi\\OneDrive\\Desktop\\sivasambatravels\\components\\Slideshow\\Slideshow.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function ControlledCarousel() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      index = _React$useState2[0],
      setIndex = _React$useState2[1];

  var handleSelect = function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
  };

  return __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeIndex: index,
    onSelect: handleSelect,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/logo.png",
    alt: "First slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/logo.png",
    alt: "Second slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Caption, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Second slide label"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/logo.png",
    alt: "Third slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Caption, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "Third slide label"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Praesent commodo cursus magna, vel scelerisque nisl consectetur."))));
}

_s(ControlledCarousel, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");

_c = ControlledCarousel;
/* harmony default export */ __webpack_exports__["default"] = (ControlledCarousel);

var _c;

$RefreshReg$(_c, "ControlledCarousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXNob3cvU2xpZGVzaG93LmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZWRDYXJvdXNlbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4IiwiaGFuZGxlU2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0Esa0JBQVQsR0FBOEI7QUFBQTs7QUFBQSx3QkFDQUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FEQTtBQUFBO0FBQUEsTUFDbkJDLEtBRG1CO0FBQUEsTUFDWkMsUUFEWTs7QUFHMUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsYUFBRCxFQUFnQkMsQ0FBaEIsRUFBc0I7QUFDdkNILFlBQVEsQ0FBQ0UsYUFBRCxDQUFSO0FBQ0gsR0FGRDs7QUFJQSxTQUNJLE1BQUMsZ0VBQUQ7QUFBVSxlQUFXLEVBQUVILEtBQXZCO0FBQThCLFlBQVEsRUFBRUUsWUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQsQ0FBVSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyxlQURkO0FBRUksT0FBRyxFQUFDLFdBRlI7QUFHSSxPQUFHLEVBQUMsYUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQVlJLE1BQUMsZ0VBQUQsQ0FBVSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyxlQURkO0FBRUksT0FBRyxFQUFDLFdBRlI7QUFHSSxPQUFHLEVBQUMsY0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFPSSxNQUFDLGdFQUFELENBQVUsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBRkosQ0FQSixDQVpKLEVBd0JJLE1BQUMsZ0VBQUQsQ0FBVSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyxlQURkO0FBRUksT0FBRyxFQUFDLFdBRlI7QUFHSSxPQUFHLEVBQUMsYUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFPSSxNQUFDLGdFQUFELENBQVUsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0VBRkosQ0FQSixDQXhCSixDQURKO0FBeUNIOztHQWhEUUwsa0I7O0tBQUFBLGtCO0FBa0RNQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MWFiMzg0NGRlOTZmYWUwZGMwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nhcm91c2VsJ1xyXG5cclxuZnVuY3Rpb24gQ29udHJvbGxlZENhcm91c2VsKCkge1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoc2VsZWN0ZWRJbmRleCwgZSkgPT4ge1xyXG4gICAgICAgIHNldEluZGV4KHNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17aW5kZXh9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9PlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkZpcnN0IHNsaWRlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkZpcnN0IHNsaWRlIGxhYmVsPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5OdWxsYSB2aXRhZSBlbGl0IGxpYmVybywgYSBwaGFyZXRyYSBhdWd1ZSBtb2xsaXMgaW50ZXJkdW0uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPiAqL31cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlNlY29uZCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5TZWNvbmQgc2xpZGUgbGFiZWw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+VGhpcmQgc2xpZGUgbGFiZWw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVkQ2Fyb3VzZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==