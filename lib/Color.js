"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Converter = require("color-format-converter/Converter");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Color = function Color(color, colorFormat) {
  var _this = this;

  _classCallCheck(this, Color);

  _defineProperty(this, "setAllFromHex", function (hex) {
    _this.HEXString = hex;
    _this.rgb = (0, _Converter.HEXtoRGB)(hex);
    _this.hsl = (0, _Converter.HEXtoHSL)(hex);
    _this.cmyk = (0, _Converter.HEXtoCMYK)(hex);
    _this.hsv = (0, _Converter.HEXtoHSV)(hex);

    _this.setColorStrings();
  });

  _defineProperty(this, "setAllFromRGB", function (rgb) {
    _this.rgb = rgb;
    _this.HEXString = (0, _Converter.RGBtoHEX)(rgb);
    _this.hsl = (0, _Converter.RGBtoHSL)(rgb);
    _this.cmyk = (0, _Converter.RGBtoCMYK)(rgb);
    _this.hsv = (0, _Converter.RGBtoHSV)(rgb);

    _this.setColorStrings();
  });

  _defineProperty(this, "setAllFromHSL", function (hsl) {
    _this.hsl = hsl;
    _this.rgb = (0, _Converter.HSLtoRGB)(hsl);
    _this.HEXString = (0, _Converter.HSLtoHEX)(hsl);
    _this.cmyk = (0, _Converter.HSLtoCMYK)(hsl);
    _this.hsv = (0, _Converter.HSLtoHSV)(hsl);

    _this.setColorStrings();
  });

  _defineProperty(this, "setAllFromCMYK", function (cmyk) {
    _this.cmyk = cmyk;
    _this.hsl = (0, _Converter.CMYKtoHSL)(cmyk);
    _this.rgb = (0, _Converter.CMYKtoRGB)(cmyk);
    _this.HEXString = (0, _Converter.CMYKtoHEX)(cmyk);
    _this.hsv = (0, _Converter.CMYKtoHSV)(cmyk);

    _this.setColorStrings();
  });

  _defineProperty(this, "setAllFromHSV", function (hsv) {
    _this.hsv = hsv;
    _this.hsl = (0, _Converter.HSVtoHSL)(hsv);
    _this.rgb = (0, _Converter.HSVtoRGB)(hsv);
    _this.HEXString = (0, _Converter.HSVtoHEX)(hsv);
    _this.cmyk = (0, _Converter.HSVtoCMYK)(hsv);

    _this.setColorStrings();
  });

  _defineProperty(this, "setColorStrings", function () {
    _this.setRGBString();

    _this.setHSLString();

    _this.setCMYKString();

    _this.setHSVString();
  });

  _defineProperty(this, "setRGBString", function () {
    _this.RGBString = "rgb(" + _this.rgb.r + ", " + _this.rgb.g + ", " + _this.rgb.b + ")";
  });

  _defineProperty(this, "setHSLString", function () {
    _this.HSLString = "hsl(" + _this.hsl.hue + ", " + _this.hsl.sat + ", " + _this.hsl.light + ")";
  });

  _defineProperty(this, "setCMYKString", function () {
    _this.CMYKString = "cmyk(" + _this.cmyk.c * 100 + '%, ' + _this.cmyk.m * 100 + '%, ' + _this.cmyk.y * 100 + '%, ' + _this.cmyk.k * 100 + '%)';
  });

  _defineProperty(this, "setHSVString", function () {
    _this.HSVString = "hsv(" + _this.hsv.hue + ", " + _this.hsv.sat + ", " + _this.hsv.val + ")";
  });

  switch (colorFormat) {
    case "RGB":
      this.setAllFromRGB(color);
      break;

    case "HSL":
      this.setAllFromHSL(color);
      break;

    case "HEX":
      this.setAllFromHex(color);
      break;

    case "CMYK":
      this.setAllFromCMYK(color);
      break;

    case "HSV":
      this.setAllFromHSV(color);
      break;
  }
};

var _default = Color;
exports["default"] = _default;