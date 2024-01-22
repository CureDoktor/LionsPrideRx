import React from "react";
import Landing from "./components/Landing";
import Testimonials from "./components/Testimonials";
import SideBySide from "@components/SideBySide";

import tableSrc from "@public/img/order-page/tadalafil-table.png";
import tableMobileSrc from "@public/img/order-page/tadalafil-table-mobile.png";
import productSrc from "@public/img/bottle-cialis.png";
import Treatments from "./components/Treatments";

const OrderSildenafil = () => {
  return (
    <div>
      <Landing />
      <Testimonials />
      <SideBySide
        table={{ desktop: tableSrc, mobile: tableMobileSrc }}
        product={productSrc}
      />
      <Treatments />
    </div>
  );
};

export default OrderSildenafil;
