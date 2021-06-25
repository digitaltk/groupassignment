import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import grad1 from "./images/grad1.jpg";
import grad2 from "./images/grad2.jpg";
import grad3 from "./images/grad3.jpg";
import grad4 from "./images/grad4.jpg";

const Homepage = () => (
  <div class="section">
    <h5 class="text-on-back">Welcome Alumni</h5>

    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <div class="row justify-content-between align-items-center">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img class="d-block" src={grad4} alt="First slide" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Big City Life, United States</h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block" src={grad1} alt="Second slide" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Somewhere Beyond, United States</h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block" src={grad2} alt="Third slide" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Stocks, United States</h5>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <i class="tim-icons icon-minimal-left"></i>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <i class="tim-icons icon-minimal-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <h1 class="profile-title text-left">This platform is for you!</h1>
          <p class="profile-description text-left">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <p class="profile-description text-left">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <p class="profile-description text-left">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <div class="btn-wrapper pt-3">
            <button
              href="javascript:void(0)"
              class="btn btn-simple btn-primary"
            >
              <i class="tim-icons icon-book-bookmark"></i> Bookmark It!
            </button>
            <Link to="/tracer">
              <button href="javascript:void(0)" class="btn btn-simple btn-info">
                <i class="tim-icons icon-bulb-63"></i> Tracer Page
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div id="square1" class="square square-1"></div>
      <div id="square2" class="square square-2"></div>
      <div id="square3" class="square square-3"></div>
      <div id="square4" class="square square-4"></div>
      <div id="square5" class="square square-5"></div>
      <div id="square6" class="square square-6"></div>
    </div>
  </div>
);

export default Homepage;
