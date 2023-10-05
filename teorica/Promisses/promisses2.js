const list = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        return data.map(function (user) {
            let itensLista = document.createElement('li')
            itensLista.innerHTML = `${user.name} (${user.username})`
            list.appendChild(itensLista)
        })
    })
    .catch((error) => {
        console.log('Oops! Encontramos um erro: ' + error)
    })