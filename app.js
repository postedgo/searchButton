const searchButton = document.querySelector('#search-button')

// search for element of id of search button, any div that lives inside of that
const searchButtonContent = document.querySelector('#search-button div')

searchButton.addEventListener('click', toggleButton)

function toggleButton() {
    searchButtonContent.classList.toggle('loading')
}