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

Amplitude.init({	continue_next: false,	"songs":[{"name": "Ezra 1", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra1.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 2", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra2.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 3", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra3.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 4", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra4.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 5", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra5.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 6", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra6.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 7", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra7.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 8", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra8.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 9", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra9.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 10", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra10.mp3", "cover_art_url": "TamilIndex/15.png"}]});
Amplitude.init({	continue_next: false,	"songs":[{"name": "Genesis 1", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis1.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 2", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis2.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 3", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis3.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 4", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis4.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 5", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis5.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 6", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis6.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 7", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis7.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 8", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis8.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 9", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis9.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 10", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis10.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 11", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis11.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 12", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis12.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 13", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis13.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 14", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis14.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 15", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis15.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 16", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis16.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 17", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis17.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 18", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis18.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 19", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis19.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 20", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis20.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 21", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis21.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 22", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis22.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 23", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis23.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 24", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis24.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 25", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis25.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 26", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis26.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 27", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis27.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 28", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis28.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 29", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis29.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 30", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis30.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 31", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis31.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 32", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis32.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 33", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis33.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 34", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis34.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 35", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis35.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 36", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis36.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 37", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis37.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 38", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis38.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 39", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis39.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 40", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis40.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 41", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis41.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 42", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis42.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 43", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis43.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 44", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis44.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 45", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis45.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 46", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis46.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 47", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis47.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 48", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis48.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 49", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis49.mp3", "cover_art_url": "TamilIndex/1.png"}, {"name": "Genesis 50", "album": "Genesis", "url": "https://tamilbible.s3.amazonaws.com/Genesis50.mp3", "cover_art_url": "TamilIndex/1.png"}]});