import React from "react";
import ToggleEmail from "../containers/ToggleEmail";
import ToggleMenu from "../containers/ToggleMenu";

function Toggles() {
  return (
    <React.Fragment>
      <ToggleEmail />
      <ToggleMenu />
    </React.Fragment>
  );
}

export default Toggles;
