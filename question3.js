const gamesUrl = "https://api.rawg.io/api/games/4200";
fetch(gamesUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        createGameDetails(json);
    })
    .catch(function (error) {
        console.log(error);
    });


function createGameDetails(gamesArray) {
    const name = document.querySelector("h1")
    name.innerHTML = gamesArray.name;

    const image = document.querySelector(".image")
    image.style.backgroundImage = `url("${gamesArray.background_image}")`;

    const description = document.querySelector(".description")
    description.innerHTML = gamesArray.description;
}

