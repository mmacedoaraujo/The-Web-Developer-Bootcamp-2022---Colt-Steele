const tvMazeApiUrl = 'https://api.tvmaze.com/search/shows?'
const showsList = document.querySelector('#showsList');
const searchForm = document.querySelector('#searchForm');
const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput')

const searchShow = async (showName) => {
    try {
        const response = await axios.get(tvMazeApiUrl, {
            params: {
                q: showName,
                page: 2
            }
        })
        return response;
    } catch (error) {
        console.log('Error', error)
    }
}

const displaySearchedShows = function (response) {
    for (const result of response.data) {
        const showPosterUrl = result.show.image.medium;
        const showName = result.show.name;

        const imgElement = document.createElement('img');
        imgElement.classList.add('posterImg')
        imgElement.src = showPosterUrl;

        const showLink = document.createElement('a');
        showLink.setAttribute('href', result.show.url)
        showLink.append(imgElement);

        const nameOfTheShowElement = document.createElement('p');
        nameOfTheShowElement.append(showName)

        const containerDiv = document.createElement('div');
        containerDiv.classList.add('containerDiv');
        containerDiv.append(showLink, nameOfTheShowElement);

        imgElement.addEventListener('mouseover', (event) => {
            nameOfTheShowElement.style.textAlign = 'center';
            nameOfTheShowElement.innerHTML = result.show.summary;
        })

        imgElement.addEventListener('mouseout', (event) => {
            nameOfTheShowElement.style.textAlign = 'center';
            nameOfTheShowElement.innerHTML = result.show.name;
        })

        showsList.append(containerDiv);
    }
}

searchForm.addEventListener('input', async function (e) {
    e.preventDefault();
    showsList.innerHTML = ''
    const response = await searchShow(searchInput.value);
    displaySearchedShows(response)
})

