import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Modal = () => {
    const navigate = useNavigate()
    const {state} = useLocation()
    console.log(state)

  return (
    <div className="modals">
      <div className="modals2">
        <img src={state?.volumeInfo.imageLinks?.smallThumbnail} alt="empty" />
        <div className="title">
         <button onClick={()=> navigate(-1)} >X</button>
          <h2> {state?.volumeInfo?.title} </h2>
          <h3> {state?.volumeInfo?.authors?.[0]}</h3>
          <p>
            {state?.volumeInfo.publisher} {state?.volumeInfo.publishedDate}
          </p>
          <a href={state?.volumeInfo?.canonicalVolumeLink}>
            <button className="btn btn-primary">More</button>
          </a>
        </div>
      </div>
      <div className="sec">
        <p> {state?.volumeInfo?.description}</p>
      </div>
    </div>
  );
}

export default Modal