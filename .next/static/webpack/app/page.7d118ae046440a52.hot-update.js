"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserSelector; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UserSelectionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/UserSelectionPanel */ \"(app-pages-browser)/./src/components/UserSelectionPanel.tsx\");\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helper */ \"(app-pages-browser)/./src/utils/helper.tsx\");\n/* harmony import */ var _components_UserSuggestionsDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/UserSuggestionsDropdown */ \"(app-pages-browser)/./src/components/UserSuggestionsDropdown.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction UserSelector() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedUsers, setSelectedUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [allAvailableUsers, setAllAvailableUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_helper__WEBPACK_IMPORTED_MODULE_3__.allUsers);\n    const [showUserSuggestions, setShowUserSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [backspaceCount, setBackspaceCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [filteredUserSuggestions, setFilteredUserSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_helper__WEBPACK_IMPORTED_MODULE_3__.allUsers);\n    const handleInputChange = (event)=>{\n        const value = event.target.value;\n        setInputValue(value);\n        setShowUserSuggestions(true);\n        if (value !== \"\") {\n            const filteredUsers = filteredUserSuggestions.filter((user)=>user.name.toLowerCase().includes(value.toLowerCase()));\n            setFilteredUserSuggestions(filteredUsers);\n        } else {\n            setFilteredUserSuggestions(allAvailableUsers);\n        }\n    };\n    const handleUserSelect = (selectedUser, shouldShowUserSuggestions)=>{\n        setBackspaceCount(0);\n        const remainingUsers = allAvailableUsers.filter((user)=>user.id !== selectedUser.id);\n        setAllAvailableUsers(remainingUsers);\n        setSelectedUsers([\n            ...selectedUsers,\n            selectedUser\n        ]);\n        shouldShowUserSuggestions ? setShowUserSuggestions(true) : setShowUserSuggestions(false);\n        setInputValue(\"\");\n        setFilteredUserSuggestions(remainingUsers);\n    };\n    const handleInputFocus = ()=>{\n        setShowUserSuggestions(true);\n    };\n    const handleUserDeletion = (deletedUser)=>{\n        const updatedUsers = selectedUsers.filter((user)=>user.id !== deletedUser.id);\n        setSelectedUsers(updatedUsers);\n        setAllAvailableUsers([\n            ...allAvailableUsers,\n            deletedUser\n        ]);\n        setFilteredUserSuggestions([\n            ...filteredUserSuggestions,\n            deletedUser\n        ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleBackspacePress = (event)=>{\n            if (event.key === \"Backspace\" && inputValue === \"\") {\n                setBackspaceCount((prevCount)=>prevCount + 1);\n            }\n        };\n        document.addEventListener(\"keydown\", handleBackspacePress);\n        if (inputValue === \"\" && selectedUsers.length > 0 && backspaceCount > 0 && backspaceCount % 2 === 0) {\n            const lastSelectedUser = selectedUsers[selectedUsers.length - 1];\n            handleUserDeletion(lastSelectedUser);\n        }\n        const handleClickOutside = (event)=>{\n            if (containerRef.current && !containerRef.current.contains(event.target)) {\n                setShowUserSuggestions(false);\n            }\n        };\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n            document.removeEventListener(\"keydown\", handleBackspacePress);\n        };\n    }, [\n        backspaceCount,\n        showUserSuggestions\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-[60px] w-[60%] mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-[30px] text-blue-700 text-center text-[24px] font-bold\",\n                children: \"Add Users\"\n            }, void 0, false, {\n                fileName: \"/Users/saiprasannakumar.ravidindi/Documents/GitHub/zepto-assignment/src/app/page.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-[10px] items-start border-b-[5px] border-blue-400 border-solid pb-[10px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserSelectionPanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        selectedUsers: selectedUsers,\n                        deleteUser: handleUserDeletion,\n                        count: backspaceCount,\n                        inputVal: inputValue\n                    }, void 0, false, {\n                        fileName: \"/Users/saiprasannakumar.ravidindi/Documents/GitHub/zepto-assignment/src/app/page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mt-[5px]\",\n                        ref: containerRef,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                autoFocus: true,\n                                type: \"text\",\n                                placeholder: \"Add new user...\",\n                                value: inputValue,\n                                onChange: handleInputChange,\n                                onFocus: handleInputFocus,\n                                className: \"border-none outline-none focus:ring-0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/saiprasannakumar.ravidindi/Documents/GitHub/zepto-assignment/src/app/page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            showUserSuggestions && filteredUserSuggestions.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserSuggestionsDropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                filteredUsers: filteredUserSuggestions,\n                                inputValue: inputValue,\n                                handleUserSelect: handleUserSelect\n                            }, void 0, false, {\n                                fileName: \"/Users/saiprasannakumar.ravidindi/Documents/GitHub/zepto-assignment/src/app/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this) : \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saiprasannakumar.ravidindi/Documents/GitHub/zepto-assignment/src/app/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saiprasannakumar.ravidindi/Documents/GitHub/zepto-assignment/src/app/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saiprasannakumar.ravidindi/Documents/GitHub/zepto-assignment/src/app/page.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(UserSelector, \"D0ozvzRXq/6U0UfONtwsc7BDyTE=\");\n_c = UserSelector;\nvar _c;\n$RefreshReg$(_c, \"UserSelector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CO0lBRXhDLHFCQUNFLDhEQUFDcUM7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE0RDs7Ozs7OzBCQUcxRSw4REFBQ0Q7Z0JBQUlDLFdBQVk7O2tDQUNmLDhEQUFDaEQsc0VBQWtCQTt3QkFDakJNLGVBQWVBO3dCQUNmNEMsWUFBWWpCO3dCQUNaa0IsT0FBT3ZDO3dCQUNQd0MsVUFBVWhEOzs7Ozs7a0NBRVosOERBQUMyQzt3QkFBSUMsV0FBVTt3QkFBb0JLLEtBQUt2Qzs7MENBQ3RDLDhEQUFDd0M7Z0NBQ0RDLFNBQVM7Z0NBQ1BDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1p0QyxPQUFPZjtnQ0FDUHNELFVBQVV6QztnQ0FDVjBDLFNBQVMzQjtnQ0FDVGdCLFdBQVU7Ozs7Ozs0QkFHWHRDLHVCQUF1Qkssd0JBQXdCMEIsTUFBTSxHQUFHLGtCQUN2RCw4REFBQ3ZDLDJFQUF1QkE7Z0NBQ3RCbUIsZUFBZU47Z0NBQ2ZYLFlBQVlBO2dDQUNadUIsa0JBQWtCQTs7Ozs7dUNBR3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0E3R3dCeEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVzZXJTZWxlY3Rpb25QYW5lbCBmcm9tIFwiQC9jb21wb25lbnRzL1VzZXJTZWxlY3Rpb25QYW5lbFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi91dGlscy9tb2RlbHNcIjtcbmltcG9ydCB7IGFsbFVzZXJzIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xuaW1wb3J0IFVzZXJTdWdnZXN0aW9uc0Ryb3Bkb3duIGZyb20gXCJAL2NvbXBvbmVudHMvVXNlclN1Z2dlc3Rpb25zRHJvcGRvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclNlbGVjdG9yKCkge1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlbGVjdGVkVXNlcnMsIHNldFNlbGVjdGVkVXNlcnNdID0gdXNlU3RhdGU8VXNlcltdPihbXSk7XG4gIGNvbnN0IFthbGxBdmFpbGFibGVVc2Vycywgc2V0QWxsQXZhaWxhYmxlVXNlcnNdID0gdXNlU3RhdGU8VXNlcltdPihhbGxVc2Vycyk7XG4gIGNvbnN0IFtzaG93VXNlclN1Z2dlc3Rpb25zLCBzZXRTaG93VXNlclN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JhY2tzcGFjZUNvdW50LCBzZXRCYWNrc3BhY2VDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW2ZpbHRlcmVkVXNlclN1Z2dlc3Rpb25zLCBzZXRGaWx0ZXJlZFVzZXJTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZTxVc2VyW10+KGFsbFVzZXJzKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICBzZXRTaG93VXNlclN1Z2dlc3Rpb25zKHRydWUpO1xuICAgIFxuICAgIGlmICh2YWx1ZSAhPT0gXCJcIikge1xuICAgICAgY29uc3QgZmlsdGVyZWRVc2VycyA9IGZpbHRlcmVkVXNlclN1Z2dlc3Rpb25zLmZpbHRlcigodXNlcikgPT5cbiAgICAgICAgdXNlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG4gICAgICBzZXRGaWx0ZXJlZFVzZXJTdWdnZXN0aW9ucyhmaWx0ZXJlZFVzZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmlsdGVyZWRVc2VyU3VnZ2VzdGlvbnMoYWxsQXZhaWxhYmxlVXNlcnMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVVc2VyU2VsZWN0ID0gKHNlbGVjdGVkVXNlcjogVXNlciwgc2hvdWxkU2hvd1VzZXJTdWdnZXN0aW9uczogYm9vbGVhbikgPT4ge1xuICAgIHNldEJhY2tzcGFjZUNvdW50KDApO1xuICAgIGNvbnN0IHJlbWFpbmluZ1VzZXJzID0gYWxsQXZhaWxhYmxlVXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmlkICE9PSBzZWxlY3RlZFVzZXIuaWQpO1xuICAgIHNldEFsbEF2YWlsYWJsZVVzZXJzKHJlbWFpbmluZ1VzZXJzKTtcbiAgICBzZXRTZWxlY3RlZFVzZXJzKFsuLi5zZWxlY3RlZFVzZXJzLCBzZWxlY3RlZFVzZXJdKTtcbiAgICBzaG91bGRTaG93VXNlclN1Z2dlc3Rpb25zID8gc2V0U2hvd1VzZXJTdWdnZXN0aW9ucyh0cnVlKSA6IHNldFNob3dVc2VyU3VnZ2VzdGlvbnMoZmFsc2UpO1xuICAgIHNldElucHV0VmFsdWUoXCJcIik7XG4gICAgc2V0RmlsdGVyZWRVc2VyU3VnZ2VzdGlvbnMocmVtYWluaW5nVXNlcnMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Rm9jdXMgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1VzZXJTdWdnZXN0aW9ucyh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVVc2VyRGVsZXRpb24gPSAoZGVsZXRlZFVzZXI6IFVzZXIpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkVXNlcnMgPSBzZWxlY3RlZFVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gZGVsZXRlZFVzZXIuaWQpO1xuICAgIHNldFNlbGVjdGVkVXNlcnModXBkYXRlZFVzZXJzKTtcbiAgICBzZXRBbGxBdmFpbGFibGVVc2VycyhbLi4uYWxsQXZhaWxhYmxlVXNlcnMsIGRlbGV0ZWRVc2VyXSk7XG4gICAgc2V0RmlsdGVyZWRVc2VyU3VnZ2VzdGlvbnMoWy4uLmZpbHRlcmVkVXNlclN1Z2dlc3Rpb25zLCBkZWxldGVkVXNlcl0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQmFja3NwYWNlUHJlc3MgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgaW5wdXRWYWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBzZXRCYWNrc3BhY2VDb3VudCgocHJldkNvdW50KSA9PiBwcmV2Q291bnQgKyAxKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlQmFja3NwYWNlUHJlc3MpO1xuXG4gICAgaWYgKGlucHV0VmFsdWUgPT09IFwiXCIgJiYgc2VsZWN0ZWRVc2Vycy5sZW5ndGggPiAwICYmIGJhY2tzcGFjZUNvdW50ID4gMCAmJiBiYWNrc3BhY2VDb3VudCAlIDIgPT09IDApIHtcbiAgICAgIGNvbnN0IGxhc3RTZWxlY3RlZFVzZXIgPSBzZWxlY3RlZFVzZXJzW3NlbGVjdGVkVXNlcnMubGVuZ3RoIC0gMV07XG4gICAgICBoYW5kbGVVc2VyRGVsZXRpb24obGFzdFNlbGVjdGVkVXNlcik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQgJiYgIWNvbnRhaW5lclJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKSkge1xuICAgICAgICBzZXRTaG93VXNlclN1Z2dlc3Rpb25zKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUJhY2tzcGFjZVByZXNzKTtcbiAgICB9O1xuICB9LCBbYmFja3NwYWNlQ291bnQsIHNob3dVc2VyU3VnZ2VzdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktWzYwcHhdIHctWzYwJV0gbXgtYXV0b1wiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLVszMHB4XSB0ZXh0LWJsdWUtNzAwIHRleHQtY2VudGVyIHRleHQtWzI0cHhdIGZvbnQtYm9sZFwiPlxuICAgICAgICBBZGQgVXNlcnNcbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC13cmFwIGdhcC1bMTBweF0gaXRlbXMtc3RhcnQgYm9yZGVyLWItWzVweF0gYm9yZGVyLWJsdWUtNDAwIGJvcmRlci1zb2xpZCBwYi1bMTBweF1gfT5cbiAgICAgICAgPFVzZXJTZWxlY3Rpb25QYW5lbFxuICAgICAgICAgIHNlbGVjdGVkVXNlcnM9e3NlbGVjdGVkVXNlcnN9XG4gICAgICAgICAgZGVsZXRlVXNlcj17aGFuZGxlVXNlckRlbGV0aW9ufVxuICAgICAgICAgIGNvdW50PXtiYWNrc3BhY2VDb3VudH1cbiAgICAgICAgICBpbnB1dFZhbD17aW5wdXRWYWx1ZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC1bNXB4XVwiIHJlZj17Y29udGFpbmVyUmVmfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIG5ldyB1c2VyLi4uXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25Gb2N1cz17aGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ub25lIG91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTBcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7c2hvd1VzZXJTdWdnZXN0aW9ucyAmJiBmaWx0ZXJlZFVzZXJTdWdnZXN0aW9ucy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPFVzZXJTdWdnZXN0aW9uc0Ryb3Bkb3duXG4gICAgICAgICAgICAgIGZpbHRlcmVkVXNlcnM9e2ZpbHRlcmVkVXNlclN1Z2dlc3Rpb25zfVxuICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICBoYW5kbGVVc2VyU2VsZWN0PXtoYW5kbGVVc2VyU2VsZWN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlVzZXJTZWxlY3Rpb25QYW5lbCIsImFsbFVzZXJzIiwiVXNlclN1Z2dlc3Rpb25zRHJvcGRvd24iLCJVc2VyU2VsZWN0b3IiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInNlbGVjdGVkVXNlcnMiLCJzZXRTZWxlY3RlZFVzZXJzIiwiYWxsQXZhaWxhYmxlVXNlcnMiLCJzZXRBbGxBdmFpbGFibGVVc2VycyIsInNob3dVc2VyU3VnZ2VzdGlvbnMiLCJzZXRTaG93VXNlclN1Z2dlc3Rpb25zIiwiYmFja3NwYWNlQ291bnQiLCJzZXRCYWNrc3BhY2VDb3VudCIsImNvbnRhaW5lclJlZiIsImZpbHRlcmVkVXNlclN1Z2dlc3Rpb25zIiwic2V0RmlsdGVyZWRVc2VyU3VnZ2VzdGlvbnMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJmaWx0ZXJlZFVzZXJzIiwiZmlsdGVyIiwidXNlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlVXNlclNlbGVjdCIsInNlbGVjdGVkVXNlciIsInNob3VsZFNob3dVc2VyU3VnZ2VzdGlvbnMiLCJyZW1haW5pbmdVc2VycyIsImlkIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZVVzZXJEZWxldGlvbiIsImRlbGV0ZWRVc2VyIiwidXBkYXRlZFVzZXJzIiwiaGFuZGxlQmFja3NwYWNlUHJlc3MiLCJrZXkiLCJwcmV2Q291bnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJsYXN0U2VsZWN0ZWRVc2VyIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiY3VycmVudCIsImNvbnRhaW5zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZGVsZXRlVXNlciIsImNvdW50IiwiaW5wdXRWYWwiLCJyZWYiLCJpbnB1dCIsImF1dG9Gb2N1cyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25Gb2N1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});