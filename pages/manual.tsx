import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function Manual() {
  const { data: session } = useSession();
  const ref = useRef(null);
  const result = useRef(null);

  useEffect(() => {
    onTime();
  }, []);
  const onTime: any = () => {
    setTimeout(ckMedia, 100);
  };
  const ckMedia: any = () => {
    let element2: any = document.querySelectorAll(".slide");
    const res: any = result.current;
    element2.forEach((el: any, i: any) => {
      if (el.classList.contains("selected")) {
        console.log(el, i);
        switch (i) {
          case 0: {
            console.log(i);
            res.innerHTML = `1
            <br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nobis debitis quo distinctio voluptatum qui nam inventore quia, ex reprehenderit officia esse eius non aspernatur nisi ea expedita fugiat rem?
            `;
            break;
          }
          case 1: {
            res.innerHTML = `2
            <br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nobis debitis quo distinctio voluptatum qui nam inventore quia, ex reprehenderit officia esse eius non aspernatur nisi ea expedita fugiat rem?
            `;
            break;
          }
          case 2: {
            res.innerHTML = `3
            <br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nobis debitis quo distinctio voluptatum qui nam inventore quia, ex reprehenderit officia esse eius non aspernatur nisi ea expedita fugiat rem?
            `;
            break;
          }
          case 3: {
            res.innerHTML = `4
            <br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nobis debitis quo distinctio voluptatum qui nam inventore quia, ex reprehenderit officia esse eius non aspernatur nisi ea expedita fugiat rem?
            `;
            break;
          }
          case 4: {
            res.innerHTML = `5
            <br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nobis debitis quo distinctio voluptatum qui nam inventore quia, ex reprehenderit officia esse eius non aspernatur nisi ea expedita fugiat rem?
            `;
            break;
          }
        }
      }
    });
  };
  // const crsStat = () => {
  //   const res: any = result.current;
  //   let stat = document.querySelector(".carousel-status");
  //   /* doc */
  //   var xmlString1 = "<p class='carousel-status'>1 of 5</p>";
  //   var doc1 = new DOMParser().parseFromString(xmlString1, "text/xml");
  //   var xmlString2 = "<p class='carousel-status'>2 of 5</p>";
  //   var doc2 = new DOMParser().parseFromString(xmlString2, "text/xml");
  //   var xmlString3 = "<p class='carousel-status'>3 of 5</p>";
  //   var doc3 = new DOMParser().parseFromString(xmlString3, "text/xml");
  //   var xmlString4 = "<p class='carousel-status'>4 of 5</p>";
  //   var doc4 = new DOMParser().parseFromString(xmlString4, "text/xml");
  //   var xmlString5 = "<p class='carousel-status'>5 of 5</p>";
  //   var doc5 = new DOMParser().parseFromString(xmlString5, "text/xml");
  //   /*  */
  //   console.log(stat, doc1.firstChild);
  //   switch (stat) {
  //     case doc1.firstChild: {
  //       res.innerHTML = `1
  //       <br>
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nobis debitis quo distinctio voluptatum qui nam inventore quia, ex reprehenderit officia esse eius non aspernatur nisi ea expedita fugiat rem?
  //       `;
  //       break;
  //     }
  //     case doc2.firstChild: {
  //       res.innerHTML = `2
  //       <br>
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nobis debitis quo distinctio voluptatum qui nam inventore quia, ex reprehenderit officia esse eius non aspernatur nisi ea expedita fugiat rem?
  //       `;
  //       break;
  //     }
  //     case doc3.firstChild: {
  //       res.innerHTML = `3
  //       <br>
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nobis debitis quo distinctio voluptatum qui nam inventore quia, ex reprehenderit officia esse eius non aspernatur nisi ea expedita fugiat rem?
  //       `;
  //       break;
  //     }
  //     case doc4.firstChild: {
  //       res.innerHTML = `4
  //       <br>
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nobis debitis quo distinctio voluptatum qui nam inventore quia, ex reprehenderit officia esse eius non aspernatur nisi ea expedita fugiat rem?
  //       `;
  //       break;
  //     }
  //     case doc5.firstChild: {
  //       res.innerHTML = `5
  //       <br>
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nobis debitis quo distinctio voluptatum qui nam inventore quia, ex reprehenderit officia esse eius non aspernatur nisi ea expedita fugiat rem?
  //       `;
  //       break;
  //     }
  //   }
  // };

  /*   if (session) {
    return (
      <>
        Signed in as {session.user.username}
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
} */
  return (
    <>
      <Head>
        <title>คู่มือการใช้งานระบบ</title>
      </Head>

      <div className="gap-3 items-center my-3">
        {/*       {session?.user ? (
          <>
            <p className="text-sky-600">{session.user.name}</p>
            <button className="text-red-500 border p-3" onClick={() => signOut()}>
              ล็อคเอาท์
            </button>
          </>
        ) : (
          <button className="text-green-500 border p-3" onClick={() => signIn()}>
            ล็อคอิน
          </button>
        )} */}
        <h1 className="text-2xl font-bold">คู่มือการใช้งานระบบ</h1>
      </div>

      <div className="media" ref={ref}>
        <Carousel onChange={onTime} showThumbs={false}>
          <div className="media1">
            {/* <p className="legend">Image 1</p> */}
          </div>
          <div className="media2">
            {/* <img src="/2.png" /> */}
            {/*  <p className="legend">Image 2</p> */}
          </div>
          <div className="media3">
            {/* <img src="/3.png" alt="image3" /> */}
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div className="media4">
            {/* <img src="/4.png" alt="image4" /> */}
            {/*  <p className="legend">Image 4</p> */}
          </div>
          <div className="media5">
            {/* <img src="/5.png" alt="image5" /> */}
            {/* <p className="legend">Image 5</p> */}
          </div>
        </Carousel>
        <div ref={result}></div>
      </div>
    </>
  );
}
export default Manual;
