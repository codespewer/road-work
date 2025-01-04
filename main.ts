input.onButtonPressed(Button.A, function () {
	
})
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.rotate(100)
