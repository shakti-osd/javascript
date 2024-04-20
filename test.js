// fetch
const fetchUser = async (url) => {
    // fetch(url).then(res => {
    //     const data = res.json()
    //     if(data){
    //         data.then(val => {
    //             console.log(val)
    //         })
    //     }
    // })

    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

}

//fetchUser('https://jsonplaceholder.typicode.com/posts/1')

// localStorageObject
function localStorageSet(key, val){
    localStorage.setItem(key,JSON.stringify(val))
}

function localStorageGet(key){
    const val = localStorage.getItem(key)
    console.log(JSON.parse(val))
}


const userData = {
    name: 'Shakti',
    age: 36,
    address: {
        city: 'Gaya',
        state: 'Bihar',
        zip: 823002
    }
}

localStorageSet('user', userData)
localStorageGet('user')

localStorageSet('Date', new Date())
console.log(localStorageGet('Date'))
