import React from "react";
import "./Footer.css";

function FooterInfo() {
  return (
    <div className="footer-info">
      <div className="container py-4 px-2">
        <div class="row">
          <div class="col-md-8 justify-content-center align-self-center">
            <p class="footer-info-title">Uyarı</p>
            <p class="footer-info-text">
              Eğer kriz anında olduğunuzu ya da başka bir kişinin tehlikede
              olduğunu düşünüyorsanız, bu siteyi kullanmayınız. Hemen doğru
              yardımı almak için butona tıklayınız.
            </p>
          </div>
          <div class="col-md-4 text-center justify-content-center align-self-center">
            <button
              type="button"
              class="footer-info-button"
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
