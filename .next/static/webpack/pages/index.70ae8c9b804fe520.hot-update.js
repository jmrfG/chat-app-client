"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes_conn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/conn */ \"./routes/conn.js\");\n/* harmony import */ var _routes_conn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes_conn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/chat */ \"./components/chat.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (event)=>{\n        setMsg(event.target.value);\n    };\n    const writeMessage = ()=>{\n        let socket = new WebSocket(\"ws://localhost:8080/ws\");\n        socket.send(msg);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                display: {\n                    md: \"flex\"\n                },\n                my: 4,\n                p: 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    flexGrow: 1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                            as: \"h2\",\n                            variant: \"page-title\",\n                            children: \"Jorge M.R. de Farias - Chat App Prototype\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\pages\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            my: 5,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chat__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\pages\\\\index.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\pages\\\\index.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\pages\\\\index.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\pages\\\\index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"wu2AL+BGTOpSyXjhnKep6uRDvi4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTMEI7QUFDTztBQUNhO0FBQ0s7QUFDSjtBQUUvQyxNQUFNVyxPQUFPLElBQU07O0lBQ2pCLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUvQixNQUFNTyxvQkFBb0IsQ0FBQ0MsUUFBVTtRQUNuQ0YsT0FBT0UsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzNCO0lBRUEsTUFBTVQsZUFBZSxJQUFNO1FBQ3pCLElBQUlVLFNBQVMsSUFBSUMsVUFBVTtRQUMzQkQsT0FBT0UsSUFBSSxDQUFDUjtJQUlkO0lBRUEscUJBQ0UsOERBQUNILG1FQUFNQTtrQkFDTCw0RUFBQ1QsdURBQVNBO3NCQUNSLDRFQUFDRSxpREFBR0E7Z0JBQUNtQixTQUFTO29CQUFFQyxJQUFJO2dCQUFPO2dCQUFHQyxJQUFJO2dCQUFHQyxHQUFHOzBCQUN0Qyw0RUFBQ3RCLGlEQUFHQTtvQkFBQ3VCLFVBQVU7O3NDQUNiLDhEQUFDeEIscURBQU9BOzRCQUFDeUIsSUFBRzs0QkFBS0MsU0FBUTtzQ0FBYTs7Ozs7O3NDQUd0Qyw4REFBQ3pCLGlEQUFHQTs0QkFBQ3FCLElBQUk7c0NBQ1QsNEVBQUNiLHdEQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQjtHQS9CTUM7S0FBQUE7QUFpQ04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBIZWFkaW5nLFxyXG4gIEJveCxcclxuICAvL3VzZUNvbG9yTW9kZVZhbHVlLFxyXG4gIEJ1dHRvbixcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtTGFiZWwsXHJcbiAgSW5wdXQsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgd3JpdGVNZXNzYWdlIH0gZnJvbSBcIi4uL3JvdXRlcy9jb25uXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlXCI7XHJcbmltcG9ydCBDaGF0SW50ZXJmYWNlIGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXRcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TXNnKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCB3cml0ZU1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICBsZXQgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwODAvd3NcIik7XHJcbiAgICBzb2NrZXQuc2VuZChtc2cpO1xyXG4gIFxyXG5cclxuXHJcbiAgfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9e3sgbWQ6IFwiZmxleFwiIH19IG15PXs0fSBwPXsxfT5cclxuICAgICAgICAgIDxCb3ggZmxleEdyb3c9ezF9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgdmFyaWFudD1cInBhZ2UtdGl0bGVcIj5cclxuICAgICAgICAgICAgICBKb3JnZSBNLlIuIGRlIEZhcmlhcyAtIENoYXQgQXBwIFByb3RvdHlwZVxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxCb3ggbXk9ezV9PlxyXG4gICAgICAgICAgICA8Q2hhdEludGVyZmFjZT48L0NoYXRJbnRlcmZhY2U+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJIZWFkaW5nIiwiQm94IiwiQnV0dG9uIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsInVzZVN0YXRlIiwid3JpdGVNZXNzYWdlIiwiTGF5b3V0IiwiQ2hhdEludGVyZmFjZSIsIkhvbWUiLCJtc2ciLCJzZXRNc2ciLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzb2NrZXQiLCJXZWJTb2NrZXQiLCJzZW5kIiwiZGlzcGxheSIsIm1kIiwibXkiLCJwIiwiZmxleEdyb3ciLCJhcyIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});