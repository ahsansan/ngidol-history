import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import { getHistoryTheater } from "../data/theater";
import { getOFC } from "../data/spending";
import { getDate } from "../utils/date";
import { useState, useEffect } from "react";

export default function Home() {
  const [jumlahKedatangan, setJumlahKedatangan] = useState(0);
  const [ofcExp, setOfcExp] = useState("");

  useEffect(() => {
    const data = getHistoryTheater()
    const ofc = getOFC()
    
    const ofcOrdered = [...ofc].sort((a, b) => b.expired - a.expired);
    const lastOfc = ofcOrdered[0].expired;

    const count = data.reduce((acc, item) => {
      return item.hasil === 2 ? acc + 1 : acc;
    }, 0);
    
    setJumlahKedatangan(count);
    setOfcExp(lastOfc);
  }, []);
  return (
    <>
    <Head>
        <title>Ngidol History by Ahsan</title>
        <meta name="description" content="Cuma Ngidol History pribadi dari Ahsan" />
        <meta name="robots" content="noindex, follow" />
        <link rel="icon" href="/favicon.png" />
    </Head>
    <Layout>
      <main>
        <div className="flex flex-col md:flex-row items-center flex-wrap mt-10 px-3">
          <div>
            <Image src="/lulu_salsabila.webp" width={180} height={254}/>
          </div>
          <div className="md:ml-16 mt-3">
            <h2 className="font-bold">Oshimen</h2>
            <p className="text-[#ff005f]">Lulu Salsabila</p>
            <h2 className="font-bold mt-3">OFC Expired Pada</h2>
            <p className="text-[#ff005f]">{getDate(ofcExp)}</p>
            <h2 className="font-bold mt-3">Jumlah Keatangan Theater</h2>
            <p className="text-[#ff005f]">{jumlahKedatangan} Kali</p>
            <br className="mt-2"/>
            <Link href="https://jkt48.com/theater/schedule?lang=id"><button className="bg-[#CD0C0D] text-white px-5 py-3 font-bold rounded hover:underline hover:bg-red-700">Cek Schedule</button></Link>
          </div>
        </div>
      </main>
    </Layout>
    </>
  )
}
