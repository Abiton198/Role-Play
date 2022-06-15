
/*making a function to render - DRY */
let postsArray = []
const titleInput = document.getElementById("blog-title") //input - title
const bodyInput = document.getElementById("blog-title") // input - body
const form = document.getElementById("blog-post") // form - title & body

function renderPosts(){
            let html = ""
        for (let post of postsArray){ //function to display what has been returned as data
            html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr/ >
            `
    }
        document.getElementById("blog").innerHTML = html //fetching div and displaying html
}

/*fetch() is an API function to connect client and server*/
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(response => response.json())  //then() sends request of data from server to client in form of json
.then(data => {
    postsArray = data.slice(0, 5) //slice() selects items to display from an array[] - last number excluded
    renderPosts()
})

//e.preventDefault() - to prevent refreshing data (e- for event)
form.addEventListener('submit', function(e){
 postTitle = titleInput.value 
 postBody = bodyInput.value 
    const data = {
        title: postTitle,
        body: postBody
    }
    e.preventDefault()

    /*posting data to server */

    const options = {
        method: 'POST',             //method used to send data to the server
        body: JSON.stringify(data), //for dom to be able to read the data
        headers: {
            'Content-Type':'application/json' 
        }
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)

.then(res => res.json())
.then(post => {
                postsArray.unshift(post) // putting your posts/inputs into the postArray[]
                renderPosts() // render the html as defined in the function
            })
           // titleInput.value = "" //making the input fields clear after posting
            //bodyInput.value = ""              ""
            form.reset()            //          ""
})