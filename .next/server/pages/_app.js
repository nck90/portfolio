/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/Footer.module.css":
/*!**********************************!*\
  !*** ./styles/Footer.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"footer\": \"Footer_footer__yl3k1\",\n\t\"footer_content\": \"Footer_footer_content__0KN1V\",\n\t\"footer_content_main\": \"Footer_footer_content_main__ISP4I\",\n\t\"footer_content_contact\": \"Footer_footer_content_contact__nclZV\",\n\t\"footer_title\": \"Footer_footer_title__lvA_O\",\n\t\"footer_des\": \"Footer_footer_des__KtcjL\",\n\t\"link\": \"Footer_link__2dc7Z\",\n\t\"footer_info\": \"Footer_footer_info__VkIYe\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvRm9vdGVyLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcz9jYjMyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfX3lsM2sxXCIsXG5cdFwiZm9vdGVyX2NvbnRlbnRcIjogXCJGb290ZXJfZm9vdGVyX2NvbnRlbnRfXzBLTjFWXCIsXG5cdFwiZm9vdGVyX2NvbnRlbnRfbWFpblwiOiBcIkZvb3Rlcl9mb290ZXJfY29udGVudF9tYWluX19JU1A0SVwiLFxuXHRcImZvb3Rlcl9jb250ZW50X2NvbnRhY3RcIjogXCJGb290ZXJfZm9vdGVyX2NvbnRlbnRfY29udGFjdF9fbmNsWlZcIixcblx0XCJmb290ZXJfdGl0bGVcIjogXCJGb290ZXJfZm9vdGVyX3RpdGxlX19sdkFfT1wiLFxuXHRcImZvb3Rlcl9kZXNcIjogXCJGb290ZXJfZm9vdGVyX2Rlc19fS3RjakxcIixcblx0XCJsaW5rXCI6IFwiRm9vdGVyX2xpbmtfXzJkYzdaXCIsXG5cdFwiZm9vdGVyX2luZm9cIjogXCJGb290ZXJfZm9vdGVyX2luZm9fX1ZrSVllXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Footer.module.css\n");

/***/ }),

/***/ "./elements/footer.tsx":
/*!*****************************!*\
  !*** ./elements/footer.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Footer.module.css */ \"./styles/Footer.module.css\");\n/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Footer({ image }) {\n    // 'main' 페이지에서만 푸터를 렌더링합니다.\n    if (image !== \"main\") {\n        return null; // 'main'이 아닌 경우 푸터를 렌더링하지 않음\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().footer), (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().footer_main)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().footer_content), (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().footer_content_main)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().footer_title),\n                    children: \"Nck\"\n                }, void 0, false, {\n                    fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().footer_des),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            passHref: true,\n                            href: \"/info\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                                children: \"소개\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 51\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            passHref: true,\n                            href: \"/contact\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                                children: \"연락\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 54\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            passHref: true,\n                            href: \"/license\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                                children: \"라이센스\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 54\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                            href: \"https://velog.io/@jw_308\",\n                            target: \"blank\",\n                            children: \"벨로그\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                            href: \"https://github.com/nck90\",\n                            target: \"blank\",\n                            children: \"깃헙\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().footer_des),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                        children: \"Nck90  |  s2460@e-mirim.hs.kr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().footer_des),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                        children: \"Copyrightⓒ2024 Nck90 All rights reserved.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pc/Downloads/Portfolio-main 2/elements/footer.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbGVtZW50cy9mb290ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDcEI7QUFDUDtBQU1kLFNBQVNHLE9BQU8sRUFBRUMsS0FBSyxFQUFTO0lBQzNDLDRCQUE0QjtJQUM1QixJQUFJQSxVQUFVLFFBQVE7UUFDbEIsT0FBTyxNQUFNLDZCQUE2QjtJQUM5QztJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXTCxpREFBVUEsQ0FBQ0QseUVBQW9CLEVBQUVBLDhFQUF5QjtrQkFDdEUsNEVBQUNLO1lBQUlDLFdBQVdMLGlEQUFVQSxDQUFDRCxpRkFBNEIsRUFBRUEsc0ZBQWlDOzs4QkFDdEYsOERBQUNLO29CQUFJQyxXQUFXTiwrRUFBMEI7OEJBQUU7Ozs7Ozs4QkFDNUMsOERBQUNLO29CQUFJQyxXQUFXTiw2RUFBd0I7O3NDQUNwQyw4REFBQ0Usa0RBQUlBOzRCQUFDVyxRQUFROzRCQUFDQyxNQUFNO3NDQUFTLDRFQUFDQztnQ0FBS1QsV0FBV04sdUVBQWtCOzBDQUFFOzs7Ozs7Ozs7OztzQ0FDbkUsOERBQUNFLGtEQUFJQTs0QkFBQ1csUUFBUTs0QkFBQ0MsTUFBTTtzQ0FBWSw0RUFBQ0M7Z0NBQUtULFdBQVdOLHVFQUFrQjswQ0FBRTs7Ozs7Ozs7Ozs7c0NBQ3RFLDhEQUFDRSxrREFBSUE7NEJBQUNXLFFBQVE7NEJBQUNDLE1BQU07c0NBQVksNEVBQUNDO2dDQUFLVCxXQUFXTix1RUFBa0I7MENBQUU7Ozs7Ozs7Ozs7O3NDQUN0RSw4REFBQ2lCOzRCQUFFWCxXQUFXTix1RUFBa0I7NEJBQUVjLE1BQUs7NEJBQTJCSSxRQUFPO3NDQUFROzs7Ozs7c0NBQ2pGLDhEQUFDRDs0QkFBRVgsV0FBV04sdUVBQWtCOzRCQUFFYyxNQUFLOzRCQUEyQkksUUFBTztzQ0FBUTs7Ozs7Ozs7Ozs7OzhCQUVyRiw4REFBQ2I7b0JBQUlDLFdBQVdOLDZFQUF3Qjs4QkFDcEMsNEVBQUNLO3dCQUFJQyxXQUFXTix1RUFBa0I7a0NBQUU7Ozs7Ozs7Ozs7OzhCQUV4Qyw4REFBQ0s7b0JBQUlDLFdBQVdOLDZFQUF3Qjs4QkFDcEMsNEVBQUNLO3dCQUFJQyxXQUFXTix1RUFBa0I7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9lbGVtZW50cy9mb290ZXIudHN4P2IzZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZvb3Rlcl9zdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Zvb3Rlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgaW1hZ2U6IHN0cmluZzsgIC8vIOyGjOusuOyekCAnc3RyaW5nJ+ycvOuhnCDrs4Dqsr1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHsgaW1hZ2UgfTogUHJvcHMpIHtcclxuICAgIC8vICdtYWluJyDtjpjsnbTsp4Dsl5DshJzrp4wg7ZG47YSw66W8IOugjOuNlOunge2VqeuLiOuLpC5cclxuICAgIGlmIChpbWFnZSAhPT0gJ21haW4nKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7IC8vICdtYWluJ+ydtCDslYTri4wg6rK97JqwIO2RuO2EsOulvCDroIzrjZTrp4HtlZjsp4Ag7JWK7J2MXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhmb290ZXJfc3R5bGVzLmZvb3RlciwgZm9vdGVyX3N0eWxlcy5mb290ZXJfbWFpbil9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhmb290ZXJfc3R5bGVzLmZvb3Rlcl9jb250ZW50LCBmb290ZXJfc3R5bGVzLmZvb3Rlcl9jb250ZW50X21haW4pfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb290ZXJfc3R5bGVzLmZvb3Rlcl90aXRsZX0+TmNrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9vdGVyX3N0eWxlcy5mb290ZXJfZGVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBwYXNzSHJlZiBocmVmPXtcIi9pbmZvXCJ9PjxzcGFuIGNsYXNzTmFtZT17Zm9vdGVyX3N0eWxlcy5saW5rfT7shozqsJw8L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHBhc3NIcmVmIGhyZWY9e1wiL2NvbnRhY3RcIn0+PHNwYW4gY2xhc3NOYW1lPXtmb290ZXJfc3R5bGVzLmxpbmt9PuyXsOudvTwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcGFzc0hyZWYgaHJlZj17XCIvbGljZW5zZVwifT48c3BhbiBjbGFzc05hbWU9e2Zvb3Rlcl9zdHlsZXMubGlua30+65287J207IS87IqkPC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Zvb3Rlcl9zdHlsZXMubGlua30gaHJlZj1cImh0dHBzOi8vdmVsb2cuaW8vQGp3XzMwOFwiIHRhcmdldD1cImJsYW5rXCI+67Ko66Gc6re4PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Zm9vdGVyX3N0eWxlcy5saW5rfSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25jazkwXCIgdGFyZ2V0PVwiYmxhbmtcIj7quYPtl5k8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb290ZXJfc3R5bGVzLmZvb3Rlcl9kZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb290ZXJfc3R5bGVzLmxpbmt9Pk5jazkwICB8ICBzMjQ2MEBlLW1pcmltLmhzLmtyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb290ZXJfc3R5bGVzLmZvb3Rlcl9kZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb290ZXJfc3R5bGVzLmxpbmt9PkNvcHlyaWdodOKTkjIwMjQgTmNrOTAgQWxsIHJpZ2h0cyByZXNlcnZlZC48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiZm9vdGVyX3N0eWxlcyIsImNsYXNzbmFtZXMiLCJMaW5rIiwiRm9vdGVyIiwiaW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJmb290ZXIiLCJmb290ZXJfbWFpbiIsImZvb3Rlcl9jb250ZW50IiwiZm9vdGVyX2NvbnRlbnRfbWFpbiIsImZvb3Rlcl90aXRsZSIsImZvb3Rlcl9kZXMiLCJwYXNzSHJlZiIsImhyZWYiLCJzcGFuIiwibGluayIsImEiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./elements/footer.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _elements_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/footer */ \"./elements/footer.tsx\");\n// import next.js things\n\n\n\n// import styles\n\n// import menu & footer\n\n// final return object\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    let image, title;\n    if (router.pathname === \"/\") {\n        image = \"main\";\n        title = \"DEV Nck90\";\n    } else if (router.pathname === \"/info\") {\n        image = \"info\";\n        title = \"DEV Nck90 | 소개\";\n    } else if (router.pathname === \"/contact\") {\n        image = \"contact\";\n        title = \"DEV Nck90 | 연락\";\n    } else if (router.pathname === \"/license\") {\n        title = \"DEV Nck90 | 라이센스\";\n        image = \"license\";\n    } else {\n        image = \"404\";\n        title = \"DEV Nck90 | 페이지를 찾을 수 없음\";\n    }\n    let analytics_script = \"window.dataLayer = window.dataLayer || [];\\nfunction gtag(){dataLayer.push(arguments);}\\ngtag('js', new Date());\\ngtag('config', 'G-YER8B5T7XX');\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://www.googletagmanager.com/gtag/js?id=G-YER8B5T7XX\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        \"data-ad-client\": \"ca-pub-8685517859414452\",\n                        async: true,\n                        src: \"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:url\",\n                        content: \"https://devplug.netlify.app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:type\",\n                        content: \"website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:title\",\n                        content: \"DEV Nck90\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:description\",\n                        content: \"학생 개발자 Nck입니다\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:image\",\n                        content: \"https://repository-images.githubusercontent.com/450323911/44da9596-b21a-4b7c-8e94-c4e29934a931\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:card\",\n                        content: \"summary_large_image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        children: analytics_script\n                    }, void 0, false, {\n                        fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                image: image\n            }, void 0, false, {\n                fileName: \"/Users/pc/Downloads/Portfolio-main 2/pages/_app.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOztBQUVnQjtBQUNYO0FBRTdCLGdCQUFnQjtBQUNlO0FBRS9CLHVCQUF1QjtBQUNpQjtBQUV4QyxzQkFBc0I7QUFDUCxTQUFTRyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELE1BQU1DLFNBQVNOLHNEQUFTQTtJQUV4QixJQUFJTyxPQUFPQztJQUVYLElBQUdGLE9BQU9HLFFBQVEsS0FBSyxLQUFLO1FBQ3hCRixRQUFRO1FBQ1JDLFFBQVE7SUFDWixPQUNLLElBQUdGLE9BQU9HLFFBQVEsS0FBSyxTQUFTO1FBQ2pDRixRQUFRO1FBQ1JDLFFBQVE7SUFDWixPQUNLLElBQUdGLE9BQU9HLFFBQVEsS0FBSyxZQUFZO1FBQ3BDRixRQUFRO1FBQ1JDLFFBQVE7SUFDWixPQUNLLElBQUdGLE9BQU9HLFFBQVEsS0FBSyxZQUFZO1FBQ3BDRCxRQUFRO1FBQ1JELFFBQVE7SUFDWixPQUNLO1FBQ0RBLFFBQVE7UUFDUkMsUUFBUTtJQUNaO0lBRUEsSUFBSUUsbUJBQW1CO0lBRXZCLHFCQUFPOzswQkFDSCw4REFBQ1Qsa0RBQUlBOztrQ0FDRCw4REFBQ087a0NBQU9BOzs7Ozs7a0NBQ1IsOERBQUNHO3dCQUFLQyxNQUFLO3dCQUEwREMsS0FBSTs7Ozs7O2tDQUN6RSw4REFBQ0M7d0JBQU9DLEtBQUs7d0JBQUNDLEtBQUk7Ozs7OztrQ0FDbEIsOERBQUNGO3dCQUFPRyxrQkFBZTt3QkFBMEJGLEtBQUs7d0JBQUNDLEtBQUk7Ozs7OztrQ0FFM0QsOERBQUNFO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBZUMsU0FBUTs7Ozs7O2tDQUNsQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQWdCQyxTQUFROzs7Ozs7a0NBQ25DLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBc0JDLFNBQVE7Ozs7OztrQ0FDekMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFnQkMsU0FBUTs7Ozs7O2tDQUNuQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQWVDLFNBQVE7Ozs7OztrQ0FFbEMsOERBQUNOO2tDQUNJSjs7Ozs7Ozs7Ozs7OzBCQUlULDhEQUFDTjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDSCx3REFBTUE7Z0JBQUNLLE9BQU9BOzs7Ozs7OztBQUV2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IG5leHQuanMgdGhpbmdzXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gaW1wb3J0IHN0eWxlc1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG4vLyBpbXBvcnQgbWVudSAmIGZvb3RlclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9lbGVtZW50cy9mb290ZXInO1xuXG4vLyBmaW5hbCByZXR1cm4gb2JqZWN0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBsZXQgaW1hZ2UsIHRpdGxlO1xuXG4gICAgaWYocm91dGVyLnBhdGhuYW1lID09PSAnLycpIHtcbiAgICAgICAgaW1hZ2UgPSAnbWFpbic7XG4gICAgICAgIHRpdGxlID0gJ0RFViBOY2s5MCc7XG4gICAgfVxuICAgIGVsc2UgaWYocm91dGVyLnBhdGhuYW1lID09PSAnL2luZm8nKSB7XG4gICAgICAgIGltYWdlID0gJ2luZm8nO1xuICAgICAgICB0aXRsZSA9ICdERVYgTmNrOTAgfCDshozqsJwnO1xuICAgIH1cbiAgICBlbHNlIGlmKHJvdXRlci5wYXRobmFtZSA9PT0gJy9jb250YWN0Jykge1xuICAgICAgICBpbWFnZSA9ICdjb250YWN0JztcbiAgICAgICAgdGl0bGUgPSAnREVWIE5jazkwIHwg7Jew6529JztcbiAgICB9XG4gICAgZWxzZSBpZihyb3V0ZXIucGF0aG5hbWUgPT09ICcvbGljZW5zZScpIHtcbiAgICAgICAgdGl0bGUgPSAnREVWIE5jazkwIHwg65287J207IS87IqkJztcbiAgICAgICAgaW1hZ2UgPSAnbGljZW5zZSc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbWFnZSA9ICc0MDQnO1xuICAgICAgICB0aXRsZSA9ICdERVYgTmNrOTAgfCDtjpjsnbTsp4Drpbwg7LC+7J2EIOyImCDsl4bsnYwnO1xuICAgIH1cblxuICAgIGxldCBhbmFseXRpY3Nfc2NyaXB0ID0gXCJ3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcXG5mdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XFxuZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcXG5ndGFnKCdjb25maWcnLCAnRy1ZRVI4QjVUN1hYJyk7XCJcblxuICAgIHJldHVybiA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLVlFUjhCNVQ3WFhcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItODY4NTUxNzg1OTQxNDQ1MlwiIGFzeW5jIHNyYz1cImh0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2RldnBsdWcubmV0bGlmeS5hcHBcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIkRFViBOY2s5MFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCLtlZnsg50g6rCc67Cc7J6QIE5ja+yeheuLiOuLpFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3JlcG9zaXRvcnktaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS80NTAzMjM5MTEvNDRkYTk1OTYtYjIxYS00YjdjLThlOTQtYzRlMjk5MzRhOTMxXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG5cbiAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAge2FuYWx5dGljc19zY3JpcHR9XG4gICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPEZvb3RlciBpbWFnZT17aW1hZ2V9IC8+XG4gICAgPC8+XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkhlYWQiLCJGb290ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImltYWdlIiwidGl0bGUiLCJwYXRobmFtZSIsImFuYWx5dGljc19zY3JpcHQiLCJsaW5rIiwiaHJlZiIsInJlbCIsInNjcmlwdCIsImFzeW5jIiwic3JjIiwiZGF0YS1hZC1jbGllbnQiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();