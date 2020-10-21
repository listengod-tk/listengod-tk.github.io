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


Amplitude.init({	continue_next: false,	"songs":[{"name": "Judges 1", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges1.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 2", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges2.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 3", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges3.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 4", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges4.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 5", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges5.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 6", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges6.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 7", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges7.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 8", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges8.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 9", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges9.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 10", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges10.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 11", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges11.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 12", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges12.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 13", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges13.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 14", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges14.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 15", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges15.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 16", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges16.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 17", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges17.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 18", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges18.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 19", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges19.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 20", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges20.mp3", "cover_art_url": "../TamilIndex/7.png"}, {"name": "Judges 21", "album": "Judges", "url": "https://tamilbible.s3.amazonaws.com/Judges21.mp3", "cover_art_url": "../TamilIndex/7.png"}]});