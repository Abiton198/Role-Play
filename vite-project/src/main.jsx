import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from './Footer'
import Header from './Header'


function Page(){
  <>
     <App />
    <Header/>
    <Footer/>
  
  </>
}

ReactDOM.render(<Page/>, document.getElementById("root"))



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     <Header/>
//     <Footer/>
//   </React.StrictMode>
// )
