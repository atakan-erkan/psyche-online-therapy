import React from "react";
import "./Footer.css";

function FooterInfo() {
  return (
    <div className="footer-info">
      <div className="container py-4 px-2">
        <div className="row">
          <div className="col-md-8 justify-content-center align-self-center">
            <p className="footer-info-title">Uyarı</p>
            <p className="footer-info-text">
              Eğer kriz anında olduğunuzu ya da başka bir kişinin tehlikede
              olduğunu düşünüyorsanız, bu siteyi kullanmayınız. Hemen doğru
              yardımı almak için butona tıklayınız.
            </p>
          </div>
          <div className="col-md-4 text-center justify-content-center align-self-center">
            <button
              type="button"
              className="footer-info-button"
              aria-label="Yardım"
              id="#helpButton"
              data-toggle="modal"
              data-target="#helpModal"
            >
              Yardım
            </button>
          </div>
          <div class="col-12 mt-2">
            <div className="footer-info-text">© Psyche</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo;
