import React from "react";
import "./Psychologists.css";
import { useSelector } from "react-redux";

const SingleP = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <div className="card single">
        <img
          src={user.picturePath}
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
              {user.firstName} {user.lastName}
            </h5>
          </a>
          <p className="text-primary">{user.occupation}</p>
          <h6 className="card-text">
            {user.location} | {user.country}
          </h6>
          <h6 className="fw-bolder">Hakkında</h6>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, beatae.
          </p>
          <h6 className="fw-bolder">İletişim</h6>
          <i className="fa-sharp fa-solid fa-at"></i>
          <p className="card-text email">{user.email}</p> {/*bak*/}
          <a href="#/" className="btn btn-primary">
            DAHA FAZLA
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleP;
