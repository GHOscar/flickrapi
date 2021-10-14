// http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0547710ddd0128ad25bfd4e90ec89e00&tags=wfloer

// Add HTML to JS
const lista = document.querySelector('#lista');
const form = document.querySelector('form');
const searchTerm = document.querySelector('#search'); // What we put in the box

var key = config.api_key;

// Call the API
form.addEventListener('submit', e => {
    e.preventDefault();
    // Clear innerHTML of list
    lista.innerHTML = ``;
    getData(searchTerm.value);
});

async function getData(query) {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&format=json&nojsoncallback=1&per_page=16&tags=${query}
`, {
    });

    // Data retrieved
    const data = await response.json();
    console.log(data);
    showPhotos(data.photos.photo);
};

const showPhotos = array => {
    array.forEach(photo => {
        console.log(photo);
        const item = document.createElement('li');
        item.innerHTML = `<img src="https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg">`;
        lista.appendChild(item);
    });
};