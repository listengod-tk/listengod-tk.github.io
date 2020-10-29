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

Amplitude.init({	continue_next: false,	"songs":[{"name": "Ezra 1", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra1.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 2", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra2.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 3", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra3.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 4", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra4.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 5", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra5.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 6", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra6.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 7", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra7.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 8", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra8.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 9", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra9.mp3", "cover_art_url": "TamilIndex/15.png"}, {"name": "Ezra 10", "album": "Ezra", "url": "https://tamilbible.s3.amazonaws.com/Ezra10.mp3", "cover_art_url": "TamilIndex/15.png"}]});
Amplitude.init({	continue_next: false,	"songs":[{"name": "Acts 1", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts1.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 2", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts2.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 3", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts3.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 4", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts4.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 5", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts5.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 6", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts6.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 7", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts7.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 8", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts8.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 9", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts9.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 10", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts10.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 11", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts11.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 12", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts12.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 13", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts13.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 14", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts14.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 15", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts15.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 16", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts16.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 17", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts17.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 18", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts18.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 19", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts19.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 20", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts20.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 21", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts21.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 22", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts22.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 23", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts23.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 24", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts24.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 25", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts25.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 26", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts26.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 27", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts27.mp3", "cover_art_url": "TamilIndex/44.png"}, {"name": "Acts 28", "album": "Acts", "url": "https://tamilbible.s3.amazonaws.com/Acts28.mp3", "cover_art_url": "TamilIndex/44.png"}]});