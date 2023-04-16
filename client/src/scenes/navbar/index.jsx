import { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import "./Nav.css";
import UserImage from "components/UserImage";

const Navbar = ({ userId }) => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { picturePath } = useSelector((state) => state.user);
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  const fullName = `${user.firstName} ${user.lastName}`;

  //change nav soften when scrolling
  const [soften, setSoften] = useState(false);
  const [click, setClick] = useState(false);
  const changeSoften = () => {
    if (window.scrollY >= 90) {
      setSoften(true);
    } else {
      setSoften(false);
    }
  };
  const handleClick = () => setClick(!click);
  window.addEventListener("scroll", changeSoften);
  const [mobile, setMobile] = useState(false);
  const changeMobile = () => {
    if (window.screenX >= 700) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  window.addEventListener("resize", changeMobile);
  return (
    <FlexBetween
      padding="1rem 6%"
      backgroundColor={alt}
      className={soften ? "header header-bg" : "header"}
    >
      <FlexBetween gap="1.75rem">
        <Typography
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          {mobile ? (
            <img src="img/psychelogo.png" alt="" width={300} />
          ) : (
            <img src="img/psychelogo.png" alt="" width={235} />
          )}
        </Typography>
        <Typography fontWeight="bold" fontSize="clamp(1rem, 2rem, 2.25rem)">
          <div className="nav-navbar">
            <ul className="nav-menu">
              <li className="nav-navbar-item ">
                <a href="/#nasil-calisir">Nasıl Çalışır?</a>
              </li>
              <li className="nav-navbar-item ">
                <a href="/aboutus">Hakkımızda</a>
              </li>
              <li className="nav-navbar-item ">
                <a href="/psychologists">Psikologlarımız</a>
              </li>
              <li className="nav-navbar-item ">
                <a href="/tests">Testler</a>
              </li>
              <li className="nav-navbar-item ">
                <a href="/faq">S.S.S</a>
              </li>
            </ul>
          </div>
        </Typography>
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <UserImage image={picturePath} size="40px" />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: { backgroundColor: "#175c4c" },
                color: { color: "white" },
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: { backgroundColor: "#175c4c" },
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography onClick={() => navigate(`/profile/${userId}`)}>
                  {fullName}
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>
                Çıkış Yap
              </MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <FaBars size={30} style={{ color: "#175c4c" }} />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1.5rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <FaTimes size={30} style={{ color: "#175c4c" }} />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <div className="container header-bg2">
              <div className="nav-navbar2">
                <ul className="row nav-menu2">
                  <li className="col-12 col-md-12 nav-navbar-item2">
                    <a href="/#nasil-calisir">Nasıl Çalışır?</a>
                  </li>
                  <li className="col-12 col-md-12 nav-navbar-item2">
                    <a href="/aboutus">Hakkımızda</a>
                  </li>
                  <li className="col-12 col-md-12 nav-navbar-item2">
                    <a href="/psychologists">Psikologlarımız</a>
                  </li>
                  <li className="col-12 col-md-12 nav-navbar-item2">
                    <a href="/tests">Testler</a>
                  </li>
                  <li className="col-12 col-md-12 nav-navbar-item2">
                    <a href="/faq">S.S.S</a>
                  </li>
                </ul>
              </div>
            </div>
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Çıkış Yap
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
