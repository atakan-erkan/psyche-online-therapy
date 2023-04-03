import React from "react";
import "./AboutUs.css";

function AboutUs() {
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
                <h3>PSYCHE Nedir?</h3>
                <p>
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
              <div className="col-md-8">
                <h3 class="title">Misyonumuz</h3>
                <p class="description">
                  Terapiyi herkes için 7/24 ulaşılabilir kılmak, kişinin
                  ihtiyacına uygun terapi hizmeti sunmak, katma değerli sistemle
                  kullanıcı odaklı bir yapı oluşturmak, pozitif psikoloji ve
                  mental iyi oluşu sürdürülebilirlik çerçevesinde
                  yaygınlaştırmak.
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <h3 class="title">Vizyonumuz</h3>
                <p class="description">
                  Terapiye karşı önyargıları kırıp global ölçekte terapi hizmeti
                  sunmak, yenilikçi bir anlayışla terapiyi teknolojiyle
                  bütünleştirirken geleneksel terapiye ulaşma imkanı olmayanlar
                  için güçlü bir alternatif sunmak ve bireysel ruh sağlığına
                  verilen önemi geliştirmek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
