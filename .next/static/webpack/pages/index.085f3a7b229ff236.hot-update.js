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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ChatInterface() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const chatBoxRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setMessages([\n            ...messages,\n            newMessage\n        ]);\n        setNewMessage(\"\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;\n    }, [\n        messages\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        w: \"100%\",\n        h: \"100%\",\n        bg: \"black\",\n        color: \"green.300\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        overflow: \"hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                flex: \"1\",\n                w: \"100%\",\n                bg: \"black\",\n                color: \"green.300\",\n                p: \"4\",\n                overflowY: \"auto\",\n                ref: chatBoxRef,\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        mb: \"2\",\n                        children: message\n                    }, index, false, {\n                        fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                w: \"100%\",\n                p: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                        w: \"100%\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                placeholder: \"Type your message here\",\n                                size: \"sm\",\n                                color: \"green.300\",\n                                bg: \"gray.700\",\n                                _hover: {\n                                    bg: \"gray.800\"\n                                },\n                                _focus: {\n                                    bg: \"gray.800\",\n                                    boxShadow: \"none\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                colorScheme: \"blue\",\n                                size: \"sm\",\n                                type: \"submit\",\n                                bg: \"green.300\",\n                                _hover: {\n                                    bg: \"green.400\"\n                                },\n                                onClick: handleSubmit,\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Personal Projects\\\\real-time-chat-app\\\\next-client\\\\components\\\\chat.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatInterface, \"9IUeDBAQaS9A4A0lKpspAf4nHzA=\");\n_c = ChatInterface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatInterface);\nvar _c;\n$RefreshReg$(_c, \"ChatInterface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEU7QUFDeEI7QUFFcEQsU0FBU1MsZ0JBQWdCOztJQUN2QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDN0MsTUFBTVEsYUFBYVAsNkNBQU1BLENBQUMsSUFBSTtJQUU5QixNQUFNUSxlQUFlLENBQUNDLElBQU07UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJOLFlBQVk7ZUFBSUQ7WUFBVUU7U0FBVztRQUNyQ0MsY0FBYztJQUNoQjtJQUVBTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RNLFdBQVdJLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHTCxXQUFXSSxPQUFPLENBQUNFLFlBQVk7SUFDaEUsR0FBRztRQUFDVjtLQUFTO0lBRWIscUJBQ0UsOERBQUNWLGlEQUFHQTtRQUNGcUIsR0FBRTtRQUNGQyxHQUFFO1FBQ0ZDLElBQUc7UUFDSEMsT0FBTTtRQUNOQyxTQUFRO1FBQ1JDLGVBQWM7UUFDZEMsWUFBVztRQUNYQyxVQUFTOzswQkFFVCw4REFBQzVCLGlEQUFHQTtnQkFDRjZCLE1BQUs7Z0JBQ0xSLEdBQUU7Z0JBQ0ZFLElBQUc7Z0JBQ0hDLE9BQU07Z0JBQ05NLEdBQUU7Z0JBQ0ZDLFdBQVU7Z0JBQ1ZDLEtBQUtsQjswQkFFSkosU0FBU3VCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUM5QixrREFBSUE7d0JBQWErQixJQUFHO2tDQUNsQkY7dUJBRFFDOzs7Ozs7Ozs7OzBCQUtmLDhEQUFDbkMsaURBQUdBO2dCQUFDcUIsR0FBRTtnQkFBT1MsR0FBRTswQkFDZCw0RUFBQzdCLG9EQUFNQTs4QkFDTCw0RUFBQ0Msb0RBQU1BO3dCQUFDbUIsR0FBRTs7MENBQ1IsOERBQUNsQixtREFBS0E7Z0NBQ0prQyxPQUFPekI7Z0NBQ1AwQixVQUFVLENBQUN0QixJQUFNSCxjQUFjRyxFQUFFdUIsTUFBTSxDQUFDRixLQUFLO2dDQUM3Q0csYUFBWTtnQ0FDWkMsTUFBSztnQ0FDTGpCLE9BQU07Z0NBQ05ELElBQUc7Z0NBQ0htQixRQUFRO29DQUFFbkIsSUFBSTtnQ0FBVztnQ0FDekJvQixRQUFRO29DQUFFcEIsSUFBSTtvQ0FBWXFCLFdBQVc7Z0NBQU87Ozs7OzswQ0FFOUMsOERBQUN4QyxvREFBTUE7Z0NBQ0x5QyxhQUFZO2dDQUNaSixNQUFLO2dDQUNMSyxNQUFLO2dDQUNMdkIsSUFBRztnQ0FDSG1CLFFBQVE7b0NBQUVuQixJQUFJO2dDQUFZO2dDQUMxQndCLFNBQVNoQzswQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBckVTTjtLQUFBQTtBQXVFVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NoYXQuanM/NjY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFZTdGFjaywgSFN0YWNrLCBJbnB1dCwgQnV0dG9uLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBDaGF0SW50ZXJmYWNlKCkge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGNoYXRCb3hSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIG5ld01lc3NhZ2VdKTtcclxuICAgIHNldE5ld01lc3NhZ2UoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoYXRCb3hSZWYuY3VycmVudC5zY3JvbGxUb3AgPSBjaGF0Qm94UmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gIH0sIFttZXNzYWdlc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB3PVwiMTAwJVwiXHJcbiAgICAgIGg9XCIxMDAlXCJcclxuICAgICAgYmc9XCJibGFja1wiXHJcbiAgICAgIGNvbG9yPVwiZ3JlZW4uMzAwXCJcclxuICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcclxuICAgID5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGZsZXg9XCIxXCJcclxuICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgYmc9XCJibGFja1wiXHJcbiAgICAgICAgY29sb3I9XCJncmVlbi4zMDBcIlxyXG4gICAgICAgIHA9XCI0XCJcclxuICAgICAgICBvdmVyZmxvd1k9XCJhdXRvXCJcclxuICAgICAgICByZWY9e2NoYXRCb3hSZWZ9XHJcbiAgICAgID5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFRleHQga2V5PXtpbmRleH0gbWI9XCIyXCI+XHJcbiAgICAgICAgICAgIHttZXNzYWdlfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCB3PVwiMTAwJVwiIHA9XCI0XCI+XHJcbiAgICAgICAgPFZTdGFjaz5cclxuICAgICAgICAgIDxIU3RhY2sgdz1cIjEwMCVcIj5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlIGhlcmVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJncmVlbi4zMDBcIlxyXG4gICAgICAgICAgICAgIGJnPVwiZ3JheS43MDBcIlxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBiZzogXCJncmF5LjgwMFwiIH19XHJcbiAgICAgICAgICAgICAgX2ZvY3VzPXt7IGJnOiBcImdyYXkuODAwXCIsIGJveFNoYWRvdzogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBiZz1cImdyZWVuLjMwMFwiXHJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IGJnOiBcImdyZWVuLjQwMFwiIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRJbnRlcmZhY2U7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJWU3RhY2siLCJIU3RhY2siLCJJbnB1dCIsIkJ1dHRvbiIsIlRleHQiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkNoYXRJbnRlcmZhY2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJjaGF0Qm94UmVmIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInciLCJoIiwiYmciLCJjb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm92ZXJmbG93IiwiZmxleCIsInAiLCJvdmVyZmxvd1kiLCJyZWYiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJtYiIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInNpemUiLCJfaG92ZXIiLCJfZm9jdXMiLCJib3hTaGFkb3ciLCJjb2xvclNjaGVtZSIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chat.js\n"));

/***/ })

});