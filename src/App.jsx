import React from 'react'
import NavBarApp from './componentes/NavBarApp'
import "bootstrap-icons/font/bootstrap-icons.css";
import CarouselApp from './componentes/CarouselApp';
import Card from './componentes/Card';



const App = () => {
  const carouselImg = [
    {
      src: "1.jpg",
      alt: "Imagen 1",
    },
    {
      src: "2.jpg",
      alt: "Imagen 2",
    },
    {
      src: "3.jpg",
      alt: "Imagen 3",
    },
    {
      src: "4.jpg",
      alt: "Imagen 4",
    },
    {
      src: "5.jpg",
      alt: "Imagen 5",
    },
  ];
  return (
    <>
       <NavBarApp/>
       <CarouselApp carouselImg={carouselImg} id={"carousel1"} />
       <Card/>
      <div className="container">
      <div className="row">
        <div className="col">

        </div>
      </div>
    </div>
   
    </>
    
  )
}

export default App