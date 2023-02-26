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

/***/ "./components/chat.js":
/*!****************************!*\
  !*** ./components/chat.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatInterface; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction ChatInterface() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleMessageSend = (e)=>{\n        e.preventDefault();\n        const input = e.target.elements.message;\n        const message = input.value.trim();\n        if (!message) return;\n        setMessages((prevMessages)=>[\n                ...prevMessages,\n                message\n            ]);\n        input.value = \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        height: \"200px\",\n        flexDirection: \"column\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                bg: \"black\",\n                color: \"green.500\",\n                flex: \"1\",\n                overflowY: \"scroll\",\n                p: 4,\n                mb: 4,\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        mb: 2,\n                        children: message\n                    }, index, false, {\n                        fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleMessageSend,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                            name: \"message\",\n                            flex: \"1\",\n                            mr: 4\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            type: \"submit\",\n                            colorScheme: \"green\",\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatInterface, \"dxxfFX7fiXmC0h9Fk+B7I5VonqM=\");\n_c = ChatInterface;\nvar _c;\n$RefreshReg$(_c, \"ChatInterface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDMkI7QUFFN0MsU0FBU0ssZ0JBQWdCOztJQUN0QyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxNQUFNUSxvQkFBb0IsQ0FBQ0MsSUFBTTtRQUMvQkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxRQUFRRixFQUFFRyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTztRQUN2QyxNQUFNQSxVQUFVSCxNQUFNSSxLQUFLLENBQUNDLElBQUk7UUFDaEMsSUFBSSxDQUFDRixTQUFTO1FBQ2RQLFlBQVksQ0FBQ1UsZUFBaUI7bUJBQUlBO2dCQUFjSDthQUFRO1FBQ3hESCxNQUFNSSxLQUFLLEdBQUc7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ2Isa0RBQUlBO1FBQUNnQixRQUFPO1FBQVFDLGVBQWM7OzBCQUNqQyw4REFBQ2xCLGlEQUFHQTtnQkFDRm1CLElBQUc7Z0JBQ0hDLE9BQU07Z0JBQ05DLE1BQUs7Z0JBQ0xDLFdBQVU7Z0JBQ1ZDLEdBQUc7Z0JBQ0hDLElBQUk7MEJBRUhuQixTQUFTb0IsR0FBRyxDQUFDLENBQUNaLFNBQVNhLHNCQUN0Qiw4REFBQzFCLGlEQUFHQTt3QkFBYXdCLElBQUk7a0NBQ2xCWDt1QkFET2E7Ozs7Ozs7Ozs7MEJBS2QsOERBQUNDO2dCQUFLQyxVQUFVckI7MEJBQ2QsNEVBQUNOLGtEQUFJQTs7c0NBQ0gsOERBQUNDLG1EQUFLQTs0QkFBQzJCLE1BQUs7NEJBQVVSLE1BQUs7NEJBQUlTLElBQUk7Ozs7OztzQ0FDbkMsOERBQUMzQixvREFBTUE7NEJBQUM0QixNQUFLOzRCQUFTQyxhQUFZO3NDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wRCxDQUFDO0dBdEN1QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhdC5qcz82NjlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0SW50ZXJmYWNlKCkge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVNZXNzYWdlU2VuZCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0LmVsZW1lbnRzLm1lc3NhZ2U7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gaW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKCFtZXNzYWdlKSByZXR1cm47XHJcbiAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBtZXNzYWdlXSk7XHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IGhlaWdodD1cIjIwMHB4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgYmc9XCJibGFja1wiXHJcbiAgICAgICAgY29sb3I9XCJncmVlbi41MDBcIlxyXG4gICAgICAgIGZsZXg9XCIxXCJcclxuICAgICAgICBvdmVyZmxvd1k9XCJzY3JvbGxcIlxyXG4gICAgICAgIHA9ezR9XHJcbiAgICAgICAgbWI9ezR9XHJcbiAgICAgID5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPEJveCBrZXk9e2luZGV4fSBtYj17Mn0+XHJcbiAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTWVzc2FnZVNlbmR9PlxyXG4gICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgPElucHV0IG5hbWU9XCJtZXNzYWdlXCIgZmxleD1cIjFcIiBtcj17NH0gLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIj5cclxuICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCb3giLCJGbGV4IiwiSW5wdXQiLCJCdXR0b24iLCJDaGF0SW50ZXJmYWNlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImhhbmRsZU1lc3NhZ2VTZW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ0YXJnZXQiLCJlbGVtZW50cyIsIm1lc3NhZ2UiLCJ2YWx1ZSIsInRyaW0iLCJwcmV2TWVzc2FnZXMiLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwiYmciLCJjb2xvciIsImZsZXgiLCJvdmVyZmxvd1kiLCJwIiwibWIiLCJtYXAiLCJpbmRleCIsImZvcm0iLCJvblN1Ym1pdCIsIm5hbWUiLCJtciIsInR5cGUiLCJjb2xvclNjaGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chat.js\n"));

/***/ })

});