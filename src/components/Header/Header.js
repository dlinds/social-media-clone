import React from "react";
import NavLinkList from "./NavLinkList.js";
import Utilities from "./Utilities.js";

function Header() {
  return (
    <React.Fragment>
      <div className="row border">
        <div className="col-5">
          <NavLinkList />
        </div>
        <div className="col-1">

        </div>
        <div className="col-5">
          <Utilities />
        </div>
      </div>
      <hr />
    </React.Fragment>
  )
}

export default Header;
