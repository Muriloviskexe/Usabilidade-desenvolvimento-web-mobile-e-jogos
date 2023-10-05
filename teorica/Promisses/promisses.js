// Criação de promessas ----------------------------------------

const minhaPromessa = new Promise((resolve, reject) => {
    
    const nome = 'Murilo'

    if(nome === 'Murilo'){
        resolve('Usuário Murilo foi encontrado')
    }else{
        reject('Usuário não foi encontrado')
    }
})

minhaPromessa.then((data) => {
    console.log(data)
})

// Encadeamento de then's ------------------------------------------------

const minhaPromessa2 = new Promise((resolve, reject) => {
    
    const nome = 'Murilo'

    if(nome === 'Murilo'){
        resolve('Usuário Murilo foi encontrado')
    }else{
        reject('Usuário não foi encontrado')
    }
})

minhaPromessa2.then((data) => {
    return data.toLowerCase()
}).then ((stringModificada) => {
    console.log(stringModificada)
})


//Retorno do catch -------------------------------------------
const minhaPromessa3 = new Promise((resolve, reject) => {
    
    const nome = 'João'

    if(nome === 'Murilo'){
        resolve('Usuário Murilo foi encontrado')
    }else{
        reject('Usuário não foi encontrado')
    }
})

minhaPromessa3.then((data) =>{
    console.logo(data)
}).catch((error) =>{ 
    console.log('Error: ' +error)
})


//Resolver varias promessas ---------------------------------------
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 Ok! Timeout')
    },2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 OK!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 OK!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) =>{
    console.log(data)
})

console.log('Depois do all()')


//Resolver varias promessas com race ------------------------------
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 Ok! Timeout')
    },2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 OK!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 OK!')
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) =>{
    console.log(data)
})



//Fetch request na API do Github
//Fetch API ----------------------------------------------------------------

const userName = 'Muriloviskexe'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        accept: 'application/vnd.github.v3+json',
    },
})
    .then((response) => {
        console.log(typeof response)
        console.log(response)
        return response.json()
})
    .then((data) => {
        console.log(`O nome do Usuario é: ${data.name}`)
        console.log(`O User Name do usuário é: ${data.login}`)
        console.log(`A conta foi criada em:  ${data.created_at}`)
})
    .catch((err) => {
        console.log('um erro foi encotrado: ' + err)
    })
