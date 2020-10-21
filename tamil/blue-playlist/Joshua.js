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


Amplitude.init({	continue_next: false,	"songs":[{"name": "Joshua 1", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua1.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 2", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua2.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 3", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua3.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 4", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua4.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 5", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua5.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 6", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua6.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 7", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua7.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 8", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua8.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 9", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua9.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 10", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua10.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 11", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua11.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 12", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua12.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 13", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua13.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 14", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua14.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 15", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua15.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 16", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua16.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 17", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua17.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 18", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua18.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 19", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua19.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 20", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua20.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 21", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua21.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 22", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua22.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 23", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua23.mp3", "cover_art_url": "../TamilIndex/6.png"}, {"name": "Joshua 24", "album": "Joshua", "url": "https://tamilbible.s3.amazonaws.com/Joshua24.mp3", "cover_art_url": "../TamilIndex/6.png"}]});