import React, { useState } from "react";
import "./FAQ.css";
import DepresyonImg from "../../assets/images/depression-test.svg";
const FaqPage = () => {
  const [answersVisible, setAnswersVisible] = useState([false, false, false]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = (index) => {
    const newAnswersVisible = [...answersVisible];
    newAnswersVisible[index] = !newAnswersVisible[index];
    setAnswersVisible(newAnswersVisible);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="faq-wrapper mt-4 pt-4">
            <h1 className="text-center mt-4 pt-4" id="#title">
              {" "}
              Psikoloji İle İlgili Sıkça Sorulan Sorular{" "}
            </h1>{" "}
            <div className="faq-list">
              {" "}
              <button
                className="question-button"
                onClick={() => handleButtonClick(0)}
              >
                <div>
                  <h2 id="#title"> Psikoloji Nedir ? </h2>{" "}
                  {answersVisible[0] && (
                    <p>
                      Psikoloji, insan davranışını ve zihinsel süreçlerini
                      inceleyen bir bilim dalıdır.{" "}
                    </p>
                  )}{" "}
                </div>{" "}
              </button>{" "}
              <button
                className="question-button"
                onClick={() => handleButtonClick(1)}
              >
                <div>
                  <h2> Psikologlar Ne Yapar ? </h2>{" "}
                  {answersVisible[1] && (
                    <p>
                      Psikologlar, danışanlarına yardımcı olarak psikolojik
                      sorunlarını çözmelerine ve yaşam kalitelerini
                      artırmalarına yardımcı olurlar.{" "}
                    </p>
                  )}{" "}
                </div>{" "}
              </button>{" "}
              <button
                className="question-button"
                onClick={() => handleButtonClick(2)}
              >
                <div>
                  <h2> Hangi Alanlarda Psikologlardan Yardım Alabilirim ? </h2>{" "}
                  {answersVisible[2] && (
                    <p id="#text">
                      {" "}
                      Psikologlardan yardım alabileceğiniz alanlar arasında
                      depresyon, anksiyete, ilişki sorunları, stres yönetimi ve
                      bağımlılık gibi konular yer alır.{" "}
                    </p>
                  )}{" "}
                </div>{" "}
              </button>{" "}
            </div>
            <div className="mr-5">
              <div className="row">
                <div className="col-md-5">
                  <form
                    onSubmit={handleFormSubmit}
                    className="mx-auto col-md-6 text-justify text-right"
                  >
                    <h2 className="mt-3 mb-3">İletişim</h2>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        İsim:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        E-posta:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Mesaj:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="form-control form-control-lg rounded"
                        rows="4"
                        cols="50"
                      />
                    </div>
                    <button
                      type="submit"
                      id="button"
                      className="btn btn-primary"
                    >
                      Gönder
                    </button>
                  </form>
                  <p className="mt-3">
                    Sıkça sorulan sorularda bulamadığınız <br></br>
                    bir soru olursa üstteki iletişim formu <br></br>üzerinden
                    iletişime geçebilirsiniz.
                  </p>
                </div>
                <div className="col-md-7">
                  <img
                    src={DepresyonImg}
                    className=" mt-4"
                    id="img"
                    alt="resim"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
