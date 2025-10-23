import React from 'react'
import './home.css'
import home from"../../assets/home.svg"
export default function Home() {
  return <>
    <div className="d-flex flex-column  align-items-center justify-content-center text-center home text-white">
        <div className="text-center">
            <img src="src\assets\home.svg" alt="home" className='mb-3'/>
        </div>
        <div className="text-center pt-4">
            <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>start Framework</h2>
            <div className="d-flex align-items-center justify-content-center mb-3  text-white">
                <div className="line me-3"></div>
                <i className='fa-solid fa-star'></i>
                <div className="line ms-3"></div>
            </div>
            <div className="">Graphic Artist - Web Designer - Illustrator</div>
        </div>
    </div>


  </>
}
