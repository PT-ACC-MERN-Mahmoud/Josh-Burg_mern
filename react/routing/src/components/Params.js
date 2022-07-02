import React from 'react'
import { useParams } from 'react-router-dom';

const Params = (props) => {
    const { word, color, backCol } = useParams();

    return (
    <div> {
        isNaN(word)?
        <h1 style={color ?
                { color: color, backgroundColor: backCol }
                : null}>
            The Word is: {word}</h1>
    :
    <h1>
    This is a number: {word}
    </h1>
}
    </div>
  )
}

export default Params