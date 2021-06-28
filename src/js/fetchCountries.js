export default function getNameCountry(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`
    ).then(response => {
        if (response.ok) { return response.json(); }
    });
}

