import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import AboutUsPage from "scenes/aboutUsPage";
import PsychologistsPage from "scenes/psychologistsPage";
import TestsPage from "scenes/testsPage";
import FaqPage from "scenes/faqPage";
import ProfilePage from "scenes/profilePage";
import LoginPage from "scenes/loginPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "thema";
import Navbar from "scenes/navbar";
import Footer from "scenes/footer";
import FooterInfo from "scenes/footer/FooterInfo";
// import MainPage from "scenes/mainPage";
import Nav from "scenes/navbar/Nav";
import MainPage from "scenes/mainPage";
import IsDoctor from "scenes/isDoctor";
import PostPage from "scenes/postPage";
import Error404 from "scenes/error404/Error404";
import ScrollTop from "components/ScrollTop";
import IsTests from "scenes/isTests";
function App() {
  const mode = useSelector((state) => state.mode);
  const isDoctor = useSelector((state) => state.user?.occupationOption);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollTop />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isAuth ? <Navbar /> : <Nav />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route
              path="/psychologists"
              element={
                isAuth ? <PsychologistsPage /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/tests"
              element={isAuth ? <TestsPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/faq"
              element={isAuth ? <FaqPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/isdoctor"
              element={isAuth || isDoctor ? <IsDoctor /> : <Navigate to="/" />}
            />
            <Route
              path="/istests"
              element={isAuth || isDoctor ? <IsTests /> : <Navigate to="/" />}
            />
            <Route
              path="/main"
              element={
                isAuth && isDoctor === "Psikolog" ? (
                  <MainPage />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/posts"
              element={
                isDoctor === "Psikolog" ? (
                  <PostPage />
                ) : (
                  <Navigate to="/isdoctor" />
                )
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
          <FooterInfo />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
