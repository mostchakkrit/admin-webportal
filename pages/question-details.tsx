import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

function questionDetails() {
  const [post, setPost]: any = useState();
  const [loading, setLoading] = useState(true);

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
  return (
    <>
      <Head>
        <title>คำถามที่พบบ่อย</title>
      </Head>
      <div className="col-span-12 xl:col-end-12 xl:col-start-2 w-full">
        <div className="flex gap-3 items-center mb-3 mt-3">
          <h1 className="text-2xl font-bold">คำถามที่พบบ่อย (ทั้งหมด)</h1>
        </div>
        <div className="col-span-12 xl:col-end-12 xl:col-start-2 overflow-auto h-[100vh]">
          <div className="px-4 w-full sm:px-6 lg:px-8">
            <div className="flow-root mt-10">
              <div className="divide-y divide-gray--200 -my-9">
                {post?.data?.slice(0, 3).map((el: any, i: number) => (
                  <div className="py-9" key={el.id}>
                    <p className="text-xl font-semibold">
                      {i + 1}. คำถาม : {el.question} ?
                    </p>
                    <p className="mt-3 text-base">คำตอบ : {el.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default questionDetails;
