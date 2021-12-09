import React, { useEffect, useState } from "react";
import "../css/covid.css";
import "bootstrap";
import aboutcorona from "../pages/images/aboutcorona.jpg";
import breath from "../pages/images/breath.png";
import fever from "../pages/images/fever.png";
import cold from "../pages/images/sick.png";
import cough from "../pages/images/cough.png";
import weak from "../pages/images/weak.png";
import runnynose from "../pages/images/runnynose.png";
import home from "../pages/images/home.png";
import handwash from "../pages/images/handwash.png";
import news from "../pages/images/news.png";
import medical from "../pages/images/medical.png";
import mask from "../pages/images/mask.png";
import quarantine from "../pages/images/quarantine.png";
import corona from "../pages/images/corona.png";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://coronavirus-19-api.herokuapp.com/countries/Bangladesh"
      );
      const actualData = await res.json();
     // console.log(actualData);
      setData(actualData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div id="covid_update">
            <h1>
              {" "}
              <br /> C
              <span className="corona_anime">
                <img src={corona} />
              </span>
              VID UPDATE
            </h1>

            <div className="row filtr-container">
              <div className="col-md-6 col-lg-4 filtr-item" data-category="2,3">
                <div className="card border-dark">
                  <div className="card-header bg-dark text-light">
                    <h5 className="m-0">Country</h5>
                  </div>
                  <div className="card-body">
                    <p id="bd">Bangladesh</p>
                  </div>
                  <div className="d-flex card-footer" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 filtr-item" data-category="1,3">
                <div className="card border-dark">
                  <div className="card-header bg-dark text-light">
                    <h5 className="m-0">Case info</h5>
                  </div>
                  <div className="card-body">
                    <p>Today's Case : {data.todayCases}</p>
                    <p>Total Case : {data.cases}</p>
                  </div>
                  <div className="d-flex card-footer" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 filtr-item" data-category="2,3">
                <div className="card border-dark">
                  <div className="card-header bg-dark text-light">
                    <h5 className="m-0">Death Info</h5>
                  </div>
                  <div className="card-body">
                    <p>Today's Death : {data.todayDeaths}</p>
                    <p>Total Death : {data.deaths}</p>
                  </div>
                  <div className="d-flex card-footer" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 filtr-item" data-category={3}>
                <div className="card border-dark">
                  <div className="card-header bg-dark text-light">
                    <h5 className="m-0">Test Info</h5>
                  </div>
                  <div className="card-body">
                    <p>Total Test : {data.totalTests}</p>
                    <p>Active Case : {data.active}</p>
                  </div>
                  <div className="d-flex card-footer" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 filtr-item" data-category="1,2">
                <div className="card border-dark">
                  <div className="card-header bg-dark text-light">
                    <h5 className="m-0">Condition</h5>
                  </div>
                  <div className="card-body">
                    <p>Recovered : {data.recovered}</p>
                    <p>Critical : {data.critical}</p>
                  </div>
                  <div className="d-flex card-footer" />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 filtr-item" data-category="1,3">
                <div className="card border-dark">
                  <div className="card-header bg-dark text-light">
                    <h5 className="m-0">Last Update</h5>
                  </div>
                  <div className="card-body">
                    <p id="bd">{new Date().toLocaleString()}</p>
                  </div>
                  <div className="d-flex card-footer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="about">
        <h1>About Covid</h1>
        <div id="empresa">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-7 col-lg-7">
                <h2>
                  <br />
                  What is COVID-19 (Corona-Virus)
                  <br />
                </h2>
                <p>
                  <br />
                  COVID-19 is the infectious disease caused by the most recently
                  discovered coronavirus. This new virus and disease were
                  unknown before the outbreak began in Wuhan, China, in December
                  2019.Coronaviruses are a large family of viruses which may
                  cause illness in animals or humans. In humans, several
                  coronaviruses are known to cause respiratory infections
                  ranging from the common cold to more severe diseases such as
                  Middle East Respiratory Syndrome (MERS) and Severe Acute
                  Respiratory Syndrome (SARS). The most recently discovered
                  coronavirus causes coronavirus disease COVID-19.
                  <br />
                  <br />
                </p>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-5">
                <img src={aboutcorona} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="covid_symptoms">
        <h1>
          <br />
          Coronavirus symptoms
          <br />
        </h1>
        <div id="symptoms">
          <figure className="figure">
            <img className="img-fluid figure-img" src={cough} />
            <p>Cough</p>
          </figure>
          <figure className="figure">
            <img className="img-fluid figure-img" src={breath} />
            <p>Difficulty Breathing</p>
          </figure>
          <figure className="figure">
            <img className="img-fluid figure-img" src={fever} />
            <p>Fever</p>
          </figure>
          <figure className="figure">
            <img className="img-fluid figure-img" src={runnynose} />
            <p>Runny Nose</p>
          </figure>
          <figure className="figure">
            <img className="img-fluid figure-img" src={weak} />
            <p>Tiredness</p>
          </figure>
          <figure className="figure">
            <img className="img-fluid figure-img" src={cold} />
            <p>Cold</p>
          </figure>
        </div>
      </div>
      <div id="prevention_covid">
        <h1>
          <br />
          Prevention Against Coronavirus
          <br />
          <br />
        </h1>
        <div id="prevention">
          <div className="profile-card">
            <img src={quarantine} />
            <p className="profile-bio">
              <br />
              Avoid close contact (1 meter or 3 feet) with people who are unwell
              <br />
              <br />
            </p>
          </div>
          <div className="profile-card">
            <img src={handwash} />
            <p className="profile-bio">
              <br />
              Wash your hands regularly for 20 seconds, with soap and water or
              alcohol-based hand rub
              <br />
              <br />
            </p>
          </div>
          <div className="profile-card">
            <img src={home} />
            <p className="profile-bio">
              <br />
              Stay home and self-isolate from others in the household if you
              feel unwell
              <br />
              <br />
            </p>
          </div>
          <div className="profile-card">
            <img className="img-fluid" src={mask} />
            <p className="profile-bio">
              <br />
              Cover your nose and mouth with a disposable tissue or flexed elbow
              when you cough or sneeze
              <br />
              <br />
            </p>
          </div>
          <div className="profile-card" style={{ textAlign: "center" }}>
            <img src={news} />
            <p className="profile-bio">
              <br />
              Stay informed by watching news &amp; follow the recommended
              practices
              <br />
              <br />
            </p>
          </div>
          <div className="profile-card" style={{ textAlign: "center" }}>
            <img src={medical} />
            <p className="profile-bio">
              <br />
              If you have fever, cough and difficulty breathing, seek medical
              care early
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
        <div id="footer">
          <p>
            eHealth © All Right Reserved
          </p>
        </div>
    </div>
  );
};

export default Covid;
