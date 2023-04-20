import React from "react";
import DetailOrder from "../containers/DetailOrder";
import DetailProduct from "../containers/DetailProduct";

function Asides() {
  return (
    <React.Fragment>
      <DetailOrder />
      <DetailProduct />
    </React.Fragment>
  );
}

export default Asides;
