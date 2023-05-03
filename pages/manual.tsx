import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Manual() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const SlideChange = (index: number) => {
    setCurrentSlide(index+1);
  }
  return <>
  <Carousel width={"80%"} showThumbs={false} onChange={SlideChange}>
<div>
  <img src="/images/manual/regisManual.jpg" alt="regisMan" id="regisMan"/>
  <p className="legend">คู่มือการลงทะเบียน</p>
</div>
<div>
  <img src="/images/manual/loginManual.jpg" alt="loginMan" id="loginMan"/>
  <p className="legend">คู่มือการเข้าสู่ระบบ</p>
</div>
<div>
  <img src="/images/manual/dowManual.jpg" alt="dowMan" id="dowMan"/>
  <p className="legend">คู่มือการดาวน์โหลด</p>
</div>
<div>
  <img src="/images/manual/Manual4.jpg" alt="Man1" id="Man1"></img>
  <p className="legend">คู่มือการใช้งาน</p>
</div>
</Carousel>
<div className="Infomation">
  <div><p>This is page {currentSlide}</p> </div>

</div>
</>;
}
export default Manual;