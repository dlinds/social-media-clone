import React from "react";
import NavLink from "./NavLink.js";

const navItems = [
  {
    navLink: "google.com",
    navTitle: "Home"
  },
  {
    navLink: "google.com",
    navTitle: "Notifications"
  },
  {
    navLink: "google.com",
    navTitle: "Messages"
  }
];


function NavLinkList() {
  return (
    <React.Fragment>
      <table class="nav-table">
        <tr>
          {navItems.map((location, index) =>
            <NavLink navLink={location.navLink}
              navTitle={location.navTitle}
              key={index} />
          )}
        </tr>
      </table>
    </React.Fragment>
  );
}

export default NavLinkList;
