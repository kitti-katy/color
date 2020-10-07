import Color from './Color'

const red = {hsl: {hue:0, sat:100, light:50}, rgb: {r:255,g:0, b:0}, HEXString: '#ff0000', hsv:{hue:0,sat:100, val:100}, cmyk:{c:0, m:1, y:1, k:0}, RGBString: 'rgb(255, 0, 0)', HSLString: 'hsl(0, 100, 50)', CMYKString: 'cmyk(0%, 100%, 100%, 0%)', HSVString: 'hsv(0, 100, 100)'}
const green = {hsl: {hue:120, sat:100, light:50}, rgb: {r:0,g:255, b:0}, HEXString: '#00ff00', hsv:{hue:120,sat:100, val:100}, cmyk:{c:1, m:0, y:1, k:0}, RGBString: 'rgb(0, 255, 0)', HSLString: 'hsl(120, 100, 50)', CMYKString: 'cmyk(100%, 0%, 100%, 0%)', HSVString: 'hsv(120, 100, 100)'}
const blue = {hsl: {hue:240, sat:100, light:50}, rgb: {r:0,g:0, b:255}, HEXString: '#0000ff', hsv:{hue:240,sat:100, val:100}, cmyk:{c:1, m:1, y:0, k:0}, RGBString: 'rgb(0, 0, 255)', HSLString: 'hsl(240, 100, 50)', CMYKString: 'cmyk(100%, 100%, 0%, 0%)', HSVString: 'hsv(240, 100, 100)'}
const white = {hsl: {hue:0, sat:0,light:100}, rgb: {r:255,g:255, b:255}, HEXString: '#ffffff', hsv:{hue:0,sat:0, val:100}, cmyk:{c:0, m:0, y:0, k:0}, RGBString: 'rgb(255, 255, 255)', HSLString: 'hsl(0, 0, 100)', CMYKString: 'cmyk(0%, 0%, 0%, 0%)', HSVString: 'hsv(0, 0, 100)'}
const black = {hsl: {hue:0, sat:0,light:0}, rgb: {r:0,g:0, b:0}, HEXString: '#000000', hsv:{hue:0,sat:0, val:0}, cmyk:{c:0, m:0, y:0, k:1}, RGBString: 'rgb(0, 0, 0)', HSLString: 'hsl(0, 0, 0)', CMYKString: 'cmyk(0%, 0%, 0%, 100%)', HSVString: 'hsv(0, 0, 0)'}
//const colorNaN = {hsl: {hue:NaN, sat:NaN,light:NaN}, rgb: {r:NaN,g:NaN, b:NaN}, hex: '#NaNNaNNaN', hsv:{hue:NaN,sat:NaN, val:NaN}, cmyk:{c:0, m:0, y:0, k:NaN}}


// test cases white, black, red, green, blue, NaN
const testColors = [red, green, blue, white, black]


// HSL set
test('Create color from HSL', () => {
    testColors.forEach(color => {
        let color_ = new Color(color.hsl, 'HSL')
        Object.keys(color).forEach(key => expect(color_[key]).toEqual(color[key]))
    }
    )
  });

test('Create color from RGB', () => {
    testColors.forEach(color => {
        let color_ = new Color(color.rgb, 'RGB')
        Object.keys(color).forEach(key => expect(color_[key]).toEqual(color[key]))
    }
    )
  });
test('Create color from HEX', () => {
    testColors.forEach(color => {
        let color_ = new Color(color.HEXString, 'HEX')
        Object.keys(color).forEach(key => expect(color_[key]).toEqual(color[key]))
    }
    )
  });
test('Create color from CMYK', () => {
    testColors.forEach(color => {
        let color_ = new Color(color.cmyk, 'CMYK')
        Object.keys(color).forEach(key => expect(color_[key]).toEqual(color[key]))
    }
    )
  });

test('Create color from HSV', () => {
    testColors.forEach(color => {
        let color_ = new Color(color.hsv, 'HSV')
        Object.keys(color).forEach(key => expect(color_[key]).toEqual(color[key]))
    }
    )
  });

