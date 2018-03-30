(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aspnetValidation"] = factory();
	else
		root["aspnetValidation"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: MvcValidationProviders, ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MvcValidationProviders\", function() { return MvcValidationProviders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ValidationService\", function() { return ValidationService; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [0, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n/**\r\n * Contains default implementations for ASP.NET Core MVC validation attributes.\r\n */\r\nvar MvcValidationProviders = /** @class */ (function () {\r\n    function MvcValidationProviders() {\r\n        /**\r\n         * Validates whether the input has a value.\r\n         */\r\n        this.required = function (value, element, params) {\r\n            return Boolean(value);\r\n        };\r\n        /**\r\n         * Validates whether the input value satisfies the length contstraint.\r\n         */\r\n        this.stringLength = function (value, element, params) {\r\n            if (!value) {\r\n                return true;\r\n            }\r\n            if (params.min) {\r\n                var min = parseInt(params.min);\r\n                if (value.length < min) {\r\n                    return false;\r\n                }\r\n            }\r\n            if (params.max) {\r\n                var max = parseInt(params.max);\r\n                if (value.length > max) {\r\n                    return false;\r\n                }\r\n            }\r\n            return true;\r\n        };\r\n        /**\r\n         * Validates whether the input value is equal to another input value.\r\n         */\r\n        this.compare = function (value, element, params) {\r\n            if (!params.other) {\r\n                return true;\r\n            }\r\n            // Sample other parameter: \"*.Name\"\r\n            // Wat?\r\n            var otherElement = document.getElementById(params.other.substr(2));\r\n            if (!otherElement) {\r\n                return true;\r\n            }\r\n            return (otherElement.value === value);\r\n        };\r\n        /**\r\n         * Validates whether the input value is a number within a given range.\r\n         */\r\n        this.range = function (value, element, params) {\r\n            if (!value) {\r\n                return true;\r\n            }\r\n            var val = parseFloat(value);\r\n            if (isNaN(val)) {\r\n                return false;\r\n            }\r\n            if (params.min) {\r\n                var min = parseFloat(params.min);\r\n                if (val < min) {\r\n                    return false;\r\n                }\r\n            }\r\n            if (params.max) {\r\n                var max = parseFloat(params.max);\r\n                if (val > max) {\r\n                    return false;\r\n                }\r\n            }\r\n            return true;\r\n        };\r\n        /**\r\n         * Validates whether the input value satisfies a regular expression pattern.\r\n         */\r\n        this.regex = function (value, element, params) {\r\n            if (!value || !params.pattern) {\r\n                return true;\r\n            }\r\n            var r = new RegExp(params.pattern);\r\n            return r.test(value);\r\n        };\r\n        /**\r\n         * Validates whether the input value is an email in accordance to RFC822 specification, with a top level domain.\r\n         */\r\n        this.email = function (value, element, params) {\r\n            if (!value) {\r\n                return true;\r\n            }\r\n            // RFC822 email address with .TLD validation\r\n            // (c) Richard Willis, Chris Ferdinandi, MIT Licensed\r\n            // https://gist.github.com/badsyntax/719800\r\n            // https://gist.github.com/cferdinandi/d04aad4ce064b8da3edf21e26f8944c4\r\n            var r = /^([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x22)(\\x2e([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x22))*\\x40([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x5b([^\\x0d\\x5b-\\x5d\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x5d)(\\x2e([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x5b([^\\x0d\\x5b-\\x5d\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x5d))*(\\.\\w{2,})+$/;\r\n            return r.test(value);\r\n        };\r\n        /**\r\n         * Validates whether the input value is a credit card number, with Luhn's Algorithm.\r\n         */\r\n        this.creditcard = function (value, element, params) {\r\n            if (!value) {\r\n                return true;\r\n            }\r\n            // (c) jquery-validation, MIT Licensed\r\n            // https://github.com/jquery-validation/jquery-validation/blob/master/src/additional/creditcard.js\r\n            // based on https://en.wikipedia.org/wiki/Luhn_algorithm\r\n            // Accept only spaces, digits and dashes\r\n            if (/[^0-9 \\-]+/.test(value)) {\r\n                return false;\r\n            }\r\n            var nCheck = 0, nDigit = 0, bEven = false, n, cDigit;\r\n            value = value.replace(/\\D/g, \"\");\r\n            // Basing min and max length on https://developer.ean.com/general_info/Valid_Credit_Card_Types\r\n            if (value.length < 13 || value.length > 19) {\r\n                return false;\r\n            }\r\n            for (n = value.length - 1; n >= 0; n--) {\r\n                cDigit = value.charAt(n);\r\n                nDigit = parseInt(cDigit, 10);\r\n                if (bEven) {\r\n                    if ((nDigit *= 2) > 9) {\r\n                        nDigit -= 9;\r\n                    }\r\n                }\r\n                nCheck += nDigit;\r\n                bEven = !bEven;\r\n            }\r\n            return (nCheck % 10) === 0;\r\n        };\r\n        /**\r\n         * Validates whether the input value is a URL.\r\n         */\r\n        this.url = function (value, element, params) {\r\n            if (!value) {\r\n                return true;\r\n            }\r\n            // (c) Diego Perini, MIT Licensed\r\n            // https://gist.github.com/dperini/729294\r\n            var r = new RegExp(\"^\" +\r\n                // protocol identifier\r\n                \"(?:(?:https?|ftp)://)\" +\r\n                // user:pass authentication\r\n                \"(?:\\\\S+(?::\\\\S*)?@)?\" +\r\n                \"(?:\" +\r\n                // IP address exclusion\r\n                // private & local networks\r\n                \"(?!(?:10|127)(?:\\\\.\\\\d{1,3}){3})\" +\r\n                \"(?!(?:169\\\\.254|192\\\\.168)(?:\\\\.\\\\d{1,3}){2})\" +\r\n                \"(?!172\\\\.(?:1[6-9]|2\\\\d|3[0-1])(?:\\\\.\\\\d{1,3}){2})\" +\r\n                // IP address dotted notation octets\r\n                // excludes loopback network 0.0.0.0\r\n                // excludes reserved space >= 224.0.0.0\r\n                // excludes network & broacast addresses\r\n                // (first & last IP address of each class)\r\n                \"(?:[1-9]\\\\d?|1\\\\d\\\\d|2[01]\\\\d|22[0-3])\" +\r\n                \"(?:\\\\.(?:1?\\\\d{1,2}|2[0-4]\\\\d|25[0-5])){2}\" +\r\n                \"(?:\\\\.(?:[1-9]\\\\d?|1\\\\d\\\\d|2[0-4]\\\\d|25[0-4]))\" +\r\n                \"|\" +\r\n                // host name\r\n                \"(?:(?:[a-z\\\\u00a1-\\\\uffff0-9]-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)\" +\r\n                // domain name\r\n                \"(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff0-9]-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)*\" +\r\n                // TLD identifier\r\n                \"(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff]{2,}))\" +\r\n                // TLD may end with dot\r\n                \"\\\\.?\" +\r\n                \")\" +\r\n                // port number\r\n                \"(?::\\\\d{2,5})?\" +\r\n                // resource path\r\n                \"(?:[/?#]\\\\S*)?\" +\r\n                \"$\", \"i\");\r\n            return r.test(value);\r\n        };\r\n        /**\r\n         * Validates whether the input value is a phone number.\r\n         */\r\n        this.phone = function (value, element, params) {\r\n            if (!value) {\r\n                return true;\r\n            }\r\n            // Allows whitespace or dash as number separator because some people like to do that...\r\n            var consecutiveSeparator = /[\\+\\-\\s][\\-\\s]/g;\r\n            if (consecutiveSeparator.test(value)) {\r\n                return false;\r\n            }\r\n            var r = /^\\+?[0-9\\-\\s]+$/;\r\n            return r.test(value);\r\n        };\r\n        /**\r\n         * Asynchronously validates the input value to a JSON GET API endpoint.\r\n         */\r\n        this.remote = function (value, element, params) {\r\n            if (!value) {\r\n                return true;\r\n            }\r\n            return new Promise(function (ok, reject) {\r\n                var url = params['url'] + '?' + element.name + '=' + encodeURIComponent(value);\r\n                // params.additionalfields: *.Email,*.Username\r\n                var xtras = params.additionalfields.split(',');\r\n                for (var i = 0; i < xtras.length; i++) {\r\n                    var xtra = xtras[i].substr(2);\r\n                    if (xtra === element.name) {\r\n                        continue;\r\n                    }\r\n                    var e = document.getElementById(xtra);\r\n                    if (!e || !e.value) {\r\n                        continue;\r\n                    }\r\n                    url = url + '&' + e.name + '=' + encodeURIComponent(e.value);\r\n                }\r\n                var request = new XMLHttpRequest();\r\n                request.open('get', url);\r\n                request.onload = function (e) {\r\n                    if (request.status >= 200 && request.status < 300) {\r\n                        var data = JSON.parse(request.responseText);\r\n                        ok(data);\r\n                    }\r\n                    else {\r\n                        reject({\r\n                            status: request.status,\r\n                            statusText: request.statusText,\r\n                            data: request.responseText\r\n                        });\r\n                    }\r\n                };\r\n                request.onerror = function (e) {\r\n                    reject({\r\n                        status: request.status,\r\n                        statusText: request.statusText,\r\n                        data: request.responseText\r\n                    });\r\n                };\r\n                request.send();\r\n            });\r\n        };\r\n    }\r\n    return MvcValidationProviders;\r\n}());\r\n\r\n/**\r\n * Responsibles for managing the DOM elements and running the validation providers.\r\n */\r\nvar ValidationService = /** @class */ (function () {\r\n    function ValidationService() {\r\n        /**\r\n         * A key-value collection of loaded validation plugins.\r\n         */\r\n        this.providers = {};\r\n        /**\r\n         * A key-value collection of <span> elements for displaying validation messages for an input (by DOM ID).\r\n         */\r\n        this.messageFor = {};\r\n        /**\r\n         * A list of managed elements, each having a randomly assigned unique identifier (UID).\r\n         */\r\n        this.elementUIDs = [];\r\n        /**\r\n         * A key-value collection of UID to Element for quick lookup.\r\n         */\r\n        this.elementByUID = {};\r\n        /**\r\n         * A key-value collection of input UIDs for a <form> UID.\r\n         */\r\n        this.formInputs = {};\r\n        /**\r\n         * A key-value map for input UID to its validator factory.\r\n         */\r\n        this.validators = {};\r\n        /**\r\n         * A key-value map for element UID to its trigger element (submit event for <form>, input event for <textarea> and <input>).\r\n         */\r\n        this.elementEvents = {};\r\n        /**\r\n         * A key-value map of input UID to its validation error message.\r\n         */\r\n        this.summary = {};\r\n        /**\r\n         * In milliseconds, the rate of fire of the input validation.\r\n         */\r\n        this.debounce = 300;\r\n    }\r\n    /**\r\n     * Registers a new validation plugin of the given name, if not registered yet.\r\n     * Registered plugin validates inputs with data-val-[name] attribute, used as error message.\r\n     * @param name\r\n     * @param callback\r\n     */\r\n    ValidationService.prototype.addProvider = function (name, callback) {\r\n        if (this.providers[name]) {\r\n            // First-Come-First-Serve validation plugin design.\r\n            // Allows developers to override the default MVC Providers by adding custom providers BEFORE bootstrap() is called!\r\n            return;\r\n        }\r\n        this.providers[name] = callback;\r\n    };\r\n    /**\r\n     * Registers the default providers for enabling ASP.NET Core MVC client-side validation.\r\n     */\r\n    ValidationService.prototype.addMvcProviders = function () {\r\n        var mvc = new MvcValidationProviders();\r\n        // [Required]\r\n        this.addProvider('required', mvc.required);\r\n        // [StringLength], [MinLength], [MaxLength]\r\n        this.addProvider('length', mvc.stringLength);\r\n        this.addProvider('maxlength', mvc.stringLength);\r\n        this.addProvider('minlength', mvc.stringLength);\r\n        // [Compare]\r\n        this.addProvider('equalto', mvc.compare);\r\n        // [Range]\r\n        this.addProvider('range', mvc.range);\r\n        // [RegularExpression]\r\n        this.addProvider('regex', mvc.regex);\r\n        // [CreditCard]\r\n        this.addProvider('creditcard', mvc.creditcard);\r\n        // [EmailAddress]\r\n        this.addProvider('email', mvc.email);\r\n        // [Url]\r\n        this.addProvider('url', mvc.url);\r\n        // [Phone]\r\n        this.addProvider('phone', mvc.phone);\r\n        // [Remote]\r\n        this.addProvider('remote', mvc.remote);\r\n    };\r\n    /**\r\n     * Scans document for all validation message <span> generated by ASP.NET Core MVC, then tracks them.\r\n     */\r\n    ValidationService.prototype.scanMessages = function () {\r\n        var validationMessageElements = document.querySelectorAll('[data-valmsg-for]');\r\n        for (var i = 0; i < validationMessageElements.length; i++) {\r\n            var e = validationMessageElements[i];\r\n            var name_1 = e.getAttribute('data-valmsg-for');\r\n            if (!this.messageFor[name_1]) {\r\n                this.messageFor[name_1] = [];\r\n            }\r\n            this.messageFor[name_1].push(e);\r\n        }\r\n    };\r\n    /**\r\n     * Given attribute map for an HTML input, returns the validation directives to be executed.\r\n     * @param attributes\r\n     */\r\n    ValidationService.prototype.parseDirectives = function (attributes) {\r\n        var directives = {};\r\n        var validationAtributes = {};\r\n        var cut = 'data-val-'.length;\r\n        for (var i = 0; i < attributes.length; i++) {\r\n            var a = attributes[i];\r\n            if (a.name.indexOf('data-val-') === 0) {\r\n                var key = a.name.substr(cut);\r\n                validationAtributes[key] = a.value;\r\n            }\r\n        }\r\n        var _loop_1 = function (key) {\r\n            if (key.indexOf('-') === -1) {\r\n                var parameters = Object.keys(validationAtributes).filter(function (Q) {\r\n                    return (Q !== key) && (Q.indexOf(key) === 0);\r\n                });\r\n                var directive = {\r\n                    error: validationAtributes[key],\r\n                    params: {}\r\n                };\r\n                var pcut = (key + '-').length;\r\n                for (var i = 0; i < parameters.length; i++) {\r\n                    var pvalue = validationAtributes[parameters[i]];\r\n                    var pkey = parameters[i].substr(pcut);\r\n                    directive.params[pkey] = pvalue;\r\n                }\r\n                directives[key] = directive;\r\n            }\r\n        };\r\n        for (var key in validationAtributes) {\r\n            _loop_1(key);\r\n        }\r\n        // console.log(directives);\r\n        return directives;\r\n    };\r\n    /**\r\n     *  Returns an RFC4122 version 4 compliant GUID.\r\n     */\r\n    ValidationService.prototype.guid4 = function () {\r\n        // (c) broofa, MIT Licensed\r\n        // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/2117523#2117523\r\n        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\r\n            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);\r\n            return v.toString(16);\r\n        });\r\n    };\r\n    /**\r\n     * Gets a UID for an DOM element.\r\n     * @param node\r\n     */\r\n    ValidationService.prototype.getElementUID = function (node) {\r\n        var x = this.elementUIDs.filter(function (e) {\r\n            return e.node === node;\r\n        })[0];\r\n        if (x) {\r\n            return x.uid;\r\n        }\r\n        var uid = this.guid4();\r\n        this.elementUIDs.push({\r\n            node: node,\r\n            uid: uid\r\n        });\r\n        this.elementByUID[uid] = node;\r\n        return uid;\r\n    };\r\n    /**\r\n     * Returns a Promise that returns validation result for each and every inputs within the form.\r\n     * @param formUID\r\n     */\r\n    ValidationService.prototype.getFormValidationTask = function (formUID) {\r\n        var formInputUIDs = this.formInputs[formUID];\r\n        if (!formInputUIDs || formInputUIDs.length === 0) {\r\n            return null;\r\n        }\r\n        var formValidators = [];\r\n        for (var i = 0; i < formInputUIDs.length; i++) {\r\n            var inputUID = formInputUIDs[i];\r\n            formValidators.push(this.validators[inputUID]);\r\n        }\r\n        var tasks = formValidators.map(function (factory) { return factory(); });\r\n        return Promise.all(tasks).then(function (result) { return result.every(function (e) { return e; }); });\r\n    };\r\n    /**\r\n     * Tracks a <form> element as parent of an input UID. When the form is submitted, attempts to validate the said input asynchronously.\r\n     * @param form\r\n     * @param inputUID\r\n     */\r\n    ValidationService.prototype.trackFormInput = function (form, inputUID) {\r\n        var _this = this;\r\n        var formUID = this.getElementUID(form);\r\n        if (!this.formInputs[formUID]) {\r\n            this.formInputs[formUID] = [];\r\n        }\r\n        var add = (this.formInputs[formUID].indexOf(inputUID) === -1);\r\n        if (add) {\r\n            this.formInputs[formUID].push(inputUID);\r\n        }\r\n        if (this.elementEvents[formUID]) {\r\n            return;\r\n        }\r\n        var cb = function (e) {\r\n            var validate = _this.getFormValidationTask(formUID);\r\n            if (!validate) {\r\n                return;\r\n            }\r\n            e.preventDefault();\r\n            validate.then(function (success) {\r\n                if (success) {\r\n                    form.submit();\r\n                }\r\n            }).catch(function (error) {\r\n                console.log(error);\r\n            });\r\n        };\r\n        form.addEventListener('submit', cb);\r\n        form.addEventListener('reset', function (e) {\r\n            var uids = _this.formInputs[formUID];\r\n            for (var _i = 0, uids_1 = uids; _i < uids_1.length; _i++) {\r\n                var uid = uids_1[_i];\r\n                var input = _this.elementByUID[uid];\r\n                input.classList.remove('input-validation-error');\r\n                input.classList.remove('input-validation-valid');\r\n                var spans = _this.messageFor[input.name];\r\n                if (spans) {\r\n                    for (var i = 0; i < spans.length; i++) {\r\n                        spans[i].innerHTML = '';\r\n                    }\r\n                }\r\n                delete _this.summary[uid];\r\n            }\r\n            _this.renderSummary();\r\n        });\r\n        this.elementEvents[formUID] = cb;\r\n    };\r\n    /**\r\n     * Adds an input element to be managed and validated by the service.\r\n     * Triggers a debounced live validation when input value changes.\r\n     * @param input\r\n     */\r\n    ValidationService.prototype.addInput = function (input) {\r\n        var _this = this;\r\n        var uid = this.getElementUID(input);\r\n        var directives = this.parseDirectives(input.attributes);\r\n        var validate = this.createValidator(input, directives);\r\n        this.validators[uid] = validate;\r\n        this.trackFormInput(input.form, uid);\r\n        if (this.elementEvents[uid]) {\r\n            return;\r\n        }\r\n        var delay;\r\n        var cb = function (e) {\r\n            var validate = _this.validators[uid];\r\n            clearTimeout(delay);\r\n            delay = setTimeout(validate, _this.debounce);\r\n        };\r\n        var isDropdown = input.tagName.toLowerCase() === 'select';\r\n        if (isDropdown) {\r\n            input.addEventListener('change', cb);\r\n        }\r\n        else {\r\n            input.addEventListener('input', cb);\r\n        }\r\n        this.elementEvents[uid] = cb;\r\n    };\r\n    /**\r\n     * Scans the entire document for input elements to be validated.\r\n     */\r\n    ValidationService.prototype.scanInputs = function () {\r\n        var inputs = document.querySelectorAll('[data-val=\"true\"]');\r\n        for (var i = 0; i < inputs.length; i++) {\r\n            var input = inputs[i];\r\n            this.addInput(input);\r\n        }\r\n    };\r\n    /**\r\n     * Returns a <ul> element as a validation errors summary.\r\n     */\r\n    ValidationService.prototype.createSummaryDOM = function () {\r\n        if (!Object.keys(this.summary).length) {\r\n            return null;\r\n        }\r\n        var ul = document.createElement('ul');\r\n        for (var key in this.summary) {\r\n            var li = document.createElement('li');\r\n            li.innerHTML = this.summary[key];\r\n            ul.appendChild(li);\r\n        }\r\n        return ul;\r\n    };\r\n    /**\r\n     * Displays validation summary to ASP.NET Core MVC designated elements, when it actually gets updated.\r\n     */\r\n    ValidationService.prototype.renderSummary = function () {\r\n        var summaryElements = document.querySelectorAll('[data-valmsg-summary=\"true\"]');\r\n        if (!summaryElements.length) {\r\n            return;\r\n        }\r\n        // Using JSON.stringify for quick and painless deep compare of simple KVP. You need to sort the keys first, tho...\r\n        var shadow = JSON.stringify(this.summary, Object.keys(this.summary).sort());\r\n        if (shadow === this.renderedSummaryJSON) {\r\n            return;\r\n        }\r\n        // Prevents wasteful re-rendering of summary list element with identical items!\r\n        // console.log('RENDERING VALIDATION SUMMARY');\r\n        this.renderedSummaryJSON = shadow;\r\n        var ul = this.createSummaryDOM();\r\n        for (var i = 0; i < summaryElements.length; i++) {\r\n            var e = summaryElements[i];\r\n            e.innerHTML = '';\r\n            if (ul) {\r\n                e.className = 'validation-summary-error';\r\n                e.appendChild(ul.cloneNode(true));\r\n            }\r\n            else {\r\n                e.className = 'validation-summary-valid';\r\n            }\r\n        }\r\n    };\r\n    /**\r\n     * Adds an error message to an input element, which also updates the validation message elements and validation summary elements.\r\n     * @param input\r\n     * @param message\r\n     */\r\n    ValidationService.prototype.addError = function (input, message) {\r\n        var spans = this.messageFor[input.name];\r\n        if (spans) {\r\n            for (var i = 0; i < spans.length; i++) {\r\n                spans[i].innerHTML = message;\r\n                spans[i].className = 'field-validation-error';\r\n            }\r\n        }\r\n        input.classList.remove('input-validation-valid');\r\n        input.classList.add('input-validation-error');\r\n        var uid = this.getElementUID(input);\r\n        this.summary[uid] = message;\r\n        this.renderSummary();\r\n    };\r\n    /**\r\n     * Removes an error message from an input element, which also updates the validation message elements and validation summary elements.\r\n     * @param input\r\n     */\r\n    ValidationService.prototype.removeError = function (input) {\r\n        var spans = this.messageFor[input.name];\r\n        if (spans) {\r\n            for (var i = 0; i < spans.length; i++) {\r\n                spans[i].innerHTML = '';\r\n                spans[i].className = 'field-validation-valid';\r\n            }\r\n        }\r\n        input.classList.remove('input-validation-error');\r\n        input.classList.add('input-validation-valid');\r\n        var uid = this.getElementUID(input);\r\n        delete this.summary[uid];\r\n        this.renderSummary();\r\n    };\r\n    /**\r\n     * Returns a validation Promise factory for an input element, using given validation directives.\r\n     * @param input\r\n     * @param directives\r\n     */\r\n    ValidationService.prototype.createValidator = function (input, directives) {\r\n        var _this = this;\r\n        return function () { return __awaiter(_this, void 0, void 0, function () {\r\n            var _a, _b, _i, key, directive, provider, result, valid, error, resolution;\r\n            return __generator(this, function (_c) {\r\n                switch (_c.label) {\r\n                    case 0:\r\n                        _a = [];\r\n                        for (_b in directives)\r\n                            _a.push(_b);\r\n                        _i = 0;\r\n                        _c.label = 1;\r\n                    case 1:\r\n                        if (!(_i < _a.length)) return [3 /*break*/, 7];\r\n                        key = _a[_i];\r\n                        directive = directives[key];\r\n                        provider = this.providers[key];\r\n                        if (!provider) {\r\n                            console.log('aspnet-validation provider not implemented: ' + key);\r\n                            return [3 /*break*/, 6];\r\n                        }\r\n                        result = provider(input.value, input, directive.params);\r\n                        valid = false;\r\n                        error = directive.error;\r\n                        if (!(typeof result === 'boolean')) return [3 /*break*/, 2];\r\n                        valid = result;\r\n                        return [3 /*break*/, 5];\r\n                    case 2:\r\n                        if (!(typeof result === 'string')) return [3 /*break*/, 3];\r\n                        valid = false;\r\n                        error = result;\r\n                        return [3 /*break*/, 5];\r\n                    case 3: return [4 /*yield*/, result];\r\n                    case 4:\r\n                        resolution = _c.sent();\r\n                        if (typeof resolution === 'boolean') {\r\n                            valid = resolution;\r\n                        }\r\n                        else {\r\n                            valid = false;\r\n                            error = resolution;\r\n                        }\r\n                        _c.label = 5;\r\n                    case 5:\r\n                        if (!valid) {\r\n                            this.addError(input, error);\r\n                            return [2 /*return*/, false];\r\n                        }\r\n                        _c.label = 6;\r\n                    case 6:\r\n                        _i++;\r\n                        return [3 /*break*/, 1];\r\n                    case 7:\r\n                        this.removeError(input);\r\n                        return [2 /*return*/, true];\r\n                }\r\n            });\r\n        }); };\r\n    };\r\n    /**\r\n     * Load default validation providers and scans the entire document when ready.\r\n     */\r\n    ValidationService.prototype.bootstrap = function () {\r\n        var _this = this;\r\n        this.addMvcProviders();\r\n        document.addEventListener('DOMContentLoaded', function (event) {\r\n            _this.scanMessages();\r\n            _this.scanInputs();\r\n        });\r\n    };\r\n    return ValidationService;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://aspnetValidation/./src/index.ts?");

/***/ })

/******/ });
});