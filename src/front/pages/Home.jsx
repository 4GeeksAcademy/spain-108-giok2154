import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import carrusel1 from "../assets/img/carrusel1.png";
import carrusel2 from "../assets/img/carrusel2.png";
import carrusel3 from "../assets/img/carrusel3.png";
import carrusel4 from "../assets/img/carrusel4.png";

const carouselImages = [carrusel1, carrusel2, carrusel3, carrusel4];;

const cardsData = [
  {
    id: 1,
    title: "trailer",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
  },
  {
    id: 2,
    title: "Video 2",
    videoUrl: "https://www.youtube.com/embed/IrUFd1DKeE8",
  },
  {
    id: 3,
    title: "Video 3",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
  },
  {
    id: 4,
    title: "Video 4",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    id: 5,
    title: "Video 5",
    videoUrl: "https://www.youtube.com/embed/C0DPdy98e4c",
  },
  {
    id: 6,
    title: "Video 6",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
  },
];


export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const loadMessage = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file");

      const response = await fetch(backendUrl + "/api/hello");
      const data = await response.json();

      if (response.ok) dispatch({ type: "set_hello", payload: data.message });

      return data;
    } catch (error) {
      if (error.message)
        throw new Error(
          `Could not fetch the message from the backend.
           Please check if the backend is running and the backend port is public.`
        );
    }
  };

  useEffect(() => {
    loadMessage();
  }, []);

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}>
      {/* Carrusel Bootstrap */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {carouselImages.map((url, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={url} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      {/* Grid de cards con videos embebidos */}
      <div className="container my-5">
        <div className="row">
          {cardsData.map(({ id, title, videoUrl }, index) => (
            <div key={id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div
                className="card h-100 text-white border border-white"
                style={{ backgroundColor: "transparent" }}
              >
                {/* Imagen superior */}
                <img
                  src={carouselImages[index % carouselImages.length]}
                  className="card-img-top"
                  alt={`Imagen de ${title}`}
                />
                {/* Video embebido */}
                <div className="ratio ratio-16x9">
                  <iframe
                    src={videoUrl}
                    title={title}
                    allowFullScreen
                    className="rounded-0"
                    style={{ border: "none" }}
                  ></iframe>
                </div>
                {/* Título */}
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>




      {/* Mensaje cargado del backend */}
      <div className="text-center mb-5">
        {store.message ? (
          <span>{store.message}</span>
        ) : (
          <span className="text-danger">
            Loading message from the backend (make sure your python 🐍 backend is running)...
          </span>
        )}
      </div>
    </div>
  );
};
