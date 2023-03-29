import React from "react";
import "./Psychologists.css";

const SingleP = ({ user }) => {
  return (
    <div>
      <div className="card single">
        <img
          src={user.picture.large}
          className="card-img-top rounded-circle shadow-4-strong"
          alt="..."
        />
        <div className="card-body">
          <a
            href="/#"
            className=""
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5 className="card-title fw-bolder">
              {user.name.first} {user.name.last}
            </h5>
          </a>
          <p className="text-primary">Uzman Klinik Psikolog</p>
          <h6 className="card-text">
            {user.location.city} | {user.location.country}
          </h6>
          <h6 className="fw-bolder">Hakkında</h6>
          <p className="card-text card-text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, beatae.
          </p>
          <p className="card-text mb-4">Akademik Yıl ({user.registered.age})</p>
          <h6 className="fw-bolder">İletişim</h6>
          <i className="fa-sharp fa-solid fa-at"></i>
          <p className="card-text">{user.email}</p>
          <i className="fa-solid fa-phone"></i>
          <p className="card-text mb-4">{user.phone}</p>
          <a href="#/" className="btn btn-primary">
            DAHA FAZLA
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleP;
