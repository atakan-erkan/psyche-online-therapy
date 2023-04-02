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
      <div className="mit">
        <img src="/img/psyche-mit.jpg" alt="" />
        <p>
          <i>
            *Mitolojide <b>"Psyche"</b> Tasviri
          </i>
        </p>
      </div>
      <div className="site-name-info">
        <h1>PSYCHE nedir?</h1>
        <p>
          <b>
            <i>Psyche</i>
          </b>{" "}
          kelimesi, Yunanca <b>"can"</b> veya <b>"ruh"</b> anlamına gelir.
          Psikolojide ise <b>"Psyche"</b> terimi, insanın zihinsel faaliyetleri,
          duyguları, düşünceleri, davranışları ve bilincini ifade eder.
          <br />
          <br /> Psikolojide, <b>"Psyche"</b> terimi genellikle insanın zihin ve
          davranışlarına ilişkin birçok farklı teori, yaklaşım ve disiplini
          içeren bir kavram olarak kullanılır. Bu teoriler arasında, psikanaliz,
          bilişsel psikoloji, davranışçılık, insanistik psikoloji ve sosyal
          psikoloji gibi farklı yaklaşımlar bulunmaktadır. Her bir yaklaşım,
          farklı bir bakış açısı ve yöntem sunarak insan psikolojisini anlamaya
          çalışır.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
