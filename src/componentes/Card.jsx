import React from "react";
import "../styles/card.css";
import img1 from "../assets/Tarj1.jpg";
import img2 from "../assets/Tarj2.jpg";
import img3 from "../assets/Tarj3.jpg";
import img4 from "../assets/Tarj4.jpg";
import img5 from "../assets/Tarj5.jpg";
import img6 from "../assets/Tarj6.jpg";

const Card = () => {
  return (
    <div className="flexcontainer">
      <div className="col">
        <div className="card h-100">
          <img src={img1} className="card-img-top" alt="..." />
          <h2 className="card-text">ELLAS</h2>
          <h5 className="card-title"> 0 MES A 24 MESES</h5>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={img2} className="card-img-top" alt="..." />
          <div className="card-body">
          <h2 className="card-text">ELLOS</h2>
            <h5 className="card-title"> 0 MES A 24 MESES</h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={img3} className="card-img-top" alt="..." />
          <div className="card-body">
          <h2 className="card-text1">Accesorios y calzados</h2>
            <h5 className="card-title">0 MES a 2 AÑOS</h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={img4} className="card-img-top" alt="..." />
          <div className="card-body">
          <h2 className="card-text">ELLAS</h2>
            <h5 className="card-title">2 AÑOS A 12 AÑOS</h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={img5} className="card-img-top" alt="..." />
          <div className="card-body">
          <h2 className="card-text">ELLOS</h2>
            <h5 className="card-title">2 AÑOS A 12 AÑOS</h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={img6} className="card-img-top" alt="..." />
          <div className="card-body">
          <h2 className="card-text">AJUARES</h2>
            <h5 className="card-title">0 MES a 1 AÑOS</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;