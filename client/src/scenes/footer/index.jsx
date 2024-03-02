import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/psyche.png";
import FooterQR from "../../assets/images/qrcode_www.psychetherapy.online.png";
const Footer = () => {
  const users = useSelector((state) => state.users);
  const mode = useSelector((state) => state.mode);
  if (window.location.pathname === "/login") {
    return null; // Sayfa yolu eşleşirse, Footer'ı render etmeyin
  }
  if (window.location.pathname === "/signin") {
    return null; // Sayfa yolu eşleşirse, Footer'ı render etmeyin
  }
  return (
    <footer id="footer">
      <hr />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <Link to="/">
                <img
                  width="150"
                  height="150"
                  loading="lazy"
                  src={FooterLogo}
                  alt="Psyche Logo"
                />
              </Link>
            </div>
            <div className="footer-company-description mt-4">
              {users.length}'den fazla uzman psikolog kadromuzla ihtiyacınız
              olan her konuda anında online terapi ve psikolojik danışmanlık!
            </div>
          </div>

          <div className="col-md-2 mb-4 mb-md-0 align-items-md-center footer-col-psyche">
            <div
              style={mode === "dark" ? { color: "white" } : { color: "black" }}
            >
              <div className="footer-nav-title">Psyche</div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/#nasil-calisir">
                    Nasıl Çalışır?
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/psychologists">
                    Psikologlar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    Hakkımızda
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tests">
                    Testler
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/faq">
                    S.S.S.
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Bize Ulaşın
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2 mb-4 mb-md-0">
            <div className="footer-nav-title">Psikolojik Testler</div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/tests">
                  Anksiyete (Kaygı) Testi
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tests">
                  Depresyon Testi
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tests">
                  Öfke Testi
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/tests">
                  Stres Testi
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/tests">
                  Travma Sonrası Stres Bozukluğu Testi
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tests">
                  Alkol Bağımlılığı Testi
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-4 mb-md-0">
            <div className="footer-nav-title">Şartlar ve Gizlilik</div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Gizlilik Politikası
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Kullanıcı Sözleşmesi
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Çerez Politikası
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Aydınlatma Metni
                </Link>
              </li>
            </ul>
            <div className="mt-2">
              <img
                loading="lazy"
                src={FooterQR}
                width="70"
                height="81"
                alt="PSYCHE QR"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
