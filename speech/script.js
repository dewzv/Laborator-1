accuracy = document.getElementById('accuracy')
speech = document.getElementById('speech')
recognition = null

try {
	const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
	recognition = new SpeechRecognition();
}
catch (e) {
	accuracy.innerHTML = "Speech recognition not supported."
	throw e
}
recognition.lang = 'en-US'
recognition_running = false

window.addEventListener('mousedown', speechStart)
window.addEventListener('touchend', speechStart)
function speechStart() {
	if (recognition_running == true) return
	recognition.start()
	recognition_running = true
	accuracy.innerHTML = 'Speak!'
}

recognition.onend = speechEnd
recognition.onsoundend = speechEnd;
recognition.onspeechend = speechEnd;
function speechEnd() {
	recognition.stop()
	recognition_running = false
}

recognition.onresult = function (event) {
	speech.innerHTML = event.results[0][0].transcript
	accuracy.innerHTML = 'Accuracy: ' + (Math.round(event.results[0][0].confidence * 1000) / 10) + '%'
}