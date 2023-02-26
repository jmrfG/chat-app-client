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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ChatInterface() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setMessages([\n            ...messages,\n            newMessage\n        ]);\n        setNewMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        w: \"400px\",\n        h: \"500px\",\n        bg: \"black\",\n        color: \"green.300\",\n        overflowY: \"scroll\",\n        p: \"4\",\n        borderRadius: \"md\",\n        children: [\n            messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    mb: \"2\",\n                    children: message\n                }, index, false, {\n                    fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                as: \"form\",\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                    mt: \"auto\",\n                    spacing: \"4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                            value: newMessage,\n                            onChange: (e)=>setNewMessage(e.target.value),\n                            placeholder: \"Type your message here\",\n                            size: \"sm\",\n                            color: \"green.300\",\n                            bg: \"gray.700\",\n                            _hover: {\n                                bg: \"gray.800\"\n                            },\n                            _focus: {\n                                bg: \"gray.800\",\n                                boxShadow: \"none\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                colorScheme: \"blue\",\n                size: \"sm\",\n                type: \"submit\",\n                bg: \"green.300\",\n                _hover: {\n                    bg: \"green.400\"\n                },\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatInterface, \"DTIS5OvIgs5cgWPHCj6NEqfd+m8=\");\n_c = ChatInterface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatInterface);\nvar _c;\n$RefreshReg$(_c, \"ChatInterface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEU7QUFDM0M7QUFFakMsU0FBU08sZ0JBQWdCOztJQUN2QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFN0MsTUFBTU0sZUFBZSxDQUFDQyxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCTCxZQUFZO2VBQUlEO1lBQVVFO1NBQVc7UUFDckNDLGNBQWM7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ1gsaURBQUdBO1FBQ0ZlLEdBQUU7UUFDRkMsR0FBRTtRQUNGQyxJQUFHO1FBQ0hDLE9BQU07UUFDTkMsV0FBVTtRQUNWQyxHQUFFO1FBQ0ZDLGNBQWE7O1lBRVpiLFNBQVNjLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNuQixrREFBSUE7b0JBQWFvQixJQUFHOzhCQUNsQkY7bUJBRFFDOzs7OzswQkFJYiw4REFBQ3hCLGlEQUFHQTtnQkFBQzBCLElBQUc7Z0JBQU9DLFVBQVVmOzBCQUN2Qiw0RUFBQ1gsb0RBQU1BO29CQUFDMkIsSUFBRztvQkFBT0MsU0FBUTs4QkFDeEIsNEVBQUMzQixvREFBTUE7a0NBQ0wsNEVBQUNDLG1EQUFLQTs0QkFDSjJCLE9BQU9wQjs0QkFDUHFCLFVBQVUsQ0FBQ2xCLElBQU1GLGNBQWNFLEVBQUVtQixNQUFNLENBQUNGLEtBQUs7NEJBQzdDRyxhQUFZOzRCQUNaQyxNQUFLOzRCQUNMaEIsT0FBTTs0QkFDTkQsSUFBRzs0QkFDSGtCLFFBQVE7Z0NBQUVsQixJQUFJOzRCQUFXOzRCQUN6Qm1CLFFBQVE7Z0NBQUVuQixJQUFJO2dDQUFZb0IsV0FBVzs0QkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9wRCw4REFBQ2pDLG9EQUFNQTtnQkFDQ2tDLGFBQVk7Z0JBQ1pKLE1BQUs7Z0JBQ0xLLE1BQUs7Z0JBQ0x0QixJQUFHO2dCQUNIa0IsUUFBUTtvQkFBRWxCLElBQUk7Z0JBQVk7MEJBQzNCOzs7Ozs7Ozs7Ozs7QUFLYjtHQXREU1Y7S0FBQUE7QUF3RFQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0LmpzPzY2OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBWU3RhY2ssIEhTdGFjaywgSW5wdXQsIEJ1dHRvbiwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBDaGF0SW50ZXJmYWNlKCkge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBuZXdNZXNzYWdlXSk7XHJcbiAgICBzZXROZXdNZXNzYWdlKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHc9XCI0MDBweFwiXHJcbiAgICAgIGg9XCI1MDBweFwiXHJcbiAgICAgIGJnPVwiYmxhY2tcIlxyXG4gICAgICBjb2xvcj1cImdyZWVuLjMwMFwiXHJcbiAgICAgIG92ZXJmbG93WT1cInNjcm9sbFwiXHJcbiAgICAgIHA9XCI0XCJcclxuICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxyXG4gICAgPlxyXG4gICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxUZXh0IGtleT17aW5kZXh9IG1iPVwiMlwiPlxyXG4gICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApKX1cclxuICAgICAgPEJveCBhcz1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8VlN0YWNrIG10PVwiYXV0b1wiIHNwYWNpbmc9XCI0XCI+XHJcbiAgICAgICAgICA8SFN0YWNrPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3TWVzc2FnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UgaGVyZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuLjMwMFwiXHJcbiAgICAgICAgICAgICAgYmc9XCJncmF5LjcwMFwiXHJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IGJnOiBcImdyYXkuODAwXCIgfX1cclxuICAgICAgICAgICAgICBfZm9jdXM9e3sgYmc6IFwiZ3JheS44MDBcIiwgYm94U2hhZG93OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L1ZTdGFjaz5cclxuICAgICAgICBcclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgYmc9XCJncmVlbi4zMDBcIlxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBiZzogXCJncmVlbi40MDBcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRJbnRlcmZhY2U7Il0sIm5hbWVzIjpbIkJveCIsIlZTdGFjayIsIkhTdGFjayIsIklucHV0IiwiQnV0dG9uIiwiVGV4dCIsInVzZVN0YXRlIiwiQ2hhdEludGVyZmFjZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJuZXdNZXNzYWdlIiwic2V0TmV3TWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInciLCJoIiwiYmciLCJjb2xvciIsIm92ZXJmbG93WSIsInAiLCJib3JkZXJSYWRpdXMiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJtYiIsImFzIiwib25TdWJtaXQiLCJtdCIsInNwYWNpbmciLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJzaXplIiwiX2hvdmVyIiwiX2ZvY3VzIiwiYm94U2hhZG93IiwiY29sb3JTY2hlbWUiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chat.js\n"));

/***/ })

});