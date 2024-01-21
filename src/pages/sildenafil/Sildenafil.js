import React from "react";
import Landing from "./components/Landing";
import Testimonials from "./components/Testimonials";
import SideBySide from "@components/SideBySide";

import tableSrc from "@public/img/order-page/sildenafil-table.png";
import tableMobileSrc from "@public/img/order-page/sildenafil-table-mobile.png";
import productSrc from "@public/img/bottle-viagra.png";

const Sildenafil = () => {
  return (
    <div>
      <Landing />
      <Testimonials />
      <SideBySide
        table={{ desktop: tableSrc, mobile: tableMobileSrc }}
        product={productSrc}
      />
    </div>
  );
};

export default Sildenafil;
