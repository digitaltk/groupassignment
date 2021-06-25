import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    {" "}
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-transparent "
      color-on-scroll="100"
    >
      <div class="container">
        <div class="navbar-translate">
          <a>
            <Link to="/">
              {" "}
              <span>SEST Alumuni</span> Chinhoyi University Of Technology
            </Link>
          </a>
          <button
            class="navbar-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navigation"
        >
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a>BLK•</a>
              </div>
              <div class="col-6 collapse-close text-right">
                <button
                  type="button"
                  class="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation-index"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="tim-icons icon-simple-remove"></i>
                </button>
              </div>
            </div>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item p-0">
              <a
                class="nav-link"
                rel="tooltip"
                title="Follow us on Twitter"
                data-placement="bottom"
                href="https://twitter.com/CreativeTim"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
                <p class="d-lg-none d-xl-none">Twitter</p>
              </a>
            </li>
            <li class="nav-item p-0">
              <a
                class="nav-link"
                rel="tooltip"
                title="Like us on Facebook"
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
                <p class="d-lg-none d-xl-none">Facebook</p>
              </a>
            </li>
            <li class="nav-item p-0">
              <a
                class="nav-link"
                rel="tooltip"
                title="Follow us on Instagram"
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
                <p class="d-lg-none d-xl-none">Instagram</p>
              </a>
            </li>
            <li class="dropdown nav-item">
              <a
                href="#"
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i class="fa fa-cogs d-lg-none d-xl-none"></i> Getting started
              </a>
              <div class="dropdown-menu dropdown-with-icons">
                <a href="#" class="dropdown-item">
                  <i class="tim-icons icon-paper"></i> CUT Homepage
                </a>
                <a class="dropdown-item">
                  <Link to="/tracer">
                    {" "}
                    <i class="tim-icons icon-bullet-list-67"></i>Tracer Study
                    Page
                  </Link>
                </a>

                <a class="dropdown-item">
                  <Link to="/loginpage">
                    {" "}
                    <i class="tim-icons icon-bullet-list-67"></i>Login page
                  </Link>
                </a>

                <a class="dropdown-item">
                  <Link to="/legalpage">
                    {" "}
                    <i class="tim-icons icon-bullet-list-67"></i>Legal Page
                  </Link>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
