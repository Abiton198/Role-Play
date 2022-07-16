
/* =======STRINGIFY DATA====
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => JSON.stringify(console.log(data)))
*/

/*===make a function to use a json file data====== */
async function getUsers(){
    let response = await fetch('users.json')
    let users = await response.json()
    return users
}

/**function that return all users to display on page */
function getUserDiv(users){
   return `
   <div class="my-online-user">
         <div class="user-username">${user.username}</div>
         <div class="user-online"></div>
    </div>`

}

getUsers().then(users =>{
    let sampleUser = users[0]
    let userDiv = getUserDiv(sampleUser)

    document.body.innerHTML = 
    `<div class="users">${userDiv}</div>` 
})