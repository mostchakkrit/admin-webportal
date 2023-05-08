import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import axios from "axios";

/* interface question {
  id: number;
  question: string;
  answer: string;
  publish_to: string;
  createed_dt: string;
  updated_dt: string;
} */

function Question() {

/*   const [Quest, setQuest] = useState<question[]>([]);
  useEffect(() => {
    fetch("https://thaihealthcare_gw.anamai.moph.go.th/faq/staff")
      .then((res) => res.json())
      .then((json) => setQuest(json));
  }, []); */

  const [data, setData ] = useState();

  axios.get('https://thaihealthcare_gw.anamai.moph.go.th/faq/staff')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

  return (
    <>
      <Head>
        <title>คำถามที่พบบ่อย</title>
      </Head>
      <div className="col-span-12 xl:col-end-12 xl:col-start-2 w-full">
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

      <div>
        <p>{data}</p>
      </div>

{/*       <div>
        <ul>
          {Quest.map((Q) => (
            <li key={Q.id}>
              <h3>{Q.question}</h3>
              <h3>{Q.answer}</h3>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}
export default Question;
