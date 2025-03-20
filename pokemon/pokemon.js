document.getElementById("pokemon").addEventListener("submit", function(event) {
    event.preventDefault();

    const searchValue = document.getElementById("search").value.trim().toLowerCase();

    if (searchValue) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
            .then(function(requestFeito) {
                return requestFeito.json();
            })
            .then(function(responseJson) {
                console.log("Pokémon encontrado:", responseJson);
                alert(`Pokemon: ${responseJson.name}\nTipo: ${responseJson.types[0].type.name}\nPeso: ${responseJson.weight}`);
            })
            .catch(function(error) {
                console.log("Erro ao buscar Pokémon:", error);  
                alert("Pokémon não encontrado. Tente novamente.");
            });
    }
});