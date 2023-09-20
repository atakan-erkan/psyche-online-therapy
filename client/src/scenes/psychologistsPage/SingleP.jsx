import React from "react";
import "./Psychologists.css";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const SingleP = ({ user, friendId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user);
  const mode = useSelector((state) => state.mode);
  const friends = useSelector((state) => state.user.friends);
  const isFriend = friends.find((friend) => friend._id === user._id);
  const patchFriend = async () => {
    const response = await fetch(
      `https://psyche-online-therapy.onrender.com/users/${_id}/${user._id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };
  return (
    <div>
      <div className={`card single ${mode === "dark" && "bg-transparent"}`}>
        <img
          src={`https://psyche-online-therapy.onrender.com/assets/${user.picturePath}`}
          className="card-img-top rounded-circle shadow-4-strong"
          alt="..."
        />
        <div className="card-body">
          <Box
            onClick={() => {
              navigate(`/profile/${user._id}`);
              navigate(0);
            }}
          >
            <p
              className=""
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            ></p>
            <h5 className="card-title fw-bolder">
              {user.firstName} {user.lastName}
            </h5>
          </Box>

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
          {isFriend ? (
            <button onClick={() => patchFriend()} className="btn btn-primary">
              TAKİBİ BIRAK
            </button>
          ) : (
            <button onClick={() => patchFriend()} className="btn btn-primary">
              TAKİP ET
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleP;
