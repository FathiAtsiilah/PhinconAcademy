//------------Persegi Panjang------------//

function luaspersegipanjang(panjang,lebar){       /* Luas Persegi Panjang */
    const luas=panjang*lebar
    const hasil = `Luas Persegi Panjang = ${luas}`
    console.log(hasil);
}
luaspersegipanjang(9,7);

function kelilingpersegipanjang(panjang,lebar) {
    const kelilingpersegipanjang = (panjang + lebar) * 2;
    const hasil = `Keliling Persegi Panjang = ${kelilingpersegipanjang}`
    console.log(hasil);
}
kelilingpersegipanjang(5,10);

//------------Lingkaran------------//
/* Mencari Luas */
const phi = 3.14;
let r = 7;
let luas = phi * (r * r);
console.log('Luas Lingkaran: ' + luas);

/* Mencari Keliling */
let keliling = 2 * phi * r;
console.log('Keliling Lingkaran: ' + keliling);
  
/* Mencari Diameter */
let diameter = 2 * r;
console.log('Diameter Lingkaran: ' + diameter);


//------------Sudut Segitiga------------//
// Sudut yang diberikan
const sudutA = 30; // Sudut A
const sudutB = 60; // Sudut B

// Hitung sudut C
const sudutC = 180 - sudutA - sudutB;
 
console.log(`Sudut C adalah ${sudutC} derajat.`);

// Fungsi untuk menghitung selisih hari antara dua tanggal //
function calculateDateDifference(date1, date2) {
    // Mengonversi tanggal ke objek Date
    const waktuMulai = new Date(date1);
    const waktuSelesai = new Date(date2);

    // Mendapatkan waktu dalam milidetik untuk kedua tanggal
    const startTime = waktuMulai.getTime();
    const endTime = waktuSelesai.getTime();

    // Menghitung selisih waktu dalam milidetik
    const timeDifference = endTime - startTime;

    // Mengonversi milidetik menjadi hari (1 hari = 24 jam * 60 menit * 60 detik * 1000 milidetik)
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

    return dayDifference;
}

// Contoh penggunaan
const date1 = '2024-06-25';
const date2 = '2024-07-01';
const difference = calculateDateDifference(date1, date2);

console.log(`Selisih antara ${date1} dan ${date2} adalah ${difference} hari.`);

//-------------Konversi Waktu----------//
const convertDaysToYearsMonthsDays = (totalDays) => {
    const daysInAYear = 365;
    const daysInAMonth = 30;
  
    const years = Math.floor(totalDays / daysInAYear);
    const remainingDaysAfterYears = totalDays % daysInAYear;
  
    const months = Math.floor(remainingDaysAfterYears / daysInAMonth);
    const days = remainingDaysAfterYears % daysInAMonth;
  
    return {
      years: years,
      months: months,
      days: days,
    };
  }; 
  
  const days = 200;
  const result = convertDaysToYearsMonthsDays(days);
  
  console.log(`${days} hari adalah ${result.years} tahun, ${result.months} bulan, dan ${result.days} hari.`);
  