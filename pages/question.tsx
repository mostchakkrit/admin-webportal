import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

function Question() {
  const [post, setPost]: any = useState();
  const [loading, setLoading] = useState(true);
  let textArea: any = useRef();
  let select: any = useRef();
  let firstname: any = useRef();
  let lastname: any = useRef();
  let radio: any = useRef();
  
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
        "https://thaihealthcare_gw.anamai.moph.go.th/hbapi/feedback/sunmit/staff",
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
      <div className="col-span-12 xl:col-end-12 xl:col-start-2 w-full">
        <div className="flex gap-3 items-center mb-3 mt-3">
          <h1 className="text-2xl font-bold">คำถามที่พบบ่อย</h1>
        </div>
        <div className="col-span-12 xl:col-end-12 xl:col-start-2 overflow-auto h-[400px]">
          <div className="px-4 w-full sm:px-6 lg:px-8">
            <div className="flow-root mt-10">
              <div className="divide-y divide-gray--200 -my-9">
                {post?.data?.slice(0, 3).map((el: any) => (
                  <div className="py-9" key={el.id}>
                    <p className="text-xl font-semibold">
                      คำถาม : {el.question} ?
                    </p>
                    <p className="mt-3 text-base">คำตอบ : {el.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <form method="post" onSubmit={(f: any) => submit(f)}>
        <div className="w-full px-3  pb-[20px] grid grid-cols-12 gap-y-8">
          <div className="gap-3 col-span-12 items-center mb-3 mt-3">
            <h1 className="text-2xl font-bold">คำแนะนำติชม</h1>
          </div>
          <div className="col-span-12 xl:col-end-11 xl:col-start-3">
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
                <div className="w-full flex-1 sm:flex-[20%] my-2 sm:pt-6">
                  <input
                    type="checkbox"
                    id="html"
                    name="fav_language"
                    value="HTML"
                    className="mr-3 rounded-lg border"
                    ref={radio}
                    onClick={() => onUnknow()}
                  />
                  <label htmlFor="html">ไม่ระบุตัวตัน</label>
                  <br></br>
                </div>
              </div>

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
                rows={4}
                ref={textArea}
                required
                className="mt-2 form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:outline-none"
              ></textarea>
            </div>
            <div className="mt-5 flex justify-center">
              <button
                type="submit"
                className="bg-doh-dark-2 rounded-lg dark:bg-doh-green border hover:bg-[#4bd0d5] hover:border-0 hover:text-white duration-75 border-doh-blue px-[40px] py-[10px] h-[44px] text-center text-[24px] flex items-center justify-center"
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Question;
