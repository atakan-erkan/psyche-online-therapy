import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <hr />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <a href="/">
                <img
                  width="150"
                  height="150"
                  loading="lazy"
                  src="img/psyche.png"
                  alt="Psyche Logo"
                />
              </a>
            </div>
            <div className="footer-company-description mt-4">
              100'den fazla uzman psikolog kadromuzla ihtiyacınız olan her
              konuda anında online terapi ve psikolojik danışmanlık!
            </div>
          </div>

          <div className="col-md-2 mb-4 mb-md-0 align-items-md-center footer-col-psyche">
            <div>
              <div className="footer-nav-title">Psyche</div>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="/#nasil-calisir">
                    Nasıl Çalışır?
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/psychologists">
                    Psikologlar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus">
                    Hakkımızda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/tests">
                    Testler
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/faq">
                    S.S.S.
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Bize Ulaşın
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2 mb-4 mb-md-0">
            <div className="footer-nav-title">Psikolojik Testler</div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="/tests">
                  Anksiyete (Kaygı) Testi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tests">
                  Depresyon Testi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tests">
                  Öfke Testi
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/tests">
                  Stres Testi
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/tests">
                  Travma Sonrası Stres Bozukluğu Testi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tests">
                  Alkol Bağımlılığı Testi
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-4 mb-md-0">
            <div className="footer-nav-title">Şartlar ve Gizlilik</div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Gizlilik Politikası
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Kullanıcı Sözleşmesi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Çerez Politikası
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Aydınlatma Metni
                </a>
              </li>
            </ul>
            <div className="mt-2">
              <img
                loading="lazy"
                src="img/qrcode_www.psychetherapy.online.png"
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
}

export default Footer;
