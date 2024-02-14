export function getFullTime(timeString) {
  const time = new Date(timeString);
  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

const weekday = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const date = time.getDate();
  const monthIndex = time.getMonth();
  const year = time.getFullYear();
  const dayIndex = time.getDay();

  const result = `${weekday[dayIndex]}, ${date} ${month[monthIndex]} ${year}`;

  return result;
}

export function getDate(timeString) {
  const time = new Date(timeString);
  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const date = time.getDate();
  const monthIndex = time.getMonth();
  const year = time.getFullYear();

  const result = `${date} ${month[monthIndex]} ${year}`;

  return result;
}
