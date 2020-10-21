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


Amplitude.init({	continue_next: false,	"songs":[{"name": "Luke 1", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke1.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 2", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke2.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 3", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke3.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 4", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke4.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 5", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke5.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 6", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke6.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 7", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke7.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 8", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke8.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 9", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke9.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 10", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke10.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 11", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke11.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 12", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke12.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 13", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke13.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 14", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke14.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 15", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke15.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 16", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke16.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 17", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke17.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 18", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke18.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 19", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke19.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 20", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke20.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 21", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke21.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 22", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke22.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 23", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke23.mp3", "cover_art_url": "../TamilIndex/42.png"}, {"name": "Luke 24", "album": "Luke", "url": "https://tamilbible.s3.amazonaws.com/Luke24.mp3", "cover_art_url": "../TamilIndex/42.png"}]});