/* =====JSON.stringify()====data
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => JSON.stringify(console.log(data)))*/


async function userProfile(){
    let response = await fetch('user.json')
    let user = await response.json()
    return user
}

userProfile().then( user => {
    
    document.body.innerHTML = `
<div class="card-one">
    <div class="user-profile-header">
        <div class="username"> @${user[2].username}</div>
        <div class="name">${user[2].name}</div>
    </div>
    
    <div class="profile-company">
        <div class="company-name">${user[2].company.name}</div>
        <div class="username">${user[2].company.catchPhrase}</div>
        <div class="username">${user[2].company.bs}</div>
    </div>
    
    <div class="contact-details">
    <div class="email">📧 ${user[2].email}</div>
    <div class="phone">📞 ${user[2].phone}</div>
    <div class="website">💻 ${user[2].website}</div>
    </div>
    
    <div class="address">
    ${user[2].address.street}, ${user[2].address.suite}, 
    ${user[2].address.city}, ${user[2].address.zipcode} 
    </div>
</div>

<div class="card-two">
    <div class="user-profile-header-two">
        <div class="username-two"> @${user[3].username}</div>
        <div class="name-two">👦🏽${user[3].name}</div>
    </div>
    
    <div class="profile-company-two">
        <div class="company-name-two">${user[3].company.name}</div>
        <div class="username-two">${user[3].company.catchPhrase}</div>
        <div class="username-two">${user[3].company.bs}</div>
    </div>
    
    <div class="contact-details-two">
    <div class="email-two">📧 ${user[3].email}</div>
    <div class="phone-two">📞 ${user[3].phone}</div>
    <div class="website-two">💻 ${user[3].website}</div>
    </div>
    
    <div class="address-two">
    ${user[3].address.street}, ${user[3].address.suite}, 
    ${user[3].address.city}, ${user[3].address.zipcode} 
    </div>
</div>

<div class="card-three">
    <div class="user-profile-header">
        <div class="username"> @${user[5].username}</div>
        <div class="name">${user[5].name}</div>
    </div>
    
    <div class="profile-company">
        <div class="company-name">${user[5].company.name}</div>
        <div class="username">${user[5].company.catchPhrase}</div>
        <div class="username">${user[5].company.bs}</div>
    </div>
    
    <div class="contact-details">
    <div class="email">📧 ${user[5].email}</div>
    <div class="phone">📞 ${user[5].phone}</div>
    <div class="website">💻 ${user[5].website}</div>
    </div>
    
    <div class="address">
    ${user[5].address.street}, ${user[5].address.suite}, 
    ${user[5].address.city}, ${user[5].address.zipcode} 
    </div>
</div>`

})