import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Email from "next-auth/providers/email";
import { Telex } from "next/font/google";
import { BsBuildingFillCheck } from "react-icons/bs";
import { FaArrowAltCircleRight, FaUserCog } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { IoIosArrowDropright } from "react-icons/io";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;

function Question() {
  const [selectedOption, setSelectedOption] = useState();

  const ButtonClick = (option: any) => {
    setSelectedOption(option);
    choiceTitle(option);
    console.log(option);
  };
  const isStaffOption = selectedOption === "staff";
  const isUSystemOption = selectedOption === "uSystem";
  const isAnotherOption = selectedOption === "another";

  const [post, setPost]: any = useState();
  const [loading, setLoading] = useState(true);
  let textArea: any = useRef();
  let select: any = useRef();
  let firstname: any = useRef();
  let lastname: any = useRef();
  let radio: any = useRef();
  let phone: any = useRef();
  /* let email: any = useRef();  */
  let staff: any = useRef();
  let uSystem: any = useRef();
  let another: any = useRef();

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
  const choiceTitle = (e: any) => {
    if (staff.current.checked === true) {
      uSystem.current.setAttribute("disabled", "disabled");
      another.current.setAttribute("disabled", "disabled");
    } else if (uSystem.current === true) {
      staff.current.setAttribute("disabled", "disabled");
      another.current.setAttribute("disabled", "disabled");
    } else if (another.current === true) {
      staff.current.setAttribute("disabled", "disabled");
      uSystem.current.setAttribute("disabled", "disabled");
    }
  };
  const onUnknow = () => {
    if (radio.current.checked === true) {
      firstname.current.value = "---";
      lastname.current.value = "---";
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
      /* group: select.current.value, */
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
            <div className="flex w-full justify-end text-white ">
              <Link href={"/question-details"}>
                <button className="flex bg-gra-s py-2 px-3 rounded-lg hover:bg-gra-e hover:scale-105 cursor-pointer">
                  ดูทั้งหมด
                </button>
              </Link>
            </div>
            {/* rounded-lg border dark:bg-doh-green hover:bg-[#4bd0d5] hover:scale-105 hover:duration-200 */}
            <div className="grid grid-cols-1">
              {post?.data?.slice(0, 5).map((el: any, i: number) => (
                <Link href={"/question-details"} key={el.id}>
                  <div className="w-full p-3 my-2 hover:bg-[#4bd0d5] border-1 hover:border-0 hover:text-white hover:scale-105 hover:duration-200 border-doh-blue shadow-md rounded-md">
                    <p className="cursor-pointer relative">
                      {i + 1} คำถาม : {el.question} ?{" "}
                      <IoIosArrowDropright className="inline-flex w-7 h-7 absolute right-5 " />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* testtesttesttesttesttesttesttesttest */}
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {/* <button
            onClick={() => handleButtonClick("staff")}
            disabled={isStaffOption}
            className={`relative inline-flex py-20 flex justify-center p-6 text-lg hover:bg-[#4bd0d5] border border-slate-50 shadow-md hover:border-0 hover:text-white duration-75 border-doh-blue rounded-xl ${
              isStaffOption ? "bg-[#4bd0d5] text-white" : "bg-gray-300"
            }`}
          >
            <BsBuildingFillCheck className="object-cover h-10 w-10" />
          </button>
          <button
            onClick={() => handleButtonClick("uSystem")}
            disabled={isUSystemOption}
            className={`relative inline-flex py-20 flex justify-center p-6 text-lg hover:bg-[#4bd0d5] border border-slate-50 shadow-md hover:border-0 hover:text-white duration-75 border-doh-blue rounded-xl ${
              isUSystemOption ? "bg-[#4bd0d5] text-white" : "bg-gray-300"
            }`}
          >
            <FaUserCog className="object-cover h-10 w-10" />
          </button>
          <button
            onClick={() => handleButtonClick("another")}
            disabled={isAnotherOption}
            className={`relative inline-flex py-20 flex justify-center p-6 text-lg hover:bg-[#4bd0d5] border border-slate-50 shadow-md hover:border-0 hover:text-white duration-75 border-doh-blue rounded-xl ${
              isAnotherOption ? "bg-[#4bd0d5] text-white" : "bg-gray-300"
            }`}
          >
            <AiOutlineBars className="object-cover h-10 w-10" />
          </button> */}
        </div>
      </div>
      {/*  */}

      <form method="post" onSubmit={(f: any) => submit(f)}>
        <div className="w-full px-3 pb-[20px] grid grid-cols-12 gap-y-5">
          <div className="gap-3 col-span-12 items-center mb-3 mt-3">
            <h1 className="text-2xl font-bold">คำแนะนำติชม</h1>
          </div>
          <div>
            <h1 className="text-lg font-bold">หัวข้อ</h1>
          </div>
          <div className="col-span-12 xl:col-end-11 xl:col-start-1">
            <div className="w-full">
              <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-6">
                  <button
                    onClick={() => ButtonClick("staff")}
                    disabled={isStaffOption}
                    className={`relative inline-flex py-20 flex justify-center p-6 text-lg hover:bg-[#4bd0d5] border border-slate-50 shadow-md hover:border-0 hover:text-white duration-75 border-doh-blue rounded-xl ${
                      isStaffOption ? "bg-[#4bd0d5] text-white" : "bg-gray-300"
                    }`}
                  >
                    <BsBuildingFillCheck className="object-cover h-10 w-10" />
                  </button>
                  <button
                    onClick={() => ButtonClick("uSystem")}
                    disabled={isUSystemOption}
                    className={`relative inline-flex py-20 flex justify-center p-6 text-lg hover:bg-[#4bd0d5] border border-slate-50 shadow-md hover:border-0 hover:text-white duration-75 border-doh-blue rounded-xl 
                    ${
                      isUSystemOption
                        ? "bg-[#4bd0d5] text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    <FaUserCog className="object-cover h-10 w-10" />
                  </button>
                  <button
                    onClick={() => ButtonClick("another")}
                    disabled={isAnotherOption}
                    className={`relative inline-flex py-20 flex justify-center p-6 text-lg hover:bg-[#4bd0d5] border border-slate-50 shadow-md hover:border-0 hover:text-white duration-75 border-doh-blue rounded-xl 
                    ${
                      isAnotherOption
                        ? "bg-[#4bd0d5] text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    <AiOutlineBars className="object-cover h-10 w-10" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-1 sm:gap-5 items-center pt-10">
                <div className="w-full flex-1 sm:flex-[40%]">
                  <label>ชื่อ</label>
                  <input
                    type="text"
                    ref={firstname}
                    required
                    className="flex-1 w-full p-2 my-2 rounded-lg border-[#4bd0d5]"
                  />
                </div>
                <div className="w-full flex-1 sm:flex-[40%]">
                  <label>นามสกุล</label>
                  <input
                    type="text"
                    ref={lastname}
                    required
                    className="w-full p-2 my-2 rounded-lg border-[#4bd0d5]"
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
                  className="w-full p-2 my-2 rounded-lg border-[#4bd0d5]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-1 sm:gap-5 mb-2">
                <div className="flex-1">
                  <label>หัวข้อ</label>
                  <select
                    ref={select}
                    className="w-full p-2 my-2 rounded-lg border-[#4bd0d5]"
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
                className="mt-2 form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal bg-clip-padding border-[#4bd0d5] border-solid rounded transition ease-in-out m-0 focus:outline-none "
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
                  className="bg-doh-dark-2 rounded-lg dark:bg-doh-green border border-[#4bd0d5] hover:bg-[#4bd0d5] hover:border-0 hover:text-white duration-75 border-doh-blue px-[40px] py-[10px] h-[44px] text-center text-[24px] flex items-center justify-center"
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
