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


Amplitude.init({	continue_next: false,	"songs":[{"name": "2Samuel 1", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel1.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 2", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel2.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 3", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel3.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 4", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel4.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 5", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel5.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 6", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel6.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 7", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel7.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 8", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel8.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 9", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel9.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 10", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel10.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 11", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel11.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 12", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel12.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 13", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel13.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 14", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel14.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 15", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel15.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 16", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel16.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 17", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel17.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 18", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel18.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 19", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel19.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 20", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel20.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 21", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel21.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 22", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel22.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 23", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel23.mp3", "cover_art_url": "../TamilIndex/10.png"}, {"name": "2Samuel 24", "album": "2Samuel", "url": "https://tamilbible.s3.amazonaws.com/2Samuel24.mp3", "cover_art_url": "../TamilIndex/10.png"}]});