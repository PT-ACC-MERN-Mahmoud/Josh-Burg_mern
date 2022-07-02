import React from 'react'
import { useParams } from 'react-router-dom'
const Num = (props) => {
    const {a} = useParams();
  return (
    <div>
        <h1>The Number is: {a}</h1>
    </div>
  )
}

export default Num