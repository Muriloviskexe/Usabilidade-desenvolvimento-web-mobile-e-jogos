async function carregarUser(){
    let response = await fetch('https://randomuser.me/api')
    console.log ('response', response)

    let users = await response.json()
    console.log ('users', users)

    let nome = document.getElementById('nome')
    console.log('nome', nome)

    let { title, first, last } = users.results[0].name;

    nome.innerHTML= `${title} ${first} ${last}`

    let fotinho = document.getElementById('fotinho');
    console.log('fotinho:', fotinho);

    fotinho.src = users.results[0].picture.large;
}

carregarUser()