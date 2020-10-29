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
Amplitude.init({	continue_next: false,	"songs":[{"name": "Proverbs 1", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs1.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 2", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs2.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 3", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs3.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 4", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs4.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 5", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs5.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 6", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs6.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 7", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs7.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 8", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs8.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 9", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs9.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 10", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs10.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 11", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs11.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 12", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs12.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 13", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs13.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 14", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs14.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 15", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs15.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 16", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs16.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 17", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs17.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 18", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs18.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 19", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs19.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 20", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs20.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 21", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs21.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 22", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs22.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 23", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs23.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 24", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs24.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 25", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs25.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 26", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs26.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 27", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs27.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 28", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs28.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 29", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs29.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 30", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs30.mp3", "cover_art_url": "TamilIndex/20.png"}, {"name": "Proverbs 31", "album": "Proverbs", "url": "https://tamilbible.s3.amazonaws.com/Proverbs31.mp3", "cover_art_url": "TamilIndex/20.png"}]});