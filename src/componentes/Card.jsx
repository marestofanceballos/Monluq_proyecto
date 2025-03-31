import React from 'react'
import "../styles/card.css";
import img1 from "../assets/Tarj1.jpg";
import img2 from "../assets/Tarj2.jpg";
import img3 from "../assets/Tarj3.jpg";

const Card = () => {
  return (
    <div>
  <div className="col">
    <div className="card h-100">
      <img src={img1} className="card-img-top" alt="..."/>
      <h2 className='card-text'>ELLAS</h2>
        <h5 className="card-title"> 0 MES A 24 MESES</h5>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  </div>
</div>
  )
}

export default Card