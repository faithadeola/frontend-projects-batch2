const JokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

function generateJoke(){

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com/',config)
    .then((resp) => resp.json())
    .then((data) => {
        JokeEl.innerHTML = data.joke
    } )
}


jokeBtn.addEventListener('click',()=>{
    generateJoke()
})

//Using async await 

// const jokeEl = document.document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn')



// async function generateJoke(){

//     const config = { headers:{
//         'Accept': 'application/json'
//     }
// }  

//   const resp = await fetch('https://icanhazdadjoke.com/',config)

//   const data = await resp.json()

//   jokeEl.innerHTML = data.joke

// }