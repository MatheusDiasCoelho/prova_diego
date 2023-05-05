const form = document.querySelector('form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const youtubeBtn = document.getElementById('youtube-btn');
const spotifyBtn = document.getElementById('spotify-btn');
const itunesBtn = document.getElementById('itunes-btn');
const amazonBtn = document.getElementById('amazon-btn');

let selectedTrack = null;

form.addEventListener('submit', (event) => {
	event.preventDefault();
	searchResults.style.display = 'none';
	const searchTerm = searchInput.value.trim();
	if (searchTerm === '') {
		alert('Por favor, digite o termo da pesquisa.');
		return;
	}
	searchMusic(searchTerm);
});

function searchMusic(searchTerm) {
	const apiKey = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST30Rvqgi_6GdFKKr8VHdfayL_E9EaJnifi3jNQnFk&s';
	const maxResults = 10;
	const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${searchTerm}&key=${apiKey}`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const results = data.items;
			if (results.length === 0) {
				alert('Nenhum resultado encontrado. Tente novamente com um termo diferente.');
			} else {
				displayResults(results);
			}
		})
		.catch(error => alert(`Ocorreu um erro: ${error}`));
}

function displayResults(results) {
	searchResults.innerHTML = '';
	results.forEach(result => {
		const li = document.createElement('li');
		li.classList.add('track');
		const title = document.createElement('h4');
		title.classList.add('title');
		title.textContent = result.snippet.title;
		const artist = document.createElement('p');
		artist.classList.add('artist');
		artist.textContent = result.snippet.channelTitle;
		const img = document.createElement('img');
		img.src = result.snippet.thumbnails.high.url;
		img.alt = result.snippet.title;
		const videoLink = document.createElement('a');
		videoLink.href = `https://www.youtube.com/watch?v=${result.id.videoId}`;
		videoLink.target = '_blank';
		videoLink.appendChild(img);
		li.appendChild(videoLink);
		li.appendChild(title);
		li.appendChild(artist);
		searchResults.appendChild(li);
	});
	searchResults.style.display = 'block';
}

searchResults.addEventListener('click', (event) => {
	event.preventDefault();
	const trackElement = event.target.closest('.track');
	if (trackElement) {
		selectedTrack = {
			title: trackElement.querySelector('.title').textContent,
			artist: trackElement.querySelector('.artist').textContent
		};
	}
});

youtubeBtn.addEventListener('click', () => {
	if (selectedTrack) {
		const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(selectedTrack.title + ' ' + selectedTrack.artist)}`;
		window.open(url, '_blank');
	}
});

spotifyBtn.addEventListener('click', () => {
	if (selectedTrack) {
		const url = `https://open.spotify.com/search/${encodeURIComponent(selectedTrack.title + ' ' + selectedTrack.artist)}`;
		window.open(url, '_blank');
	}
});

itunesBtn.addEventListener('click', () => {
	if (selectedTrack) {
		const url = `https://itunes.apple.com/search?media=music&entity=song&term=${encodeURIComponent(selectedTrack.title + ' ' + selectedTrack.artist)}`;
		window.open(url, '_blank');
	}
});

amazonBtn.addEventListener('click', () => {
	if (selectedTrack) {
		const url = `https://music.amazon.com/search/${encodeURIComponent(selectedTrack.title + ' ' +selectedTrack.artist)}`;
        window.open(url, '_blank');
        }
        });
