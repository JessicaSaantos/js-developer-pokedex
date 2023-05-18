const modal = document.getElementById('modal');

document.getElementById('pokemonList').addEventListener('click' , function (event){
    if (event.target.closest('li')){
        let firstName = event.target.closest('li').querySelector('.name').textContent;

        // Busca pelo nome
        const conteudoName = todosPokemons.find((pokemon) => pokemon.name === firstName);

        // Verifica se encontrou o Pokemon e acessa suas informações
        if (conteudoName) {
            modal.innerHTML = convertPokemonModal(conteudoName);
        }
        else {
            console.log("Pokémon não encontrado.");
        }

        modal.style.display = 'block';

        document.getElementById('fecharModal').addEventListener('click' , function (){
            modal.style.display = 'none';
        })
    }
});

document.addEventListener('click', function(event){
    if (event.target === modal){
        modal.style.display = 'none';
    }
});

function mostrarDiv(divId) {
    // Oculta todas as divs de conteúdo 
    let divs = document.getElementsByClassName('contentModal');
    for (let i = 0; i < divs.length; i++){
        divs[i].style.display = 'none';
    }
    // Exibe a div de conteúdo clicada
    document.getElementById(divId).style.display = 'block';

    // Adiciona a classe de borda à div clicada e remove das outras duas
    let aboutDiv = document.getElementById('aboutDiv');
    let baseStatsDiv = document.getElementById('baseStatsDiv');
    let movesDiv = document.getElementById('movesDiv');

    aboutDiv.classList.remove('border');
    baseStatsDiv.classList.remove('border');
    movesDiv.classList.remove('border');
    document.getElementById(divId + 'Div').classList.add('border');
 }
    