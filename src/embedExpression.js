import React from "react";

function EmbedExpression() {
  //Create function here
  function getMajor() {
    return "Fullstack"
  }

  //Create a variable here
  const companyName = "Dumbwasy.id"

  return (
    // Code Inside div
    <div>
      <p>
        Welcome to {companyName}
        Class <h1> {getMajor()}</h1>
      </p>
    </div>
  );
}

export default EmbedExpression;
