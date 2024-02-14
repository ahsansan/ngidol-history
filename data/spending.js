export function getStreaming() {
    const data = [
        {
            name: "11th Anniversary Theater",
            tanggal: new Date("2023-09-07T00:15:00+07:00"),
            remark: "",
            via: "Patungan sama taufik",
            harga: 30000
        },
        {
            name: getSetlist("RKJ"),
            tanggal: new Date("2024-01-13T00:15:00+07:00"),
            remark: "STS Ashel",
            via: "Showroom bot sharing",
            harga: 16000
        },
        {
            name: getSetlist("RNN"),
            tanggal: new Date("2024-01-14T00:15:00+07:00"),
            remark: "STS Marsha",
            via: "Showroom bot sharing",
            harga: 16000
        },
        {
            name: getSetlist("RKJ"),
            tanggal: new Date("2024-01-19T00:15:00+07:00"),
            remark: "STS Feni",
            via: "Showroom bot sharing",
            harga: 16000
        },
        {
            name: getSetlist("PD"),
            tanggal: new Date("2024-01-21T00:15:00+07:00"),
            remark: "",
            via: "Showroom bot sharing",
            harga: 16000
        },
        {
            name: getSetlist("PD"),
            tanggal: new Date("2024-02-03T00:15:00+07:00"),
            remark: "Senshuuraku Pajama Gen 10",
            via: "Showroom bot sharing",
            harga: 16000
        },
    ]

    return data;
}

export function getKonser() {
    const data = [
        {
            name: "JKT48 Summer Fest",
            tanggal: new Date("2023-07-02T00:15:00+07:00"),
            paket: "Kingyo Presale",
            harga: 850000
        },
    ]

    return data;
}

export function getOFC() {
    const data = [
        {
            tanggal: new Date("2023-10-22T00:15:00+07:00"),
            expired: new Date("2024-10-22T00:15:00+07:00"),
            harga: 305000
        },
    ]

    return data
}

export function getJKT48Point() {
    const data = [
        {
            tanggal: new Date("2023-10-22T00:15:00+07:00"),
            jumlahPoint: 200000,
            harga: 205205
        },
        {
            tanggal: new Date("2024-01-01T00:15:00+07:00"),
            jumlahPoint: 200000,
            harga: 205205
        },
        {
            tanggal: new Date("2024-02-10T00:15:00+07:00"),
            jumlahPoint: 200000,
            harga: 204400
        },
    ]

    return data
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