import React from "react";
import InfoBlockBottom from "./InfoBlockBottom.js";
import InfoBlockTop from "./InfoBlockTop.js";

function InfoBlock(props) {
  return (
    <React.Fragment>
      <InfoBlockTop name={props.name}
        tweetCount={props.tweetCount}
        followers={props.followers}
        following={props.following}
        headshotURL={props.headshotURL}
      />
      <InfoBlockBottom
        about={props.about}
      />
    </React.Fragment>
  )
}

export default InfoBlock;
