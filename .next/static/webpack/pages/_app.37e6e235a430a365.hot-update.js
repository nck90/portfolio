"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/footer */ \"./elements/footer.tsx\");\n// import next.js things\n\nvar _s = $RefreshSig$();\n\n\n// import styles\n\n// import menu & footer\n\n// final return object\nfunction MyApp(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    let image, title;\n    if (router.pathname === \"/\") {\n        image = \"main\";\n        title = \"DEV Nck90\";\n    } else if (router.pathname === \"/info\") {\n        image = \"info\";\n        title = \"DEV PLUG | 소개\";\n    } else if (router.pathname === \"/contact\") {\n        image = \"contact\";\n        title = \"DEV PLUG | 연락\";\n    } else if (router.pathname === \"/license\") {\n        title = \"DEV PLUG | 라이센스\";\n        image = \"license\";\n    } else {\n        image = \"404\";\n        title = \"DEV PLUG | 페이지를 찾을 수 없음\";\n    }\n    let analytics_script = \"window.dataLayer = window.dataLayer || [];\\nfunction gtag(){dataLayer.push(arguments);}\\ngtag('js', new Date());\\ngtag('config', 'G-YER8B5T7XX');\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://www.googletagmanager.com/gtag/js?id=G-YER8B5T7XX\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        \"data-ad-client\": \"ca-pub-8685517859414452\",\n                        async: true,\n                        src: \"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:url\",\n                        content: \"https://devplug.netlify.app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:type\",\n                        content: \"website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:title\",\n                        content: \"DEV PLUG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:description\",\n                        content: \"학생 개발자 PLUG에요!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:image\",\n                        content: \"https://repository-images.githubusercontent.com/450323911/44da9596-b21a-4b7c-8e94-c4e29934a931\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:card\",\n                        content: \"summary_large_image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        children: analytics_script\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                image: image\n            }, void 0, false, {\n                fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7QUFFZ0I7QUFDWDtBQUU3QixnQkFBZ0I7QUFDZTtBQUUvQix1QkFBdUI7QUFDaUI7QUFFeEMsc0JBQXNCO0FBQ1AsU0FBU0csTUFBTSxLQUFrQztRQUFsQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWSxHQUFsQzs7SUFDMUIsTUFBTUMsU0FBU04sc0RBQVNBO0lBRXhCLElBQUlPLE9BQU9DO0lBRVgsSUFBR0YsT0FBT0csUUFBUSxLQUFLLEtBQUs7UUFDeEJGLFFBQVE7UUFDUkMsUUFBUTtJQUNaLE9BQ0ssSUFBR0YsT0FBT0csUUFBUSxLQUFLLFNBQVM7UUFDakNGLFFBQVE7UUFDUkMsUUFBUTtJQUNaLE9BQ0ssSUFBR0YsT0FBT0csUUFBUSxLQUFLLFlBQVk7UUFDcENGLFFBQVE7UUFDUkMsUUFBUTtJQUNaLE9BQ0ssSUFBR0YsT0FBT0csUUFBUSxLQUFLLFlBQVk7UUFDcENELFFBQVE7UUFDUkQsUUFBUTtJQUNaLE9BQ0s7UUFDREEsUUFBUTtRQUNSQyxRQUFRO0lBQ1o7SUFFQSxJQUFJRSxtQkFBbUI7SUFFdkIscUJBQU87OzBCQUNILDhEQUFDVCxrREFBSUE7O2tDQUNELDhEQUFDTztrQ0FBT0E7Ozs7OztrQ0FDUiw4REFBQ0c7d0JBQUtDLE1BQUs7d0JBQTBEQyxLQUFJOzs7Ozs7a0NBQ3pFLDhEQUFDQzt3QkFBT0MsS0FBSzt3QkFBQ0MsS0FBSTs7Ozs7O2tDQUNsQiw4REFBQ0Y7d0JBQU9HLGtCQUFlO3dCQUEwQkYsS0FBSzt3QkFBQ0MsS0FBSTs7Ozs7O2tDQUUzRCw4REFBQ0U7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFlQyxTQUFROzs7Ozs7a0NBQ2xDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBZ0JDLFNBQVE7Ozs7OztrQ0FDbkMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFzQkMsU0FBUTs7Ozs7O2tDQUN6Qyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQWdCQyxTQUFROzs7Ozs7a0NBQ25DLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBZUMsU0FBUTs7Ozs7O2tDQUVsQyw4REFBQ047a0NBQ0lKOzs7Ozs7Ozs7Ozs7MEJBSVQsOERBQUNOO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNILHdEQUFNQTtnQkFBQ0ssT0FBT0E7Ozs7Ozs7O0FBRXZCO0dBbER3Qko7O1FBQ0xILGtEQUFTQTs7O0tBREpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IG5leHQuanMgdGhpbmdzXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gaW1wb3J0IHN0eWxlc1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG4vLyBpbXBvcnQgbWVudSAmIGZvb3RlclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9lbGVtZW50cy9mb290ZXInO1xuXG4vLyBmaW5hbCByZXR1cm4gb2JqZWN0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBsZXQgaW1hZ2UsIHRpdGxlO1xuXG4gICAgaWYocm91dGVyLnBhdGhuYW1lID09PSAnLycpIHtcbiAgICAgICAgaW1hZ2UgPSAnbWFpbic7XG4gICAgICAgIHRpdGxlID0gJ0RFViBOY2s5MCc7XG4gICAgfVxuICAgIGVsc2UgaWYocm91dGVyLnBhdGhuYW1lID09PSAnL2luZm8nKSB7XG4gICAgICAgIGltYWdlID0gJ2luZm8nO1xuICAgICAgICB0aXRsZSA9ICdERVYgUExVRyB8IOyGjOqwnCc7XG4gICAgfVxuICAgIGVsc2UgaWYocm91dGVyLnBhdGhuYW1lID09PSAnL2NvbnRhY3QnKSB7XG4gICAgICAgIGltYWdlID0gJ2NvbnRhY3QnO1xuICAgICAgICB0aXRsZSA9ICdERVYgUExVRyB8IOyXsOudvSc7XG4gICAgfVxuICAgIGVsc2UgaWYocm91dGVyLnBhdGhuYW1lID09PSAnL2xpY2Vuc2UnKSB7XG4gICAgICAgIHRpdGxlID0gJ0RFViBQTFVHIHwg65287J207IS87IqkJztcbiAgICAgICAgaW1hZ2UgPSAnbGljZW5zZSc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbWFnZSA9ICc0MDQnO1xuICAgICAgICB0aXRsZSA9ICdERVYgUExVRyB8IO2OmOydtOyngOulvCDssL7snYQg7IiYIOyXhuydjCc7XG4gICAgfVxuXG4gICAgbGV0IGFuYWx5dGljc19zY3JpcHQgPSBcIndpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xcbmZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cXG5ndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xcbmd0YWcoJ2NvbmZpZycsICdHLVlFUjhCNVQ3WFgnKTtcIlxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctWUVSOEI1VDdYWFwiPjwvc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBkYXRhLWFkLWNsaWVudD1cImNhLXB1Yi04Njg1NTE3ODU5NDE0NDUyXCIgYXN5bmMgc3JjPVwiaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZGV2cGx1Zy5uZXRsaWZ5LmFwcFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiREVWIFBMVUdcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwi7ZWZ7IOdIOqwnOuwnOyekCBQTFVH7JeQ7JqUIVwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3JlcG9zaXRvcnktaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS80NTAzMjM5MTEvNDRkYTk1OTYtYjIxYS00YjdjLThlOTQtYzRlMjk5MzRhOTMxXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG5cbiAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAge2FuYWx5dGljc19zY3JpcHR9XG4gICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPEZvb3RlciBpbWFnZT17aW1hZ2V9IC8+XG4gICAgPC8+XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkhlYWQiLCJGb290ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImltYWdlIiwidGl0bGUiLCJwYXRobmFtZSIsImFuYWx5dGljc19zY3JpcHQiLCJsaW5rIiwiaHJlZiIsInJlbCIsInNjcmlwdCIsImFzeW5jIiwic3JjIiwiZGF0YS1hZC1jbGllbnQiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});