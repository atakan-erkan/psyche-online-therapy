import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserImage = ({ image, size = "60px", userId }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <Box width={size} height={size}>
      <Typography
        onClick={() => navigate(`/profile/${user._id}`)}
        style={{ cursor: "pointer" }}
      >
        <img
          style={{ objectFit: "cover", borderRadius: "50%" }}
          width={size}
          height={size}
          alt="user"
          src={`http://localhost:3001/assets/${image}`}
        />
      </Typography>
    </Box>
  );
};

export default UserImage;
