import React from 'react'
import { assets } from '../assets/assets'
import './Program.css'
const Program = () => {
  return (
    <div className="container-fluid program">
    <div className='container p-lg-5 p-md-3 p-2'>
     <div className='my-3 py-3'>
     <p className='text-center fw-bold' style={{color: `#212ea0`}}>OUR PROGRAM</p>
     <h3 className='text-center fs-1 fw-bold'>What We Offer</h3>
     </div>
      <div className="row g-3 px-lg-4">
        <div className="col-lg-4 col-md-6">
            <div className="card rounded-3 position-relative">
                <img className='rounded-3' src={assets.program_1} alt="" />
                <div className="caption position-absolute ">
                  <img src={assets.program_icon_1} alt="" />
                  <p>Graduation Degree</p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6">
            <div className="card rounded-3 position-relative">
                <img className='rounded-3' src={assets.program_2} alt="" />
                <div className="caption position-absolute ">
                  <img src={assets.program_icon_2} alt="" />
                  <p>Master Degree</p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6">
            <div className="card rounded-3 position-relative">
                <img className='rounded-3' src={assets.program_3} alt="" />
                <div className="caption position-absolute ">
                  <img src={assets.program_icon_3} alt="" />
                  <p>Post Graduation</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Program
