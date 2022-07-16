/* =====JSON.stringify()====data
fetch('https://jsonplaceholder.typicode.com/users/3')
.then(res => res.json())
.then(data => JSON.stringify(console.log(data)))*/


async function userProfile(){
    let response = await fetch('user.json')
    let user = await response.json()
    return user
}

userProfile().then( user => {
    
    document.body.innerHTML = `
    <div class="user-profile-header">
        <div class="username"> @${user.username}</div>
        <div class="name">${user.name}</div>
    </div>
    
    <div class="profile-company">
        <div class="company-name">${user.company.name}</div>
        <div class="username">${user.company.catchPhrase}</div>
        <div class="username">${user.company.bs}</div>
    </div>
    
    <div class="contact-details">
    <div class="email">📧 ${user.email}</div>
    <div class="phone">📞 ${user.phone}</div>
    <div class="website">💻 ${user.website}</div>
    </div>
    
    <div class="address">
    ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode} </div>`

})