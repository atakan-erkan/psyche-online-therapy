import React from "react";
import "./Psychologists.css";
import { useSelector } from "react-redux";

const SingleP = ({ user }) => {
  const mode = useSelector((state) => state.mode);
  return (
    <div>
      <div className={`card single ${mode === "dark" && "bg-transparent"}`}>
        <img
          src={`http://localhost:3001/assets/${user.picturePath}`}
          className="card-img-top rounded-circle shadow-4-strong"
          alt="..."
        />
        <div className="card-body">
          <a
            href="/psychologists"
            className=""
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h5 className="card-title fw-bolder">
              {user.firstName} {user.lastName}
            </h5>
          </a>
          <p className="text-primary">{user.occupationOption}</p>
          <h6 className="card-text">
            {user.location} | {user.country}
          </h6>
          <h6 className="fw-bolder">Hakkında</h6>
          <p className="card-text">{user.about}</p>
          {/* <p className="card-text mb-4">Deneyim: {user.registered.age} yıl</p>
          <h6 className="fw-bolder">İletişim</h6>
          <i className="fa-sharp fa-solid fa-at"></i>
          <p className="card-text email">{user.email}</p>
          <p className="card-text mb-4">{user.phone}</p> */}
          <a href="/psychologists" className="btn btn-primary">
            DAHA FAZLA
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleP;
