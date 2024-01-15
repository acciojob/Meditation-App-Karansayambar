//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function(){
	const sound1 = document.getElementById("sound1");
	const sound2 = document.getElementById("sound2");
	const app = document.getElementById("app");
	sound1.addEventListener("click", function(){
		const music1 = document.getElementById("meditationAudio");
		const video1 = document.getElementById("meditationVideo");
		app.appendChild(video1);
	})
})