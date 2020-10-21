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


Amplitude.init({	continue_next: false,	"songs":[{"name": "John 1", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John1.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 2", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John2.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 3", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John3.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 4", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John4.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 5", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John5.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 6", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John6.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 7", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John7.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 8", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John8.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 9", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John9.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 10", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John10.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 11", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John11.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 12", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John12.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 13", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John13.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 14", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John14.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 15", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John15.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 16", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John16.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 17", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John17.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 18", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John18.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 19", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John19.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 20", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John20.mp3", "cover_art_url": "../TamilIndex/43.png"}, {"name": "John 21", "album": "John", "url": "https://tamilbible.s3.amazonaws.com/John21.mp3", "cover_art_url": "../TamilIndex/43.png"}]});