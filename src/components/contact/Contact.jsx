import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className=" mb-4 contact">
        <div className="pt-3 container">
          <div className="text-center pt-4">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              contact section
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3 ">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3"></div>
            </div>
          </div>
        </div>
        <form className="w-50 p-3 mx-auto mt-5 ng-valid ng-submitted ng-dirty ng-touched">
            <div className="form-group">
                <input type="text" id="userName" placeholder="userName" className="form-control border-0 border-bottom py-3 position-relative" />
                <label htmlFor="userName" className="label d-none">userName : </label>
            </div>
            <div className="form-group">
                <input type="text" id="userAge" placeholder="userAge" className="form-control border-0 border-bottom py-3 position-relative" />
                <label htmlFor="userAge" className="label d-none">userAge : </label>
            </div>
            <div className="form-group">
                <input type="email" id="userEmail" placeholder="userEmail" className="form-control border-0 border-bottom py-3 position-relative" />
                <label htmlFor="userEmail" className="label d-none">userEmail : </label>
            </div>
            <div className="form-group">
                <input type="password" id="userPassword" placeholder="userPassword" className="form-control border-0 border-bottom py-3 position-relative" />
                <label htmlFor="userPassword" className="label">userPassword : </label>
            </div>
            <button className="btn text-white mt-4"> send Message </button>
        </form>
      </div>
    </>
  );
}
