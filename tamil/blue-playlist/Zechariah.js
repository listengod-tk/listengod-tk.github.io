/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName('bandcamp-link');

for( var i = 0; i < bandcampLinks.length; i++ ){
	bandcampLinks[i].addEventListener('click', function(e){
		e.stopPropagation();
	});
}


let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}

		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.bandcamp-grey')[0].style.display = 'block';
		this.querySelectorAll('img.bandcamp-white')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
// Amplitude.init({
// 	continue_next: false,
// 	"songs": [
// 		{
// 			"name": "Chapter 1",
// 			"artist": "Lonetta",
// 			"album": "Assumptive Confidence",
// 			"url": "Chapter01.mp3",
// 			"cover_art_url": "AssumptiveConfidence.png"
// 		},
// 		{
// 			"name": "Chapter 2",
// 			"artist": "Lonetta",
// 			"album": "Assumptive Confidence",
// 			"url": "Chapter02.mp3",
// 			"cover_art_url": "AssumptiveConfidence.png"
// 		},
// 		{
// 			"name": "Chapter 3",
// 			"artist": "Lonetta",
// 			"album": "Assumptive Confidence",
// 			"url": "Chapter03.mp3",
// 			"cover_art_url": "AssumptiveConfidence.png"
// 		},
// 		{
// 			"name": "Chapter 4",
// 			"artist": "Lonetta",
// 			"album": "Assumptive Confidence",
// 			"url": "Chapter04.mp3",
// 			"cover_art_url": "AssumptiveConfidence.png"
// 		},
// 		{
// 			"name": "Chapter 5",
// 			"artist": "Lonetta",
// 			"album": "Assumptive Confidence",
// 			"url": "Chapter05.mp3",
// 			"cover_art_url": "AssumptiveConfidence.png"
// 		}
// 	]
// });


Amplitude.init({	continue_next: false,	"songs":[{"name": "Zechariah 1", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah1.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 2", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah2.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 3", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah3.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 4", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah4.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 5", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah5.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 6", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah6.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 7", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah7.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 8", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah8.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 9", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah9.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 10", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah10.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 11", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah11.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 12", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah12.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 13", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah13.mp3", "cover_art_url": "../TamilIndex/38.png"}, {"name": "Zechariah 14", "album": "Zechariah", "url": "https://tamilbible.s3.amazonaws.com/Zechariah14.mp3", "cover_art_url": "../TamilIndex/38.png"}]});