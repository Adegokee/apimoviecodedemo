import {useState} from 'react'
import ReviewMovie from './ReviewContext'
import ReviewList from './component/ReviewList'
import Form from './component/Form'
import './App.css'

const App = () => {
  const[theme, setTheme] = useState('dark');
  const toogleTheme = ( ) => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }


  return (
    <div className={theme}>
    <ReviewMovie >
      <button onClick={toogleTheme}>{theme === 'dark' ? 'light' : 'dark'}</button>
      <Form />
      <ReviewList />

      
    </ReviewMovie>
    </div>
  )
}

export default App
