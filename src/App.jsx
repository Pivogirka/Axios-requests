import { Router } from './components/Router'
import { ThemeProvider } from './components/ThemeContext/ThemeContext'
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider>
        <Router/>
      </ThemeProvider>
    </>
    
  )
}

export default App
