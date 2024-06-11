import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 xol-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">USER NAME</label>
                            <input type="text" className="form-control" />
                        </div>
                        <br></br>
                        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="text" className="form-control" />
                        </div>
                        <br></br>
                        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary">LOGIN</button>
                        </div>
                        <br></br>
                        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">NEW USERS CLICK HERE TO CREATE AN ACCOUNT</label><br></br>
                           <Link className='nav-link' to='/s'> <button className="btn btn-primary" >SIGNUP</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login