import React from "react";
import photo from './mudit.jpg'

export default function About() {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="card" style={{ width: "25rem" }}>
        <img src={photo} className="card-img-top" alt="mypic" />
        <div className="card-body text-center">
          <h5 className="card-title">Mudit Virmani</h5>
          <p className="card-text">
            Hi, this is Mudit. Currently I am pursuing my B.Tech from IIT Dhanbad
          </p>
          <a href="http://www.muditvir.tech/" target="_blank" rel="noreferrer" className="btn btn-primary">
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
