
import React, { useEffect, useState } from "react";

const Character = ({ char }) => {
  const [showDetails, toggleShowDetails] = useState(false);
  return (
    <div>
      <div>{char.name}</div>
      {showDetails && <div>{char.details}</div>}
      <button onClick={() => toggleShowDetails(!showDetails)}>
        {showDetails ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default Character;