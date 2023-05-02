import Link from "next/link";
import Head from "next/head";

import React from "react";
import Image from "next/image";

import regisMa from "../public/images/manual/regisMa.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Manual() {
  return <>
  <Carousel width={"80%"} showThumbs={false}>
  <div>
      <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"/>
      <p className="legend">คู่มือลงทะเบียน</p>
  </div>
  <div>
      <img src="/images/manual/regisMa.jpg" alt={"regisMa"}/>
      <p className="legend">คู่มือการเข้าสู่ระบบ</p>
  </div>
  <div>
      <img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"/>
      <p className="legend">คู่มือการดาวน์โหลด</p>
  </div>
  </Carousel>

  <div>
    jskdsjg
  </div>
  </>;
}
export default Manual;
