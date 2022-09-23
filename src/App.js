import { createContext, useState } from 'react'

import './App.css'
import Hero from './Hero'
import Navbar from './components/Navbar'

export const UserInfoContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className='App'>
      <header className='App-header'>
        <UserInfoContext.Provider value={{ user, setUser }}>
          <Navbar />
          <h1>Context Lesson hi</h1>
          <Hero />
        </UserInfoContext.Provider>
      </header>
    </div>
  )
}

export default App
