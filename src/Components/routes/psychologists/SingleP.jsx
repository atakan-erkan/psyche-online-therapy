import React from "react";

const SingleP = ({ user }) => {
  return (
    <div className=" container mt-5">
      <div className="row">
        <div className="col-sm-12 text-center">
          <img className="rounded" src={user.picture.large} alt="" />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleP;
