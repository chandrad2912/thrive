/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ContactPageControl/index.ts":
/*!*************************************!*\
  !*** ./ContactPageControl/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactPageControl: () => (/* binding */ ContactPageControl)\n/* harmony export */ });\nclass ContactPageControl {\n  constructor() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n  init(context, notifyOutputChanged, state, container) {\n    // Add control initialization code\n    this.contactPageHTML = document.createElement(\"div\");\n    var htmltable = document.createElement(\"table\");\n    var htmltablerow1 = document.createElement(\"tr\");\n    var htmltablerow1td1 = document.createElement(\"td\");\n    var htmllblfirstname = document.createElement(\"label\");\n    htmllblfirstname.id = \"htmllblcontactfirstname\";\n    htmllblfirstname.innerHTML = \"First Name\";\n    htmltablerow1td1.appendChild(htmllblfirstname);\n    htmltablerow1.appendChild(htmltablerow1td1);\n    var htmltablerow1td2 = document.createElement(\"td\");\n    var htmlinputfirstname = document.createElement(\"input\");\n    htmlinputfirstname.id = \"htmlinputcontactfirstnameid\";\n    htmlinputfirstname.name = \"htmlinputcontactfirstnamename\";\n    if (context.parameters.primarycontactid.raw) {\n      var primarycontactLookup = context.parameters.primarycontactid.raw;\n      if (primarycontactLookup && primarycontactLookup.length > 0) {\n        var lookupValue = primarycontactLookup[0];\n        htmlinputfirstname.value = lookupValue.id;\n      }\n    } else {\n      htmlinputfirstname.value = '';\n    }\n    htmltablerow1td2.appendChild(htmlinputfirstname);\n    htmltablerow1.appendChild(htmltablerow1td2);\n    htmltable.appendChild(htmltablerow1);\n    this.contactPageHTML.appendChild(htmltable);\n    container.appendChild(this.contactPageHTML);\n  }\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n  updateView(context) {\n    var htmlinputfirstname = document.getElementById(\"htmlinputcontactfirstnameid\");\n    if (context.parameters.primarycontactid.raw) {\n      //this.contactPageHTML.innerHTML = context.parameters.sampleProperty.raw;\n      if (context.parameters.primarycontactid.raw) {\n        var primarycontactLookup = context.parameters.primarycontactid.raw;\n        if (primarycontactLookup && primarycontactLookup.length > 0) {\n          var lookupValue = primarycontactLookup[0];\n          htmlinputfirstname.value = lookupValue.id;\n        }\n      } else {\n        htmlinputfirstname.value = '';\n      }\n    } else {\n      htmlinputfirstname.value = '';\n    }\n  }\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as \"bound\" or \"output\"\r\n   */\n  getOutputs() {\n    return {};\n  }\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n  destroy() {\n    // Add code to cleanup control if necessary\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./ContactPageControl/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./ContactPageControl/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('ContactPageNamespace.ContactPageControl', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ContactPageControl);
} else {
	var ContactPageNamespace = ContactPageNamespace || {};
	ContactPageNamespace.ContactPageControl = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ContactPageControl;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}