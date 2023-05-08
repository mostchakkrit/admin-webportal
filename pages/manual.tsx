import React, { useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { dataSlide } from "@/public/data/dataSlide";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;

function Manual() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const SlideChange = (index: number) => {
    setCurrentSlide(index + 1);
    changeData(index + 1);
  };
  const info: any = useRef();

  const changeData = (num: number) => {
    const result = dataSlide.find((data: any) => data.id === num);
    info.current.innerHTML = `<div class="title">page${result.text}of4</div>
    <div><h1>${result.title === undefined ? "" : result.title}</h1></div>
    <div><h3><a href="www.facebook.com/${result.facebook}">${
      result.facebook
    }</a></h3></div>`;
  };
  /* ${result.id} */
  {
    /* <img src="${result.img}"></img> */
  }
  return (
    <>
      <Carousel width={"80%"} showThumbs={false} onChange={SlideChange}>
        <div>
          <img
            src={BASE_PATH + "/images/manual/regisManual.jpg"}
            alt="regisMan"
            id="regisMan"
          />
          <p className="legend">คู่มือการลงทะเบียน</p>
        </div>
        <div>
          <img
            src={BASE_PATH + "/images/manual/loginManual.jpg"}
            alt="loginMan"
            id="loginMan"
          />
          <p className="legend">คู่มือการเข้าสู่ระบบ</p>
        </div>
        <div>
          <img
            src={BASE_PATH + "/images/manual/dowManual.jpg"}
            alt="dowMan"
            id="dowMan"
          />
          <p className="legend">คู่มือการดาวน์โหลด</p>
        </div>
        <div>
          <img
            src={BASE_PATH + "/images/manual/Manual1.jpg"}
            alt="Man1"
            id="Man1"
          ></img>
          <p className="legend">คู่มือการใช้งาน</p>
        </div>
      </Carousel>

      <div className="Infomation" ref={info}></div>
    </>
  );
}
export default Manual;
