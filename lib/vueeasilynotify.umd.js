(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueeasilynotify"] = factory();
	else
		root["vueeasilynotify"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "05a1":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALXRSTlMAzPo3xugR7GxVFAkFsqKFSSq63/TTmXVj73u2QKwx477gwpSLfl4nHRutRk2u+ue+AAAEJklEQVRo3sSW6XKrMAyFFTBmhwKFELI0TbN0uX7/17sznbSyMamRCe33K5kwKJLPOTKQiYuwy9asrnzH8auarbMuLGKYlyLYVmKQahsUMA9Rm3niR7ysjeDOJGHqiBE4aZjA/XCblRjNqnHhPmxKQaTcwHQemLCAPUwd8kJYspgycN6ICTQcLGn9286pWfmeZe8lq297zG/BhteDGOJxnZ9dpRfunvP1oxji8GohqoF2nX3nJjeM7nZ7Z6BpqsiSo9BgQWTItoAJjSMpUN6YFgv5BUZwybWoYW+EXfDU19IyhpHEy77anorR5vV7ZYMYCMRBr7TvjpRVT6EvnOz/l54TRkksVMXJdmDBjql2CEf0q9R1lmDJUn2PsWdXmfOzC9a4z8q0XYOeFV2lHCbAU0VhxY/+VXyUw0RyxVU/+DlRJBHAZAJFprcz7EgSItkix5uClut+wF34kCvfkParLCxjv/+2T45XtomxZ1lgw1vyQDjfaH99sN5RzvkAA7QEPUcVGnRH0XYLGtyX/AsG1gKpYjCQSsPWk6GR8sqUGxshY0xVLmVYowWcJGhjTjZCZmFOT0na/ZcvDB1oDyMOGFnqf1O3MAMjz0KBgxGmmVn/YQf37xh2mqU0tbwAMvmMEelOsgGkxPsVB2SyqhGO97BSlzRGFt3HhABzB0bn4VtIyWUm9nQvJyt9bNSsplhqlWgLZIUNE7eTmRjbC7UszWFG8v4uiDDQLjAjF3R+1NuHDGaF9bZjRvOSPeio7PO7J01gVvBMPQCAQnyxh5nZiy8KZQAdzEynHOq7FGUzg9G8BYDqO/wSmJnk8TvgAWLxxRpmB5dLDIVtbEWnND1FtuFVSEF9Bgob79MXG6BwluK6s9NW5F0dGdmpq5NyiwOBk7hyAgJcyq4S04RCipuGAKZkicldA4UFXvUo1LiP8ONvFMY2MT/K3yhcYoL4mGK/UHgrrvjgoM7mL4wecv6sMI76f/X2joMwDAVRlIKaghZlA9n/AumYYopIRzaxV3ClyLHfm8/5D/CZT33X4brtd7rvAvnkyjSwXZkffSQCxkdCn8WA8VnUQSBgHAR09AkYRx8d9gLGYU/H24B1vH0cOV0EtoGeV5iAbYXhpS1gW9p4TQ2Y1lRfzAOmxdyliIBJinDxJWASX1xuCpjkJhfYAhaBDSTFBoukCCIqgFtEBdlYwC0bg1AO4BbKwRoQcFsDYIYAuMyQJ9g/Am77BwwvALfhBRafgNviA1MTNJA2NcHGFdWnbVwwrkHnauMarHpQ9tqqh3CCaJkdTlgrjjE/gLJe5GZyyGjFWNXMINmq0blZYcGV45EzAqGrR2BHh353iDkPDHbvE2W/Du8fr9dxFd7frK4wpqCxWSVlYAlno9rRsKLVVtWyX5nuHFWmw/rgO/XBt9UHv2S3iThIIVvdAAAAAElFTkSuQmCC"

/***/ }),

/***/ "0fd0":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALXRSTlMAzPo3xugR7GxVFAkFsqKFSSq63/TTmXVj73u2QKwx477gwpSLfl4nHRutRk2u+ue+AAAEHklEQVRo3ryW6W6jMBhFb7AxOwyQfWuaZmsrv//rjWZEa5uYgkm+nl+RInFkuPcCnEnKaJ1v+KwOPC+oZ3yTr6MyAS1luKullXoXlqAhXua+/BE/X8Z4MmmUeXIAXhaleB5svpKDWc0ZnsO2ko5UWzzOHy5HwP/gMdhEjmTCMB4xlw8wFxjJMuhuzoxXH3n+UfFZd8eCJcZwO0ob001xYcZZBLsUm6m0cbyNCJXluN5hzVJYSdn64FkO7Rqy9GRJahj3bFtoacAphQPv/G4WiisGcC3upoa/YzDlSztLiwQDSRbttL2UGAgLWtowgQNJ2FIHbGCsWgl9E879f2s1YVDEIjOcfI8R7LlZh2jAeQ2vt8BIFuZ1es/MjPv8yjAa9mrcbdaTZyNXmcADiMxIWPljf40eFXiQwmjVD31OjUiEeJjQiGmKLk5OQXSuyKkz0Lr3E0/hUzd3RPumB6v/vPE5y85x/5n1gN1g4+j0fLf+/zXdOj3nIywsnfIc+82Ox07ZXlpaF2j9RS9n2XBGL1qfA4E2c22vhMPFMvQitA2bowXTAs3Qz0Q2TNAP06LN7i70zQLPFmOhfW93Vpjj+WJwo8z2P/YU4n1Hpbba9wYoxNC+SfTqV+r7StCIhfoOq6yRDkEhNgeMWTrsJ1TixL/vcrrSqkQiNiu1Su9eIKuETpyo40V3W1qAToyi/S6I1aBdKcVXNcpx633IQSkGb70dc9UlWrFqVI5/+OoO0IrVM/UBoJRfHEArxuFbVRo3YE0tXhsP9UNNGbVYTfMOQC0bpim1OJ3KhhpI5BcbUIux+ZYlWrYKenGh0qUN9YVefFFzrSWN0YuZapC2W4JeLLTtqtSa0IvVSlZquWe/IZ7JBq7/pBfrx6zV4X9BXKkFCbQVoxfvZEMAT+WMXqw65P2t3l5WEwbCKACn0m5scREpFEIs3Yb2/V+vKz3ILMTPjJk5LxAcZ/7LuWz24Rz18owPLznqrS7XZs9puwIyWckMB2Ilc9ImEdYHm4S2xfBc2BZ1EAizh4OAjj7hMnH00WEvwGFPx9tAx9thptsV2EDPK0xgKwwvbYEtbbymBrSm+mIe0GLuVERAVISTLwGRL043BUQ3OcE2fHyNb7vv+Xcggs0pxdPn+Q3ugVJ0EvUUtfe4BxJVaeP3418wAW0MRHmOLZQ7EOUoDbxcu4lAGkAxZHftoLpLDHk1+SczW/AD8g8IXvCLC8ELJD74jwuJD0RNuNWFqAkyLrzjUsYF4RoqVylcg1QPtbqU6sGcIN2pNCe0Zceob0Bpz3JT2WTUoq2qppGsVetcLbNgy/bIGobQ1i2wa5t+e7A5r2js7sfKftu8Px8O8w3zfm9xhQcDGn1GUjSE03fsyIJWvUfLLmG6Za0wHcYHx8QHR4sP/gN88ok4uDRkaAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "34b0":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAaVBMVEUAAACB2SyO5Dl+1CF+1CJ/1CGA1SJ/1SGD1il/1CF+1CJ/1CKA0yJ/1COE3COH4Ch/0yGA1SOA1iN/0yJ/1CGA0yR+1CF+1CJ/1CJ/1CJ/0yJ/1CKA1SSC1SWA1yJ+1CF/1CKA1SN+0yFBccIwAAAAInRSTlMACwjnvNBeVxL4846AfBkQ9mcsy7dA7Nzbw6+tTjcmyKBCgUVWvAAAAZhJREFUSMeVlt2SgyAMhYO0Wv9tq9a16nZ9/4dcQ5me3QJFcuGM+h1IQgiQYdGUt0Ofpv3Q5lNEHqvjsVn/WDPG9QdclNlqWFYKF3+Wq9Xk2YpXV/3/lifdIsTSJflNf7pWJj/L52jlhQh2KfXn+Z2PU+VvIYy4ChVXGr/xK9u9svp6Vz//KWY1fkEOK9QcM2EMdrRJyGlJw3FgfpUf8DaFytUr/4Y/Dq/0egjJ8ZLHOHIpiK3kfFYf2NPjeKaKs1uqess8Dp2OG3BRTmW1XgIpPPzakZB6MUaeyse32vWRKGp4Qg9/iLiueLEimrg+/Twb1+5E+fbMd/EabbHIHp4SFczAKdjFU7e9DdRvz2UXT8v22hMXtlAVdX3UH3kSXOQvASftu3bxELxc+lmhMHm4hKAPUJg8gkZaxRcUBo+0YuGgcPBPFKUBhYVHaaD4oLDzuvhQ3lDYeJQ3NhAUNh4bCFsUCguvtyiaABRWHk3AaDNRnLjbTGgjC22Vwc04tN2HHijhR1b4oRh+7IYf7OFXh/DLSfD15xcjHVfTIHPl3AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "3d1f":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\nhtml{line-height:1.15;-webkit-text-size-adjust:100%\n}\nbody{margin:0\n}\nmain{display:block\n}\nh1{font-size:2em;margin:.67em 0\n}\nhr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible\n}\npre{font-family:monospace,monospace;font-size:1em\n}\na{background-color:transparent\n}\nabbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted\n}\nb,strong{font-weight:bolder\n}\ncode,kbd,samp{font-family:monospace,monospace;font-size:1em\n}\nsmall{font-size:80%\n}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline\n}\nsub{bottom:-.25em\n}\nsup{top:-.5em\n}\nimg{border-style:none\n}\nbutton,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0\n}\nbutton,input{overflow:visible\n}\nbutton,select{text-transform:none\n}\n[type=button],[type=reset],[type=submit],button{-webkit-appearance:button\n}\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0\n}\n[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText\n}\nfieldset{padding:.35em .75em .625em\n}\nlegend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal\n}\nprogress{vertical-align:baseline\n}\ntextarea{overflow:auto\n}\n[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0\n}\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto\n}\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px\n}\n[type=search]::-webkit-search-decoration{-webkit-appearance:none\n}\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit\n}\ndetails{display:block\n}\nsummary{display:list-item\n}\n[hidden],template{display:none\n}", ""]);

// exports


/***/ }),

/***/ "3fbb":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEUAAAD4tgD3tgD4tgD4tgD4tgD5twD4tgD4twD5tgD/vQD/wQD/yQD4twD/wgD4tQD3tgD3tgD3tgD4tQD4twD3twD6uQD5uQD4tQD3tgD4tgD5tQD4twD3tQD/mJIPAAAAHXRSTlMAfuf23K9e845XGQwJTBD57OPLt2ZANywm7byfbqNqJuIAAAF2SURBVEjHlVZZloQgDEQURRHUtl1m4f7XHECmo0YR6sPnCymyEiAIreRj0XddX4xctuQBqmS53iFnpQqot1mlEars1syb6kvQ96V68/LrBa+nVYh1qnnhRa8G68902y1b9tIl8+L5rF/mm7/ivCC2uPLypK8tWHPpK3OLB8bs9s/IDTJnY97tQa2gJreo7YYU7Lv8HPTlMMgDw+Xqk3/sz6D1gL16+/pSGy85wC4fJcw61X7IVfNEaKp/N5T/CxBgX+VLQMUzQVBfDAYGEAGZYCZkm+IlhrDYYrVE2v4kMQRie1cSbr48iuBVR1vkJwKUe3R2pjjC5LzvzXeNI6xG2JPOfEUcQRhhl0xIdgmCDrc3BA1pDR0gSCsU7hlOFVojCGgNaL4woPlwe4eGDbs7QL/F14+6OkBwRPEgZFdH9GYIfGsLhYcAHjOYgMcMDDLsEh5keFRC0GhUJg/j1HGfeqGkX1npl2L6tZt+sac/HdIfJ8nPnz97RkKZU8tEswAAAABJRU5ErkJggg=="

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5076":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c6bf");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("68850f38", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "565e":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALHRSTlMA6y/tfHT6N8QqbDPfVQjoExC4hUrTBBv1yKGZvK1jPwyU4YtesKXLsicCRrimcYYAAASQSURBVGjetJbrdqowEIUHwUSuCipVFC/VWm3z/s932tVjcxkgGaD7V9ey+q1k9t4ZICubpEFVzNaJx5iXrGdFFaSTDP5WYVQnolFJHYXwN1ocbnPRqfntsBibmqV3JhzE7umYtx7vfOEsfxePhD3uBVH7IwzXaiZ6aLYaiOXvoqfe+RAj78QA7Xpb/OCJNnlfxVFXVf1VJB3/dOiFfWke7qZYXnkOinJ+XRab5lG/9DBVw0nYPuAlNKrkwZ41HJpqsvIikLbRwmKJaCuQLuWwa/aXD3DQY+kPue7w1Wzh6QkcdZqajf4aOofXM7BRRur1yEB73NFWhkPPORCVn40kOFksZbqlelV+rNuMpQ7n1bhs+gG99DHVf8d6Zq7dc8IH1Hyi3Ta3+Fnz1VsOA5S/aQ4LO/Or5WgJA7XUUtWR51LrjQgGK9KapL3DLiQjkiNyaTW0yv2EUfSpklctA1aNlcJISlWDNY95Rp0vfc4zaNCB7me6tw+AtPCU/MKoUvLs4Sd9p/RVPi44VzpshwpOMTSHkcUVa5s/ruzPUxhdU2Xfbo3wFr9HWUzZFk8xGuTHFoUZRylGI6qYEIlrobx8W2lt/kjcEqmjsm+g465/PgicuJOfcLAj6DpLgvrRXu5XeWuBBy5c/5mMzLg2uYft0UU0V5bMQuDOxe6N1GHiDM8z9FQK4UyOJVdczYnNcZYzvytKiUq2nhdPEkfKz9AD4p8A6Sww2c7FV3fy0dN373wcTq+IbOeKVddjcf//PMhCe7QnBJMxt7v9HrKUF8Z7uAUgkC1crK3xOt5QlixkKhcn6gbfmhs3YCeTueZM5/ClEFWKnUzk4oIMtQsIgEKmcyHQhlqjliOS7Vy8bdRqM21KoJDpXCg3v9sVQCaeKgAoZDsXqxBPZTBRaotGJnBxeU2Uor4CkUzmwlWp6wB5i0AmcoEr363EUzlQyWciF3LxVCXn7QGQyYhr0++3C7lfroFKpnNhLXdN5U8qmc5Vj5mgGJPJmGsPcgKebDEqmc6FWjqKSZ9RyXSuzBD7x6y9qyAMBVEUvVgoQU0IkjQWiQ/8/080pbAhZ3ZnZ+WCPO7MnAlgkS/gJhlYXGrUI1YMcanxcAkXsnm48DoJF7J5nX5+KpeyPEBwZAoXsjkyUSSEC9kUCZRF475Qn0VZFI0A6j7qs2gETOvTzqi/kMutD5o94woZzR7aW+EKGe0tGnrrttZBrjT0GGGEK2SOMBjahCtkDm0cU71LOY+pGMyF62QO5owivEs5RREIX4RrZYYvjJu8SznFTTlgGwe6Wb62ELDlSPEOtyIPa4gUY4jannBL8hJC1Bgbz3Br8jvExjkov8AtyacQlOfVwA1uRb7MYTWQlyH9BHdPHrCTwDKkuv5ZH1sZnZbqp1if4/Yfh7D+KS685s58mtV3497C619WfN/q7YAIABiGQaB/1/PQJTnQwTOLmpyMOwrXpFQ/wQksjtEHKDxyU0ZGRFbVhGRUOtfCgmQe2QChdAKbRr8G5hyE3R7KHsH7tl3hc9BwLinXCce9HR1HK/laVpvp9vvgAxGP9oLVdQzIAAAAAElFTkSuQmCC"

/***/ }),

/***/ "610d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vmessage_vue_vue_type_style_index_0_id_489a6da2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5076");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vmessage_vue_vue_type_style_index_0_id_489a6da2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vmessage_vue_vue_type_style_index_0_id_489a6da2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vmessage_vue_vue_type_style_index_0_id_489a6da2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "82cc":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAjVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8DizOFAAAALnRSTlMAZvrpOu0HxDfygVUTELhrKOCIK/OxoJl7dUkzyLytHPbiy15AbgzT0qSUS0bcLASp6AAABDJJREFUaN60lumWojAQhUswISOLgMqiQruvbd7/8ebMcQ6VEFCW5P5yO/01qXtvBXqLLtwsCZxbRCyLRDcnSDJ3QcGswnkZ8UZF5TwEM/Imd5t/lH2feLqp1F1ZvIOslavz1Dcp4Z1F0o0m7KngPVWcNGDXDh8gZz0Syw58oA5sjJFTPkLpYItPSHtyrk5QJkkZONf2jJHJIOxP83CXQXxkPgjy2TEOls2j/unPfZKGlBbZlLYEfZoVDUknz76FEXNF27n3xRLzLVcU03HHTOKwU5nHZMxxh/u6l/ILdNQlr7ttH3YOL6lhz7TXmM41NGEdu2rHJT186Cn/wSXtOvWYa8mWGlT5G9lmltvheSWulcNA5fLf+frMTDrniI2o+Ug6bfbFz5KvVj6MkL+SHBZ+zK+UoxmM1ExK1Yc8U6k35jBac6lJ2kMZ9zJi74jErXtB5P6CFv2K5GfLgEVjuaBJrmiw5jE7TfPVO2cHGjRp87NOb09AkUeE/IJWCXkm6kpPhb7y9YJ9ocNSpeAEQzPQLCZYm4Es4f6cg3blwn27tpOEPQgGJGzJdVuUNrpgXvraHc7/93NLpE7CfUMXd/q+AAXvdw8knABV4P3K18VdSpbx8R5WQCXhIM66uXz//uAsDlPNsE21cSu9O4PaapYpwSjp5+5oPVKEKguEXHRz0cUXgqtP6dJYP9eqJhrXd4GHhRbq46r7KMR/xqvtw605LtYXfnrH9W+Gq14J7vBPNp6AOa48U1s++sIUVy3IUDqAbDz3zycuZNJQy+rd1DAXptV3JQBU95IlNcwFWg0iAqDVLwNTXFRQfU1hgbVljquW10Io6qNxLhyxrgWnMeNcYEKCkuq1b5wLfvWTBOdtG+bKLRng/fJqjou64pa+4UvzXHzMG/ZHYJCrBjkCgi0myV29nBnVzMV+JmChz0S9zf4K9XIxQ9Zf5uxYBWEgCMIwKFgsiIWN2EmCld77P55Yifwe4840eYKPhORudpbwVyrZnz1Xw5NX/RyQI5evGh/X50eHHLj8uH7/Tocd5Mzl74QDBHM6ZMflATI5MtcBOXJ5ZM4uiQvkVq7Tl8T0WizIyfPyWkQQELLpMggg+gjZdBl9EPaEbLoMe4i3QvZcxlsEeiGbLgM9Rhghmy5HGAxtQjZdDm0YU5VsuRxTMZhLeXFcDuaoIqQ8XJdVhC5fKnVZvoi6CXLism5iwUY5clmw/V8pVuKyUmyUqBW4KFFbtXHZLmvjXlFerouivLsaKM/laqC9DCnH5TLEWP8s78//dg3XP87C6/g4rfdw4bWVFd+rejsgAgCGYRDo3/U8dEkOdPDMoiYn447CNSnVT3ACi2P0AQqP3JSREZFVNSEZlc61sCCZRzZAKJ3AptGvgTkHYbeHskfwvm1X+Bw0nEvKecJRb0fX0cq9ltVmuv0++AAVKuDKe15yWAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "b041":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "c6bf":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("b041");
exports = module.exports = __webpack_require__("2350")(false);
// imports
exports.i(__webpack_require__("3d1f"), "");

// module
exports.push([module.i, "\n*[data-v-489a6da2]{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.line[data-v-489a6da2]{position:fixed;padding:15px 20px;top:30px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);text-align:left;font-size:14px;line-height:1.5;color:#333;background:#fff;-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.2);box-shadow:0 0 10px 0 rgba(0,0,0,.2);border-radius:5px;z-index:999999999\n}\n.line[data-v-489a6da2]:before{content:\"\";margin-right:10px;display:inline-block;vertical-align:middle;width:24px;height:24px;background:url(" + escape(__webpack_require__("34b0")) + ") no-repeat 50%;background-size:100% 100%\n}\n.line.info[data-v-489a6da2]:before{background:url(" + escape(__webpack_require__("d7ee")) + ") no-repeat 50%;background-size:100% 100%\n}\n.line.error[data-v-489a6da2]:before{background:url(" + escape(__webpack_require__("fcff")) + ") no-repeat 50%;background-size:100% 100%\n}\n.line.warning[data-v-489a6da2]:before{background:url(" + escape(__webpack_require__("3fbb")) + ") no-repeat 50%;background-size:100% 100%\n}\n.fade-enter-active[data-v-489a6da2],.fade-leave-active[data-v-489a6da2]{-webkit-transition:all .1s linear;transition:all .1s linear\n}\n.fade-enter[data-v-489a6da2],.fade-leave-to[data-v-489a6da2]{-webkit-transform:translate(-50%,-40px);transform:translate(-50%,-40px)\n}\n@media screen and (max-width:767.9px){\n.line[data-v-489a6da2]{width:20rem;padding:1.25rem;opacity:1;top:50%;left:50%;-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%);height:auto;line-height:1.66667rem;background:rgba(0,0,0,.8);-webkit-box-shadow:0 0 .83333rem 0 rgba(0,0,0,.2);box-shadow:0 0 .83333rem 0 rgba(0,0,0,.2);border-radius:.83333rem;font-family:PingFangSC-Regular;font-size:1.16667rem;color:#fff;letter-spacing:0;text-align:center\n}\n.line[data-v-489a6da2]:before{margin-right:auto;margin-left:auto;margin-bottom:.83333rem;display:block;width:2.5rem;height:2.5rem;background:url(" + escape(__webpack_require__("82cc")) + ") no-repeat 50%;background-size:100% 100%\n}\n.line.info[data-v-489a6da2]:before{background:url(" + escape(__webpack_require__("05a1")) + ") no-repeat 50%;background-size:100% 100%\n}\n.line.error[data-v-489a6da2]:before{background:url(" + escape(__webpack_require__("565e")) + ") no-repeat 50%;background-size:100% 100%\n}\n.line.warning[data-v-489a6da2]:before{background:url(" + escape(__webpack_require__("0fd0")) + ") no-repeat 50%;background-size:100% 100%\n}\n.root-mode[data-v-489a6da2]{width:4.8rem;padding:.3rem;line-height:.4rem;-webkit-box-shadow:0 0 .1rem 0 rgba(0,0,0,.2);box-shadow:0 0 .1rem 0 rgba(0,0,0,.2);border-radius:.2rem;font-size:.28rem\n}\n.root-mode[data-v-489a6da2]:before{margin-bottom:.2rem;width:.6rem;height:.6rem;background:url(" + escape(__webpack_require__("82cc")) + ") no-repeat 50%;background-size:100% 100%\n}\n.fade-enter[data-v-489a6da2],.fade-leave-to[data-v-489a6da2]{left:50%;top:50%;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)\n}\n}", ""]);

// exports


/***/ }),

/***/ "d7ee":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEUAAAAAkv8Akv8Akv8Akv8Akv8Akf8Akv8Akf8Ak/8Ak/8Alv8Amf8Al/8Aof8AmP8Akv8Akv8Akf8Akv8Akv8Akf8Ak/8Ak/8Ak/8AlP8Ak/8Akv8Akv8Akf++2H29AAAAHXRSTlMA9uvcr/PmjoB8WykZDAkQuGD548tmVU5AN0mfbt07tmQAAAF4SURBVEjHjJLbloMgDEVTBJFrvbTVdib//5tjQtdUAVfdDzwESE5OAgVx1n0jxlE0vZ4jfOE6yAtuuMjhCsdEo7BAmcMy9xartHeo4W+YaLRdXAhusbrBxM1DwTOlF8Zto86IVOQJGZZ7VV2AjNAp7t5m75GQvqpVImF3ejh/Bwd0XGOjyrcUeMAhD0rYfuqzP9v31x/R/O5+sFf//hd6WPVQqHrPI5IguVsQJHrIc7Rp5ob89N8+eHLX8K1KgmqSclGKNnGg+dK8jptmgngnkVzqBCa1GsliBydwNKwIM+0nnIJ2dwa9nhpOkZ72vFc5r2l6FUFLXnOdBXImxKkILqxeVHvGlWrXAsb1DOc+hDU4/lVaJzcAACEMA/vvmuf8glyApT2CQwbykVx6Ai7tWSfgWX3cBHycaExANIRvAsIn3gsQbwP0AAbIiA7AiJLAA5AAzSyAZohsx5vIqHIMEFU2GVfd10LpldVLsdduL/a+OvTlJK8/B9X1RBnYgt+JAAAAAElFTkSuQmCC"

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"453da6b0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/v-message/src/Vmessage.vue?vue&type=template&id=489a6da2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"line",class:_vm.classObject},[_vm._v(_vm._s(_vm.text))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/v-message/src/Vmessage.vue?vue&type=template&id=489a6da2&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/v-message/src/Vmessage.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var Vmessagevue_type_script_lang_js_ = ({
    name: 'VMessage',
    data() {
        return {
            rootMode: false // html 字号模式
        }
    },
    props: {
        type: {
            type: String,
            default: 'info',
            validator: val => ['info', 'success', 'warning', 'error'].includes(val)
        },
        mode: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classObject: function () {
            return {
                'root-mode': this.mode  === 'root',
                'success': this.type === 'success',
                'info': this.type === 'info',
                'warning': this.type === 'warning',
                'error': this.type === 'error'
            }
      }
      },
    created() {},
    mounted() {},
    methods: {}
});

// CONCATENATED MODULE: ./packages/v-message/src/Vmessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Vmessagevue_type_script_lang_js_ = (Vmessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/v-message/src/Vmessage.vue?vue&type=style&index=0&id=489a6da2&lang=scss&scoped=true&
var Vmessagevue_type_style_index_0_id_489a6da2_lang_scss_scoped_true_ = __webpack_require__("610d");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/v-message/src/Vmessage.vue






/* normalize component */

var component = normalizeComponent(
  src_Vmessagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "489a6da2",
  null
  
)

component.options.__file = "Vmessage.vue"
/* harmony default export */ var Vmessage = (component.exports);
// CONCATENATED MODULE: ./packages/v-message/index.js

const vueEasilyNotify = {
    duration: 5000,
    animateTime: 100,
    install(Vue) {
        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue
        }
        Vue.component('Message', Vmessage)

        function msg(type, data, callBack) {
            let msg, mode, duration = vueEasilyNotify.duration;
            msg = data['text'];
            mode = data['mode']  || '';
            let VueMessage = Vue.extend({
                render(h) {
                    let props = {
                        type,
                        mode,
                        text: msg,
                        show: this.show
                    };
                    return h('message', {props})
                },
                data() {
                    return {
                        show: false
                    }
                }
            });
            let newMessage = new VueMessage();
            let vm = newMessage.$mount();
            let el = vm.$el;
            document.body.appendChild(el);
            vm.show = true;
            let t1 = setTimeout(() => {
                clearTimeout(t1)
                vm.show = false ;
                let t2 = setTimeout(() => {
                    clearTimeout(t2)
                    document.body.removeChild(el) ;
                    newMessage.$destroy()
                    vm = null ;
                    callBack && (typeof callBack === 'function') && callBack()
                }, vueEasilyNotify.animateTime)
            }, duration)
        }

        Vue.prototype.$hnotify = {
            info(data, callBack) {
                if (!data['text']) return;
                msg('info', data, callBack)
            },
            success(data, callBack) {
                if (!data['text']) return;
                msg('success', data, callBack)
            },
            error(data, callBack) {
                if (!data['text']) return;
                msg('error', data, callBack)
            },
            warning(data, callBack) {
                if (!data['text']) return;
                msg('warning', data, callBack)
            }
        }
    }
}
/* harmony default export */ var v_message = (vueEasilyNotify);

// CONCATENATED MODULE: ./packages/index.js

/* harmony default export */ var packages_0 = (v_message);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fcff":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAaVBMVEUAAADgICDgICDiISHhICDhISHkIiLrLy/iICD/SUnhICDhISHgICDgISHoLi7jISHhICDjISHhISHgISHjJCTiISHjISHkISHqKirgISHhISHhJCTkKCjrKSnhICDhICDkJCThICDgICCRORfgAAAAInRSTlMA+b9n3rwlEEYD78zHjAtSqlrjfEA8Ni8XlZIrEwxv2RyfJgRinAAAAdlJREFUSMedlm23giAMx2eIJen1ObW0un7/D3kbkhOHdQ970TkhPzb+2wBwWCR6GaogUKHsRQT/sDYtJ8vKtP2CXA6Tww6XD0iUTzuW70UZp4GZklRFHY1jVBdVYoaCNHYxg4lMim493AlpYhw4cwtnJw3/1Mzuwtv2w0np8QyclukV1WnjRzPyCDt2lJqyfA16pSvtlat01ZEMqxGtwR0+2l2rQeum2g98Me0rXXKK+ZHxNyiWmK93lnOMlmvA1cCd56be0C3T2qk8zpzrEFVIlop9lMVm/Vz9vkNPUAvdC4gvdXB+/REWc17F0eDc1kgngaCFImZanEsjYGnNqoOFIoayI7ArASIc7VZFuFDE/FDN4/8IWZSBUYwhKQT0r98KHJSTgeo10oM0++SUi4FCy4ZZrsFFhQ4GavwASu/MSXFm1k0Bfh6BU24GRizaHej4mKjFGMTDI62N8jw8IwRniOJCMMkpp5nJF5ecJZdySllmyWVlRDnllCkjKljGMIoKllqDM0RZrcGaMCdmRbVWE7J2fxjGpoTV7nSwkDrSMESpp3Ww8COsOW1PzWfWsSPM47D0OJY9LgCvq8bnUvO5Pn0uap8ngc/jw+eZ4/Wg8n+6+T8SvZ6jf7vqZCZTTe72AAAAAElFTkSuQmCC"

/***/ })

/******/ });
});
//# sourceMappingURL=vueeasilynotify.umd.js.map