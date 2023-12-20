function searchCountry() {
    var searchInput = document.getElementById('searchInput').value;

   
    fetch(`https://restcountries.com/v3.1/name/${searchInput}`)
        .then(response => response.json())
        .then(data => {
            displayCountryData(data[0]);
        })
        .catch(error => console.error('Error fetching country data:', error));
}

function displayCountryData(country) {
    var countryDataDiv = document.getElementById('countryData');
    countryDataDiv.innerHTML = '';

    var countryDetails = `
        <h2>${country.name.common}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <p>Flag: <img src="${country.flags.png}" alt="Flag"></p>
    `;

    countryDataDiv.innerHTML = countryDetails;
}
