import React from "react"
import Suggestion from "./Suggestion.js";
const suggestionList = [
  {
    name: "Daniel Lindsey",
    headshotURL: "https://www.ortho-max.net/wp-content/uploads/2018/02/generic-headshot-300x300.png"
  },
  {
    name: "Bill Gates",
    headshotURL: "https://www.ortho-max.net/wp-content/uploads/2018/02/generic-headshot-300x300.png"
  },
  {
    name: "The Moon",
    headshotURL: "https://www.ortho-max.net/wp-content/uploads/2018/02/generic-headshot-300x300.png"
  }
]

function SuggestionsContainer() {
  return (
    <React.Fragment>
      <div className="border border-dark p-3">
        <h6 className="mb-3">Suggestions to follow</h6>
        {suggestionList.map((suggestion, index) =>
          <Suggestion name={suggestion.name}
            headshotURL={suggestion.headshotURL}
            key={index}
          />
        )}
      </div>
    </React.Fragment>
  )
}

export default SuggestionsContainer;
