
import Nav from './Nav'
import Card from './Card'
import './App.css'
import Hero from './Hero'
import Data from './Data'

// using .map to map over data from various arrays and display it without changing our code
function App() {
  const cards = Data.map(item => {
    return (
        <Card
            key={item.id}
            item={item}  
            // {...item} - can be used and delete all .item in the Card.jsx
        />
    )
  })
  return (
    <>
        <Nav/>
        <Hero/>
        <section className='cards-list'>
            {cards}
        </section>
              
    </>
  )
}

export default App
