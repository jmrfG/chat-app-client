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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ChatInterface() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setMessages([\n            ...messages,\n            newMessage\n        ]);\n        setNewMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        bg: \"black\",\n        h: \"max-content\",\n        color: \"green.300\",\n        overflowY: \"scroll\",\n        p: \"4\",\n        borderRadius: \"md\",\n        children: [\n            messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    mb: \"2\",\n                    children: message\n                }, index, false, {\n                    fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                as: \"form\",\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                    mt: \"auto\",\n                    spacing: \"4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                placeholder: \"Type your message here\",\n                                size: \"sm\",\n                                color: \"green.300\",\n                                bg: \"gray.700\",\n                                _hover: {\n                                    bg: \"gray.800\"\n                                },\n                                _focus: {\n                                    bg: \"gray.800\",\n                                    boxShadow: \"none\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                colorScheme: \"blue\",\n                                size: \"sm\",\n                                type: \"submit\",\n                                bg: \"green.300\",\n                                _hover: {\n                                    bg: \"green.400\"\n                                },\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatInterface, \"DTIS5OvIgs5cgWPHCj6NEqfd+m8=\");\n_c = ChatInterface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatInterface);\nvar _c;\n$RefreshReg$(_c, \"ChatInterface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEU7QUFDM0M7QUFFakMsU0FBU08sZ0JBQWdCOztJQUN2QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFN0MsTUFBTU0sZUFBZSxDQUFDQyxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCTCxZQUFZO2VBQUlEO1lBQVVFO1NBQVc7UUFDckNDLGNBQWM7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ1gsaURBQUdBO1FBQ0ZlLElBQUc7UUFDSEMsR0FBRTtRQUNGQyxPQUFNO1FBQ05DLFdBQVU7UUFDVkMsR0FBRTtRQUNGQyxjQUFhOztZQUVaWixTQUFTYSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDbEIsa0RBQUlBO29CQUFhbUIsSUFBRzs4QkFDbEJGO21CQURRQzs7Ozs7MEJBSWIsOERBQUN2QixpREFBR0E7Z0JBQUN5QixJQUFHO2dCQUFPQyxVQUFVZDswQkFDdkIsNEVBQUNYLG9EQUFNQTtvQkFBQzBCLElBQUc7b0JBQU9DLFNBQVE7OEJBQ3hCLDRFQUFDMUIsb0RBQU1BOzswQ0FDTCw4REFBQ0MsbURBQUtBO2dDQUNKMEIsT0FBT25CO2dDQUNQb0IsVUFBVSxDQUFDakIsSUFBTUYsY0FBY0UsRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDN0NHLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xoQixPQUFNO2dDQUNORixJQUFHO2dDQUNIbUIsUUFBUTtvQ0FBRW5CLElBQUk7Z0NBQVc7Z0NBQ3pCb0IsUUFBUTtvQ0FBRXBCLElBQUk7b0NBQVlxQixXQUFXO2dDQUFPOzs7Ozs7MENBRTlDLDhEQUFDaEMsb0RBQU1BO2dDQUNMaUMsYUFBWTtnQ0FDWkosTUFBSztnQ0FDTEssTUFBSztnQ0FDTHZCLElBQUc7Z0NBQ0htQixRQUFRO29DQUFFbkIsSUFBSTtnQ0FBWTswQ0FDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQW5EU1I7S0FBQUE7QUFxRFQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0LmpzPzY2OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBWU3RhY2ssIEhTdGFjaywgSW5wdXQsIEJ1dHRvbiwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBDaGF0SW50ZXJmYWNlKCkge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBuZXdNZXNzYWdlXSk7XHJcbiAgICBzZXROZXdNZXNzYWdlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGJnPVwiYmxhY2tcIlxyXG4gICAgICBoPSdtYXgtY29udGVudCdcclxuICAgICAgY29sb3I9XCJncmVlbi4zMDBcIlxyXG4gICAgICBvdmVyZmxvd1k9XCJzY3JvbGxcIlxyXG4gICAgICBwPVwiNFwiXHJcbiAgICAgIGJvcmRlclJhZGl1cz1cIm1kXCJcclxuICAgID5cclxuICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcclxuICAgICAgICA8VGV4dCBrZXk9e2luZGV4fSBtYj1cIjJcIj5cclxuICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgKSl9XHJcbiAgICAgIDxCb3ggYXM9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPFZTdGFjayBtdD1cImF1dG9cIiBzcGFjaW5nPVwiNFwiPlxyXG4gICAgICAgICAgPEhTdGFjaz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlIGhlcmVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmVlbi4zMDBcIlxyXG4gICAgICAgICAgICAgIGJnPVwiZ3JheS43MDBcIlxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBiZzogXCJncmF5LjgwMFwiIH19XHJcbiAgICAgICAgICAgICAgX2ZvY3VzPXt7IGJnOiBcImdyYXkuODAwXCIsIGJveFNoYWRvdzogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBiZz1cImdyZWVuLjMwMFwiXHJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IGJnOiBcImdyZWVuLjQwMFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEludGVyZmFjZTsiXSwibmFtZXMiOlsiQm94IiwiVlN0YWNrIiwiSFN0YWNrIiwiSW5wdXQiLCJCdXR0b24iLCJUZXh0IiwidXNlU3RhdGUiLCJDaGF0SW50ZXJmYWNlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmciLCJoIiwiY29sb3IiLCJvdmVyZmxvd1kiLCJwIiwiYm9yZGVyUmFkaXVzIiwibWFwIiwibWVzc2FnZSIsImluZGV4IiwibWIiLCJhcyIsIm9uU3VibWl0IiwibXQiLCJzcGFjaW5nIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwic2l6ZSIsIl9ob3ZlciIsIl9mb2N1cyIsImJveFNoYWRvdyIsImNvbG9yU2NoZW1lIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chat.js\n"));

/***/ })

});