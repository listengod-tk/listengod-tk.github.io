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


Amplitude.init({	continue_next: false,	"songs":[{"name": "Leviticus 1", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus1.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 2", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus2.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 3", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus3.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 4", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus4.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 5", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus5.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 6", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus6.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 7", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus7.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 8", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus8.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 9", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus9.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 10", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus10.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 11", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus11.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 12", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus12.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 13", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus13.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 14", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus14.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 15", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus15.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 16", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus16.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 17", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus17.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 18", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus18.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 19", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus19.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 20", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus20.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 21", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus21.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 22", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus22.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 23", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus23.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 24", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus24.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 25", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus25.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 26", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus26.mp3", "cover_art_url": "../TamilIndex/3.png"}, {"name": "Leviticus 27", "album": "Leviticus", "url": "https://tamilbible.s3.amazonaws.com/Leviticus27.mp3", "cover_art_url": "../TamilIndex/3.png"}]});