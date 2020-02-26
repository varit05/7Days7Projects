const apiURL = 'https://api.lyrics.ovh';

const form = document.getElementById('form');
const result = document.getElementById('result');
const search = document.getElementById('search');
const more = document.getElementById('more');

const showData = data => {
  result.innerHTML = `
    <ul class="songs">
      ${data.data
        .map(
          song =>
            `
          <li>
            <span> ${song.artist.name} - ${song.title} </span>
            <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}"> Get Lyrics </button>
          </li>
          `,
        )
        .join('')}
    </ul>
  `;
};

const searchSongs = async term => {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();
  showData(data);
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = search.value.trim();
  if (!searchTerm) {
    alert('Please type song or artist name..');
  } else {
    searchSongs(searchTerm);
  }
});

const getLyrics = async (artist, songTitle) => {
  const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
  const data = await res.json();

  if (data.error) {
    result.innerHTML = data.error;
  } else {
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

    result.innerHTML = `
            <h2>${artist} - ${songTitle}</h2>
            <span>${lyrics}</span>
        `;
  }
};

result.addEventListener('click', event => {
  const selectedEl = event.target;

  if (selectedEl.tagName === 'BUTTON') {
    const artist = selectedEl.getAttribute('data-artist');
    const songTitle = selectedEl.getAttribute('data-songtitle');

    getLyrics(artist, songTitle);
  }
});
