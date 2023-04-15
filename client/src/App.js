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
import MainPage from "scenes/mainPage";
import Nav from "scenes/navbar/Nav";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isAuth ? <Navbar /> : <Nav />}
          <Routes>
            <Route path="/" element={<MainPage />} />
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
          </Routes>
          <Footer />
          <FooterInfo />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
