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
Amplitude.init({	continue_next: false,	"songs":[{"name": "Matthew 1", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew1.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 2", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew2.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 3", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew3.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 4", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew4.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 5", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew5.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 6", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew6.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 7", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew7.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 8", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew8.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 9", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew9.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 10", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew10.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 11", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew11.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 12", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew12.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 13", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew13.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 14", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew14.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 15", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew15.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 16", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew16.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 17", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew17.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 18", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew18.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 19", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew19.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 20", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew20.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 21", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew21.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 22", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew22.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 23", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew23.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 24", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew24.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 25", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew25.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 26", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew26.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 27", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew27.mp3", "cover_art_url": "TamilIndex/40.png"}, {"name": "Matthew 28", "album": "Matthew", "url": "https://tamilbible.s3.amazonaws.com/Matthew28.mp3", "cover_art_url": "TamilIndex/40.png"}]});