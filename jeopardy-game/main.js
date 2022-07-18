
async function getCategories() {
    let response = await fetch('https://jservice.io/api/categories?count=4&offset=4')
    let data = await response.json()
    return data
}
getCategories().then(categories =>{
    console.log(categories)
})