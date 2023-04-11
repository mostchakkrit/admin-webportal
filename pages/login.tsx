import { useState } from "react";
import logo from "../public/images/login/logo-login.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Login() {
  /*   const [query, setQuery] = useState({
    name: "",
    email: "",
  }); */
  /*   const handleParam = () => (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 */
  const formSubmit = (e: any) => {
    /* e.preventDefault(); */ /* use */
    window.location.href = "www.google.com";
    console.log("test");
    /*    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/{your-form-endpoint}", {
      method: "POST",
      body: formData,
    }).then(() => setQuery({ name: "", email: "" })); */
  };
  return (
    <>
      <Head>
        <title>เข้าใช้งานระบบ</title>
      </Head>
      <div className="flex h-screen">
        <div className="flex xs:w-full md:w-1/2 justify-center items-center">
          <div className="">
            <div className="flex justify-center mb-10">
              <Image src={logo} width="150" alt="banner" />
            </div>
            <form onSubmit={formSubmit}>
              <div className="flex justify-center my-5">
                <input
                  type="text"
                  placeholder="ชื่อผู้ใช้งาน"
                  className="bg-slate-200 placeholder-black text-gray-900 text-sm rounded-3xl outline-slate-200 w-96 p-2.5
                  focus:bg-stone-100 focus:border-slate-100 focus:placeholder-slate-300 hover:border-slate-100"
                  required
                />
              </div>
              <div className="flex justify-center my-5">
                <input
                  type="password"
                  placeholder="รหัสผ่าน"
                  className="bg-slate-200 placeholder-black text-gray-900 text-sm rounded-3xl outline-slate-200 w-96 p-2.5
                  focus:bg-stone-100 focus:border-slate-100 focus:placeholder-slate-300 hover:border-slate-100"
                  required
                />
              </div>
              <div className="flex justify-between items-center mb-4 mx-2">
                <div className="flex">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="accent-green-800 text-white  cursor-pointer"
                  />
                  <label
                    htmlFor="remember-me"
                    className="w-full ml-2 text-sm cursor-pointer"
                  >
                    จดจำบัญชิผู้ใช้งาน
                  </label>
                </div>
                <Link href="/login" className="cursor-pointer">
                  <div className="flex text-sm">ลืมรหัสผ่าน ?</div>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link href="/steps">
                  <button
                    type="submit"
                    className="bg-gradient-to-r w-[300px] h-[60px] from-gra-s rounded-full to-gra-e text-white"
                  >
                    เข้าสู่ระบบ
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-4">
                <Link href="">
                  <span className="text-sm">
                    แบบสอบถามความพึงพอใจในการใช้งานระบบ
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="xs:hidden md:block flex w-1/2 justify-center bg-login-img">
          {/* <Image src={banner} alt="banner" /> */}
        </div>
      </div>
    </>
  );
}
