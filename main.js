/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  width: 100%;\\n  height: 100%;\\n  padding: 0%;\\n  margin: 0%;\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.list-title {\\n  width: 100%;\\n  height: 40px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  font-family: monospace;\\n  font-size: 18px;\\n  font-weight: 600;\\n  border-bottom: 1px solid grey;\\n}\\n\\n.list-title > * {\\n  margin: 0% 8px;\\n}\\n\\n.undo {\\n  background-color: unset;\\n  padding: 0%;\\n  border: none;\\n  outline: none;\\n}\\n\\n.template {\\n  max-width: 400px;\\n  width: auto;\\n  min-width: 600px;\\n  height: auto;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  box-shadow: 1px 1px 10px rgb(0, 0, 0, 0.3);\\n  border-bottom: grey;\\n}\\n\\nul,\\nli {\\n  list-style: none;\\n  padding: 0%;\\n  margin: 0%;\\n  display: flex;\\n  width: 100%;\\n}\\n\\nul {\\n  flex-direction: column;\\n}\\n\\n.list {\\n  width: 100%;\\n  height: auto;\\n  min-height: 40px;\\n  align-items: center;\\n  border-bottom: grey;\\n}\\n\\n.list > li {\\n  width: 100%;\\n  min-height: 40px;\\n  height: auto;\\n  border-bottom: grey;\\n  border-bottom: 1px solid #ebebeb;\\n}\\n\\n.list > li > * {\\n  border: none;\\n  outline: none;\\n}\\n\\n.list > li.addItems {\\n  justify-content: space-between;\\n}\\n\\n.list > li > div > * {\\n  display: none;\\n  padding: 0%;\\n}\\n\\n.list > li.addItems > * {\\n  margin: 0% 8px;\\n}\\n\\n.list > li > input {\\n  width: auto;\\n  height: auto;\\n  font-size: 18px;\\n  font-weight: 100;\\n  font-style: italic;\\n  font-family: monospace;\\n}\\n\\n.list > li > textarea {\\n  width: auto;\\n  min-width: 240px;\\n  padding-top: 8px;\\n  font-size: 18px;\\n  font-weight: 100;\\n  -ms-overflow-style: none;\\n  scrollbar-width: none;\\n  height: 31px;\\n  flex-grow: 1;\\n}\\n\\n.list > li > textarea::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.list > li > button {\\n  width: 10px;\\n  height: 10px;\\n  align-self: center;\\n  padding: 0%;\\n  background-color: unset;\\n}\\n\\n.list-items > li > button {\\n  background-color: rgb(0, 0, 0, 0.15);\\n}\\n\\n.list > li > div {\\n  display: flex;\\n  justify-content: center;\\n  align-self: center;\\n  width: 10px;\\n  height: 100%;\\n  padding: 0% 1%;\\n  margin-left: auto;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #8c8c8c;\\n  height: min-content;\\n}\\n\\na:hover {\\n  text-decoration: underline;\\n  color: #262626;\\n}\\n\\na:active {\\n  text-decoration: underline;\\n  color: #262626;\\n}\\n\\n.clear {\\n  height: 40px;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  color: grey;\\n  background-color: #f6f6f6;\\n}\\n\\n.options {\\n  color: rgb(0, 0, 0, 0.4);\\n}\\n\\n.options:hover {\\n  color: rgb(0, 0, 0, 0.8);\\n}\\n\\n#add-todo {\\n  flex-grow: 1;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n// import HTMLTemplate from './modules/htmlTemplate.js';\n// import Item from './modules/listItem.js';\n// import List from './modules/list.js';\nconst TEMP = __webpack_require__(/*! ./modules/htmlTemplate.js */ \"./src/modules/htmlTemplate.js\");\nconst ITEM = __webpack_require__(/*! ./modules/listItem.js */ \"./src/modules/listItem.js\");\nconst LIST = __webpack_require__(/*! ./modules/list.js */ \"./src/modules/list.js\");\n\n// Builds list HTML\nconst myapp = document.getElementById('list-app');\nconst template = document.createElement('div');\nconst listTitle = 'Today\\'s To Do:';\nconst inputName = 'add-todo';\nconst btnName = 'add-task';\nconst listName = 'to-do';\nconst clearName = `clear-${listName}`;\ntemplate.innerHTML = TEMP.HTMLTemplate(listTitle, inputName, btnName, listName, clearName);\ntemplate.classList.add('template');\nmyapp.appendChild(template);\n\n// Page elements selectors\nconst input = document.querySelector(`#${inputName}`);\nconst button = document.querySelector(`#${btnName}`);\nconst domList = document.querySelector(`#${listName}`);\nconst clearBtn = document.querySelector(`#${clearName}`);\n\nconst list = new LIST.List(ITEM.Item, listName, 'list');\n\nconst render = (newItem = false) => {\n  if (newItem) {\n    const item = newItem.template(list);\n    setTimeout(() => {}, 0);\n    domList.appendChild(item);\n  } else {\n    domList.innerHTML = '';\n    list.renderItems().forEach((item) => {\n      setTimeout(() => {}, 0);\n      domList.appendChild(item);\n    });\n  }\n  input.select();\n};\n\n// Add a new element to the list\nbutton.addEventListener('click', () => {\n  if (input.value.replace('\\n', '').replace(' ', '') === '') return; // if user hasn't entered input\n  render(list.addItem(input.value));\n  input.value = '';\n});\n\ninput.addEventListener('keypress', (event) => {\n  if (event.key === 'Enter' && event.shiftKey) return;\n  if (event.key === 'Enter') {\n    button.dispatchEvent(new Event('click'));\n  }\n});\n\nclearBtn.addEventListener('click', () => {\n  list.clearCompleted();\n  render();\n});\n\nrender();\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/htmlTemplate.js":
/*!*************************************!*\
  !*** ./src/modules/htmlTemplate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("const HTMLTemplate = (title, input, btn, list, clear) => `\n  <div class=\"list-title\">\n    <label>${title}</label>\n    <button class=\"fa-solid fa-arrow-rotate-left undo\" id=\"sort${list}\" aria-label=\"Undo task repositioning\"></button>\n  </div>\n  <ul class=\"list\">\n    <li class=\"addItems\">\n      <input id=\"${input}\" maxlength=\"128\" placeholder=\"Add to your list...\" spellcheck=\"false\">\n      <button id=\"${btn}\" class=\"add-item\">↵</button>\n    </li>\n  </ul>\n  <ul id=\"${list}\" class=\"list list-items\"></ul>\n  <div class=\"clear\"><a href=\"#\" id=\"${clear}\">Clear all completed</a></div>\n`;\n\nexports.HTMLTemplate = HTMLTemplate;\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/htmlTemplate.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("// import Item from './listItem.js';\nconst ITEM = __webpack_require__(/*! ./listItem.js */ \"./src/modules/listItem.js\");\n\nclass List {\n  constructor(ItemType, listName, storageName = 'list') {\n    this.ItemType = ItemType;\n    this.storageName = storageName;\n    this.listName = listName;\n    this.list = [];\n    this.retrieveStorage();\n  }\n\n  clearCompleted() {\n    this.list = this.list.filter((item) => !item.completed);\n    this.fixIndexes();\n    this.updateStorage();\n  }\n\n  fixIndexes() {\n    for (let i = 0; i < this.list.length; i += 1) {\n      this.list[i].index = i;\n    }\n  }\n\n  addItem(value) {\n    const newItem = new ITEM.Item(value, this.list.length);\n    this.list[newItem.index] = newItem;\n    this.updateStorage();\n    return newItem;\n  }\n\n  removeItem(item) {\n    this.list.splice(item.index, 1);\n    this.fixIndexes();\n    this.updateStorage();\n  }\n\n  removeItemByIndex(index) {\n    this.list.splice(index, 1);\n    this.fixIndexes();\n    this.updateStorage();\n  }\n\n  updateStorage() {\n    localStorage.setItem(this.storageName, JSON.stringify(this.list));\n  }\n\n  retrieveStorage() {\n    if (localStorage.getItem(this.storageName) === null) {\n      this.updateStorage();\n    } else {\n      const tempList = JSON.parse(localStorage.getItem(this.storageName));\n      Object.values(tempList).forEach((item) => {\n        this.list[item.index] = new this.ItemType(item.description, item.index, item.completed);\n      });\n    }\n  }\n\n  renderItems() {\n    const renders = [];\n    Object.values(this.list).forEach((item) => {\n      renders.push(item.template(this));\n    });\n    return renders;\n  }\n}\n\nexports.List = List;\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/listItem.js":
/*!*********************************!*\
  !*** ./src/modules/listItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("class Item {\n  constructor(description, index = new Date().getTime(), completed = false) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n    this.mouseOver = false;\n  }\n\n  template(list) {\n    const li = document.createElement('li');\n    const check = document.createElement('input');\n    check.setAttribute('type', 'checkbox');\n    const task = document.createElement('textarea');\n    const checkTask = () => {\n      if (!this.completed) {\n        task.style.textDecoration = 'line-through';\n        task.disabled = true;\n        check.classList.add('check');\n        this.completed = true;\n      } else {\n        task.style.textDecoration = 'none';\n        task.disabled = false;\n        check.classList.remove('check');\n        this.completed = false;\n      }\n      list.updateStorage();\n    };\n    if (this.completed) {\n      check.checked = true;\n    }\n    check.addEventListener('click', checkTask);\n    window.addEventListener('load', () => {\n      this.completed = !list.list[this.index].completed;\n      checkTask();\n    });\n    task.value = this.description;\n    task.setAttribute('wrap', 'soft');\n    task.setAttribute('maxlength', '128');\n    task.setAttribute('style', 'resize:none;');\n    task.setAttribute('onfocus', 'this.style.height = \\'0px\\'; this.style.height = this.scrollHeight +\\'px\\'');\n    task.setAttribute('spellcheck', 'false');\n    task.setAttribute('id', `${this.index}`);\n    task.addEventListener('input', () => {\n      list.list[this.index].description = task.value;\n      list.updateStorage();\n    });\n    task.addEventListener('focusout', () => {\n      if (task.value.replace('\\n', '').replace(' ', '') === '') {\n        li.remove();\n        list.removeItem(this);\n      }\n    });\n    const taskLabel = document.createElement('label');\n    taskLabel.setAttribute('for', `${this.index}`);\n    taskLabel.style.display = 'none';\n    const options = document.createElement('div');\n    const del = document.createElement('i');\n    del.setAttribute('class', 'fa-solid fa-trash options');\n    del.addEventListener('click', () => {\n      li.remove();\n      list.removeItem(this);\n    });\n    const move = document.createElement('i');\n    move.setAttribute('class', 'fas fa-ellipsis-v options');\n    task.addEventListener('focusin', () => {\n      del.setAttribute('style', 'display:block');\n      move.setAttribute('style', 'display:none');\n    });\n    task.addEventListener('focusout', () => {\n      if (this.mouseOver) return;\n      del.setAttribute('style', 'display:none');\n      move.setAttribute('style', 'display:block');\n    });\n    del.addEventListener('mouseover', () => {\n      this.mouseOver = true;\n    });\n    del.addEventListener('mouseout', () => {\n      this.mouseOver = false;\n    });\n    move.setAttribute('style', 'display:block;');\n    options.appendChild(del);\n    options.appendChild(move);\n\n    li.appendChild(check);\n    li.appendChild(task);\n    li.appendChild(taskLabel);\n    li.appendChild(options);\n    return li;\n  }\n}\n\nexports.Item = Item;\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/listItem.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);