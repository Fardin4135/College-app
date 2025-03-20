import React from 'react'
import { assets } from '../assets/assets'
const Campus = () => {
  return (
   <div className="container-fluid campus">
      <div className='container p-lg-5 p-md-3 p-2'>
       <div className='my-3 py-3'>
       <p className='text-center fw-bold' style={{color: `#212ea0`}}>GALLERY</p>
       <h3 className='text-center fs-1 fw-bold'>Campus Photos</h3>
       </div>
        <div className="row g-3 px-lg-4">
          <div className="col-lg-3 col-md-6">
              <div className="card rounded-3 position-relative">
                  <img className='rounded-3' src={assets.gallery_1} alt="" />
              </div>
          </div>
          <div className="col-lg-3 col-md-6">
              <div className="card rounded-3 position-relative">
                  <img className='rounded-3' src={assets.gallery_2} alt="" />
              </div>
          </div>
          <div className="col-lg-3 col-md-6">
              <div className="card rounded-3 position-relative">
                  <img className='rounded-3' src={assets.gallery_3} alt="" />
              </div>
          </div>
          <div className="col-lg-3 col-md-6">
              <div className="card rounded-3 position-relative">
                  <img className='rounded-3' src={assets.gallery_4} alt="" />
              </div>
          </div>
        </div>
        <div className="row justify-content-center my-lg-5 my-md-3 my-2">
            <div className="col-lg-3 col-md-4 col-12">
                <button className='btn text-white w-100  p-md-3 p-2 rounded-pill' style={{backgroundColor:`#212ea0`}}>See more here
                    <img className='ms-md-3 ms-2' src={assets.white_arrow}style={{width:`20px`}} alt="" />
                </button>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Campus
