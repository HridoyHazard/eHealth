import React from "react";
import "bootstrap";
import "../css/home.css";

export default function Home() {
  return (
    <div>
      <section id="carousel">
        <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
          <div className="carousel-inner">
            <div className="carousel-item">
              <div className="bg-light border rounded border-light pulse animated hero-nature carousel-hero jumbotron py-5 px-4">
                <h1 className="hero-title">Emergency</h1>
                <p className="hero-subtitle">
                  An emergency is a situation that poses an immediate risk to
                  health, life, property, or environment. Most emergencies
                  require urgent intervention to prevent a worsening of the
                  situation, although in some situations.
                </p>
                <p>
                  <a
                    className="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="bg-light border rounded border-light pulse animated hero-photography carousel-hero jumbotron py-5 px-4">
                <h1 className="hero-title">Doctors</h1>
                <p className="hero-subtitle">
                  a person licensed to practice medicine, as a physician,
                  surgeon, dentist, or veterinarian. a person who has been
                  awarded a doctor's degree: He is a Doctor of Philosophy.
                </p>
                <p>
                  <a
                    className="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="bg-light border rounded border-light pulse animated hero-corona carousel-hero jumbotron py-5 px-4">
                <h1 className="hero-title">Covid</h1>
                <p className="hero-subtitle">
                  Most people who fall sick with COVID-19 will experience mild
                  to moderate symptoms and recover without special treatment.
                  However, some will become seriously ill and require medical
                  attention.
                </p>
                <p>
                  <a
                    className="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="bg-light border rounded border-light pulse animated hero-technology carousel-hero jumbotron py-5 px-4">
                <h1 className="hero-title">Medicine</h1>
                <p className="hero-subtitle">
                  Medicines can treat diseases and improve your health. If you
                  are like most people, you need to take medicine at some point
                  in your life. You may need to take medicine every day, or you
                  may only need to take medicine once in a while.
                </p>
                <p>
                  <a
                    className="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <a
              className="carousel-control-prev"
              href="#carousel-1"
              role="button"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-1"
              role="button"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
              <span className="visually-hidden">Next</span>
            </a>
          </div>
          <ol className="carousel-indicators">
            <li data-bs-target="#carousel-1" data-bs-slide-to={0} />
            <li data-bs-target="#carousel-1" data-bs-slide-to={1} />
            <li
              data-bs-target="#carousel-1"
              data-bs-slide-to={2}
              className="active"
            />
            <li data-bs-target="#carousel-1" data-bs-slide-to={3} />
          </ol>
        </div>
      </section>
      <div id="footer">
        <p>eHealth © All Right Reserved</p>
      </div>
    </div>
  );
}
