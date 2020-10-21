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


Amplitude.init({	continue_next: false,	"songs":[{"name": "Hosea 1", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea1.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 2", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea2.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 3", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea3.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 4", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea4.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 5", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea5.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 6", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea6.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 7", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea7.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 8", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea8.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 9", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea9.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 10", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea10.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 11", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea11.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 12", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea12.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 13", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea13.mp3", "cover_art_url": "../TamilIndex/28.png"}, {"name": "Hosea 14", "album": "Hosea", "url": "https://tamilbible.s3.amazonaws.com/Hosea14.mp3", "cover_art_url": "../TamilIndex/28.png"}]});