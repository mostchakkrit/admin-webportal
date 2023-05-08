import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Email from "next-auth/providers/email";
import { Telex } from "next/font/google";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;

function Question() {
  const [post, setPost]: any = useState();
  const [loading, setLoading] = useState(true);
  let textArea: any = useRef();
  let select: any = useRef();
  let firstname: any = useRef();
  let lastname: any = useRef();
  let radio: any = useRef();
  let phone: any = useRef();
  let email: any = useRef();

  useEffect(() => {
    axios
      .get("https://thaihealthcare_gw.anamai.moph.go.th/hbapi/faq/staff")
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const onUnknow = () => {
    if (radio.current.checked === true) {
      firstname.current.value = "-";
      lastname.current.value = "-";
      firstname.current.setAttribute("disabled", "");
      lastname.current.setAttribute("disabled", "");
    } else {
      firstname.current.removeAttribute("disabled", "");
      lastname.current.removeAttribute("disabled", "");
      firstname.current.value = "";
      lastname.current.value = "";
    }
  };
  function submit(form: any) {
    const data = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      group: select.current.value,
      message: textArea.current.value,
    };
    axios
      .post(
        "https://thaihealthcare_gw.anamai.moph.go.th/hbapi/feedback/submit/staff",
        data
      )
      .then((res) => {
        alert("ส่งข้อเสนอแนะเสร็จสิ้น");
      })
      .catch((err) => {
        console.log(err);
      });
    
  }
  return (
    <>
      <Head>
        <title>คำถามที่พบบ่อย</title>
      </Head>
      <div className="w-full px-3 pb-[25px]">
        <div className="gap-3 items-center mb-3 mt-3 col-span-4">
          <h1 className="text-2xl font-bold">คำถามที่พบบ่อย (FAQ)</h1>
        </div>
        <div className="flex gap-9">
          <div className="w-1/3 py-4">
            <img
              className="rounded-lg"
              src={BASE_PATH + "/images/question/quest.jpg"}
            ></img>
          </div>
          <div className="w-2/4">
            {/*         <div className="flex w-full justify-end text-white ">
              <Link href={"/question-details"}>
                <button className="flex bg-gra-s py-2 px-3 rounded-lg hover:bg-gra-e hover:scale-105 cursor-pointer">
                  ดูทั้งหมด
                </button>
              </Link>
            </div> */}
            <div className="grid grid-cols-1">
              {post?.data?.slice(0, 5).map((el: any, i: number) => (
                <Link href={"/question-details"} key={el.id}>
                  <div className="w-full p-2 my-2 rounded-lg border dark:bg-doh-green hover:bg-[#4bd0d5] hover:scale-105 hover:duration-200 py-1">
                    <p className="cursor-pointer">
                      {i + 1} คำถาม : {el.question} ?
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
  
      <form method="post"  onSubmit={(f: any) => submit(f)}>
        <div className="w-full px-3 pb-[20px] grid grid-cols-12 gap-y-5">
          <div className="gap-3 col-span-12 items-center mb-3 mt-3">
            <h1 className="text-2xl font-bold">คำแนะนำติชม</h1>
          </div>
          <div className="col-span-12 xl:col-end-11 xl:col-start-1">
            <div className="w-full">
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-5 items-center">
                <div className="w-full flex-1 sm:flex-[40%]">
                  <label>ชื่อ</label>
                  <input
                    type="text"
                    ref={firstname}
                    required
                    className="flex-1 w-full p-2 my-2 rounded-lg border"
                  />
                </div>
                <div className="w-full flex-1 sm:flex-[40%]">
                  <label>นามสกุล</label>
                  <input
                    type="text"
                    ref={lastname}
                    required
                    className="w-full p-2 my-2 rounded-lg border"
                  />
                </div>
              </div>

              <div className="w-full flex-1 sm:flex-[40%]">
                <label>เบอร์โทรศัพท์</label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  ref={phone}
                  required
                  className="w-full p-2 my-2 rounded-lg border"
                />
              </div>
{/*               <div className="w-full flex-1 sm:flex-[40%]">
                <label>Email</label>
                <input
                  type="email"
                  ref={email}
                  required
                  className="w-full p-2 my-2 rounded-lg border"
                />
              </div> */}

              <div className="flex flex-col sm:flex-row gap-1 sm:gap-5 mb-2">
                <div className="flex-1">
                  <label>หัวข้อ</label>
                  <select
                    ref={select}
                    className="w-full p-2 my-2 rounded-lg border"
                  >
                    <option value="การบริการของเจ้าหน้าที่">
                      การบริการของเจ้าหน้าที่
                    </option>
                    <option value="การใช้งานระบบ">การใช้งานระบบ</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                </div>
              </div>
              <label htmlFor="">ข้อเสนอแนะ</label>
              <textarea
                placeholder="ข้อความ"
                rows={4}
                ref={textArea}
                required
                className="mt-2 form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:outline-none "
              ></textarea>
            </div>
            <div className="flex mt-5">
              <div className="w-1/2 h-12 rounded-l-lg">
                <input
                  type="checkbox"
                  id="html"
                  name="fav_language"
                  value="HTML"
                  className="mr-3 rounded-lg border"
                  ref={radio}
                  onClick={() => onUnknow()}
                />
                <label htmlFor="html">ไม่ระบุตัวตัน / ไม่ประสงค์ออกนาม</label>
                <br></br>
              </div>
              <div className="w-1/2 h-12 rounded-r-lg flex justify-end">
                <button
                type="submit"
                  className="bg-doh-dark-2 rounded-lg dark:bg-doh-green border hover:bg-[#4bd0d5] hover:border-0 hover:text-white duration-75 border-doh-blue px-[40px] py-[10px] h-[44px] text-center text-[24px] flex items-center justify-center"
                >
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Question;
