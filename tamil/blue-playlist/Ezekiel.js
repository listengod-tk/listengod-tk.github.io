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


Amplitude.init({	continue_next: false,	"songs":[{"name": "Ezekiel 1", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel1.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 2", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel2.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 3", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel3.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 4", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel4.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 5", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel5.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 6", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel6.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 7", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel7.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 8", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel8.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 9", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel9.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 10", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel10.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 11", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel11.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 12", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel12.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 13", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel13.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 14", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel14.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 15", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel15.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 16", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel16.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 17", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel17.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 18", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel18.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 19", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel19.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 20", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel20.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 21", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel21.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 22", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel22.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 23", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel23.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 24", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel24.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 25", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel25.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 26", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel26.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 27", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel27.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 28", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel28.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 29", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel29.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 30", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel30.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 31", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel31.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 32", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel32.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 33", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel33.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 34", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel34.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 35", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel35.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 36", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel36.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 37", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel37.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 38", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel38.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 39", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel39.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 40", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel40.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 41", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel41.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 42", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel42.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 43", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel43.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 44", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel44.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 45", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel45.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 46", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel46.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 47", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel47.mp3", "cover_art_url": "../TamilIndex/26.png"}, {"name": "Ezekiel 48", "album": "Ezekiel", "url": "https://tamilbible.s3.amazonaws.com/Ezekiel48.mp3", "cover_art_url": "../TamilIndex/26.png"}]});