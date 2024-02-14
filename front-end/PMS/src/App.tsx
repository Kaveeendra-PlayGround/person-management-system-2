import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header className="App-header">
            <h1>Welcome to Randeera Edu</h1>
            <button className="users-button">Click Here</button>
        </header>
      </div>

    </>
  )
}

export default App
