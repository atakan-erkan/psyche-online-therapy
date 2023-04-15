import React from "react";
import "./Footer.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Box } from "@mui/material";

function HelpModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Yardım</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol className="help-list">
          <li>
            <a href="tel:112">
              <div className="row" title="Acil Yardım Hattı">
                <div className="col-6 col-md-8">Acil Yardım Hattı</div>
                <div className="col-6 col-md-4 text-right float-right">112</div>
              </div>
            </a>
          </li>
          <li>
            <a href="tel:183" title="Aile İçi Şiddet Yardım Hattı">
              <div className="row">
                <div className="col-6 col-md-8">
                  Aile İçi Şiddet Yardım Hattı
                </div>
                <div className="col-6 col-md-4 text-right">183</div>
              </div>
            </a>
          </li>
          <li>
            <a href="tel:00908508885428" title="LGBT+ Danışma Hattı">
              <div className="row">
                <div className="col-6 col-md-6">LGBT+ Danışma Hattı</div>
                <div className="col-6 col-md-6 text-right">0850 888 5428</div>
              </div>
            </a>
          </li>
          <li>
            <a href="tel:191" title="Uyuşturucu İle Mücadele Hattı">
              <div className="row">
                <div className="col-6 col-md-8">
                  Uyuşturucu İle Mücadele Hattı
                </div>
                <div className="col-6 col-md-4 text-right">191</div>
              </div>
            </a>
          </li>
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Kapat</Button>
      </Modal.Footer>
    </Modal>
  );
}

function FooterInfo() {
  const [modalShow, setModalShow] = React.useState(false);
  if (window.location.pathname === "/login") {
    return null; // Sayfa yolu eşleşirse, Footer'ı render etmeyin
  }
  if (window.location.pathname === "/signin") {
    return null; // Sayfa yolu eşleşirse, Footer'ı render etmeyin
  }
  return (
    <Box>
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
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                Yardım
              </button>
              <HelpModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
            <div className="col-12 mt-2">
              <div className="footer-info-text">© Psyche</div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default FooterInfo;
