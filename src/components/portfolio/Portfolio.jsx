import React, { useState } from 'react'
import "./portfolio.css";
import port1 from"../../assets/port1.png"
import port2 from"../../assets/port2.png"
import port3 from"../../assets/port3.png"


export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const images = [
    "../../assets/port1.png",
    "../../assets/port2.png",
    "../../assets/port3.png",
    "../../assets/port1.png",
    "../../assets/port2.png",
    "../../assets/port3.png"
  ];

  const handleLayerClick = (src) => {
    setModalImg(src);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setModalImg("");
  };

  return <>
  <div className="mb-4 portfolio ">
    <div className="pt-4">
          <div className="text-center pt-4">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              portfolio  component
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3 ">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3"></div>
            </div>
          </div>
          <div className="container">
            <div className="row g-5">
              {images.map((src, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="rounded-3 overflow-hidden position-relative">
                    <img src={src} alt="portfolio" className='w-100 rounded-3' />
                    <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center" onClick={() => handleLayerClick(src)} style={{cursor: 'pointer'}}>
                      <i className='text-white fa-solid fa-plus fa-6x'></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
    {modalOpen && (
        <div className="model position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 justify-content-center align-items-center d-flex" onClick={handleClose} style={{zIndex: 9999}}>
          <img src={modalImg} alt="modal" style={{width:'600px'}} />
        </div>
      )}
  </div>
  </>
}
