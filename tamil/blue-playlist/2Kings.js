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


Amplitude.init({	continue_next: false,	"songs":[{"name": "2Kings 1", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings1.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 2", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings2.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 3", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings3.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 4", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings4.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 5", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings5.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 6", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings6.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 7", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings7.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 8", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings8.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 9", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings9.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 10", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings10.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 11", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings11.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 12", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings12.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 13", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings13.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 14", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings14.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 15", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings15.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 16", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings16.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 17", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings17.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 18", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings18.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 19", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings19.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 20", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings20.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 21", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings21.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 22", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings22.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 23", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings23.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 24", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings24.mp3", "cover_art_url": "../TamilIndex/12.png"}, {"name": "2Kings 25", "album": "2Kings", "url": "https://tamilbible.s3.amazonaws.com/2Kings25.mp3", "cover_art_url": "../TamilIndex/12.png"}]});