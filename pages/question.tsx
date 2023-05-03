import React from "react";
import Head from "next/head";
import Link from "next/link";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
function Question() {
  return (
    <>
      <Head>
        <title>คำถามที่พบบ่อย</title>
      </Head>
      <div className="col-span-12 xl:col-end-12 xl:col-start-2 w-3/4">
        <div className="flex gap-3 items-center mb-3 mt-3">
          <h1 className="text-2xl font-bold">คำถามที่พบบ่อย</h1>
        </div>
        <div>
          <div>
            <p className="text-xl font-bold">How to create an account ?</p>
            <p className="mt-3 text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              facere repellat nostrum, ut rem voluptates minus eveniet sit,
              delectus temporibus vero adipisci minima ipsum inventore
              voluptatibus. Dolore odio ipsa voluptatibus!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Question;
