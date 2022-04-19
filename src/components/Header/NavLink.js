import React from "react";
import PropTypes from "prop-types";


function NavLink(props) {
  return (
    <React.Fragment>
      <td class="nav-item">
        <em><a href={props.navLink}>{props.navTitle}</a></em>
      </td>
    </React.Fragment>
  )
}

NavLink.propTypes = {
  navLink: PropTypes.string,
  navTitle: PropTypes.string
}

export default NavLink;
