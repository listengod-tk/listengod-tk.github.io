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
Amplitude.init({	continue_next: false,	"songs":[{"name": "Jeremiah 1", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah1.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 2", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah2.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 3", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah3.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 4", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah4.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 5", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah5.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 6", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah6.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 7", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah7.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 8", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah8.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 9", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah9.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 10", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah10.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 11", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah11.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 12", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah12.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 13", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah13.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 14", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah14.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 15", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah15.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 16", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah16.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 17", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah17.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 18", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah18.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 19", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah19.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 20", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah20.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 21", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah21.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 22", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah22.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 23", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah23.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 24", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah24.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 25", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah25.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 26", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah26.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 27", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah27.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 28", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah28.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 29", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah29.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 30", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah30.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 31", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah31.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 32", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah32.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 33", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah33.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 34", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah34.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 35", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah35.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 36", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah36.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 37", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah37.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 38", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah38.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 39", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah39.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 40", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah40.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 41", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah41.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 42", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah42.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 43", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah43.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 44", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah44.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 45", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah45.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 46", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah46.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 47", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah47.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 48", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah48.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 49", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah49.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 50", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah50.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 51", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah51.mp3", "cover_art_url": "TamilIndex/24.png"}, {"name": "Jeremiah 52", "album": "Jeremiah", "url": "https://tamilbible.s3.amazonaws.com/Jeremiah52.mp3", "cover_art_url": "TamilIndex/24.png"}]});