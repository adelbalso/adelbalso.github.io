/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/ga.js":
/*!*******************!*\
  !*** ./lib/ga.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageview\": function() { return /* binding */ pageview; },\n/* harmony export */   \"event\": function() { return /* binding */ event; }\n/* harmony export */ });\n// log the pageview with their URL\nconst pageview = url => {\n  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {\n    page_path: url\n  });\n}; // log specific events happening.\n\nconst event = ({\n  action,\n  params\n}) => {\n  window.gtag('event', action, params);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXR0bGV1bml2ZXJzZS5jb20vLi9saWIvZ2EuanM/ZDBlZCJdLCJuYW1lcyI6WyJwYWdldmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ08sTUFBTUEsUUFBUSxHQUFJQyxHQUFELElBQVM7QUFDL0JDLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosRUFBc0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyw0QkFBbEMsRUFBZ0U7QUFDOURDLGFBQVMsRUFBRU47QUFEbUQsR0FBaEU7QUFHRCxDQUpNLEMsQ0FNUDs7QUFDTyxNQUFNTyxLQUFLLEdBQUcsQ0FBQztBQUFFQyxRQUFGO0FBQVVDO0FBQVYsQ0FBRCxLQUF3QjtBQUMzQ1IsUUFBTSxDQUFDQyxJQUFQLENBQVksT0FBWixFQUFxQk0sTUFBckIsRUFBNkJDLE1BQTdCO0FBQ0QsQ0FGTSIsImZpbGUiOiIuL2xpYi9nYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZyB0aGUgcGFnZXZpZXcgd2l0aCB0aGVpciBVUkxcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmwpID0+IHtcbiAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MsIHtcbiAgICBwYWdlX3BhdGg6IHVybCxcbiAgfSlcbn1cblxuLy8gbG9nIHNwZWNpZmljIGV2ZW50cyBoYXBwZW5pbmcuXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIHBhcmFtcyB9KSA9PiB7XG4gIHdpbmRvdy5ndGFnKCdldmVudCcsIGFjdGlvbiwgcGFyYW1zKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/ga.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/ga */ \"./lib/ga.js\");\n\nvar _jsxFileName = \"/Users/adriandelbalso/workspace/adelbalso.github.io/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const handleRouteChange = url => {\n      _lib_ga__WEBPACK_IMPORTED_MODULE_6__.pageview(url);\n    }; //When the component is mounted, subscribe to router changes\n    //and log those page views\n\n\n    router.events.on('routeChangeComplete', handleRouteChange); // If the component is unmounted, unsubscribe\n    // from the event with the `off` method\n\n    return () => {\n      router.events.off('routeChangeComplete', handleRouteChange);\n    };\n  }, [router.events]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.theme,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_theme__WEBPACK_IMPORTED_MODULE_3__.GlobalStyle, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n      exitBeforeEnter: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), router.pathname, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXR0bGV1bml2ZXJzZS5jb20vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJnYSIsImV2ZW50cyIsIm9uIiwib2ZmIiwidGhlbWUiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULENBQWE7QUFDWEMsV0FEVztBQUVYQztBQUZXLENBQWIsRUFHRztBQUNELFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsaUJBQWlCLEdBQUlDLEdBQUQsSUFBUztBQUNqQ0MsbURBQUEsQ0FBWUQsR0FBWjtBQUNELEtBRkQsQ0FEYyxDQUlkO0FBQ0E7OztBQUNBSixVQUFNLENBQUNNLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NKLGlCQUF4QyxFQU5jLENBUWQ7QUFDQTs7QUFDQSxXQUFPLE1BQU07QUFDWEgsWUFBTSxDQUFDTSxNQUFQLENBQWNFLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDTCxpQkFBekM7QUFDRCxLQUZEO0FBR0QsR0FiUSxFQWFOLENBQUNILE1BQU0sQ0FBQ00sTUFBUixDQWJNLENBQVQ7QUFlQSxzQkFDRSw4REFBQyw0REFBRDtBQUFlLFNBQUssRUFBRUcsZ0RBQXRCO0FBQUEsNEJBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBaUIscUJBQWUsTUFBaEM7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFxQ1YsU0FBckMsR0FBZ0JDLE1BQU0sQ0FBQ1UsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQUVELCtEQUFlYixHQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgR2xvYmFsU3R5bGUsIHRoZW1lIH0gZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgKiBhcyBnYSBmcm9tICcuLi9saWIvZ2EnXG5cbmZ1bmN0aW9uIEFwcCh7XG4gIENvbXBvbmVudCxcbiAgcGFnZVByb3BzXG59KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcbiAgICAgIGdhLnBhZ2V2aWV3KHVybClcbiAgICB9XG4gICAgLy9XaGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCwgc3Vic2NyaWJlIHRvIHJvdXRlciBjaGFuZ2VzXG4gICAgLy9hbmQgbG9nIHRob3NlIHBhZ2Ugdmlld3NcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG5cbiAgICAvLyBJZiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCwgdW5zdWJzY3JpYmVcbiAgICAvLyBmcm9tIHRoZSBldmVudCB3aXRoIHRoZSBgb2ZmYCBtZXRob2RcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICB9XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSlcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxuICAgICAgICA8Q29tcG9uZW50IGtleT17cm91dGVyLnBhdGhuYW1lfSB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": function() { return /* binding */ theme; },\n/* harmony export */   \"GlobalStyle\": function() { return /* binding */ GlobalStyle; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n // Style values:\n\nconst buffer = 10;\nconst timing = '.15s';\nconst easing = 'ease-in-out';\nconst fontSize = 24;\nconst lineHeight = 18;\nconst theme = {\n  util: {\n    buffer,\n    radius: 4,\n    timing,\n    transition: `all ${timing} ${easing}`,\n    zIndexTop: 3,\n    zIndexMiddle: 2,\n    zIndexBottom: 1,\n    headerHeight: lineHeight * 5,\n    mobileHeaderHeight: lineHeight * 3\n  },\n  breakpoint: {\n    xs: 640,\n    sm: 768,\n    md: 1024,\n    lg: 1440,\n    xl: 2000\n  },\n  color: {\n    white: '#FFFFFF',\n    black: '#22222A',\n    gray: '#afafaf',\n    lightGray: '#F7F8F9',\n    blue: '#2F57E5',\n    orange: '#FA9C2E',\n    lightOrange: '#ffe1be',\n    climateGreen: '#009681',\n    innovationBlue: '#2F57E5',\n    trustYellow: '#FFD600',\n    impactBlue: '#A0CDDB',\n    linkColor: '#e98dff',\n    buildAqua: '#C0EAD8'\n  },\n  text: {\n    size: fontSize,\n    lineHeight: lineHeight,\n    sizeMedium: fontSize * 2,\n    lineHeightMedium: lineHeight * 2,\n    sizeMediumMobile: fontSize * 1.5,\n    lineHeightMediumMobile: lineHeight * 1.5,\n    sizeLarge: fontSize * 2,\n    lineHeightLarge: lineHeight * 5,\n    sizeLargeMobile: fontSize * 2,\n    lineHeightLargeMobile: lineHeight * 2,\n    family: 'Soehne Buch, sans-serif',\n    familyMedium: 'Soehne Halbfett, sans-serif',\n    familyLight: 'Soehne Leicht, sans-serif',\n    sizeSmall: 18\n  }\n}; // Global styles:\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  body, html {\n    margin: 0 !important;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  html {\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n  }\n  body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-family: ${props => props.theme.text.family};\n    color: ${props => props.theme.text.color};\n    font-size: ${props => props.theme.text.size}px;\n    font-weight: heavy;\n  }\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    cursor: pointer;\n    font-family: ${({\n  theme\n}) => theme.text.family};\n    text-decoration: none;\n    color: ${({\n  theme\n}) => theme.color.linkColor};\n    &:visited {\n      color: ${({\n  theme\n}) => theme.color.linkColor};\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXR0bGV1bml2ZXJzZS5jb20vLi9zdHlsZXMvdGhlbWUuanM/MzU1NCJdLCJuYW1lcyI6WyJidWZmZXIiLCJ0aW1pbmciLCJlYXNpbmciLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0aGVtZSIsInV0aWwiLCJyYWRpdXMiLCJ0cmFuc2l0aW9uIiwiekluZGV4VG9wIiwiekluZGV4TWlkZGxlIiwiekluZGV4Qm90dG9tIiwiaGVhZGVySGVpZ2h0IiwibW9iaWxlSGVhZGVySGVpZ2h0IiwiYnJlYWtwb2ludCIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJjb2xvciIsIndoaXRlIiwiYmxhY2siLCJncmF5IiwibGlnaHRHcmF5IiwiYmx1ZSIsIm9yYW5nZSIsImxpZ2h0T3JhbmdlIiwiY2xpbWF0ZUdyZWVuIiwiaW5ub3ZhdGlvbkJsdWUiLCJ0cnVzdFllbGxvdyIsImltcGFjdEJsdWUiLCJsaW5rQ29sb3IiLCJidWlsZEFxdWEiLCJ0ZXh0Iiwic2l6ZSIsInNpemVNZWRpdW0iLCJsaW5lSGVpZ2h0TWVkaXVtIiwic2l6ZU1lZGl1bU1vYmlsZSIsImxpbmVIZWlnaHRNZWRpdW1Nb2JpbGUiLCJzaXplTGFyZ2UiLCJsaW5lSGVpZ2h0TGFyZ2UiLCJzaXplTGFyZ2VNb2JpbGUiLCJsaW5lSGVpZ2h0TGFyZ2VNb2JpbGUiLCJmYW1pbHkiLCJmYW1pbHlNZWRpdW0iLCJmYW1pbHlMaWdodCIsInNpemVTbWFsbCIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztDQUVBOztBQUNBLE1BQU1BLE1BQU0sR0FBRyxFQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLE1BQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUcsYUFBZjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUVPLE1BQU1DLEtBQUssR0FBRztBQUNuQkMsTUFBSSxFQUFFO0FBQ0pOLFVBREk7QUFFSk8sVUFBTSxFQUFFLENBRko7QUFHSk4sVUFISTtBQUlKTyxjQUFVLEVBQUcsT0FBTVAsTUFBTyxJQUFHQyxNQUFPLEVBSmhDO0FBS0pPLGFBQVMsRUFBRSxDQUxQO0FBTUpDLGdCQUFZLEVBQUUsQ0FOVjtBQU9KQyxnQkFBWSxFQUFFLENBUFY7QUFRSkMsZ0JBQVksRUFBRVIsVUFBVSxHQUFDLENBUnJCO0FBU0pTLHNCQUFrQixFQUFFVCxVQUFVLEdBQUM7QUFUM0IsR0FEYTtBQVluQlUsWUFBVSxFQUFFO0FBQ1ZDLE1BQUUsRUFBRSxHQURNO0FBRVZDLE1BQUUsRUFBRSxHQUZNO0FBR1ZDLE1BQUUsRUFBRSxJQUhNO0FBSVZDLE1BQUUsRUFBRSxJQUpNO0FBS1ZDLE1BQUUsRUFBRTtBQUxNLEdBWk87QUFtQm5CQyxPQUFLLEVBQUU7QUFDTEMsU0FBSyxFQUFFLFNBREY7QUFFTEMsU0FBSyxFQUFFLFNBRkY7QUFHTEMsUUFBSSxFQUFFLFNBSEQ7QUFJTEMsYUFBUyxFQUFFLFNBSk47QUFLTEMsUUFBSSxFQUFFLFNBTEQ7QUFNTEMsVUFBTSxFQUFFLFNBTkg7QUFPTEMsZUFBVyxFQUFFLFNBUFI7QUFRTEMsZ0JBQVksRUFBRSxTQVJUO0FBU0xDLGtCQUFjLEVBQUUsU0FUWDtBQVVMQyxlQUFXLEVBQUUsU0FWUjtBQVdMQyxjQUFVLEVBQUUsU0FYUDtBQVlMQyxhQUFTLEVBQUUsU0FaTjtBQWFMQyxhQUFTLEVBQUU7QUFiTixHQW5CWTtBQWtDbkJDLE1BQUksRUFBRTtBQUNKQyxRQUFJLEVBQUVoQyxRQURGO0FBRUpDLGNBQVUsRUFBRUEsVUFGUjtBQUdKZ0MsY0FBVSxFQUFFakMsUUFBUSxHQUFHLENBSG5CO0FBSUprQyxvQkFBZ0IsRUFBRWpDLFVBQVUsR0FBRyxDQUozQjtBQUtKa0Msb0JBQWdCLEVBQUVuQyxRQUFRLEdBQUcsR0FMekI7QUFNSm9DLDBCQUFzQixFQUFFbkMsVUFBVSxHQUFHLEdBTmpDO0FBT0pvQyxhQUFTLEVBQUVyQyxRQUFRLEdBQUcsQ0FQbEI7QUFRSnNDLG1CQUFlLEVBQUVyQyxVQUFVLEdBQUcsQ0FSMUI7QUFTSnNDLG1CQUFlLEVBQUV2QyxRQUFRLEdBQUcsQ0FUeEI7QUFVSndDLHlCQUFxQixFQUFFdkMsVUFBVSxHQUFHLENBVmhDO0FBV0p3QyxVQUFNLEVBQUUseUJBWEo7QUFZSkMsZ0JBQVksRUFBRSw2QkFaVjtBQWFKQyxlQUFXLEVBQUUsMkJBYlQ7QUFjSkMsYUFBUyxFQUFFO0FBZFA7QUFsQ2EsQ0FBZCxDLENBb0RQOztBQUNPLE1BQU1DLFdBQVcsR0FBR0MsZ0VBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQkMsS0FBSyxJQUFJQSxLQUFLLENBQUM3QyxLQUFOLENBQVk2QixJQUFaLENBQWlCVSxNQUFPO0FBQ3BELGFBQWFNLEtBQUssSUFBSUEsS0FBSyxDQUFDN0MsS0FBTixDQUFZNkIsSUFBWixDQUFpQmQsS0FBTTtBQUM3QyxpQkFBaUI4QixLQUFLLElBQUlBLEtBQUssQ0FBQzdDLEtBQU4sQ0FBWTZCLElBQVosQ0FBaUJDLElBQUs7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixDQUFDO0FBQUU5QjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDNkIsSUFBTixDQUFXVSxNQUFPO0FBQ3BEO0FBQ0EsYUFBYSxDQUFDO0FBQUV2QztBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDZSxLQUFOLENBQVlZLFNBQVU7QUFDbEQ7QUFDQSxlQUFlLENBQUM7QUFBRTNCO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNlLEtBQU4sQ0FBWVksU0FBVTtBQUNwRDtBQUNBO0FBQ0EsQ0EvQk8iLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gU3R5bGUgdmFsdWVzOlxuY29uc3QgYnVmZmVyID0gMTA7XG5jb25zdCB0aW1pbmcgPSAnLjE1cyc7XG5jb25zdCBlYXNpbmcgPSAnZWFzZS1pbi1vdXQnO1xuY29uc3QgZm9udFNpemUgPSAyNDtcbmNvbnN0IGxpbmVIZWlnaHQgPSAxODtcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xuICB1dGlsOiB7XG4gICAgYnVmZmVyLFxuICAgIHJhZGl1czogNCxcbiAgICB0aW1pbmcsXG4gICAgdHJhbnNpdGlvbjogYGFsbCAke3RpbWluZ30gJHtlYXNpbmd9YCxcbiAgICB6SW5kZXhUb3A6IDMsXG4gICAgekluZGV4TWlkZGxlOiAyLFxuICAgIHpJbmRleEJvdHRvbTogMSxcbiAgICBoZWFkZXJIZWlnaHQ6IGxpbmVIZWlnaHQqNSxcbiAgICBtb2JpbGVIZWFkZXJIZWlnaHQ6IGxpbmVIZWlnaHQqM1xuICB9LFxuICBicmVha3BvaW50OiB7XG4gICAgeHM6IDY0MCxcbiAgICBzbTogNzY4LFxuICAgIG1kOiAxMDI0LFxuICAgIGxnOiAxNDQwLFxuICAgIHhsOiAyMDAwXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgd2hpdGU6ICcjRkZGRkZGJyxcbiAgICBibGFjazogJyMyMjIyMkEnLFxuICAgIGdyYXk6ICcjYWZhZmFmJyxcbiAgICBsaWdodEdyYXk6ICcjRjdGOEY5JyxcbiAgICBibHVlOiAnIzJGNTdFNScsXG4gICAgb3JhbmdlOiAnI0ZBOUMyRScsXG4gICAgbGlnaHRPcmFuZ2U6ICcjZmZlMWJlJyxcbiAgICBjbGltYXRlR3JlZW46ICcjMDA5NjgxJyxcbiAgICBpbm5vdmF0aW9uQmx1ZTogJyMyRjU3RTUnLFxuICAgIHRydXN0WWVsbG93OiAnI0ZGRDYwMCcsXG4gICAgaW1wYWN0Qmx1ZTogJyNBMENEREInLFxuICAgIGxpbmtDb2xvcjogJyNlOThkZmYnLFxuICAgIGJ1aWxkQXF1YTogJyNDMEVBRDgnXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBzaXplOiBmb250U2l6ZSxcbiAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0LFxuICAgIHNpemVNZWRpdW06IGZvbnRTaXplICogMixcbiAgICBsaW5lSGVpZ2h0TWVkaXVtOiBsaW5lSGVpZ2h0ICogMixcbiAgICBzaXplTWVkaXVtTW9iaWxlOiBmb250U2l6ZSAqIDEuNSxcbiAgICBsaW5lSGVpZ2h0TWVkaXVtTW9iaWxlOiBsaW5lSGVpZ2h0ICogMS41LFxuICAgIHNpemVMYXJnZTogZm9udFNpemUgKiAyLFxuICAgIGxpbmVIZWlnaHRMYXJnZTogbGluZUhlaWdodCAqIDUsXG4gICAgc2l6ZUxhcmdlTW9iaWxlOiBmb250U2l6ZSAqIDIsXG4gICAgbGluZUhlaWdodExhcmdlTW9iaWxlOiBsaW5lSGVpZ2h0ICogMixcbiAgICBmYW1pbHk6ICdTb2VobmUgQnVjaCwgc2Fucy1zZXJpZicsXG4gICAgZmFtaWx5TWVkaXVtOiAnU29laG5lIEhhbGJmZXR0LCBzYW5zLXNlcmlmJyxcbiAgICBmYW1pbHlMaWdodDogJ1NvZWhuZSBMZWljaHQsIHNhbnMtc2VyaWYnLFxuICAgIHNpemVTbWFsbDogMThcbiAgfVxufTtcblxuLy8gR2xvYmFsIHN0eWxlczpcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBib2R5LCBodG1sIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cblxuICBodG1sIHtcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIH1cbiAgYm9keSB7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmZhbWlseX07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5jb2xvcn07XG4gICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuc2l6ZX1weDtcbiAgICBmb250LXdlaWdodDogaGVhdnk7XG4gIH1cbiAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0LmZhbWlseX07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmxpbmtDb2xvcn07XG4gICAgJjp2aXNpdGVkIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmxpbmtDb2xvcn07XG4gICAgfVxuICB9XG5gO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/theme.js\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();