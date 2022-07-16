/* =====JSON.stringify()====data
fetch('https://jsonplaceholder.typicode.com/users/3')
.then(res => res.json())
.then(data => JSON.stringify(console.log(data)))*/


async function userProfile(){
    let response = await fetch('user.json')
    let user = await response.json()
    return user
}

userProfile().then(username =>{
    let username = user

    document.body.innerHTML = `
    <div>${username}</div>`

})