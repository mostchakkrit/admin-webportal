import React, { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Manual() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index+1);
  }
  return <>
  <Carousel width={"80%"} showThumbs={false} onChange={handleSlideChange}>
  <div>
    <img src="/images/manual/regisMa.jpg" alt="regisMa"/>
    <p className="legend">คู่มือลงทะเบียน</p>
  </div>
  <div>
    <img src="/images/manual/loginMa.jpg" alt="loginMa"/>
    <p className="legend">คู่มือการเข้าสู่ระบบ</p>
  </div>
  <div>
    <img src="/images/manual/dowMa.jpg" alt="dowMa"/>
    <p className="legend">คู่มือการดาวน์โหลด</p>
  </div>
  <div>
    <img src="/images/manual/Ma1.jpg" alt="Ma1"></img>
    <p className="legend">คู่มือ1</p>
  </div>
  <div>
    <img src="/images/manual/Ma2.jpg" alt="Ma2"></img>
    <p className="legend">คู่มือ2</p>
  </div>
  </Carousel>
  <div>
    <p>This is page {currentSlide}</p> 
  </div>
  </>;
}
export default Manual;
