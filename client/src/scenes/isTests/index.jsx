import { Box } from "@mui/material";
import "./isTests.css";
import { useSelector } from "react-redux";

const IsTests = () => {
  return (
    <Box>
      <main id="page-wrapper">
        <section>
          <div>
            <div className="container h-100">
              <div
                id="banner-caption"
                className="row h-100 d-flex align-items-center "
              >
                <div className="col-lg-6 mb-5">
                  <h1>
                    Danışanlarımızın psikoloji testlerine girebilmesi için
                    <span>
                      <a href="/psychologists"> psikologlarımızın</a>{" "}
                    </span>{" "}
                    onayı gerekmektedir.
                  </h1>
                  <p className="mt-3">
                    Bu testler psikolojik bir değerlendirme aracıdır. Sonuçlar
                    ciddiye alınmalı, ancak kesin teşhis veya tedavi yerine
                    geçmemelidir. Kendinizi veya başkalarını değerlendirirken,
                    uzman bir psikologla birebir danışmanlık yapmanız önemlidir.
                    Bu testlerin sonuçları kişisel analiz için kullanılabilir,
                    ancak herhangi bir ruh sağlığı sorunu veya durumu hakkında
                    kesin bir tanı koymak için yeterli değildir. Eğer bir
                    psikolojik rahatsızlık veya sorununuz olduğunu
                    düşünüyorsanız, bir uzmana danışmanız önemlidir. Bu testleri
                    yapmaya devam etmekle, bu uyarıyı anladığınızı ve kabul
                    ettiğinizi beyan etmiş olursunuz.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img
                    src="img/psyche.png"
                    className="w-100"
                    alt="PSYCHE LOGO"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Box>
  );
};

export default IsTests;
