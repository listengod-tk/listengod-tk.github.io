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


Amplitude.init({	continue_next: false,	"songs":[{"name": "1Corinthians 1", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians1.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 2", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians2.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 3", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians3.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 4", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians4.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 5", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians5.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 6", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians6.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 7", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians7.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 8", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians8.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 9", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians9.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 10", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians10.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 11", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians11.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 12", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians12.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 13", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians13.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 14", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians14.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 15", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians15.mp3", "cover_art_url": "../TamilIndex/46.png"}, {"name": "1Corinthians 16", "album": "1Corinthians", "url": "https://tamilbible.s3.amazonaws.com/1Corinthians16.mp3", "cover_art_url": "../TamilIndex/46.png"}]});