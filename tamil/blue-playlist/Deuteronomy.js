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


Amplitude.init({	continue_next: false,	"songs":[{"name": "Deuteronomy 1", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy1.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 2", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy2.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 3", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy3.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 4", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy4.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 5", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy5.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 6", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy6.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 7", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy7.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 8", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy8.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 9", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy9.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 10", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy10.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 11", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy11.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 12", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy12.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 13", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy13.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 14", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy14.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 15", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy15.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 16", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy16.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 17", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy17.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 18", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy18.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 19", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy19.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 20", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy20.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 21", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy21.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 22", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy22.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 23", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy23.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 24", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy24.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 25", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy25.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 26", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy26.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 27", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy27.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 28", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy28.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 29", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy29.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 30", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy30.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 31", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy31.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 32", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy32.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 33", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy33.mp3", "cover_art_url": "../TamilIndex/5.png"}, {"name": "Deuteronomy 34", "album": "Deuteronomy", "url": "https://tamilbible.s3.amazonaws.com/Deuteronomy34.mp3", "cover_art_url": "../TamilIndex/5.png"}]});