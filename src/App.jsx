import React from "react";
import NavBarApp from "./componentes/NavBarApp";
import "bootstrap-icons/font/bootstrap-icons.css";
import CarouselApp from "./componentes/CarouselApp";
import Card from "./componentes/Card";
import Footer from "./componentes/Footer";
import WhatsButton from "./componentes/WhatsButton";

const App = () => {
  const carouselImg = [
    {
      src: "Arreglo2.png",
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
      <NavBarApp />
      <CarouselApp carouselImg={carouselImg} id={"carousel1"} />

      <div>
        <Card />
      </div>
      <div>
      <Footer/>

      </div>
      <WhatsButton/>

      
    </>
  );
};

export default App;