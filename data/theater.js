export function getHistoryTheater() {
    // Hasil 1 Tunggu 2 Menang 3 Kalah
    // Tipe 1 OFC 2 GEN
    const dataHistory = [
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2024-02-18T00:15:00+07:00"),
            tanggala: new Date("2024-02-12T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2024-02-25T00:15:00+07:00"),
            tanggala: new Date("2024-02-23T00:17:00+07:00"),
            hasil: 1,
            tipe: 2
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2024-02-25T00:15:00+07:00"),
            tanggala: new Date("2024-02-19T00:17:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2024-02-22T00:15:00+07:00"),
            tanggala: new Date("2024-02-20T00:15:00+07:00"),
            hasil: 3,
            tipe: 2
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2024-02-22T00:15:00+07:00"),
            tanggala: new Date("2024-02-19T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2024-02-18T00:15:00+07:00"),
            tanggala: new Date("2024-02-16T00:15:00+07:00"),
            hasil: 3,
            tipe: 2
        },
        {
            setlist: getSetlist("SNM"),
            tanggal: new Date("2024-02-17T00:15:00+07:00"),
            tanggala: new Date("2024-02-15T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2023-10-27T00:15:00+07:00"),
            tanggala: new Date("2023-10-23T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2023-11-12T00:15:00+07:00"),
            tanggala: new Date("2023-11-06T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2023-11-16T00:15:00+07:00"),
            tanggala: new Date("2023-11-13T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2023-11-16T00:15:00+07:00"),
            tanggala: new Date("2023-11-14T00:15:00+07:00"),
            hasil: 3,
            tipe: 2
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2023-11-26T00:15:00+07:00"),
            tanggala: new Date("2023-11-19T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2023-11-26T00:15:00+07:00"),
            tanggala: new Date("2023-11-24T00:15:00+07:00"),
            hasil: 3,
            tipe: 2
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2023-12-08T00:15:00+07:00"),
            tanggala: new Date("2023-12-06T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2023-12-23T00:15:00+07:00"),
            tanggala: new Date("2023-12-20T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2023-12-27T00:15:00+07:00"),
            tanggala: new Date("2023-12-25T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2023-12-27T00:15:00+07:00"),
            tanggala: new Date("2023-12-25T00:17:00+07:00"),
            hasil: 3,
            tipe: 2
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2024-01-07T00:15:00+07:00"),
            tanggala: new Date("2024-01-02T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2024-01-06T00:15:00+07:00"),
            tanggala: new Date("2024-01-02T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2024-01-06T00:15:00+07:00"),
            tanggala: new Date("2024-01-05T00:15:00+07:00"),
            hasil: 3,
            tipe: 2
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2024-01-07T00:15:00+07:00"),
            tanggala: new Date("2024-01-06T00:15:00+07:00"),
            hasil: 3,
            tipe: 2
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2024-01-14T00:15:00+07:00"),
            tanggala: new Date("2024-01-07T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2024-01-13T00:15:00+07:00"),
            tanggala: new Date("2024-01-07T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2024-01-19T00:15:00+07:00"),
            tanggala: new Date("2024-01-15T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2024-01-20T00:15:00+07:00"),
            tanggala: new Date("2024-01-16T00:15:00+07:00"),
            hasil: 2,
            tipe: 1,
            remark: "Last Show Yessica Tamara"
        },
        {
            setlist: getSetlist("PD"),
            tanggal: new Date("2024-01-21T00:15:00+07:00"),
            tanggala: new Date("2024-01-18T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("PD"),
            tanggal: new Date("2024-01-21T00:15:00+07:00"),
            tanggala: new Date("2024-01-19T00:15:00+07:00"),
            hasil: 3,
            tipe: 2
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2024-01-25T00:15:00+07:00"),
            tanggala: new Date("2024-01-23T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("RKJ"),
            tanggal: new Date("2024-01-25T00:15:00+07:00"),
            tanggala: new Date("2024-01-23T00:17:00+07:00"),
            hasil: 3,
            tipe: 2
        },
        {
            setlist: getSetlist("PD"),
            tanggal: new Date("2024-01-27T00:15:00+07:00"),
            tanggala: new Date("2024-01-24T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("PD"),
            tanggal: new Date("2024-01-27T00:15:00+07:00"),
            tanggala: new Date("2024-01-25T00:15:00+07:00"),
            hasil: 3,
            tipe: 2
        },
        {
            setlist: getSetlist("RNN"),
            tanggal: new Date("2024-02-08T00:15:00+07:00"),
            tanggala: new Date("2024-02-05T00:15:00+07:00"),
            hasil: 3,
            tipe: 1
        },
        {
            setlist: getSetlist("SNM"),
            tanggal: new Date("2024-02-11T00:15:00+07:00"),
            tanggala: new Date("2024-02-06T00:15:00+07:00"),
            hasil: 2,
            tipe: 1,
            remark: "Last Show Adzana Shaliha"
        },
    ]

    return dataHistory;
}

export function getSetlist(singkatan) {
    const dataSetlist = [
        {
            nick: "RKJ",
            name: "Aturan Anti Cinta - 恋愛禁止条例",
        },
        {
            nick: "RNN",
            name: "Cara Meminum Ramune - ラムネの飲み方"
        },
        {
            nick: "SNM",
            name: "Tunas di Balik Seragam - 制服の芽"
        },
        {
            nick: "PD",
            name: "Pajama Drive - パジャマドライブ"
        }
    ]

    const result = dataSetlist.find(item => item.nick === singkatan);

    return result ? result.name : "Setlist tidak ditemukan";
}