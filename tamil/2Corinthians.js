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
Amplitude.init({	continue_next: false,	"songs":[{"name": "2Corinthians 1", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians1.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 2", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians2.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 3", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians3.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 4", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians4.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 5", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians5.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 6", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians6.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 7", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians7.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 8", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians8.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 9", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians9.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 10", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians10.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 11", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians11.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 12", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians12.mp3", "cover_art_url": "TamilIndex/47.png"}, {"name": "2Corinthians 13", "album": "2Corinthians", "url": "https://tamilbible.s3.amazonaws.com/2Corinthians13.mp3", "cover_art_url": "TamilIndex/47.png"}]});