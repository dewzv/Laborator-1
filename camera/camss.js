var width = 500, height = 300

var video = document.createElement('video')
video.setAttribute("playsinline", '')
video.setAttribute("autoplay", '')
video.setAttribute("muted", '')

var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')

const user = 'user'
const constraints = {
	audio: false,
	video: {
		user
	}
}

navigator.mediaDevices.getUserMedia(constraints).then(stream => {
	video.srcObject = stream
	video.onloadedmetadata = () => {
		//width = video.videoWidth
		//height = video.videoHeight

		width = video.videoWidth
		height = video.videoHeight

		video.width = width
		video.height = height

		canvas.width = width
		canvas.height = height

		ctx.fillRect(0, 0, width, height);

		document.body.appendChild(video);
		document.body.append(canvas)

		var takessbtn = document.createElement('button')
		takessbtn.textContent = "Take snapshot"
		takessbtn.addEventListener('click', () => {
			ctx.drawImage(video, 0, 0, width, height)
		})
		document.body.append(takessbtn)
	}
})