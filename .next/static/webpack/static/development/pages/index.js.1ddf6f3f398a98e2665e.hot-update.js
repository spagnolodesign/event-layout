webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/carousel/SwiperCarousel.js":
/*!***********************************************!*\
  !*** ./components/carousel/SwiperCarousel.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  var swiperContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](swiperContainer.current, _options__WEBPACK_IMPORTED_MODULE_3__["default"]);
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

/***/ })

})
//# sourceMappingURL=index.js.1ddf6f3f398a98e2665e.hot-update.js.map