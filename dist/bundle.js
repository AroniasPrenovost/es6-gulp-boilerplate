/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_greeting__ = __webpack_require__(/*! ./modules/greeting */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_connect__ = __webpack_require__(/*! ./modules/connect */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_math_functions__ = __webpack_require__(/*! ./modules/math-functions */ 3);\n\n\n\n\n\nconst resultGreeting = document.getElementById('resultGreeting');\nconst resultSum = document.getElementById('resultSum');\nconst resultProduct = document.getElementById('resultProduct');\nconst resultDividend = document.getElementById('resultDividend');\nconst resultDifference = document.getElementById('resultDifference');\nconst resultModulus = document.getElementById('resultModulus');\nconst resultSqrroot = document.getElementById('resultSqrroot');\n\nconst a = 100;\nconst b = 40;\n\nresultGreeting.textContent = Object(__WEBPACK_IMPORTED_MODULE_0__modules_greeting__[\"a\" /* sayHello */])('Welcome to the boilerplate.');\nresultSum.textContent = `The sum of ${a} and ${b} is ${Object(__WEBPACK_IMPORTED_MODULE_2__modules_math_functions__[\"f\" /* sum */])(a, b)}.`;\nresultProduct.textContent = `The product of ${a} and ${b} is ${Object(__WEBPACK_IMPORTED_MODULE_2__modules_math_functions__[\"d\" /* product */])(a, b)}.`;\nresultDividend.textContent = `The dividend of ${a} and ${b} is ${Object(__WEBPACK_IMPORTED_MODULE_2__modules_math_functions__[\"b\" /* dividend */])(a, b)}.`;\nresultDifference.textContent = `The difference of ${a} and ${b} is ${Object(__WEBPACK_IMPORTED_MODULE_2__modules_math_functions__[\"a\" /* difference */])(a, b)}.`;\nresultModulus.textContent = `The modulus of ${a} and ${b} is ${Object(__WEBPACK_IMPORTED_MODULE_2__modules_math_functions__[\"c\" /* modulus */])(a, b)}.`;\nresultSqrroot.textContent = `The square root of ${a} is ${Object(__WEBPACK_IMPORTED_MODULE_2__modules_math_functions__[\"e\" /* sqrroot */])(a)}.`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NheUhlbGxvfSBmcm9tICcuL21vZHVsZXMvZ3JlZXRpbmcnO1xuXG5pbXBvcnQge30gZnJvbSAnLi9tb2R1bGVzL2Nvbm5lY3QnO1xuaW1wb3J0IHtzdW0sIHByb2R1Y3QsIGRpdmlkZW5kLCBkaWZmZXJlbmNlLCBtb2R1bHVzLCBzcXJyb290fSBmcm9tICcuL21vZHVsZXMvbWF0aC1mdW5jdGlvbnMnO1xuXG5jb25zdCByZXN1bHRHcmVldGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRHcmVldGluZycpO1xuY29uc3QgcmVzdWx0U3VtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdFN1bScpO1xuY29uc3QgcmVzdWx0UHJvZHVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRQcm9kdWN0Jyk7XG5jb25zdCByZXN1bHREaXZpZGVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHREaXZpZGVuZCcpO1xuY29uc3QgcmVzdWx0RGlmZmVyZW5jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHREaWZmZXJlbmNlJyk7XG5jb25zdCByZXN1bHRNb2R1bHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdE1vZHVsdXMnKTtcbmNvbnN0IHJlc3VsdFNxcnJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0U3Fycm9vdCcpO1xuXG5jb25zdCBhID0gMTAwO1xuY29uc3QgYiA9IDQwO1xuXG5yZXN1bHRHcmVldGluZy50ZXh0Q29udGVudCA9IHNheUhlbGxvKCdXZWxjb21lIHRvIHRoZSBib2lsZXJwbGF0ZS4nKTtcbnJlc3VsdFN1bS50ZXh0Q29udGVudCA9IGBUaGUgc3VtIG9mICR7YX0gYW5kICR7Yn0gaXMgJHtzdW0oYSwgYil9LmA7XG5yZXN1bHRQcm9kdWN0LnRleHRDb250ZW50ID0gYFRoZSBwcm9kdWN0IG9mICR7YX0gYW5kICR7Yn0gaXMgJHtwcm9kdWN0KGEsIGIpfS5gO1xucmVzdWx0RGl2aWRlbmQudGV4dENvbnRlbnQgPSBgVGhlIGRpdmlkZW5kIG9mICR7YX0gYW5kICR7Yn0gaXMgJHtkaXZpZGVuZChhLCBiKX0uYDtcbnJlc3VsdERpZmZlcmVuY2UudGV4dENvbnRlbnQgPSBgVGhlIGRpZmZlcmVuY2Ugb2YgJHthfSBhbmQgJHtifSBpcyAke2RpZmZlcmVuY2UoYSwgYil9LmA7XG5yZXN1bHRNb2R1bHVzLnRleHRDb250ZW50ID0gYFRoZSBtb2R1bHVzIG9mICR7YX0gYW5kICR7Yn0gaXMgJHttb2R1bHVzKGEsIGIpfS5gO1xucmVzdWx0U3Fycm9vdC50ZXh0Q29udGVudCA9IGBUaGUgc3F1YXJlIHJvb3Qgb2YgJHthfSBpcyAke3NxcnJvb3QoYSl9LmA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./src/modules/greeting.js ***!
  \*********************************/
/*! exports provided: sayHello */
/*! exports used: sayHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return sayHello; });\nconst sayHello = (greeting) => {\n    const currentHour = new Date().getHours();\n    let timeGreeting = 'Good morning.';\n\n    if (currentHour >= 12 && currentHour <= 17) {\n        timeGreeting = 'Good afternoon.';\n    } else if (currentHour >= 17) {\n        timeGreeting = 'Good evening.';\n    }\n    return `${timeGreeting} ${greeting}`;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dyZWV0aW5nLmpzP2RiOTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2F5SGVsbG8gPSAoZ3JlZXRpbmcpID0+IHtcbiAgICBjb25zdCBjdXJyZW50SG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICBsZXQgdGltZUdyZWV0aW5nID0gJ0dvb2QgbW9ybmluZy4nO1xuXG4gICAgaWYgKGN1cnJlbnRIb3VyID49IDEyICYmIGN1cnJlbnRIb3VyIDw9IDE3KSB7XG4gICAgICAgIHRpbWVHcmVldGluZyA9ICdHb29kIGFmdGVybm9vbi4nO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEhvdXIgPj0gMTcpIHtcbiAgICAgICAgdGltZUdyZWV0aW5nID0gJ0dvb2QgZXZlbmluZy4nO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGltZUdyZWV0aW5nfSAke2dyZWV0aW5nfWA7XG59XG5leHBvcnQge3NheUhlbGxvfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZ3JlZXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./src/modules/connect.js ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/aron_prenovost/Desktop/storage/es6-gulp-boilerplate/src/modules/connect.js'\\n    at Error (native)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************************!*\
  !*** ./src/modules/math-functions.js ***!
  \***************************************/
/*! exports provided: sum, product, dividend, difference, modulus, sqrroot */
/*! exports used: difference, dividend, modulus, product, sqrroot, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return product; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return dividend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return difference; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return modulus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return sqrroot; });\n// general demo code \nconst sum = (a, b) => {\n    return a + b;\n};\n\nconst product = (a, b) => {\n    return a * b;\n};\n\nconst dividend = (a, b) => {\n    return (a / b).toFixed(2);\n};\n\nconst difference = (a, b) => {\n    return a - b;\n};\n\nconst modulus = (a, b) => {\n    return a % b;\n};\n\nconst sqrroot = (a) => {\n\treturn Math.sqrt(a);\n}\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL21hdGgtZnVuY3Rpb25zLmpzP2VlOTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhbCBkZW1vIGNvZGUgXG5jb25zdCBzdW0gPSAoYSwgYikgPT4ge1xuICAgIHJldHVybiBhICsgYjtcbn07XG5cbmNvbnN0IHByb2R1Y3QgPSAoYSwgYikgPT4ge1xuICAgIHJldHVybiBhICogYjtcbn07XG5cbmNvbnN0IGRpdmlkZW5kID0gKGEsIGIpID0+IHtcbiAgICByZXR1cm4gKGEgLyBiKS50b0ZpeGVkKDIpO1xufTtcblxuY29uc3QgZGlmZmVyZW5jZSA9IChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGEgLSBiO1xufTtcblxuY29uc3QgbW9kdWx1cyA9IChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGEgJSBiO1xufTtcblxuY29uc3Qgc3Fycm9vdCA9IChhKSA9PiB7XG5cdHJldHVybiBNYXRoLnNxcnQoYSk7XG59XG5cblxuZXhwb3J0IHtzdW0sIHByb2R1Y3QsIGRpdmlkZW5kLCBkaWZmZXJlbmNlLCBtb2R1bHVzLCBzcXJyb290fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvbWF0aC1mdW5jdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);