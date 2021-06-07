module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({\n    // The name to display on the sign in form (e.g. 'Sign in with...')\n    name: \"Credentials\",\n    authorize: async credentials => {\n      //console.log(\"credentials_:\", credentials);\n      try {\n        const data = {\n          username: credentials.username,\n          password: credentials.password\n        }; // API call associated with authentification\n        // look up the user from the credentials supplied\n\n        const user = await login(data);\n\n        if (user) {\n          // Any object returned will be saved in `user` property of the JWT\n          return Promise.resolve(user);\n        }\n      } catch (error) {\n        if (error) {\n          //console.log(error.response);\n          return Promise.reject(\"/signin?error=Invalid username or password\");\n        }\n      }\n    }\n  })],\n  pages: {\n    signIn: \"/authorize/signin\",\n    signOut: \"/auth/signout\",\n    error: \"/authorize/signin\",\n    // Error code passed in query string as ?error=\n    verifyRequest: \"/auth/verify-request\",\n    // (used for check email message)\n    newUser: null // If set, new users will be directed here on first sign in\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJDcmVkZW50aWFscyIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImRhdGEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsImxvZ2luIiwiUHJvbWlzZSIsInJlc29sdmUiLCJlcnJvciIsInJlamVjdCIsInBhZ2VzIiwic2lnbkluIiwic2lnbk91dCIsInZlcmlmeVJlcXVlc3QiLCJuZXdVc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlQSwrR0FBUSxDQUFDO0FBQ3RCQyxXQUFTLEVBQUUsQ0FDVEMsMERBQVMsQ0FBQ0MsV0FBVixDQUFzQjtBQUNwQjtBQUNBQyxRQUFJLEVBQUUsYUFGYztBQUdwQkMsYUFBUyxFQUFFLE1BQU9DLFdBQVAsSUFBdUI7QUFDaEM7QUFFQSxVQUFJO0FBQ0YsY0FBTUMsSUFBSSxHQUFHO0FBQ1hDLGtCQUFRLEVBQUVGLFdBQVcsQ0FBQ0UsUUFEWDtBQUVYQyxrQkFBUSxFQUFFSCxXQUFXLENBQUNHO0FBRlgsU0FBYixDQURFLENBS0Y7QUFDQTs7QUFDQSxjQUFNQyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxDQUFDSixJQUFELENBQXhCOztBQUNBLFlBQUlHLElBQUosRUFBVTtBQUNSO0FBQ0EsaUJBQU9FLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkgsSUFBaEIsQ0FBUDtBQUNEO0FBQ0YsT0FaRCxDQVlFLE9BQU9JLEtBQVAsRUFBYztBQUNkLFlBQUlBLEtBQUosRUFBVztBQUNUO0FBQ0EsaUJBQU9GLE9BQU8sQ0FBQ0csTUFBUixDQUNMLDRDQURLLENBQVA7QUFHRDtBQUNGO0FBQ0Y7QUExQm1CLEdBQXRCLENBRFMsQ0FEVztBQStCdEJDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUUsbUJBREg7QUFFTEMsV0FBTyxFQUFFLGVBRko7QUFHTEosU0FBSyxFQUFFLG1CQUhGO0FBR3VCO0FBQzVCSyxpQkFBYSxFQUFFLHNCQUpWO0FBSWtDO0FBQ3ZDQyxXQUFPLEVBQUUsSUFMSixDQUtVOztBQUxWO0FBL0JlLENBQUQsQ0FBdkIiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICBQcm92aWRlcnMuQ3JlZGVudGlhbHMoe1xuICAgICAgLy8gVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuICdTaWduIGluIHdpdGguLi4nKVxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgYXV0aG9yaXplOiBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNyZWRlbnRpYWxzXzpcIiwgY3JlZGVudGlhbHMpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBjcmVkZW50aWFscy51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8vIEFQSSBjYWxsIGFzc29jaWF0ZWQgd2l0aCBhdXRoZW50aWZpY2F0aW9uXG4gICAgICAgICAgLy8gbG9vayB1cCB0aGUgdXNlciBmcm9tIHRoZSBjcmVkZW50aWFscyBzdXBwbGllZFxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbihkYXRhKTtcbiAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgLy8gQW55IG9iamVjdCByZXR1cm5lZCB3aWxsIGJlIHNhdmVkIGluIGB1c2VyYCBwcm9wZXJ0eSBvZiB0aGUgSldUXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICBcIi9zaWduaW4/ZXJyb3I9SW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2F1dGhvcml6ZS9zaWduaW5cIixcbiAgICBzaWduT3V0OiBcIi9hdXRoL3NpZ25vdXRcIixcbiAgICBlcnJvcjogXCIvYXV0aG9yaXplL3NpZ25pblwiLCAvLyBFcnJvciBjb2RlIHBhc3NlZCBpbiBxdWVyeSBzdHJpbmcgYXMgP2Vycm9yPVxuICAgIHZlcmlmeVJlcXVlc3Q6IFwiL2F1dGgvdmVyaWZ5LXJlcXVlc3RcIiwgLy8gKHVzZWQgZm9yIGNoZWNrIGVtYWlsIG1lc3NhZ2UpXG4gICAgbmV3VXNlcjogbnVsbCwgLy8gSWYgc2V0LCBuZXcgdXNlcnMgd2lsbCBiZSBkaXJlY3RlZCBoZXJlIG9uIGZpcnN0IHNpZ24gaW5cbiAgfSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ })

/******/ });