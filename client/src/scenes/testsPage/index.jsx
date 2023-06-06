import React from "react";
import "./Tests.css";
import { Link } from "react-router-dom";

const TestsPage = () => {
  return (
    <main id="tests">
      <section className="my-3 my-lg-4 mx-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mt-5 text-center">
              <div>
                <h1 className="fs-2 fw-bold">Psikoloji Testleri</h1>
                <p className="fw-light opacity-75">
                  Ücretsiz ve kolayca çözebileceğiniz psikolojik testler ile
                  kendinizi test edin ve psikolojik sıkıntılarınızın düzeyi
                  hakkında bilgi edinin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 mx-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-12 col-sm-4 mt-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center border border-secondary rounded p-3 test-list-box">
                    <div class="d-flex ml-4 ml-3 flex-column test-list-description">
                      <h2 class="" id="heading0">
                        Anksiyete (Kaygı) Testi
                      </h2>
                      <div class="test-list-summary">
                        Yaygın Kaygı Bozukluğu 7 (GAD-7), yaygın anksiyete
                        bozukluğunun taranması ve şiddetinin ölçülmesi için
                        kullanılan bir psikoloji testidir. GAD-7, çeşitli yaygın
                        anksiyete bozukluğu belirtilerinin şiddetini ölçen yedi
                        maddeye sahiptir.
                      </div>
                      <div class="mt-3" aria-labelledby="heading0">
                        <Link to="/istests" class="btn btn-rounded btn-primary">
                          Teste Başla
                        </Link>
                      </div>
                    </div>

                    <div class="test-list-image" aria-labelledby="heading0">
                      <Link to="/istests">
                        <img src="img/anxiety-test.svg" alt="" loading="lazy" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-4 mt-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center border border-secondary rounded p-3 test-list-box">
                    <div class="d-flex ml-4 ml-3 flex-column test-list-description">
                      <h2 class="" id="heading0">
                        Depresyon Testi
                      </h2>
                      <div class="test-list-summary">
                        Hasta Sağlık Anketi 9 (PHQ-9) depresyonun taranması ve
                        şiddetinin ölçülmesi için kullanılan bir psikoloji
                        testidir. Dokuz maddeyle hızlı ve kolay bir şekilde
                        tarama yapan başarılı bir depresyon ölçeğidir.
                      </div>
                      <div class="mt-3" aria-labelledby="heading0">
                        <Link to="/istests" class="btn btn-rounded btn-primary">
                          Teste Başla
                        </Link>
                      </div>
                    </div>

                    <div class="test-list-image" aria-labelledby="heading0">
                      <Link to="/istests">
                        <img
                          src="img/depression-test.svg"
                          alt=""
                          loading="lazy"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mt-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center border border-secondary rounded p-3 test-list-box">
                    <div class="d-flex ml-4 ml-3 flex-column test-list-description">
                      <h2 class="" id="heading0">
                        Öfke Testi
                      </h2>
                      <div class="test-list-summary">
                        Sürekli öfke, durumsal öfkenin genelde ne sıklıkta
                        yaşandığını anlatan bir kavramdır. Sürekli Öfke ve Öfke
                        Tarzı Ölçeği Testi ya da Öfke Testi bu durumsal öfkenin
                        yaşanma sıklığını ve öfkenin çeşitli boyutlarını ölçmek
                        amacıyla kullanılmaktadır.
                      </div>
                      <div class="mt-3" aria-labelledby="heading0">
                        <Link to="/istests" class="btn btn-rounded btn-primary">
                          Teste Başla
                        </Link>
                      </div>
                    </div>

                    <div class="test-list-image" aria-labelledby="heading0">
                      <Link to="/istests">
                        <img src="img/ofke-testi.svg" alt="" loading="lazy" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mt-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center border border-secondary rounded p-3 test-list-box">
                    <div class="d-flex ml-4 ml-3 flex-column test-list-description">
                      <h2 class="" id="heading0">
                        Travma Sonrası Stres Bozukluğu Testi
                      </h2>
                      <div class="test-list-summary">
                        Travma Sonrası Stres Bozukluğu Envanteri - Sivil
                        Versiyon, Türkiye’de yaşayan bireylerde Travma Sonrası
                        Stres Bozukluğu tanı ve şiddet değerlendirmesinde rutin
                        uygulama kapsamında kullanılabilmektedir. Bu test tüm
                        DSM-IV TSSB semptomlarını sorgulayan bir ölçektir.
                      </div>
                      <div class="mt-3" aria-labelledby="heading0">
                        <Link to="/istests" class="btn btn-rounded btn-primary">
                          Teste Başla
                        </Link>
                      </div>
                    </div>

                    <div class="test-list-image" aria-labelledby="heading0">
                      <Link to="/istests">
                        <img
                          src="img/travma-sonrasi-stres-bozuklugu-testi.svg"
                          alt=""
                          loading="lazy"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mt-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center border border-secondary rounded p-3 test-list-box">
                    <div class="d-flex ml-4 ml-3 flex-column test-list-description">
                      <h2 class="" id="heading0">
                        Alkol Bağımlılığı Testi
                      </h2>
                      <div class="test-list-summary">
                        AUDIT (Alkol Kullanım Bozuklukları Tanımlama Testi),
                        riskli veya tehlikeli tüketim veya herhangi bir alkol
                        kullanım bozukluğu olarak tanımlanan sağlıksız alkol
                        kullanımını taramanın basit ve etkili bir yöntemidir.
                      </div>
                      <div class="mt-3" aria-labelledby="heading0">
                        <Link to="/tests" class="btn btn-rounded btn-primary">
                          Teste Başla
                        </Link>
                      </div>
                    </div>

                    <div class="test-list-image" aria-labelledby="heading0">
                      <Link to="/istests">
                        <img
                          src="img/alkol-bagimliligi-testi.svg"
                          alt=""
                          loading="lazy"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4 mt-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center border border-secondary rounded p-3 test-list-box">
                    <div class="d-flex ml-4 ml-3 flex-column test-list-description">
                      <h2 class="" id="heading0">
                        Stres Testi
                      </h2>
                      <div class="test-list-summary">
                        DASS21, son 1 haftadır mevcut olan stres belirtilerini
                        ölçen 7 madde içeren bir araçtır.
                      </div>
                      <div class="mt-3" aria-labelledby="heading0">
                        <Link to="/istests" class="btn btn-rounded btn-primary">
                          Teste Başla
                        </Link>
                      </div>
                    </div>

                    <div class="test-list-image" aria-labelledby="heading0">
                      <Link to="/istests">
                        <img src="img/stress-test.svg" alt="" loading="lazy" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestsPage;
