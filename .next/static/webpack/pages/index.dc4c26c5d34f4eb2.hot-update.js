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

/***/ "./src/data/services/TextService.ts":
/*!******************************************!*\
  !*** ./src/data/services/TextService.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TextService\": function() { return /* binding */ TextService; }\n/* harmony export */ });\nvar TextService = {\n    limitarTexto: function limitarTexto(texto, tamanhoMaximo) {\n        if (texto.length < tamanhoMaximo) {\n            return texto;\n        }\n        return texto.slice(0, tamanhoMaximo) + \"...\";\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9zZXJ2aWNlcy9UZXh0U2VydmljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sSUFBTUEsV0FBVyxHQUFHO0lBQ3ZCQyxZQUFZLEVBQVpBLFNBQUFBLFlBQVksQ0FBQ0MsS0FBYSxFQUFFQyxhQUFxQixFQUFVO1FBQ3ZELElBQUdELEtBQUssQ0FBQ0UsTUFBTSxHQUFHRCxhQUFhLEVBQUU7WUFDN0IsT0FBT0QsS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBT0EsS0FBSyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFFRixhQUFhLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDaEQ7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZGF0YS9zZXJ2aWNlcy9UZXh0U2VydmljZS50cz8xNzFkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBUZXh0U2VydmljZSA9IHtcbiAgICBsaW1pdGFyVGV4dG8odGV4dG86IFN0cmluZywgdGFtYW5ob01heGltbzogbnVtYmVyKSA6IHN0cmluZ3tcbiAgICAgICAgaWYodGV4dG8ubGVuZ3RoIDwgdGFtYW5ob01heGltbykge1xuICAgICAgICAgICAgcmV0dXJuIHRleHRvO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0by5zbGljZSgwLCB0YW1hbmhvTWF4aW1vKSArICcuLi4nO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiVGV4dFNlcnZpY2UiLCJsaW1pdGFyVGV4dG8iLCJ0ZXh0byIsInRhbWFuaG9NYXhpbW8iLCJsZW5ndGgiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/services/TextService.ts\n");

/***/ }),

/***/ "./src/ui/components/Lista/Lista.tsx":
/*!*******************************************!*\
  !*** ./src/ui/components/Lista/Lista.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Lista; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _Lista_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lista.style */ \"./src/ui/components/Lista/Lista.style.tsx\");\n/* harmony import */ var _data_services_TextService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/services/TextService */ \"./src/data/services/TextService.ts\");\n\n\n\n\nfunction Lista(props) {\n    var _this = this;\n    var tamanhoMaximoTexto = 200;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Lista_style__WEBPACK_IMPORTED_MODULE_1__.ListaStyled, {\n        children: props.pets.map(function(pet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Lista_style__WEBPACK_IMPORTED_MODULE_1__.ItemLista, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Lista_style__WEBPACK_IMPORTED_MODULE_1__.Foto, {\n                        src: pet.foto,\n                        alt: pet.nome\n                    }, void 0, false, {\n                        fileName: \"/home/mam/Documentos/treinaWeb/pets/src/ui/components/Lista/Lista.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 29\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Lista_style__WEBPACK_IMPORTED_MODULE_1__.Informacoes, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Lista_style__WEBPACK_IMPORTED_MODULE_1__.Nome, {\n                                children: pet.nome\n                            }, void 0, false, {\n                                fileName: \"/home/mam/Documentos/treinaWeb/pets/src/ui/components/Lista/Lista.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 33\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Lista_style__WEBPACK_IMPORTED_MODULE_1__.Descricao, {\n                                children: _data_services_TextService__WEBPACK_IMPORTED_MODULE_2__.TextService.limitarTexto(pet.historia, tamanhoMaximoTexto)\n                            }, void 0, false, {\n                                fileName: \"/home/mam/Documentos/treinaWeb/pets/src/ui/components/Lista/Lista.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 33\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"contained\",\n                                fullWidth: true,\n                                children: [\n                                    \" Adotar \",\n                                    pet.nome\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mam/Documentos/treinaWeb/pets/src/ui/components/Lista/Lista.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 33\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mam/Documentos/treinaWeb/pets/src/ui/components/Lista/Lista.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 29\n                    }, _this)\n                ]\n            }, pet.id, true, {\n                fileName: \"/home/mam/Documentos/treinaWeb/pets/src/ui/components/Lista/Lista.tsx\",\n                lineNumber: 23,\n                columnNumber: 25\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/mam/Documentos/treinaWeb/pets/src/ui/components/Lista/Lista.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n};\n_c = Lista;\nvar _c;\n$RefreshReg$(_c, \"Lista\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvY29tcG9uZW50cy9MaXN0YS9MaXN0YS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFRakI7QUFFMkM7QUFNbEQsU0FBU1EsS0FBSyxDQUFDQyxLQUFpQixFQUFFOztJQUM3QyxJQUFNQyxrQkFBa0IsR0FBRyxHQUFHO0lBRTlCLHFCQUNJLDhEQUFDVCxxREFBVztrQkFDUFEsS0FBSyxDQUFDRSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsR0FBRztpQ0FDUCw4REFBQ1gsbURBQVM7O2tDQUNOLDhEQUFDQyw4Q0FBSTt3QkFBQ1csR0FBRyxFQUFFRCxHQUFHLENBQUNFLElBQUk7d0JBQUVDLEdBQUcsRUFBRUgsR0FBRyxDQUFDSSxJQUFJOzs7Ozs2QkFBRztrQ0FDckMsOERBQUNiLHFEQUFXOzswQ0FDUiw4REFBQ0MsOENBQUk7MENBQUVRLEdBQUcsQ0FBQ0ksSUFBSTs7Ozs7cUNBQVE7MENBQ3ZCLDhEQUFDWCxtREFBUzswQ0FDTEMsZ0ZBQXdCLENBQUVNLEdBQUcsQ0FBQ00sUUFBUSxFQUFFVCxrQkFBa0IsQ0FBRTs7Ozs7cUNBQ3JEOzBDQUNaLDhEQUFDVixpREFBTTtnQ0FBQ29CLE9BQU8sRUFBRSxXQUFXO2dDQUFFQyxTQUFTOztvQ0FDdEMsVUFBUTtvQ0FBQ1IsR0FBRyxDQUFDSSxJQUFJOzs7Ozs7cUNBQVU7Ozs7Ozs2QkFDbEI7O2VBVEZKLEdBQUcsQ0FBQ1MsRUFBRTs7OztxQkFVVjtTQUN2QixDQUFDOzs7OztZQUVRLENBQ2pCO0NBQ0o7QUFyQnVCZCxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91aS9jb21wb25lbnRzL0xpc3RhL0xpc3RhLnRzeD83YjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHtcbiAgICBMaXN0YVN0eWxlZCxcbiAgICBJdGVtTGlzdGEsXG4gICAgRm90byxcbiAgICBJbmZvcm1hY29lcyxcbiAgICBOb21lLFxuICAgIERlc2NyaWNhb1xufSBmcm9tICcuL0xpc3RhLnN0eWxlJ1xuaW1wb3J0IHsgUGV0IH0gZnJvbSAnLi4vLi4vLi4vZGF0YS9AdHlwZXMvUGV0JztcbmltcG9ydCB7IFRleHRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS9zZXJ2aWNlcy9UZXh0U2VydmljZSc7XG5cbmludGVyZmFjZSBMaXN0YVByb3Bze1xuICAgIHBldHM6IFBldFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0YShwcm9wczogTGlzdGFQcm9wcykge1xuICAgIGNvbnN0IHRhbWFuaG9NYXhpbW9UZXh0byA9IDIwMDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaXN0YVN0eWxlZD5cbiAgICAgICAgICAgIHtwcm9wcy5wZXRzLm1hcChwZXQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0YSBrZXk9e3BldC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvdG8gc3JjPXtwZXQuZm90b30gYWx0PXtwZXQubm9tZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvcm1hY29lcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vbWU+e3BldC5ub21lfTwvTm9tZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlc2NyaWNhbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtUZXh0U2VydmljZS5saW1pdGFyVGV4dG8oIHBldC5oaXN0b3JpYSwgdGFtYW5ob01heGltb1RleHRvICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVzY3JpY2FvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9eydjb250YWluZWQnfSBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiBBZG90YXIge3BldC5ub21lfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5mb3JtYWNvZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW1MaXN0YT5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgIDwvTGlzdGFTdHlsZWQ+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJMaXN0YVN0eWxlZCIsIkl0ZW1MaXN0YSIsIkZvdG8iLCJJbmZvcm1hY29lcyIsIk5vbWUiLCJEZXNjcmljYW8iLCJUZXh0U2VydmljZSIsIkxpc3RhIiwicHJvcHMiLCJ0YW1hbmhvTWF4aW1vVGV4dG8iLCJwZXRzIiwibWFwIiwicGV0Iiwic3JjIiwiZm90byIsImFsdCIsIm5vbWUiLCJsaW1pdGFyVGV4dG8iLCJoaXN0b3JpYSIsInZhcmlhbnQiLCJmdWxsV2lkdGgiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ui/components/Lista/Lista.tsx\n");

/***/ })

});