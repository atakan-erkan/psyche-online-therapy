import { Box } from "@mui/material";
import "./Home.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../../assets/images/psyche.png";
import AsideImg from "../../assets/images/about-us.svg";
const HomePage = () => {
  const mode = useSelector((state) => state.mode);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <Box>
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
                  <button
                    onClick={() =>
                      navigate(isAuth ? `/profile/${user._id}` : "/login")
                    }
                    className="btn btn-primary"
                  >
                    Hemen Başla
                  </button>
                </div>
                <div className="col-lg-6">
                  <img src={HeaderLogo} className="w-100" alt="PSYCHE LOGO" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" className="my-3">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 mt-5">
                <h2 className="fw-bold fs-2 mb-4">
                  Neden Psyche Tercih Etmelisiniz?
                </h2>

                <ul className="fs-5 fs-sm-6 mb-5 fw-light mt-5">
                  <li className="fs-5 fs-sm-6 mb-5 fw-light mt-5">
                    <i
                      className="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    />
                    Tüm terapistlerimizin yetkinliğini garanti ediyoruz.
                  </li>

                  <li className="fs-5 fs-sm-6 mb-5 fw-light">
                    <i
                      className="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    />
                    Danışanlarımızın terapi yolculuklarını teknoloji ile
                    kişiselleştiriyoruz.
                  </li>

                  <li className="fs-5 fs-sm-6 mb-5 fw-light">
                    <i
                      className="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    />
                    Terapiyi herkes için her yerden ve her an erişilebilir hale
                    getiriyoruz.
                  </li>

                  <li className="fs-5 fs-sm-6 mb-5 fw-light">
                    <i
                      className="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    />
                    Danışanlarımızın mahremiyetini %100 güvence altına alıyoruz.
                  </li>

                  <li className="fs-5 fs-sm-6 mb-5 fw-light">
                    <i
                      className="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    />
                    Psyche sayesinde, konforlu ev ortamınızda, istediğiniz zaman
                    kullanabileceğiniz bir kaynak sunar. Böylece, randevu almak
                    için vakit ayırmak veya seyahat etmek zorunda kalmazsınız.
                  </li>

                  <li className="fs-5 fs-sm-6 mb-5 fw-light">
                    <i
                      className="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    />
                    Sitemizde kayıtlı olan psikologlar, alanlarında deneyimli ve
                    yetkin kişilerdir. Bu nedenle, size en iyi kalitede
                    psikolojik destek hizmeti sunabilirler.
                  </li>

                  <li className="fs-5 fs-sm-6 mb-5 fw-light">
                    <i
                      className="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    />
                    Sitemize kayıt olan diğer kullanıcılarla etkileşim kurarak,
                    desteğe ihtiyaç duyduğunuzda destekleyici bir topluluk
                    bulabilirsiniz. Bu sayede, yalnız olmadığınızı ve herkesin
                    karşılaştığı sorunlar olduğunu anlayabilirsiniz.
                  </li>

                  <li className="fs-5 fs-sm-6 mb-5 fw-light">
                    <i
                      className="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    />
                    Sitemizde, psikolojik sağlık ve refah hakkında çeşitli
                    kaynaklar ve makaleler de bulunur. Bu kaynaklar, size farklı
                    konularda bilgi edinmenize yardımcı olabilir ve sağlıklı bir
                    hayat sürmenize katkıda bulunabilir.
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-5 offset-md-1">
                <img src={AsideImg} className="w-100" alt="" />
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
                <div
                  className={`card border-0 ${
                    mode === "dark" && "bg-transparent"
                  }`}
                >
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
                <div
                  className={`card border-0 ${
                    mode === "dark" && "bg-transparent"
                  }`}
                >
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
                <div
                  className={`card border-0 ${
                    mode === "dark" && "bg-transparent"
                  }`}
                >
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

                <button
                  onClick={() =>
                    navigate(isAuth ? `/profile/${user._id}` : "/login")
                  }
                  className="btn btn-primary hero-btn"
                >
                  Hemen Başla
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Box>
  );
};

export default HomePage;
