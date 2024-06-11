import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [data,changedata]=useState([])
    const fetchdata = ()=>{
       axios.get("http://localhost:8084/view").then(
        (response)=>{
            changedata(response.data)
            console.log(data)
        }
       ).catch(
        (error)=>{
            console.log(error.message)
            alert(error.message)
        }
       )
    }
    useEffect(()=>{fetchdata()},[])
  return (
    <div>
        <Navbar/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">USERNAME</th>
      <th scope="col">EMAILID</th>
      <th scope="col">PASSWORD</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,i)=>{
            return <tr>
            <th scope="row">{value.name}</th>
            <td>{value.uname}</td>
            <td>{value.emid}</td>
            <td>{value.pass}</td>
          </tr>
        }
    )}
   </tbody>
</table>
    </div>
  )
}

export default View