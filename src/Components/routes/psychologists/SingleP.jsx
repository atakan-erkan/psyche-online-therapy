import React, { useEffect } from "react";

const SingleP = ({ user }) => {
  const handleClick = () => {
    <div>{user}</div>;
  };
  return (
    <div className=" container mt-5">
      <div className="row">
        <div className="col-sm-12 text-center">
          <img className="rounded" src={user.picture.large} alt="" />
          <h3>
            Dr. {user.name.first} {user.name.last}@{user.login.username}
          </h3>
          <h5>
            {user.location.city} | {user.location.country}
          </h5>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>Akademik Yıl ({user.registered.age})</p>
          <button onClick={() => handleClick()}>DAHA FAZLA TANI</button>
        </div>
      </div>
    </div>
  );
};

export default SingleP;
