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
Amplitude.init({	continue_next: false,	"songs":[{"name": "Isaiah 1", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah1.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 2", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah2.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 3", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah3.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 4", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah4.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 5", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah5.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 6", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah6.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 7", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah7.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 8", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah8.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 9", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah9.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 10", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah10.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 11", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah11.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 12", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah12.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 13", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah13.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 14", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah14.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 15", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah15.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 16", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah16.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 17", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah17.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 18", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah18.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 19", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah19.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 20", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah20.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 21", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah21.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 22", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah22.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 23", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah23.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 24", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah24.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 25", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah25.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 26", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah26.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 27", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah27.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 28", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah28.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 29", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah29.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 30", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah30.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 31", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah31.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 32", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah32.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 33", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah33.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 34", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah34.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 35", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah35.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 36", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah36.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 37", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah37.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 38", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah38.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 39", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah39.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 40", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah40.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 41", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah41.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 42", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah42.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 43", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah43.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 44", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah44.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 45", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah45.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 46", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah46.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 47", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah47.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 48", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah48.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 49", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah49.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 50", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah50.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 51", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah51.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 52", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah52.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 53", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah53.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 54", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah54.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 55", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah55.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 56", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah56.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 57", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah57.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 58", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah58.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 59", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah59.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 60", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah60.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 61", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah61.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 62", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah62.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 63", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah63.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 64", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah64.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 65", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah65.mp3", "cover_art_url": "TamilIndex/23.png"}, {"name": "Isaiah 66", "album": "Isaiah", "url": "https://tamilbible.s3.amazonaws.com/Isaiah66.mp3", "cover_art_url": "TamilIndex/23.png"}]});