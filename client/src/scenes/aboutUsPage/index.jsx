import React from "react";
import "./AboutUs.css";

const AboutUsPage = () => {
  return (
    <div className="about">
      <div className="picture-info">
        <img src="/img/Wilhelm Wundt.png" alt="WW" />
        <p>
          <i>
            *Psikolojinin tarihi çok eski olsa da, modern psikolojinin kurucusu
            olarak kabul edilen kişi Alman filozof ve psikolog{" "}
            <b> Wilhelm Wundt</b>'tur. Wundt, 1879'da Leipzig Üniversitesi'nde
            laboratuvar psikolojisi dersleri veren dünyanın ilk psikoloji
            laboratuvarını kurdu. Bu laboratuvar, psikolojinin deneysel bir
            bilim haline gelmesinde büyük bir rol oynamıştır. Wundt, zihnin
            işleyişini ve davranışları laboratuvar deneyleri ve gözlemler
            yoluyla inceleyen bir psikoloji anlayışı geliştirmiştir.
          </i>
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mit">
            <img src="img/psyche-mit.jpg" className="rounded-3" alt="" />
            <p>
              <i>
                *Mitolojide <b>"Psyche"</b> Tasviri
              </i>
            </p>
          </div>
          <div className="col-md-8">
            <div className="site-name-info mb-5">
              <i>
                <h3 className="title">PSYCHE Nedir?</h3>
                <p className="description">
                  <b>Psyche</b> kelimesi, Yunanca <b>"can"</b> veya <b>"ruh"</b>{" "}
                  anlamına gelir. Psikolojide ise <b>"Psyche"</b> terimi,
                  insanın zihinsel faaliyetleri, duyguları, düşünceleri,
                  davranışları ve bilincini ifade eder.
                  <br />
                  <br /> Psikolojide, <b>"Psyche"</b> terimi genellikle insanın
                  zihin ve davranışlarına ilişkin birçok farklı teori, yaklaşım
                  ve disiplini içeren bir kavram olarak kullanılır. Bu teoriler
                  arasında, psikanaliz, bilişsel psikoloji, davranışçılık,
                  insanistik psikoloji ve sosyal psikoloji gibi farklı
                  yaklaşımlar bulunmaktadır. Her bir yaklaşım, farklı bir bakış
                  açısı ve yöntem sunarak insan psikolojisini anlamaya çalışır.
                </p>
              </i>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <h3 class="title">Biz Kimiz?</h3>
                <p class="description">
                  Psikolojik Destek, zorlu zamanlarda insanlara destek sağlamak
                  için bir araç olarak tasarlanmıştır. Burada, kullanıcılarımız
                  kayıt olarak, yaşadıkları sorunları paylaşabilir ve sadece
                  kayıtlı psikologlar tarafından görülebilir. Bu sayede,
                  gizlilik konusunda tam bir güvence sağlanmış olur.
                  <br />
                  <br />
                  Amacımız, herkesin hayatında zaman zaman zorluklarla
                  karşılaşabileceğini ve bu zorlukların çözümü için doğru
                  desteğin ne kadar önemli olduğunu anlatmaktır. Bu nedenle, web
                  sitemizde, yaşadığınız zorlukları tanımlamanıza,
                  düşüncelerinizi ve hislerinizi açıklamanıza yardımcı olmak
                  için bir sorun paylaşım aracı sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-8">
            <div className="row mt-3">
              <div className="col-md-8">
                <h3 class="title">Vizyonumuz</h3>
                <p class="description">
                  Psikolojik Destek, insanların güçlü ve sağlıklı bir zihin ve
                  ruh haliyle yaşamasına yardımcı olmak için tasarlanmıştır.
                  Vizyonumuz, tüm kullanıcılarımızın, sağlıklı bir hayat
                  sürmelerine yardımcı olan psikolojik destek ve kaynaklar
                  sağlamaktır.
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <h3 class="title">Misyonumuz</h3>
                <p class="description">
                  Misyonumuz, herkesin hayatında zaman zaman karşılaştığı
                  zorluklara yardımcı olmaktır. Bu nedenle, web sitemizde,
                  birçok farklı konuda uzmanlaşmış kayıtlı psikologlarımızın,
                  kullanıcılarımızın sorularına yanıt vermesini sağlayarak,
                  çözümlere ulaşmalarına yardımcı oluyoruz.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <h3 className="title">Sizler İçin Ne Sağlıyoruz?</h3>
                <ul>
                  <li className="description mt-3">
                    <i
                      class="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    ></i>
                    Kullanıcıların kayıt olup, zorluklarını paylaşabilecekleri
                    bir platform sunuyoruz.
                  </li>
                  <li className="description mt-3">
                    <i
                      class="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    ></i>
                    Bu platformda, sadece kayıtlı psikologlar tarafından
                    görülebilen bir sorun paylaşım aracı sağlıyoruz.
                  </li>
                  <li className="description mt-3">
                    <i
                      class="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    ></i>
                    Kullanıcılarımıza, farklı konularda uzmanlaşmış
                    psikologlarımız tarafından yanıtlanan sorular bölümü
                    sunuyoruz.
                  </li>
                  <li className="description mt-3">
                    <i
                      class="fa-solid fa-check fa-lg me-2"
                      style={{ color: "#175c4c" }}
                    ></i>
                    Web sitemizde, psikolojik sağlık ve refah hakkında çeşitli
                    kaynaklar ve makaleler sunuyoruz.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mit">
            <img src="img/psyche-mit2.jpg" className="rounded-3" alt="" />
            <p>
              <i>
                *Mitolojide <b>"Psyche"</b> Tasviri
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
