import axios from 'axios'
import React, { useState } from 'react'

const Main = () => {

    const [book, setBook] = useState("")
    const [booklist, setBooklist] = useState([])

    const url = `https://www.googleapis.com/books/v1/volumes?q=%27${book}%27&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=30`;
    const bookApi = async()=>{
        try {
           const {data} = await axios(url)
           console.log(data.items);
           setBooklist(data.items)

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) =>{
       e.preventDefault()
       bookApi()
       setBook("")
    }


  return (
    <div className='container' >
        <form action="" onSubmit={handleSubmit}>
            <h1>search a book name</h1>
            <input type="text" value={book} onChange={(e)=> setBook(e.target.value)} />
            <button type='submit'>search</button>
        </form>
        <div className="list">
            {booklist?.map((item,index) =>{
                return (
                item?.volumeInfo?.imageLinks ?
                  (<div className="card" key={index}>
                    <img
                      src={

                        item?.volumeInfo.imageLinks?.smallThumbnail
                      }
                      alt="empty"
                    />
                    <h4>
                      {item?.volumeInfo.imageLinks &&
                        item?.volumeInfo.imageLinks &&
                        item?.volumeInfo?.title}{" "}
                    </h4>
                  </div>) : ""
                );
            })}
        </div>
    </div>
  )
}

export default Main