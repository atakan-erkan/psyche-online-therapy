import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main id="page-wrapper">
      <section>
        <div>
          <div className="container h-100">
            <div
              id="banner-caption"
              className="row h-100 d-flex align-items-center"
            >
              <div className="col-lg-6 mb-5">
                <h1>
                  Daha iyi hissetmeye <br />
                  <span>bugün</span> başlayın
                </h1>
                <p>
                  Alanında uzman bir psikolog ile
                  <br /> görüşmek ister misiniz?
                </p>
                <a href="/" className="btn  btn-primary">
                  Hemen Başla
                </a>
              </div>
              <div className="col-lg-6">
                <img src="img/PSYCHE-2.png" className="w-100" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us" className="my-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mt-4">
              <h2 className="fw-bold fs-2 mb-4">
                Neden Psyche Tercih Etmelisiniz?
              </h2>
              <h3 className="fs-5 fs-sm-6 mb-5 fw-light mt-5">
                <li>Tüm terapistlerimizin yetkinliğini garanti ediyoruz.</li>
              </h3>
              <h3 className="fs-5 fs-sm-6 mb-5 fw-light">
                <li>
                  Danışanlarımızın terapi yolculuklarını teknoloji ile
                  kişiselleştiriyoruz.
                </li>
              </h3>
              <h3 className="fs-5 fs-sm-6 mb-5 fw-light">
                <li>
                  Terapiyi herkes için her yerden ve her an erişilebilir hale
                  getiriyoruz.
                </li>
              </h3>
              <h3 className="fs-5 fs-sm-6 mb-5 fw-light">
                <li>
                  Danışanlarımızın mahremiyetini %100 güvence altına alıyoruz.
                </li>
              </h3>
              <h3 className="fs-5 fs-sm-6 mb-5 fw-light">
                <li>Tüm terapistlerimizin yetkinliğini garanti ediyoruz.</li>
              </h3>
              <h3 className="fs-5 fs-sm-6 mb-5 fw-light">
                <li>
                  Danışanlarımızın terapi yolculuklarını teknoloji ile
                  kişiselleştiriyoruz.
                </li>
              </h3>
              <h3 className="fs-5 fs-sm-6 mb-5 fw-light">
                <li>
                  Terapiyi herkes için her yerden ve her an erişilebilir hale
                  getiriyoruz.
                </li>
              </h3>
              <h3 className="fs-5 fs-sm-6 mb-5 fw-light">
                <li>
                  Danışanlarımızın mahremiyetini %100 güvence altına alıyoruz.
                </li>
              </h3>
            </div>
            <div className="col-12 col-md-5 offset-md-1">
              <img src="img/why-us.jpg" className="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="nasil-calisir">
        <div className="container pb-5">
          <div className="row">
            <div className="col">
              <h2 className="fw-bolder fs-1 text-center">Nasıl Çalışır</h2>
              <h3 className=" text-center">
                3 Adımda Online Terapi Yolculuğunuza Başlayın
              </h3>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card border-0">
                <img
                  src="https://picsum.photos/id/1/1200/550"
                  className="card-img-top rounded-3"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title">Sizi tanıyalım</h4>
                  <p className="card-text">
                    Sizi daha iyi anlamamız için sorularımızı yanıtlayın.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0">
                <img
                  src="https://picsum.photos/id/996/1200/550"
                  className="card-img-top rounded-3"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title">
                    En doğru psikoloğu yönlendirelim
                  </h4>
                  <p className="card-text">
                    Size en uygun alanında yetkin Psyche psikologu ile anında
                    eşleşin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0">
                <img
                  src="https://picsum.photos/id/660/1200/550"
                  className="card-img-top rounded-3"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title">Ücretsiz tanıştıralım</h4>
                  <p className="card-text">
                    Psikoloğunuz ile ücretsiz bir şekilde tanışıp iletişim
                    halinde kalabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 mt-5 text-center">
            <div className="how-it-works-action-banner">
              <p className="fs-2 fw-bold">
                İyi hissetmeye başlamak bu kadar kolay!
              </p>

              <a href="/" className="btn btn-primary hero-btn">
                Hemen Başla
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
