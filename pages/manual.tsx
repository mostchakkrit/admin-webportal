import Head from "next/head";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Manual() {
  const { data: session } = useSession();
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
      
      <div className="bg-gradient-to-r from-gra-s to-gra-e bg-right bg-no-repeat h-64 flex items-center relative rounded-md">
        <div className="lg:ml-32 md:ml-10 xs:ml-5 z-10">
          <div className="text-white mb-4">
            <h1 className="text-2xl font-bold">คู่มือการใช้งานระบบ</h1>
            <p className="text-base">คู่มือการใช้งานระบบ</p>
          </div>
          <button className="rounded-full  w-44 h-10 bg-white hover:scale-105 hover:duration-200">
            xxx
          </button>
        </div>
      </div>
    </>
  );
}
export default Manual;
