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


Amplitude.init({	continue_next: false,	"songs":[{"name": "Romans 1", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans1.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 2", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans2.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 3", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans3.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 4", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans4.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 5", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans5.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 6", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans6.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 7", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans7.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 8", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans8.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 9", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans9.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 10", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans10.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 11", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans11.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 12", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans12.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 13", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans13.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 14", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans14.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 15", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans15.mp3", "cover_art_url": "../TamilIndex/45.png"}, {"name": "Romans 16", "album": "Romans", "url": "https://tamilbible.s3.amazonaws.com/Romans16.mp3", "cover_art_url": "../TamilIndex/45.png"}]});