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


Amplitude.init({	continue_next: false,	"songs":[{"name": "1Chronicles 1", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles1.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 2", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles2.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 3", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles3.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 4", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles4.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 5", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles5.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 6", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles6.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 7", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles7.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 8", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles8.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 9", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles9.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 10", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles10.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 11", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles11.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 12", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles12.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 13", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles13.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 14", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles14.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 15", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles15.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 16", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles16.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 17", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles17.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 18", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles18.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 19", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles19.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 20", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles20.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 21", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles21.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 22", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles22.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 23", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles23.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 24", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles24.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 25", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles25.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 26", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles26.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 27", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles27.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 28", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles28.mp3", "cover_art_url": "../TamilIndex/13.png"}, {"name": "1Chronicles 29", "album": "1Chronicles", "url": "https://tamilbible.s3.amazonaws.com/1Chronicles29.mp3", "cover_art_url": "../TamilIndex/13.png"}]});