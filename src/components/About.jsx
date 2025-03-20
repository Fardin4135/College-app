import React from 'react'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div className='container-fluid about'>
      <div className="container p-lg-5 p-md-3 p-2">
        <div className="row g-3  gap-3 align-items-center px-lg-4">
            <div className="col-lg-5 ">
                <div className="card rounded-3 position-relative">
                    <img className='rounded-3' src={assets.about} alt="" />
                    <img className='position-absolute ' src={assets.play} alt="" style={{width:`60px`, cursor:`pointer` ,top:`42%`,left:`45%`}}/>
                </div>
            </div>
            <div className="col-lg-6 ">
                <p className='fw-bold m-0' style={{color: `#212ea0`}}>ABOUT UNIVERSITY</p>
                <h3 className='fw-bold fs-1'>Nurturing Tomorrow's Leaders Today</h3>
                <p className='text-secondary fw-normal'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                <p className='text-secondary fw-normal'>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                <p className='text-secondary fw-normal'>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
