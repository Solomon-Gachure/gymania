import React, { useEffect, useState } from 'react'
import axios from 'axios'
import jsonData from '../data/data.json'

  const Exercises = () => {
    const [data, setData]=useState([])

    useEffect(()=>{
      fetchData();
    }, [])
    const fetchData= async ()=>{
      try{
        setData(jsonData)
      }
      catch(error){
        console.log('error', error)
      }
    }
    const handleButtonClick = async () => {
      fetchData();
    };
    return (
      <div>
        {data.map((item) =>(
          <div key={item.id}>
          {/**section to show the type and name of the workouts */}
          <div>
  <h1>Exercise type : {item.title}</h1>
  <h1>Duration : {item.duration} </h1>
  <h1>Description : {item.description} </h1>
          </div>
          <button className='bg-green-500' onClick={handleButtonClick}>Fetch New Data</button>
          </div>
        ))}
      </div>
    )
  }

export default Exercises