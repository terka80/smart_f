import React from 'react'
import './footer.css'

export default function Footer() {
  return <>
    <div className="footer">
        <div className="card-group m-4">
            <div className="card">
                <div className="card-body text-center">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
            </div>
            <div className="card text-white">
                <div className="card-body text-center">
                    <h3>AROUND THE WEB</h3>
                    <div className="icons">
                        <i  class="fa-brands fa-facebook mx-3 icon "></i>
                        <i  class="fa-brands fa-twitter mx-3  icon"></i>
                        <i  class="fa-brands fa-linkedin mx-3  icon"></i>
                        <i  class="fa-solid fa-globe mx-3  icon"></i>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body text-center">
                    <h3>ABOUT FREELANCER</h3>
                    <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                </div>
            </div>
        </div>
    </div>
    <div className="p">
    <p className="text-center text-white pt-4 ">Copyright © Your Website 2024</p>
    </div>
  </>
}
