import React, { useState }  from 'react';
import Card from "./Card";
import axios from "axios";
import { Container} from "react-bootstrap";
import Paginate from './Paginate';


const Main=()=>{
    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);

    const [currentPage, setCurrentPage] = useState(1)
    const [booksPerPage] = useState(8)

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = data.slice(indexOfFirstBook, indexOfLastBook);
    const totalPages = Math.ceil(data.length / booksPerPage);
    
    const searchBook=(e)=>{
        let myArr = []
        if(e.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40')
            .then(res=>{setData(res.data.items);return res.data.items})
            .then(res=>{
                res.map(item=>{
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;            
                    if(thumbnail !== undefined && amount !== undefined){
                        myArr.push(item);
                    }        
                })
            })
            .then(res=>{setData(myArr);return myArr})
            .catch(err=>console.log(err))
        }
    }


    return(
        <>
            <div className="headers">
                <div className="row1">
                    <h1>Kitaplık kurmak, tapınak yapmak kadar kutsaldır.</h1>
                </div>
                <div className="row2">
                    <h2>Kitap Bul</h2>
                    <div className="searchs">
                        {/* <!-- input alanı düzenlenecek --> */}
                        <input type="text" placeholder="Kitap İsmi Giriniz..." value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook} />
                    </div>
                </div>
            </div>
            <div className="containers">
              {currentBooks && <Card item={currentBooks} />}
              
            </div>
            <Container className="d-flex justify-content-center" style={{marginTop:"3rem"}}>
                {data.length>0 && <Paginate  pages={totalPages} setCurrentPage= {setCurrentPage}/>}

            </Container>
            
        </>
    )
}
export default Main;