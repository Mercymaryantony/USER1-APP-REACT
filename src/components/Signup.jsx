import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => { const [data,setData]=useState({
    "name":"",
    "dob":"",
    "bg":"",
    "mon":"",
    "add":"",
    "pin":"",
    "dis":"",
    "plac":"",
    "emid":"",
    "uname":"",
    "pass":"",
    "cpass":""
    })
    const inputhandler =(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        if(data.pass == data.cpass){
        axios.post("http://localhost:8084/add",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status == "ADD")
                    {
                        alert("SUCCESSFULL")
                    }
                else{
                    alert("FAILED")
                }
                
            }
        ).catch().finally()
        console.log(data)}
        else{
            alert("INCORRECT PASSWORD")
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br></br>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>
                            </div>
                            <br></br>
                            <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DOB</label>
                                <input type="date" name="dob" value={data.dob} onChange={inputhandler} id="" className="form-control" />
                            </div>
                            <br></br>
                            <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">BLOOD GROUP</label>
                                <input type="text" className="form-control" name='bg' value={data.bg} onChange={inputhandler}/>

                            </div>
                            <br></br>
                            <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">MOBILE NO</label>
                                <input type="text" className="form-control" name='mon' value={data.mon} onChange={inputhandler}/>
                            </div>
                            <br></br>
                            <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">ADDRESS</label>
                                <textarea name="add" value={data.add} onChange={inputhandler} id="" className="form-control"></textarea>
                            </div>
                            <br></br>
                            <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PINCODE</label>
                                <input type="text" className="form-control" name='pin' value={data.pin} onChange={inputhandler}/>
                            </div>
                            <br></br>
                            <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DISTRICT</label>
                                <select name="dis" value={data.dis} onChange={inputhandler} id="" className="from-control">
                                    <option value="">THRISSUR</option>
                                    <option value="">ERNAKULAM</option>
                                    <option value="">IDDUKI</option>
                                    <option value="">KASARGOD</option>
                                    <option value="">ALAPPUZHA</option>
                                    <option value="">PALAKAD</option>
                                    <option value="">KOZHIKODE</option>
                                    <option value="">TRIVANDRUM</option>
                                    <option value="">WAYANAD</option>
                                    <option value="">KOTTAYAM</option>
                                    <option value="">KOLLAM</option>
                                    <option value="">KANNUR</option>
                                    <option value="">PATHANAMTHITTA</option>
                                    <option value="">MALAPPURAM</option>
                                </select>
                            </div>
                            <br></br>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PLACE</label>
                                <input type="text" className="form-control" name='plac' value={data.plac} onChange={inputhandler} />
                            </div>
                            <br></br>
                            <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">EMAIL-ID</label>
                                <input type="text" className="form-control" name='emid' value={data.emid} onChange={inputhandler} />
                            </div>
                            <br></br>
                            <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">USERNAME</label>
                                <input type="password" name="uname" value={data.uname} onChange={inputhandler} id="" className="form-control" />
                            </div>
                            <br></br>
                            <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">PASSWORD</label>
                                <input type="password" name="pass" value={data.pass} onChange={inputhandler} id="" className="form-control" />
                            </div>
                            <br></br>
                            <br></br>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                                <input type="password" name="cpass" value={data.cpass} onChange={inputhandler} id="" className="form-control" />
                            </div>
                            <br></br>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readValue}>REGISTER</button>
                            </div>
                            <br></br>
                            
                          <Link  class="nav-link" to="/" ><div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-secondary">BACK TO LOGIN</button>
                            </div>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Signup