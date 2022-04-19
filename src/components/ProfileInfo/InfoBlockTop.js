import React from "react";

function InfoBlockTop(props) {
  return (
    <React.Fragment>
      <div class="border border-dark">
        <div class="bg-primary">
          <img src={props.headshotURL} alt="headshot" class="w-25 rounded mt-5 me-5 ms-2 mb-2  border border-dark" />
        </div>
        <h6 class="text-center mt-2">{props.name}</h6>
        <p class="p-3 text-center">
          Tweets | Following | Followers
          <br />
          {props.tweetCount} &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.following} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; {props.followers}
        </p>
      </div>
    </React.Fragment>
  )
}

export default InfoBlockTop;
