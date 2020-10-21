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


Amplitude.init({	continue_next: false,	"songs":[{"name": "2Chronicles 1", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles1.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 2", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles2.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 3", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles3.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 4", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles4.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 5", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles5.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 6", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles6.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 7", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles7.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 8", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles8.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 9", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles9.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 10", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles10.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 11", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles11.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 12", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles12.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 13", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles13.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 14", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles14.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 15", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles15.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 16", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles16.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 17", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles17.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 18", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles18.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 19", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles19.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 20", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles20.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 21", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles21.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 22", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles22.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 23", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles23.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 24", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles24.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 25", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles25.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 26", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles26.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 27", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles27.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 28", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles28.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 29", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles29.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 30", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles30.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 31", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles31.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 32", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles32.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 33", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles33.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 34", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles34.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 35", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles35.mp3", "cover_art_url": "../TamilIndex/14.png"}, {"name": "2Chronicles 36", "album": "2Chronicles", "url": "https://tamilbible.s3.amazonaws.com/2Chronicles36.mp3", "cover_art_url": "../TamilIndex/14.png"}]});