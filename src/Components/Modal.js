import React  from 'react';

const Modal=({show,book,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className="overlays">
                <div className="overlays-inner">
                    <button className="close" onClick={onClose}>X</button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{book.volumeInfo.title}</h1>
                            <h3>{book.volumeInfo.authors}</h3>
                            <h4>{book.volumeInfo.publisher}<span>{book.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={book.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{book.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;