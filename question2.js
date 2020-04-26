const gamesUrl = "https://api.rawg.io/api/games";
fetch(gamesUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        createGames(json);
    })
    .catch(function (error) {
        console.log(error);
    });
function createGames(json) {
    const results = json.results;
    const gamesContainer = document.querySelector(".results");
    let resultsHTML = " ";

    for (let i = 0; i < results.length; i++) {
        resultsHTML += `<div class="game">
                        <h2>${results[i].name}</h2>
                        <img src="${results[i].background_image}" alt="${results[i].name}" />
                        </div>`;

    }
    console.log(results)
    gamesContainer.innerHTML = resultsHTML;
}

