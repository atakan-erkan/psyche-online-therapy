import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  SendOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  InputBase,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPost } from "state";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  occupationOption,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const [commentText, setCommentText] = useState("");
  const userName = `${
    user.occupationOption === "Psikolog" ? user.occupationOption : ""
  } ${user.firstName} ${user.lastName} |`;
  const replyUser = userName ? userName : "";
  const navigate = useNavigate();
  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };
  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    // Yorum gönderme işlemi burada gerçekleştirilecek

    // Örneğin, yorumu sunucuya göndermek için bir fetch isteği yapabilirsiniz
    try {
      const response = await fetch(
        `http://localhost:3001/posts/${postId}/comments`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: replyUser + commentText,
            userId: loggedInUserId,
          }),
        }
      );

      if (response.ok) {
        const updatedPost = await response.json();
        dispatch(setPost({ post: updatedPost }));
        setCommentText(""); // Yorum gönderildikten sonra metin alanını temizle
      } else {
        // Sunucudan hata yanıtı alındıysa, hata durumunu işleyebilirsiniz
        console.error("Yorum gönderilemedi.");
      }
    } catch (error) {
      console.error("Yorum gönderme hatası:", error);
    }
  };
  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={occupationOption === "Psikolog" ? occupationOption : null}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: "#175c4c" }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined onClick={() => navigate(`/profile/${postUserId}`)} />
        </IconButton>
      </FlexBetween>

      {isComments && (
        <Box mt="0.5rem">
          <form onSubmit={handleCommentSubmit}>
            <FlexBetween gap="1rem">
              <InputBase
                variant="outlined"
                placeholder="Yorum ekle..."
                value={replyUser + commentText}
                onChange={(event) =>
                  setCommentText(
                    event.target.value.replace(userName ? userName : "", "")
                  )
                }
                fullWidth
                margin="normal"
                sx={{
                  width: "100%",
                  backgroundColor: palette.neutral.light,
                  borderRadius: "2rem",
                  padding: "1rem 2rem",
                }}
              />
              <IconButton type="submit">
                <SendOutlined />
              </IconButton>
            </FlexBetween>
          </form>

          {comments.map((comment, i) => (
            <div key={i} style={{ marginTop: "10px" }}>
              <Typography color={main} sx={{ mt: "1rem" }}>
                {comments[i]}
              </Typography>
              <Divider sx={{ margin: "1.25rem 0" }} />
            </div>
          ))}
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
