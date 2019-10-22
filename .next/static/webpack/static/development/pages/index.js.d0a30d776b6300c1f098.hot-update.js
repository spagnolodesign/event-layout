webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "texts__Text",
  componentId: "sc-19t63i6-0"
})(["text-decoration:none;font-weight:100;color:", ";line-height:1.5;margin:", ";font-weight:", ";"], function (props) {
  return props.soft ? "#999999" : "#333333";
}, function (props) {
  return props.nomargin ? "0" : "";
}, function (props) {
  return props.bold ? "bold" : "100";
});
var TopTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "texts__TopTitle",
  componentId: "sc-19t63i6-1"
})(["font-family:'Oswald',sans-serif;color:#019EE1;font-size:0.88em;font-weight:normal;margin-top:0;letter-spacing:0.5px;margin-bottom:0.3em;text-transform:", ";@media (min-width:768px){font-size:1.25em;}"], function (props) {
  return props.uppercase ? "uppercase" : "none";
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "texts__Title",
  componentId: "sc-19t63i6-2"
})(["font-family:'Oswald',sans-serif;color:#333333;text-transform:", ";font-weight:normal;margin:0;line-height:1.2;@media (min-width:768px){font-size:4em;}"], function (props) {
  return props.uppercase ? "uppercase" : "none";
});
var SmallTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Title).withConfig({
  displayName: "texts__SmallTitle",
  componentId: "sc-19t63i6-3"
})(["@media (min-width:768px){font-size:2em;}"]);

/***/ })

})
//# sourceMappingURL=index.js.d0a30d776b6300c1f098.hot-update.js.map