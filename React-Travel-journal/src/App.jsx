import Header from './Header'
import Card from './Card'
import './App.css'
import data from './data'

function App() {
const cards = data.map(item => {
  return (
          <Card
              key={item.id}
              item={item}
        />)
})
  return (
    <div className='main-content'>
        <Header/>
        {cards}
    </div>
  )
}

export default App
