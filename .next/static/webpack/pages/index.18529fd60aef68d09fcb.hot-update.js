/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ui/animations/AnimMultiline.js":
/*!***************************************************!*\
  !*** ./components/ui/animations/AnimMultiline.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/adriandelbalso/workspace/adelbalso.github.io/components/ui/animations/AnimMultiline.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar randomString = Math.random().toString(36).substring(7);\nvar stringClass = 'headline-span-' + randomString;\n\nvar AnimMultiline = function AnimMultiline(_ref) {\n  _s();\n\n  var str = _ref.str;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      lines = _useState[0],\n      setLines = _useState[1];\n\n  var splitStr = str.split(' ');\n  var transitionDuration = 1.25; //must change this in Layout.js\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    // replace this with useRef:\n    var strSpans = document.querySelectorAll(stringClass);\n    var line = 1;\n    var spanArr = [];\n    strSpans.forEach(function (span, i, arr) {\n      if (i > 0 && span.offsetTop > arr[i - 1].offsetTop) {\n        line++;\n        span.classList.add(\"animate-line-\".concat(line));\n      } else {\n        span.classList.add(\"animate-line-\".concat(line));\n      }\n\n      if (typeof spanArr[line - 1] == 'undefined') {\n        spanArr[line - 1] = [];\n      }\n\n      spanArr[line - 1].push(span.textContent);\n    });\n    setLines(spanArr);\n  }, []); // const lineAnimations = {\n  //   rotate: 180,\n  //   transition: {\n  //     delay: 2,\n  //     duration: .5,\n  //     staggerChildren: .5\n  //   }\n  // }e\n\n  return !lines.length ? splitStr.map(function (span, i) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: stringClass,\n      children: [span, \" \"]\n    }, i, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 33\n    }, _this);\n  }) : lines.map(function (line, i) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n      animate: \"popUp\",\n      style: {\n        display: 'inline-flex',\n        overflow: 'hidden',\n        padding: '2px 0'\n      },\n      children: line && line.map(function (word, j) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n          initial: {\n            y: '100%'\n          },\n          animate: {\n            y: 0\n          },\n          transition: {\n            delay: transitionDuration\n          },\n          className: stringClass,\n          style: {\n            display: 'inline',\n            whiteSpace: 'pre'\n          },\n          children: word\n        }, j, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 17\n        }, _this);\n      })\n    }, i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }, _this);\n  });\n};\n\n_s(AnimMultiline, \"rXCgyOSha7nD7LaunrnbH7EjheQ=\");\n\n_c = AnimMultiline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimMultiline);\n\nvar _c;\n\n$RefreshReg$(_c, \"AnimMultiline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9hbmltYXRpb25zL0FuaW1NdWx0aWxpbmUuanM/NzM2ZCJdLCJuYW1lcyI6WyJyYW5kb21TdHJpbmciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJzdHJpbmdDbGFzcyIsIkFuaW1NdWx0aWxpbmUiLCJzdHIiLCJ1c2VTdGF0ZSIsImxpbmVzIiwic2V0TGluZXMiLCJzcGxpdFN0ciIsInNwbGl0IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidXNlRWZmZWN0Iiwic3RyU3BhbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5lIiwic3BhbkFyciIsImZvckVhY2giLCJzcGFuIiwiaSIsImFyciIsIm9mZnNldFRvcCIsImNsYXNzTGlzdCIsImFkZCIsInB1c2giLCJ0ZXh0Q29udGVudCIsImxlbmd0aCIsIm1hcCIsImRpc3BsYXkiLCJvdmVyZmxvdyIsInBhZGRpbmciLCJ3b3JkIiwiaiIsInkiLCJkZWxheSIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsU0FBM0IsQ0FBcUMsQ0FBckMsQ0FBckI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsbUJBQW1CTCxZQUF2Qzs7QUFFQSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWE7QUFBQTs7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7O0FBQUEsa0JBQ1BDLCtDQUFRLENBQUMsRUFBRCxDQUREO0FBQUEsTUFDMUJDLEtBRDBCO0FBQUEsTUFDbkJDLFFBRG1COztBQUdqQyxNQUFNQyxRQUFRLEdBQUdKLEdBQUcsQ0FBQ0ssS0FBSixDQUFVLEdBQVYsQ0FBakI7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxJQUEzQixDQUxpQyxDQUtEOztBQUVoQ0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJaLFdBQTFCLENBQWpCO0FBQ0EsUUFBSWEsSUFBSSxHQUFHLENBQVg7QUFDQSxRQUFNQyxPQUFPLEdBQUcsRUFBaEI7QUFDQUosWUFBUSxDQUFDSyxPQUFULENBQWlCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFVQyxHQUFWLEVBQWtCO0FBQ2pDLFVBQUlELENBQUMsR0FBRyxDQUFKLElBQVVELElBQUksQ0FBQ0csU0FBTCxHQUFpQkQsR0FBRyxDQUFDRCxDQUFDLEdBQUMsQ0FBSCxDQUFILENBQVNFLFNBQXhDLEVBQW9EO0FBQ2xETixZQUFJO0FBQ0pHLFlBQUksQ0FBQ0ksU0FBTCxDQUFlQyxHQUFmLHdCQUFtQ1IsSUFBbkM7QUFDRCxPQUhELE1BR087QUFDTEcsWUFBSSxDQUFDSSxTQUFMLENBQWVDLEdBQWYsd0JBQW1DUixJQUFuQztBQUNEOztBQUNELFVBQUcsT0FBT0MsT0FBTyxDQUFDRCxJQUFJLEdBQUcsQ0FBUixDQUFkLElBQTRCLFdBQS9CLEVBQTRDO0FBQUVDLGVBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUCxHQUFvQixFQUFwQjtBQUF1Qjs7QUFDckVDLGFBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUCxDQUFrQlMsSUFBbEIsQ0FBdUJOLElBQUksQ0FBQ08sV0FBNUI7QUFDRCxLQVREO0FBVUFsQixZQUFRLENBQUNTLE9BQUQsQ0FBUjtBQUNELEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQsQ0FQaUMsQ0F5QmpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FDRSxDQUFDVixLQUFLLENBQUNvQixNQUFQLEdBQ0VsQixRQUFRLENBQUNtQixHQUFULENBQWEsVUFBQ1QsSUFBRCxFQUFPQyxDQUFQO0FBQUEsd0JBQWE7QUFBYyxlQUFTLEVBQUVqQixXQUF6QjtBQUFBLGlCQUF1Q2dCLElBQXZDO0FBQUEsT0FBV0MsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWI7QUFBQSxHQUFiLENBREYsR0FHRWIsS0FBSyxDQUFDcUIsR0FBTixDQUFVLFVBQUNaLElBQUQsRUFBT0ksQ0FBUCxFQUFhO0FBQ3JCLHdCQUNFLDhEQUFDLHNEQUFEO0FBRUUsYUFBTyxFQUFFLE9BRlg7QUFHRSxXQUFLLEVBQUU7QUFBRVMsZUFBTyxFQUFFLGFBQVg7QUFBMEJDLGdCQUFRLEVBQUUsUUFBcEM7QUFBOENDLGVBQU8sRUFBRTtBQUF2RCxPQUhUO0FBQUEsZ0JBS0dmLElBQUksSUFBSUEsSUFBSSxDQUFDWSxHQUFMLENBQVMsVUFBQ0ksSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDN0IsNEJBQ0UsOERBQUMsc0RBQUQ7QUFFRSxpQkFBTyxFQUFFO0FBQUVDLGFBQUMsRUFBRTtBQUFMLFdBRlg7QUFHRSxpQkFBTyxFQUFFO0FBQUVBLGFBQUMsRUFBRTtBQUFMLFdBSFg7QUFJRSxvQkFBVSxFQUFFO0FBQUVDLGlCQUFLLEVBQUV4QjtBQUFULFdBSmQ7QUFLRSxtQkFBUyxFQUFFUixXQUxiO0FBTUUsZUFBSyxFQUFFO0FBQUUwQixtQkFBTyxFQUFFLFFBQVg7QUFBcUJPLHNCQUFVLEVBQUU7QUFBakMsV0FOVDtBQUFBLG9CQU9FSjtBQVBGLFdBQ09DLENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVVELE9BWFE7QUFMWCxPQUNPYixDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQXFCSCxHQXRCQyxDQUpKO0FBNEJELENBOUREOztHQUFNaEIsYTs7S0FBQUEsYTtBQWdFTiwrREFBZUEsYUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdWkvYW5pbWF0aW9ucy9BbmltTXVsdGlsaW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCByYW5kb21TdHJpbmcgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG5jb25zdCBzdHJpbmdDbGFzcyA9ICdoZWFkbGluZS1zcGFuLScgKyByYW5kb21TdHJpbmdcblxuY29uc3QgQW5pbU11bHRpbGluZSA9ICh7IHN0ciB9KSA9PiB7XG4gIGNvbnN0IFtsaW5lcywgc2V0TGluZXNdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3Qgc3BsaXRTdHIgPSBzdHIuc3BsaXQoJyAnKTtcblxuICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSAxLjI1IC8vbXVzdCBjaGFuZ2UgdGhpcyBpbiBMYXlvdXQuanNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHJlcGxhY2UgdGhpcyB3aXRoIHVzZVJlZjpcbiAgICBjb25zdCBzdHJTcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5nQ2xhc3MpXG4gICAgbGV0IGxpbmUgPSAxXG4gICAgY29uc3Qgc3BhbkFyciA9IFtdXG4gICAgc3RyU3BhbnMuZm9yRWFjaCgoc3BhbiwgaSwgYXJyKSA9PiB7XG4gICAgICBpZiAoaSA+IDAgJiYgKHNwYW4ub2Zmc2V0VG9wID4gYXJyW2ktMV0ub2Zmc2V0VG9wKSkge1xuICAgICAgICBsaW5lKytcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKGBhbmltYXRlLWxpbmUtJHtsaW5lfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKGBhbmltYXRlLWxpbmUtJHtsaW5lfWApO1xuICAgICAgfVxuICAgICAgaWYodHlwZW9mIHNwYW5BcnJbbGluZSAtIDFdID09ICd1bmRlZmluZWQnKSB7IHNwYW5BcnJbbGluZSAtIDFdID0gW119XG4gICAgICBzcGFuQXJyW2xpbmUgLSAxXS5wdXNoKHNwYW4udGV4dENvbnRlbnQpXG4gICAgfSlcbiAgICBzZXRMaW5lcyhzcGFuQXJyKVxuICB9LCBbXSlcblxuICAvLyBjb25zdCBsaW5lQW5pbWF0aW9ucyA9IHtcbiAgLy8gICByb3RhdGU6IDE4MCxcbiAgLy8gICB0cmFuc2l0aW9uOiB7XG4gIC8vICAgICBkZWxheTogMixcbiAgLy8gICAgIGR1cmF0aW9uOiAuNSxcbiAgLy8gICAgIHN0YWdnZXJDaGlsZHJlbjogLjVcbiAgLy8gICB9XG4gIC8vIH1lXG5cbiAgcmV0dXJuIChcbiAgICAhbGluZXMubGVuZ3RoID9cbiAgICAgIHNwbGl0U3RyLm1hcCgoc3BhbiwgaSkgPT4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e3N0cmluZ0NsYXNzfT57c3Bhbn0gPC9zcGFuPilcbiAgICA6XG4gICAgICBsaW5lcy5tYXAoKGxpbmUsIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIGFuaW1hdGU9e1wicG9wVXBcIn1cbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsIG92ZXJmbG93OiAnaGlkZGVuJywgcGFkZGluZzogJzJweCAwJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsaW5lICYmIGxpbmUubWFwKCh3b3JkLCBqKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgICBrZXk9e2p9XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiB0cmFuc2l0aW9uRHVyYXRpb24gfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RyaW5nQ2xhc3N9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lJywgd2hpdGVTcGFjZTogJ3ByZScgfX1cbiAgICAgICAgICAgICAgICA+e3dvcmR9PC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICApXG4gICAgfVxuICApKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltTXVsdGlsaW5lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/animations/AnimMultiline.js\n");

/***/ })

});