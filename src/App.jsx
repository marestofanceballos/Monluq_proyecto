import React from 'react'
import NavBarApp from './componentes/NavBarApp'
import "bootstrap-icons/font/bootstrap-icons.css";
import CarouselApp from './componentes/CarouselApp';
import Card from './componentes/Card';



const App = () => {
  const carouselImg = [
    {
      src: "banner3.png",
      alt: "Imagen 1",
    },
   
  ];
  return (
    <>
       <NavBarApp/>
       <CarouselApp carouselImg={carouselImg} id={"carousel1"} />
       
      <div className="container"> 
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <Card/>
      </div>
    </div>
   
    </>
    
  )
}

export default App