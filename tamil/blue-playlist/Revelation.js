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


Amplitude.init({	continue_next: false,	"songs":[{"name": "Revelation 1", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation1.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 2", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation2.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 3", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation3.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 4", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation4.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 5", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation5.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 6", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation6.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 7", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation7.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 8", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation8.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 9", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation9.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 10", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation10.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 11", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation11.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 12", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation12.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 13", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation13.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 14", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation14.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 15", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation15.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 16", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation16.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 17", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation17.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 18", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation18.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 19", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation19.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 20", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation20.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 21", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation21.mp3", "cover_art_url": "../TamilIndex/66.png"}, {"name": "Revelation 22", "album": "Revelation", "url": "https://tamilbible.s3.amazonaws.com/Revelation22.mp3", "cover_art_url": "../TamilIndex/66.png"}]});