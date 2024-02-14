import Head from "next/head";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { getDate } from "../utils/date";
import { convertToRupiah, convertToPoint } from "../utils/convertToRupiah";
import { getKonser, getJKT48Point, getOFC, getStreaming } from "../data/spending";

export default function HistorySpending() {
    const [konser, setKonser] = useState([]);
    const [point, setPoint] = useState([]);
    const [ofc, setOfc] = useState([]);
    const [streaming, setStreaming] = useState([]);
    const [totalSpending, setTotalSpending] = useState(0);

    useEffect(() => {
        const konser = getKonser()
        const point = getJKT48Point()
        const ofc = getOFC()
        const streaming = getStreaming()

        const orderedKonser = [...konser].sort((a, b) => b.tanggal - a.tanggal);
        const orderedPoint = [...point].sort((a, b) => b.tanggal - a.tanggal);
        const orderedOfc = [...ofc].sort((a, b) => b.tanggal - a.tanggal);
        const orderedStreaming = [...streaming].sort((a, b) => b.tanggal - a.tanggal);

        const totalKonser = konser.reduce((total, item) => total + item.harga, 0);
        const totalPoint = point.reduce((total, item) => total + item.harga, 0);
        const totalOfc = ofc.reduce((total, item) => total + item.harga, 0);
        const totalHargaStreaming = streaming.reduce((total, item) => total + item.harga, 0);

        const totalSpending = totalKonser + totalPoint + totalOfc + totalHargaStreaming;

        setKonser(orderedKonser);
        setPoint(orderedPoint);
        setOfc(orderedOfc);
        setStreaming(orderedStreaming);
        setTotalSpending(totalSpending);
    }, [])

    return(
        <div>
            <Head>
                <title>Spending History - Ahsan</title>
                <meta name="description" content="Cuma Ngidol History Spending pribadi dari Ahsan" />
                <meta name="robots" content="noindex, follow" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Layout>
                <main>
                    <h2 className="mb-5 mt-10 text-[#ff005f] uppercase font-bold text-xl text-center underline">Total Spending All Time</h2>
                        <div className="w-full text-sm text-left rtl:text-right text-[#333333]">
                        <table className="table-auto w-full">
                            <tbody>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 border border-[#fdd9e8]"><span className="text-[#ff005f] text-xl font-bold">{convertToRupiah(totalSpending)}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 className="mb-5 mt-10 text-[#ff005f] uppercase font-bold text-xl text-center underline">History Kedatangan Konser</h2>
                        <div className="w-full text-sm text-left rtl:text-right text-[#333333]">
                        <table className="table-auto w-full">
                            <thead className="text-xs text-[#ff005f] uppercase bg-[#fdd9e8]">
                            <tr>
                                <th scope="col" className="px-6 py-3">Nama Konser</th>
                                <th scope="col" className="px-6 py-3">Paket</th>
                                <th scope="col" className="px-6 py-3">Tanggal</th>
                                <th scope="col" className="px-6 py-3">Harga</th>
                            </tr>
                            </thead>
                            <tbody>
                                {konser.map((data, index) => (
                                    <tr className="bg-white" key={index}>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{data.name}</td>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{data.paket}</td>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{getDate(data.tanggal)}</td>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{convertToRupiah(data.harga)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h2 className="mb-5 mt-10 text-[#ff005f] uppercase font-bold text-xl text-center underline">History Pembelian Live Streaming</h2>
                        <div className="w-full text-sm text-left rtl:text-right text-[#333333]">
                        <table className="table-auto w-full">
                            <thead className="text-xs text-[#ff005f] uppercase bg-[#fdd9e8]">
                            <tr>
                                <th scope="col" className="px-6 py-3">Nama Acara / Setlist</th>
                                <th scope="col" className="px-6 py-3">Beli Via</th>
                                <th scope="col" className="px-6 py-3">Tanggal</th>
                                <th scope="col" className="px-6 py-3">Harga</th>
                            </tr>
                            </thead>
                            <tbody>
                                {streaming.map((data, index) => (
                                    <tr className="bg-white" key={index}>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{data.name} {data.remark ? <p className="text-[#ff005f]">{data.remark}</p> : ""}</td>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{data.via}</td>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{getDate(data.tanggal)}</td>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{convertToRupiah(data.harga)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h2 className="mb-5 mt-10 text-[#ff005f] uppercase font-bold text-xl text-center underline">History Top Up JKT48 Point</h2>
                        <div className="w-full text-sm text-left rtl:text-right text-[#333333]">
                        <table className="table-auto w-full">
                            <thead className="text-xs text-[#ff005f] uppercase bg-[#fdd9e8]">
                            <tr>
                                <th scope="col" className="px-6 py-3">Tanggal</th>
                                <th scope="col" className="px-6 py-3">Jumlah Point</th>
                                <th scope="col" className="px-6 py-3">Harga</th>
                            </tr>
                            </thead>
                            <tbody>
                                {point.map((data, index) => (
                                    <tr className="bg-white" key={index}>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{getDate(data.tanggal)}</td>
                                        <td className="px-6 py-4 border border-[#fdd9e8] text-[#ff005f]">{convertToPoint(data.jumlahPoint)}</td>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{convertToRupiah(data.harga)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h2 className="mb-5 mt-10 text-[#ff005f] uppercase font-bold text-xl text-center underline">History OFC (Offical Fans Club)</h2>
                        <div className="w-full text-sm text-left rtl:text-right text-[#333333]">
                        <table className="table-auto w-full">
                            <thead className="text-xs text-[#ff005f] uppercase bg-[#fdd9e8]">
                            <tr>
                                <th scope="col" className="px-6 py-3">Tanggal</th>
                                <th scope="col" className="px-6 py-3">Expired Pada</th>
                                <th scope="col" className="px-6 py-3">Harga</th>
                            </tr>
                            </thead>
                            <tbody>
                                {ofc.map((data, index) => (
                                    <tr className="bg-white" key={index}>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{getDate(data.tanggal)}</td>
                                        <td className="px-6 py-4 border border-[#fdd9e8] text-[#ff005f]">{getDate(data.expired)}</td>
                                        <td className="px-6 py-4 border border-[#fdd9e8]">{convertToRupiah(data.harga)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </Layout>
        </div>
    )
}