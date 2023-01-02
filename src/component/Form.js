import {useContext, useState} from 'react'
import {ReviewContext} from '../ReviewContext'


const Form = () => {
  const {searchkey, setSearchKey}= useContext(ReviewContext)
  const [watch, setWatch] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  setSearchKey(watch)
  setWatch('')
}

  return (
    <header>
      <h1>nFlix</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" required value={watch} onChange={(e)=> setWatch(e.target.value)} />
        <button>Submit</button>
      </form>
    </header>
  )
}

export default Form