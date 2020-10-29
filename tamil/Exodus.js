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
Amplitude.init({	continue_next: false,	"songs":[{"name": "Exodus 1", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus1.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 2", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus2.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 3", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus3.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 4", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus4.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 5", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus5.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 6", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus6.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 7", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus7.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 8", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus8.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 9", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus9.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 10", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus10.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 11", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus11.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 12", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus12.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 13", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus13.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 14", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus14.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 15", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus15.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 16", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus16.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 17", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus17.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 18", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus18.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 19", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus19.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 20", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus20.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 21", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus21.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 22", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus22.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 23", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus23.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 24", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus24.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 25", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus25.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 26", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus26.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 27", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus27.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 28", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus28.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 29", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus29.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 30", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus30.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 31", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus31.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 32", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus32.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 33", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus33.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 34", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus34.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 35", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus35.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 36", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus36.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 37", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus37.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 38", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus38.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 39", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus39.mp3", "cover_art_url": "TamilIndex/2.png"}, {"name": "Exodus 40", "album": "Exodus", "url": "https://tamilbible.s3.amazonaws.com/Exodus40.mp3", "cover_art_url": "TamilIndex/2.png"}]});