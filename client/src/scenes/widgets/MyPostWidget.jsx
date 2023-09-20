import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import { useNavigate } from "react-router-dom";
import Loader from "scenes/loaderPage/Loader";

const MyPostWidget = ({ picturePath, userId }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const userID = userId ? `${user.firstName}.${user.lastName}` : userId;
  const [isLoading, setIsLoading] = useState(false);

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(
      `https://psyche-online-therapy.onrender.com/posts`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      }
    );
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <WidgetWrapper>
          <FlexBetween gap="1.5rem">
            <UserImage image={picturePath} />
            <InputBase
              placeholder="Aklınızdan ne geçiyor..."
              onChange={(e) => setPost(e.target.value)}
              value={post}
              sx={{
                width: "100%",
                backgroundColor: palette.neutral.light,
                borderRadius: "2rem",
                padding: "1rem 2rem",
              }}
            />
          </FlexBetween>
          {isImage && (
            <Box
              border={`1px solid #175c4c`}
              borderRadius="5px"
              mt="1rem"
              p="1rem"
            >
              <Dropzone
                acceptedFiles=".jpg,.jpeg,.png"
                multiple={false}
                onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
              >
                {({ getRootProps, getInputProps }) => (
                  <FlexBetween>
                    <Box
                      {...getRootProps()}
                      border={`2px dashed ${palette.primary.main}`}
                      p="1rem"
                      width="100%"
                      sx={{ "&:hover": { cursor: "pointer" } }}
                    >
                      <input {...getInputProps()} />
                      {!image ? (
                        <p>Resminizi Ekleyin</p>
                      ) : (
                        <FlexBetween>
                          <Typography>{image.name}</Typography>
                          <EditOutlined />
                        </FlexBetween>
                      )}
                    </Box>
                    {image && (
                      <IconButton
                        onClick={() => setImage(null)}
                        sx={{ width: "15%" }}
                      >
                        <DeleteOutlined />
                      </IconButton>
                    )}
                  </FlexBetween>
                )}
              </Dropzone>
            </Box>
          )}

          <Divider sx={{ margin: "1.25rem 0" }} />

          <FlexBetween>
            <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
              <ImageOutlined sx={{ cursor: "pointer", color: "#175c4c" }} />
              <Typography
                color={"#175c4c"}
                sx={{ "&:hover": { cursor: "pointer", color: "#175c4c" } }}
              >
                Medya
              </Typography>
            </FlexBetween>

            {isNonMobileScreens ? (
              <>
                <FlexBetween gap="0.25rem">
                  <MicOutlined sx={{ color: "#175c4c", cursor: "pointer" }} />
                  <Typography sx={{ color: "#175c4c", cursor: "pointer" }}>
                    Ses
                  </Typography>
                </FlexBetween>
              </>
            ) : (
              <FlexBetween gap="0.25rem">
                <MoreHorizOutlined sx={{ color: "#175c4c" }} />
              </FlexBetween>
            )}

            <Button
              disabled={!post}
              onClick={handlePost}
              className="btn"
              style={{
                color: "#fff",
                backgroundColor: "#175c4c",
                opacity: "1",
                letterSpacing: "1px",
                fontFamily: "Sofia Pro",
                cursor: "pointer",
              }}
            >
              Paylaş
            </Button>
          </FlexBetween>
        </WidgetWrapper>
      )}
    </>
  );
};

export default MyPostWidget;
