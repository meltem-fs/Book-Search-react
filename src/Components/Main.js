import axios from 'axios'
import React, { useState } from 'react'

const Main = () => {

    const [book, setBook] = useState("")

    const bookApi = async()=>{
        await axios
    }


  return (
    <div>
        <form action="">
            <h1>search a book name</h1>
            <input type="text" value={book} onChange={(e)=> setBook(e.target.value)} />
        </form>
    </div>
  )
}

export default Main