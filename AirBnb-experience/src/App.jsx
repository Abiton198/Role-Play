
import Nav from './Nav'
import Card from './Card'
import './App.css'
import Hero from './Hero'

function App() {
  
  return (
    <>
        <Nav/>
        <Hero/>
        <Card
            img="Katie-img.jpg"
            rating="5.0"
            reviewCount={6}
            location="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
            
        />
    </>
  )
}

export default App
