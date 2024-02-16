import Head from "next/head";
import Layout from "../components/Layout";
import { getHistoryTheater } from "../data/theater";
import { getDate } from "../utils/date";
import { useState, useEffect } from 'react';

export default function HistoryTheater() {
    const [totalAppearances, setTotalAppearances] = useState(0);
    const [totalWins, setTotalWins] = useState(0);
    const [totalWinPercentage, setTotalWinPercentage] = useState(0);
    const [setlist, setSetlist] = useState([]);
    const [setlistData, setSetlistData] = useState([]);
    const [kedatangan, setKedatangan] = useState([]);

    useEffect(() => {
        // Data yang diberikan
        const data = getHistoryTheater()
        const dataHistoryOrder = [...data].sort((a, b) => b.tanggala - a.tanggala);
        setSetlist(dataHistoryOrder)

        const setlistStats = {};
        let totalAppearancesCount = 0;
        let totalWinsCount = 0;

        data.forEach(item => {
        if (!setlistStats[item.setlist]) {
            setlistStats[item.setlist] = { appearances: 0, wins: 0 };
        }
        setlistStats[item.setlist].appearances++;
        if (item.hasil === 2) {
            setlistStats[item.setlist].wins++;
        }
        totalAppearancesCount++;
        if (item.hasil === 2) {
            totalWinsCount++;
        }
        });

        const setlistData = Object.keys(setlistStats).map(setlist => ({
        setlist,
        appearances: setlistStats[setlist].appearances,
        wins: setlistStats[setlist].wins,
        winPercentage: ((setlistStats[setlist].wins / setlistStats[setlist].appearances) * 100).toFixed(2)
        }));

        const totalWinPercentageValue = ((totalWinsCount / totalAppearancesCount) * 100).toFixed(2);

        setSetlistData(setlistData);
        setTotalAppearances(totalAppearancesCount);
        setTotalWins(totalWinsCount);
        setTotalWinPercentage(totalWinPercentageValue);
    }, []);

    useEffect(() => {
        const data = getHistoryTheater()
        const filteredData = data.filter((hasil) => {
            return hasil.hasil === 2
        })
        setKedatangan(filteredData);
    }, []);

    return(
        <>
        <Head>
            <title>Theater History - Ahsan</title>
            <meta name="description" content="Cuma Ngidol History Theater pribadi dari Ahsan" />
            <meta name="robots" content="noindex, follow" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Layout>
        <main>
        {/* Winrate */}
        <h2 className="mb-5 mt-10 text-[#ff005f] uppercase font-bold text-xl text-center underline">Data Winrate Theater</h2>
            <div className="w-full text-sm text-left rtl:text-right text-[#333333] overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-xs text-[#ff005f] uppercase bg-[#fdd9e8]">
                    <tr>
                        <th scope="col" className="px-6 py-3">Setlist</th>
                        <th scope="col" className="px-6 py-3">Total Apply</th>
                        <th scope="col" className="px-6 py-3">Total Kemenangan</th>
                        <th scope="col" className="px-6 py-3">Winrate</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    {setlistData.map(item => (
                        <tr key={item.setlist}>
                            <td className="px-6 py-4 border border-[#fdd9e8]">{item.setlist}</td>
                            <td className="px-6 py-4 border border-[#fdd9e8]">{item.appearances}</td>
                            <td className="px-6 py-4 border border-[#fdd9e8]">{item.wins}</td>
                            <td className="px-6 py-4 border border-[#fdd9e8]">{item.winPercentage}%</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="text-xs font-bold text-[#ff005f] uppercase bg-[#fdd9e8] mt-3 px-6 py-3">
                    <h3>Total Keseluruhan</h3>
                </div>
                <div className="bg-white px-6 py-4 border border-[#fdd9e8] mb-1">
                    <p>Total Apply: <span className="font-bold ml-1">{totalAppearances}</span></p>
                    <p>Total Kemenangan: <span className="font-bold ml-1">{totalWins}</span></p>
                    <p>Winrate Keseluruhan: <span className="font-bold ml-1">{totalWinPercentage}%</span></p>
                </div>
            </div>
            {/* Sejarah Kedatangan */}
            <h2 className="mb-5 mt-10 text-[#ff005f] uppercase font-bold text-xl text-center underline">Sejarah Kedatangan Theater</h2>
            <div className="w-full text-sm text-left rtl:text-right text-[#333333] overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-xs text-[#ff005f] uppercase bg-[#fdd9e8]">
                    <tr>
                        <th scope="col" className="px-6 py-3">Nama Setlist</th>
                        <th scope="col" className="px-6 py-3">Tanggal Show</th>
                    </tr>
                    </thead>
                    <tbody>
                        {kedatangan.map((data, index) => (
                            <tr className="bg-white" key={index}>
                                <td className="px-6 py-4 border border-[#fdd9e8]">{data.setlist} {data.remark ? <span>{" "} - <span className="text-[#ff005f]">{data.remark}</span></span> : ""}</td>
                                <td className="px-6 py-4 border border-[#fdd9e8]">{getDate(data.tanggal)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Sejarah Semua Apply */}
            <h2 className="mb-5 mt-10 text-[#ff005f] uppercase font-bold text-xl text-center underline">Sejarah Apply Theater All Time</h2>
            <div className="w-full text-sm text-left rtl:text-right text-[#333333] overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-xs text-[#ff005f] uppercase bg-[#fdd9e8]">
                    <tr>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Tanggal Apply</th>
                        <th scope="col" className="px-6 py-3">Nama Setlist</th>
                        <th scope="col" className="px-6 py-3">Tanggal Show</th>
                        <th scope="col" className="px-6 py-3">Tipe</th>
                    </tr>
                    </thead>
                    <tbody>
                        {setlist.map((data, index) => (
                            <tr className="bg-white" key={index}>
                                <td className="px-6 py-4 border border-[#fdd9e8]">{data.hasil === 1 ? <span className="text-orange-500">Tunggu</span> : data.hasil === 2 ? <span className="text-green-500">Menang</span> : <span className="text-red-500">Kalah</span>}</td>
                                <td className="px-6 py-4 border border-[#fdd9e8]">{getDate(data.tanggala)}</td>
                                <td className="px-6 py-4 border border-[#fdd9e8]">{data.setlist}</td>
                                <td className="px-6 py-4 border border-[#fdd9e8]">{getDate(data.tanggal)}</td>
                                <td className="px-6 py-4 border border-[#fdd9e8]">{data.tipe === 1 ? "OFC" : "GEN"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
        </Layout>
        </>
    )
}