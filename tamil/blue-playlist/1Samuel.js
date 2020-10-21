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


Amplitude.init({	continue_next: false,	"songs":[{"name": "1Samuel 1", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel1.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 2", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel2.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 3", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel3.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 4", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel4.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 5", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel5.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 6", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel6.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 7", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel7.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 8", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel8.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 9", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel9.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 10", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel10.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 11", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel11.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 12", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel12.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 13", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel13.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 14", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel14.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 15", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel15.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 16", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel16.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 17", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel17.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 18", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel18.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 19", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel19.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 20", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel20.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 21", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel21.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 22", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel22.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 23", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel23.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 24", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel24.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 25", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel25.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 26", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel26.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 27", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel27.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 28", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel28.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 29", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel29.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 30", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel30.mp3", "cover_art_url": "../TamilIndex/9.png"}, {"name": "1Samuel 31", "album": "1Samuel", "url": "https://tamilbible.s3.amazonaws.com/1Samuel31.mp3", "cover_art_url": "../TamilIndex/9.png"}]});