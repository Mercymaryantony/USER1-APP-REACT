import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Signup = () => {
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
                                <input type="text" className="form-control" />
                            </div>
                            <br></br>
                            <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DOB</label>
                                <input type="text" className="fotm-control" />
                            </div>
                            <br></br>
                            <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">BLOOD GROUP</label>
                                <input type="text" className="form-control" />

                            </div>
                            <br></br>
                            <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">MOBILE NO</label>
                                <input type="text" className="form-control" />
                            </div>
                            <br></br>
                            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">ADDRESS</label>
                                <textarea name="" id="" className="form-control"></textarea>
                            </div>
                            <br></br>
                            <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PINCODE</label>
                                <input type="text" className="form-control" />
                            </div>
                            <br></br>
                            <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DISTRICT</label>
                                <select name="" id="" className="from-control">
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
                            <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PLACE</label>
                                <input type="text" className="form-control" />
                            </div>
                            <br></br>
                            <div className="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-control">EMAIL-ID</label>
                                <input type="text" className="form-control" />
                            </div>
                            <br></br>
                            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">USERNAME</label>
                                <input type="password" name="" id="" className="form-control" />
                            </div>
                            <br></br>
                            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                                <input type="password" name="" id="" className="form-control" />
                            </div>
                            <br></br>
                            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary">REGISTER</button>
                            </div>
                            <br></br>
                            
                          <Link  class="nav-link" to="/" ><div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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