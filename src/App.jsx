import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>🦸‍♂️ Super Flash Gamers</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/create">Add Superhero</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
