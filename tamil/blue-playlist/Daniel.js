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


Amplitude.init({	continue_next: false,	"songs":[{"name": "Daniel 1", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel1.mp3", "cover_art_url": "../TamilIndex/27.png"}, {"name": "Daniel 2", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel2.mp3", "cover_art_url": "../TamilIndex/27.png"}, {"name": "Daniel 3", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel3.mp3", "cover_art_url": "../TamilIndex/27.png"}, {"name": "Daniel 4", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel4.mp3", "cover_art_url": "../TamilIndex/27.png"}, {"name": "Daniel 5", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel5.mp3", "cover_art_url": "../TamilIndex/27.png"}, {"name": "Daniel 6", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel6.mp3", "cover_art_url": "../TamilIndex/27.png"}, {"name": "Daniel 7", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel7.mp3", "cover_art_url": "../TamilIndex/27.png"}, {"name": "Daniel 8", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel8.mp3", "cover_art_url": "../TamilIndex/27.png"}, {"name": "Daniel 9", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel9.mp3", "cover_art_url": "../TamilIndex/27.png"}, {"name": "Daniel 10", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel10.mp3", "cover_art_url": "../TamilIndex/27.png"}, {"name": "Daniel 11", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel11.mp3", "cover_art_url": "../TamilIndex/27.png"}, {"name": "Daniel 12", "album": "Daniel", "url": "https://tamilbible.s3.amazonaws.com/Daniel12.mp3", "cover_art_url": "../TamilIndex/27.png"}]});