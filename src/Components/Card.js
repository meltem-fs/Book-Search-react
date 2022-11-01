import React from 'react';
import { useState } from 'react';
import Modal from "./Modal";

const Card = ({ item }) => {
    const [show, setShow] = useState(false);
    const [book, setBook] = useState({});
    
    return (
            <>
            {
    item?.map((item) => {
            console.log(item);
            return (
                <div key={item.id}>
                <div className="cards" onClick={()=>{setShow(true);setBook(item)}}>
                    <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail} alt="" />
                    <div className="bottom">
                        <h3 className="title">{item.volumeInfo.title}</h3>
                        <p className="amount">&#8378;{item.saleInfo.listPrice && item.saleInfo.listPrice.amount}</p>
                    </div>
                </div>
                <Modal book={book} show={show} onClose={()=>setShow(false)}/>
                </div>
            )
    })
}
            </>
        )
    }
export default Card;
