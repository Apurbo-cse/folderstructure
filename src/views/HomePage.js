import React from "react";
import { Link } from "react-router-dom";
import Home from "../components/pages/Home";
import imagePath from "../constants/imagePath";

const HomePage = () => {
  return (
    <div>
      <section
        class="content-banner"
        style={{ backgroundImage: `url(${imagePath.Banner})` }}
      >
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12">
              <div class="banner-con text-center">
                <p class="first-title">
                  Creative Design tutorials &amp; subscribe
                </p>
                <p class="banner-des">
                  prototype,design,collaborate and design system all in mockplus
                </p>
                <Link target="_blank" class="banner-btn">
                  Get started for free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Home/>
    </div>
  );
};

export default HomePage;
