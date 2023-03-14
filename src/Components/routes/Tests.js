import React from "react";
import "./Tests.css";

function Tests() {
  return (
    <main id="tests">
      <section>
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
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm">
              <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tests;
