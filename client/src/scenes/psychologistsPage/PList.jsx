import React from "react";
// import axios from "axios";
import SingleP from "./SingleP";
import { useSelector } from "react-redux";
import "./Psychologists.css";

const PList = () => {
  const users = useSelector((state) => state.users);
  // const [users, setUsers] = useState([]);

  // const fetchUsers = async () => {
  //   const response = await axios.get(
  //     "https://randomuser.me/api/?results=100&nat=tr" //turkish users &nat=tr
  //   );
  //   setUsers(response.data.results);
  // };
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <main id="psikolog">
      <section className="my-3 my-lg-4 mx-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mt-5 text-center">
              <div>
                <h1 className="fs-2 fw-bold">Psikologlarımız</h1>
                <p className="fw-light opacity-75">
                  Sizleri anlayan, dinleyen ve çözüm üreten 100'den fazla uzman
                  psikoloğumuz, psikolojik sağlığınıza destek olmak için
                  Psyche’de.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            {users.map((user, i) =>
              user.occupationOption === "Psikolog" ? (
                <div key={i} className="col-lg-3 col-md-4 mt-5">
                  <div>
                    <SingleP user={user} />
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PList;
