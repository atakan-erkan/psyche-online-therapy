import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <main className="about">
      <section className="my-3 my-lg-4 mx-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mt-5 text-center">
              <div>
                <h1 className="fs-2 fw-bold">Psyche Hakkında</h1>
                <p className="fw-light opacity-75">
                  Psyche ile Herkes için ulaşılabilir ve sürdürülebilir terapi
                  imkanı.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
