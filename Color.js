import {
    HSLtoRGB,
    HSLtoHEX,
    HSLtoCMYK,
    HSLtoHSV,

    RGBtoHSL,
    RGBtoHEX,
    RGBtoCMYK,
    RGBtoHSV,

    HEXtoHSL,
    HEXtoRGB,
    HEXtoCMYK,
    HEXtoHSV,

    CMYKtoHSL,
    CMYKtoRGB,
    CMYKtoHEX,
    CMYKtoHSV,

    HSVtoHSL,
    HSVtoRGB,
    HSVtoHEX,
    HSVtoCMYK
  } from 'color-format-converter/Converter';


class Color {
    constructor(color, colorFormat) {
      switch (colorFormat) {
        case "RGB":
          this.setAllFromRGB(color)
          break
  
        case "HSL":
          this.setAllFromHSL(color)
          break
  
        case "HEX":
          this.setAllFromHex(color)
          break
        
        case "CMYK":
          this.setAllFromCMYK(color)
          break

        case "HSV":
          this.setAllFromHSV(color)
          break
      }
    }
  
   
    setAllFromHex = hex => {
        this.HEXString = hex  
        this.rgb = HEXtoRGB(hex)
        this.hsl = HEXtoHSL(hex)
        this.cmyk = HEXtoCMYK(hex)
        this.hsv = HEXtoHSV(hex)
        this.setColorStrings();
    }
    setAllFromRGB = (rgb) => {
        this.rgb = rgb
        this.HEXString = RGBtoHEX(rgb)
        this.hsl = RGBtoHSL(rgb)
        this.cmyk = RGBtoCMYK(rgb)
        this.hsv = RGBtoHSV(rgb)
        this.setColorStrings();
    }
    setAllFromHSL = (hsl) => {
        this.hsl = hsl      
        this.rgb = HSLtoRGB(hsl)
        this.HEXString = HSLtoHEX(hsl)
        this.cmyk = HSLtoCMYK(hsl)
        this.hsv = HSLtoHSV(hsl)
        this.setColorStrings();
    }

    setAllFromCMYK = (cmyk) => {
        this.cmyk = cmyk
        this.hsl = CMYKtoHSL(cmyk)      
        this.rgb = CMYKtoRGB(cmyk)
        this.HEXString = CMYKtoHEX(cmyk)
        this.hsv = CMYKtoHSV(cmyk)
        this.setColorStrings();
    }
    setAllFromHSV = (hsv) => {
        this.hsv = hsv
        this.hsl = HSVtoHSL(hsv)
        this.rgb = HSVtoRGB(hsv)
        this.HEXString = HSVtoHEX(hsv)
        this.cmyk = HSVtoCMYK(hsv)
        this.setColorStrings()
    }

  
    setColorStrings = () => {
      this.setRGBString()
      this.setHSLString()
      this.setCMYKString()
      this.setHSVString()
    };
    setRGBString = () => {
      this.RGBString = "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")";
    };
    setHSLString = () => {
      this.HSLString = "hsl(" + this.hsl.hue + ", " + this.hsl.sat + ", " + this.hsl.light + ")";
    };
    setCMYKString = () => {
      this.CMYKString = "cmyk(" + this.cmyk.c*100 + '%, ' + this.cmyk.m*100 + '%, ' + this.cmyk.y*100 + '%, ' + this.cmyk.k*100 + '%)'
    }
    setHSVString = () => {
      this.HSVString = "hsv(" + this.hsv.hue + ", " + this.hsv.sat + ", " + this.hsv.val + ")";
    }

}
  
  export default Color;
  