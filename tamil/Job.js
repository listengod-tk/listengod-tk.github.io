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
Amplitude.init({	continue_next: false,	"songs":[{"name": "Job 1", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job1.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 2", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job2.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 3", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job3.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 4", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job4.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 5", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job5.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 6", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job6.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 7", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job7.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 8", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job8.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 9", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job9.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 10", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job10.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 11", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job11.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 12", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job12.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 13", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job13.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 14", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job14.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 15", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job15.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 16", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job16.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 17", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job17.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 18", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job18.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 19", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job19.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 20", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job20.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 21", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job21.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 22", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job22.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 23", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job23.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 24", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job24.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 25", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job25.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 26", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job26.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 27", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job27.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 28", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job28.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 29", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job29.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 30", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job30.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 31", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job31.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 32", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job32.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 33", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job33.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 34", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job34.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 35", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job35.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 36", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job36.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 37", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job37.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 38", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job38.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 39", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job39.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 40", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job40.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 41", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job41.mp3", "cover_art_url": "TamilIndex/18.png"}, {"name": "Job 42", "album": "Job", "url": "https://tamilbible.s3.amazonaws.com/Job42.mp3", "cover_art_url": "TamilIndex/18.png"}]});