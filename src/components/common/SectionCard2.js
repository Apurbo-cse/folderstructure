import React from "react";
import imagePath from "../../constants/imagePath";

const SectionCard2 = () => {
  return (
    <section className="hidden">
      <h2>It's really good</h2>
      <div class=" row logos">
        <div class="col-md-3 logo1 hidden">
          <img src={imagePath.Logo} class="img-fluid" alt={imagePath.Logo} />
        </div>
        <div class="col-md-3 logo1 hidden">
          <img src={imagePath.Logo} class="img-fluid" alt={imagePath.Logo} />
        </div>
        <div class="col-md-3 logo1 hidden">
          <img src={imagePath.Logo} class="img-fluid" alt={imagePath.Logo} />
        </div>
        <div class="col-md-3 logo1 hidden">
          <img src={imagePath.Logo} class="img-fluid" alt={imagePath.Logo} />
        </div>
      </div>
    </section>
  );
};

export default SectionCard2;
