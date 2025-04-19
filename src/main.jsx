import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import CreateSuperhero from './components/CreateSuperhero.jsx'
import SuperheroList from './components/SuperheroList.jsx'
import SuperheroDetail from './components/SuperheroDetail.jsx'
import EditSuperhero from './components/EditSuperhero.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SuperheroList />} />
          <Route path="create" element={<CreateSuperhero />} />
          <Route path="superhero/:id" element={<SuperheroDetail />} />
          <Route path="superhero/:id/edit" element={<EditSuperhero />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
