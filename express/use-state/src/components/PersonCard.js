import React, { useState } from "react";

const PersonCard = (props) => {
  const { firstName, lastName, hair } = props;
  const [ growUp, setGrowUp] = useState(props.age);

  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>Age: { growUp }</p>
      <p>Hair Color: {hair}</p>
      <button onClick={ (event) => setGrowUp( growUp + 1 )}>Birthday Button for { props.firstName }</button>
    </div>
  );
}

export default PersonCard;