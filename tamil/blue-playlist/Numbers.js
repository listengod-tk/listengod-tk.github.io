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


Amplitude.init({	continue_next: false,	"songs":[{"name": "Numbers 1", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers1.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 2", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers2.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 3", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers3.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 4", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers4.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 5", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers5.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 6", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers6.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 7", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers7.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 8", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers8.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 9", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers9.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 10", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers10.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 11", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers11.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 12", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers12.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 13", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers13.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 14", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers14.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 15", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers15.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 16", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers16.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 17", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers17.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 18", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers18.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 19", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers19.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 20", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers20.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 21", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers21.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 22", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers22.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 23", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers23.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 24", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers24.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 25", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers25.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 26", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers26.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 27", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers27.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 28", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers28.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 29", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers29.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 30", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers30.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 31", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers31.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 32", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers32.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 33", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers33.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 34", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers34.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 35", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers35.mp3", "cover_art_url": "../TamilIndex/4.png"}, {"name": "Numbers 36", "album": "Numbers", "url": "https://tamilbible.s3.amazonaws.com/Numbers36.mp3", "cover_art_url": "../TamilIndex/4.png"}]});