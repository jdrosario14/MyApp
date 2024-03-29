import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(()=> {
    axios.get('/api/v1/airlines.json')
    .then( resp => {
      setAirlines(resp.data)
    })
    .catch( resp => console.log(resp))
  }, [airlines.length])

  const list = airlines.map( item => {
    return (<li key={item.name}>{item.name}</li>) 
  })

  return(
    <Fragment>
      <div>ELLO WORLD!</div>
      <ul>{list}</ul>
    </Fragment>
  )
}

export default Airlines;