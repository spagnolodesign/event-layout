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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/layouts */ "./styles/layouts.js");
/* harmony import */ var _styles_texts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/texts */ "./styles/texts.js");
var _jsxFileName = "/Users/lucaspagnolo/code/spagnolodesign/event-layout/components/Hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Styled-componets



const Hero = () => __jsx(_styles_layouts__WEBPACK_IMPORTED_MODULE_1__["FlexContainer"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_2__["TopTitle"], {
  uppercase: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Area Europa"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_2__["Title"], {
  uppercase: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Elektrotechnick\xE1", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), "v\xFDstava"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_2__["Text"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "La partecipazione all'evento \xE8 gratuita, ma \xE8 necessario effettuare l'iscrizione online.")), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("img", {
  src: "/assets/images/logo.png",
  alt: "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/InfoLines.js":
/*!*********************************!*\
  !*** ./components/InfoLines.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_texts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/texts */ "./styles/texts.js");
/* harmony import */ var _styles_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/overlay */ "./styles/overlay.js");
var _jsxFileName = "/Users/lucaspagnolo/code/spagnolodesign/event-layout/components/InfoLines.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Styled-componets



const InfoLines = () => __jsx(_styles_overlay__WEBPACK_IMPORTED_MODULE_2__["FlexEvent"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_styles_overlay__WEBPACK_IMPORTED_MODULE_2__["EventDetail"], {
  sticktoleft: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_1__["TopTitle"], {
  uppercase: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "When"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_1__["SmallTitle"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "28-29 JUN"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  nomargin: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Dalle 18.00 alle 21.00")), __jsx(_styles_overlay__WEBPACK_IMPORTED_MODULE_2__["EventDetail"], {
  withborder: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_1__["TopTitle"], {
  uppercase: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Where"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  nomargin: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Moscow, Russia", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), "887 Reinger Square", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), "PAV. 5 - Stand 2")), __jsx(_styles_overlay__WEBPACK_IMPORTED_MODULE_2__["EventDetail"], {
  uppercase: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_1__["TopTitle"], {
  uppercase: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Info"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  nomargin: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "P.   045 8270827"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  nomargin: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "M.  mario.rossi@finder.com")));

/* harmony default export */ __webpack_exports__["default"] = (InfoLines);

/***/ }),

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_texts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/texts */ "./styles/texts.js");
/* harmony import */ var _carousel_SwiperCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel/SwiperCarousel */ "./components/carousel/SwiperCarousel.js");
var _jsxFileName = "/Users/lucaspagnolo/code/spagnolodesign/event-layout/components/Products.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Styled-componets



const Products = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_1__["TopTitle"], {
  uppercase: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Prodotti in promo"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  soft: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Vieni a scoprire Yesly, Bliss e Lumos. Approfitta delle condizioni speciali a te riservate. "), __jsx(_carousel_SwiperCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./components/carousel/SwiperCard.js":
/*!*******************************************!*\
  !*** ./components/carousel/SwiperCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/swiper */ "./styles/swiper.js");
/* harmony import */ var _styles_texts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/texts */ "./styles/texts.js");
var _jsxFileName = "/Users/lucaspagnolo/code/spagnolodesign/event-layout/components/carousel/SwiperCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Styled-componets



const SwiperCard = props => __jsx(_styles_swiper__WEBPACK_IMPORTED_MODULE_1__["ProductCard"], {
  className: "swiper-slide",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_styles_swiper__WEBPACK_IMPORTED_MODULE_1__["ProductCardImage"], {
  src: props.image,
  alt: "product",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_2__["TopTitle"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.name));

/* harmony default export */ __webpack_exports__["default"] = (SwiperCard);

/***/ }),

/***/ "./components/carousel/SwiperCarousel.js":
/*!***********************************************!*\
  !*** ./components/carousel/SwiperCarousel.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ "./components/carousel/options.js");
/* harmony import */ var _styles_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/swiper */ "./styles/swiper.js");
/* harmony import */ var _SwiperCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SwiperCard */ "./components/carousel/SwiperCard.js");
var _jsxFileName = "/Users/lucaspagnolo/code/spagnolodesign/event-layout/components/carousel/SwiperCarousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Swiper module ES6



 // Styled-componets




function SwiperCarousel() {
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const swiperContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1___default.a(swiperContainer.current, _options__WEBPACK_IMPORTED_MODULE_3__["default"]);
  });
  return __jsx(_styles_swiper__WEBPACK_IMPORTED_MODULE_4__["SwiperContainer"], {
    className: "swiper-container",
    ref: swiperContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "swiper-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_SwiperCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Yesly",
    image: "/assets/images/product-1.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_SwiperCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Bliss",
    image: "/assets/images/product-2.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_SwiperCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Lumos",
    image: "/assets/images/product-3.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_SwiperCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Yesly",
    image: "/assets/images/product-1.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_SwiperCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Bliss",
    image: "/assets/images/product-2.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_SwiperCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Lumos",
    image: "/assets/images/product-3.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx(_styles_swiper__WEBPACK_IMPORTED_MODULE_4__["SwiperButtonContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_styles_swiper__WEBPACK_IMPORTED_MODULE_4__["SwiperButton"], {
    direction: "prev",
    className: "swiper-prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_styles_swiper__WEBPACK_IMPORTED_MODULE_4__["SwiperButton"], {
    direction: "next",
    className: "swiper-next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })));
}

;
/* harmony default export */ __webpack_exports__["default"] = (SwiperCarousel);

/***/ }),

/***/ "./components/carousel/options.js":
/*!****************************************!*\
  !*** ./components/carousel/options.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Swiper options 
// Please reference to the doc: https://swiperjs.com/api/#parameters
const options = {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "./node_modules/swiper/css/swiper.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/css/swiper.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/base.css */ "./styles/base.css");
/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_base_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Products */ "./components/Products.js");
/* harmony import */ var _components_InfoLines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InfoLines */ "./components/InfoLines.js");
/* harmony import */ var _styles_texts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/texts */ "./styles/texts.js");
/* harmony import */ var _styles_layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/layouts */ "./styles/layouts.js");
/* harmony import */ var _styles_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/buttons */ "./styles/buttons.js");
/* harmony import */ var _styles_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/overlay */ "./styles/overlay.js");
var _jsxFileName = "/Users/lucaspagnolo/code/spagnolodesign/event-layout/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Resest style
 // Functional Components



 // Styled-componets






const Index = () => __jsx(_styles_layouts__WEBPACK_IMPORTED_MODULE_6__["MainContainer"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(_styles_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(_styles_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayContainer"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(_styles_buttons__WEBPACK_IMPORTED_MODULE_7__["CloseButton"], {
  floatright: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx(_components_InfoLines__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx(_components_Products__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx(_styles_layouts__WEBPACK_IMPORTED_MODULE_6__["Section"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_5__["TopTitle"], {
  uppercase: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "TEMATICHE"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  soft: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Un evento dedicato a YESLY, il nuovo sistema di comfort living di Finder pensato per controllare le funzionalit\xE0 di ogni stanza in modo semplice ed intuitivo. Ecco il programma dell'evento:"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  bold: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "ore 18.00 - 18.15"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  soft: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "Benvenuto e registrazione dei partecipanti"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  bold: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "ore 18.15 - 19.15"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  soft: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Tutto quello che dovete sapere su YESLY: funzionalit\xE0 e novit\xE0 del sistema."), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  bold: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "ore 19.15"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  soft: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Termine dei lavori e spazio per le domande."), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  soft: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "A seguire street food offerto da Finder a tutti i partecipanti.")), __jsx(_styles_layouts__WEBPACK_IMPORTED_MODULE_6__["Section"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_5__["TopTitle"], {
  uppercase: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "INFORMAZIONI AGGIUNTIVE"), __jsx(_styles_texts__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  soft: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "La partecipazione all'evento \xE8 gratuita ma \xE8 necessario effettuare l'iscrizione online cliccando su \"ISCRIVITI ORA\" entro l'1/06/2019. La locandina dell'evento \xE8 disponibile nella sezione \"Materiale di approfondimento\".")), __jsx(_styles_layouts__WEBPACK_IMPORTED_MODULE_6__["Section"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx(_styles_buttons__WEBPACK_IMPORTED_MODULE_7__["Button"], {
  href: "",
  target: "_blank",
  rel: "noopener",
  primary: true,
  uppercase: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "Prenota un appuntamento"), __jsx(_styles_buttons__WEBPACK_IMPORTED_MODULE_7__["Button"], {
  href: "",
  uppercase: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "Visita il sito")))));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/base.css":
/*!*************************!*\
  !*** ./styles/base.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/buttons.js":
/*!***************************!*\
  !*** ./styles/buttons.js ***!
  \***************************/
/*! exports provided: Button, CloseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseButton", function() { return CloseButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "buttons__Button",
  componentId: "sc-187ntfn-0"
})(["font-family:'Oswald',sans-serif;display:block;padding:1em 1em;margin-right:1em;border:2px solid #019EE1;width:auto;text-transform:", ";background:", ";color:", ";text-decoration:none;text-align:center;border-bottom-right-radius:15px;border-top-left-radius:15px;letter-spacing:1.5px;margin-bottom:1em;transition:0.2s;@media (min-width:768px){display:inline-block;}&:hover{opacity:0.9;transform:translateY(-0.2em);}"], props => props.uppercase ? "uppercase" : "none", props => props.primary ? "#019EE1" : "white", props => props.primary ? "white" : "#019EE1");
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "buttons__CloseButton",
  componentId: "sc-187ntfn-1"
})(["display:inline-block;background-image:url('/assets/icons/close.png');background-position:center center;width:50px;height:50px;cursor:pointer;border-radius:50%;border:2px solid rgba(1,158,225,0.79);float:", ";margin-top:-30px;@media (min-width:768px){margin-top:-10px;}"], props => props.floatright ? "right" : "left");

/***/ }),

/***/ "./styles/layouts.js":
/*!***************************!*\
  !*** ./styles/layouts.js ***!
  \***************************/
/*! exports provided: MainContainer, Section, FlexContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return MainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexContainer", function() { return FlexContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "layouts__MainContainer",
  componentId: "sc-17n32yv-0"
})(["padding:0;margin:0;min-height:100vh;background-color:#019EE1;"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "layouts__Section",
  componentId: "sc-17n32yv-1"
})(["margin:3em 0;"]);
const FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "layouts__FlexContainer",
  componentId: "sc-17n32yv-2"
})(["display:flex;flex-direction:column;width:100%;align-items:center;@media (min-width:768px){flex-direction:row;justify-content:space-between;}"]);

/***/ }),

/***/ "./styles/overlay.js":
/*!***************************!*\
  !*** ./styles/overlay.js ***!
  \***************************/
/*! exports provided: Overlay, OverlayContainer, FlexEvent, EventDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexEvent", function() { return FlexEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetail", function() { return EventDetail; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "overlay__Overlay",
  componentId: "sc-1jgnrf9-0"
})(["padding:3em 1em;max-width:90vw;margin:0 auto;background-color:white;"]);
const OverlayContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "overlay__OverlayContainer",
  componentId: "sc-1jgnrf9-1"
})(["max-width:95%;margin:0 auto;@media (min-width:768px){max-width:80%;}"]);
const FlexEvent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "overlay__FlexEvent",
  componentId: "sc-1jgnrf9-2"
})(["display:flex;flex-direction:column;margin:2em 0;@media (min-width:768px){flex-direction:row;}"]);
const EventDetail = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "overlay__EventDetail",
  componentId: "sc-1jgnrf9-3"
})(["flex-grow:1;padding:1em 0em;border-top:1px solid #D0D8DB;@media (min-width:768px){max-width:33%;padding-left:", ";;border-left:", ";border-right:", ";}"], props => props.sticktoleft ? "0" : "1em", props => props.withborder ? "1px solid #D0D8DB" : "0", props => props.withborder ? "1px solid #D0D8DB" : "0");

/***/ }),

/***/ "./styles/swiper.js":
/*!**************************!*\
  !*** ./styles/swiper.js ***!
  \**************************/
/*! exports provided: ProductCard, SwiperContainer, ProductCardImage, SwiperButtonContainer, SwiperButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCard", function() { return ProductCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperContainer", function() { return SwiperContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardImage", function() { return ProductCardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperButtonContainer", function() { return SwiperButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperButton", function() { return SwiperButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ProductCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "swiper__ProductCard",
  componentId: "sc-1tbwvw7-0"
})(["text-align:center;font-size:1.1em;background:#FFF;display:flex;flex-direction:column;"]);
const SwiperContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "swiper__SwiperContainer",
  componentId: "sc-1tbwvw7-1"
})(["margin-top:3em;width:100%;height:250px;@media (min-width:768px){height:300px;}"]);
const ProductCardImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "swiper__ProductCardImage",
  componentId: "sc-1tbwvw7-2"
})(["width:auto;align-self:center;@media (min-width:768px){margin-bottom:2em;}"]);
const SwiperButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "swiper__SwiperButtonContainer",
  componentId: "sc-1tbwvw7-3"
})(["display:flex;justify-content:center;"]);
const SwiperButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "swiper__SwiperButton",
  componentId: "sc-1tbwvw7-4"
})(["position:absolute;bottom:-10px;width:1em;height:2.8em;margin-top:0;z-index:10;cursor:pointer;color:#019EE1;transition:0.3s;margin-left:", ";::after{content:'", "';font-family:swiper-icons;font-size:1.6em;text-transform:none !important;}&:hover{opacity:0.7;transform:", ";}"], props => props.direction === "prev" ? "-30px" : "30px", props => props.direction, props => props.direction === "prev" ? "translateX(-0.2em)" : "translateX(0.2em)");

/***/ }),

/***/ "./styles/texts.js":
/*!*************************!*\
  !*** ./styles/texts.js ***!
  \*************************/
/*! exports provided: Text, TopTitle, Title, SmallTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTitle", function() { return TopTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallTitle", function() { return SmallTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "texts__Text",
  componentId: "sc-19t63i6-0"
})(["text-decoration:none;font-weight:100;color:", ";line-height:1.5;margin:", ";font-weight:", ";"], props => props.soft ? "#999999" : "#333333", props => props.nomargin ? "0" : "", props => props.bold ? "bold" : "100");
const TopTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "texts__TopTitle",
  componentId: "sc-19t63i6-1"
})(["font-family:'Oswald',sans-serif;color:#019EE1;font-size:0.88em;font-weight:normal;margin-top:0;letter-spacing:0.5px;margin-bottom:0.3em;text-transform:", ";@media (min-width:768px){font-size:1.25em;}"], props => props.uppercase ? "uppercase" : "none");
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "texts__Title",
  componentId: "sc-19t63i6-2"
})(["font-family:'Oswald',sans-serif;color:#333333;text-transform:", ";font-weight:normal;margin:0;line-height:1.2;@media (min-width:768px){font-size:4em;}"], props => props.uppercase ? "uppercase" : "none");
const SmallTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Title).withConfig({
  displayName: "texts__SmallTitle",
  componentId: "sc-19t63i6-3"
})(["@media (min-width:768px){font-size:2em;}"]);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lucaspagnolo/code/spagnolodesign/event-layout/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map