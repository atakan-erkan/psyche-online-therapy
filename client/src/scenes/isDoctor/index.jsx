import { Box } from "@mui/material";
import "./IsDoctor.css";
import { useSelector } from "react-redux";
import PsycheLogo from "../../assets/images/psyche.png";

const IsDoctor = () => {
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
                    Danışanlarımızın paylaşımlarını sadece
                    <span>
                      <a href="/psychologists"> psikologlarımız</a>{" "}
                    </span>{" "}
                    görüntüleyebilir.
                  </h1>
                  <p className="mt-3">
                    Danışanlarımızın mahremiyetini %100 güvence altına alıyoruz.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img src={PsycheLogo} className="w-100" alt="PSYCHE LOGO" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Box>
  );
};

export default IsDoctor;
