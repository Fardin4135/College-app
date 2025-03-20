import React from 'react'
import './Landing.css'
import Navbar from './Navbar'
import { assets } from '../assets/assets'

const Landing = () => {
  return (
    <div className='bg landing'>
      <div className="hero">
        <div className="container  vh-100 d-flex align-items-center">
       <div className="row justify-content-center ">
        <div className="col-8 my-lg-2">
        <h1 className='text-center text-white display-5 fw-bold'>We Ensure better education for a better world</h1>
        </div>
        <div className="col-8 my-lg-2">
            <p className='text-center text-white fw-normal d-none d-md-block'>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        </div>
        <div className="col-8 my-lg-2 d-flex justify-content-center">
                <button className='btn bg-white rounded-pill p-lg-3 p-md-2 fw-normal'>Explore more
                    <img className='ms-2' src={assets.dark_arrow} alt="" style={{width:`20px`}}/>
                </button>
        </div>
       </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
