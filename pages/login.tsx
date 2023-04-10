import { useState } from "react";
import logo from "../public/images/login/logo-login.png";
import Image from "next/image";

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
    e.preventDefault();
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
      <div className="flex h-screen">
        <div className="flex xs:w-full md:w-1/2 justify-center items-center">
          <div className="">
            <div className="flex justify-center mb-10">
              <Image src={logo} width="150" alt="banner" />
            </div>
            <form onSubmit={formSubmit} className="gap-2">
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
              <input type="checkbox" className="appearance-none indeterminate:bg-gray-300 ..." />
              <button type="submit">Send</button>
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
