import "../styles/carousel.css";


const CarouselApp = (props) => {
  const { carouselImg, id } = props;
  return (
    <div id={id} className="carousel slide carouselApp">
      <div className="carousel-inner">
        {carouselImg.map((item, index) => (
          <div
            key={index}
            className={index === 0 ? "carousel-item active" : "carousel-item"}
          >
            <img src={item.src} className="d-block w-100" alt={item.alt} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselApp;