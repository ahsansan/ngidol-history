export function convertToRupiah(angka) {
    if (angka === undefined || angka === null) {
        return "Invalid input";
    }

    let rupiah = "";
    const angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++) {
    if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
    }

    return (
    "Rp. " +
    rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
}

export function convertToPoint(angka) {
    if (angka === undefined || angka === null) {
        return "Invalid input";
    }

    let rupiah = "";
    const angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++) {
    if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
    }

    return (
    rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    ) + " P";
}