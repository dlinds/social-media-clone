import React from "react"

function Suggestion(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-2">
          <img src={props.headshotURL} alt={"headshot of " + props.name} className="w-100" />
        </div>
        <div class="col-sm-10">
          {props.name}
          <br />
          <button type="button" class="btn btn-dark btn-sm">Follow</button>
        </div>
      </div>
      <hr />
    </React.Fragment>
  )
}

export default Suggestion;
