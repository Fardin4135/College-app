import React from "react";
import { assets } from "../assets/assets";
import "./Testimonials.css";
import { useRef } from "react";
const Testimonials = () => {

    const slider= useRef();
    let tx = 0;
    const slideForward = ()=>{
        if(tx > -50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

  return (
    <div className="container-fluid testimonials">
      <div className="">
        <p className="text-center fw-bold" style={{ color: `#212ea0` }}>
          OUR PROGRAM
        </p>
        <h3 className="text-center fs-1 fw-bold">What Student Says</h3>
      </div>
      <div className="container info">
        <img className="next-btn" src={assets.next_icon} alt="" onClick={slideForward} />
        <img className="back-btn" src={assets.back_icon} alt="" onClick={slideBackward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={assets.user_1} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={assets.user_2} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={assets.user_3} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={assets.user_4} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
