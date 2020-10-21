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


Amplitude.init({	continue_next: false,	"songs":[{"name": "1Kings 1", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings1.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 2", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings2.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 3", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings3.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 4", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings4.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 5", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings5.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 6", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings6.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 7", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings7.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 8", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings8.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 9", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings9.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 10", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings10.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 11", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings11.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 12", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings12.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 13", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings13.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 14", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings14.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 15", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings15.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 16", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings16.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 17", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings17.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 18", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings18.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 19", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings19.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 20", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings20.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 21", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings21.mp3", "cover_art_url": "../TamilIndex/11.png"}, {"name": "1Kings 22", "album": "1Kings", "url": "https://tamilbible.s3.amazonaws.com/1Kings22.mp3", "cover_art_url": "../TamilIndex/11.png"}]});