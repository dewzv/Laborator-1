canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

var width = canvas.width
var height = canvas.height

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, width, height)

window.addEventListener('deviceorientation', orientationChange)

function orientationChange(event) {
	var angle = event.gamma

	ctx.fillStyle = 'white'
	ctx.fillRect(0, 0, width, height)
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, width, height * ((angle - 90) / 200.0 + 1))
}