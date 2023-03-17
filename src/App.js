import "./App.css";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/routes/AboutUs";
import Psychologists from "./Components/routes/psychologists/Psychologists";
import Tests from "./Components/routes/Tests";
import FAQ from "./Components/routes/FAQ";
import LogIn from "./Components/routes/LogIn";
import SignIn from "./Components/routes/SignIn";
import Home from "./Components/routes/Home";
import Footer from "./Components/Footer/Footer";
import FooterInfo from "./Components/Footer/FooterInfo";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/psychologists" element={<Psychologists />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
      <Footer />
      <FooterInfo />
    </div>
  );
};

export default App;
