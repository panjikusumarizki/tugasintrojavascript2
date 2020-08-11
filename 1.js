//soal no. 1
/*1. method filter()
filter() digunakan untuk membuat array baru berisi elemen yang lolos pengecekan di dalam fungsi anonim
yang dikirim sebagai parameter.*/
//Contoh:
const motor = ['yamaha', 'honda', 'suzuki', 'kawasaki', 'ducati'];

let enamHuruf = motor.filter(huruf => huruf.length > 5);
console.log('1. method filter()');
console.log(enamHuruf);
console.log();

/*2 method sort()
sort() digunakan untuk mengurutkan item dari sebuah array.*/
//Contoh:
let angka = [9, 4, 8, 2, 6];
angka.sort();
console.log('2. method sort()')
console.log(angka);
console.log();

/*3 method split()
split() digunakan untuk memisahkan string menjadi array substring, dan mengembalikan array baru.*/
//Contoh:
let kalimat = 'seribu sembilan ratus sembilan puluh lima';
let pisahkan = kalimat.split(' ');
console.log('3. method split()');
console.log(pisahkan);
console.log();

/*4 method reverse()
reverse() digunakan untuk membalikkan urutan elemen dalam array.*/
//Contoh:
let balikan = pisahkan.reverse();
console.log('4. method reverse()');
console.log(balikan);
console.log();

/*5. method join()
join() digunakan untuk mengembalikan array sebagai string.*/
//Contoh:
let susun = balikan.join(' ');
console.log('5. method join()');
console.log(susun);
console.log();

/*6. method push()
push() digunakan untuk menambahkan item baru ke akhir indeks, dan mengembalikan panjang baru.*/
//Contoh:
let smartphone = ['samsung', 'iphone', 'xiaomi', 'oppo'];
smartphone.push('vivo');
console.log('6. method push()');
console.log(smartphone);
console.log();

/*7. method toString()
toString() digunakan untuk mengembalikan string dengan semua nilai array, dipisahkan dengan koma.*/
//Contoh:
let laptop = ['asus', 'lenovo', 'macbook', 'hp'];
let konversi = laptop.toString();
console.log('7. method toString()');
console.log(konversi);
console.log();

/*8. method shift()
shift() digunakan untuk menghilangkan item pertama dari array.*/
//Contoh:
let mobil = ['toyota', 'daihatsu', 'mazda', 'mitsubishi', 'suzuki'];
mobil.shift();
console.log('8. method shift()');
console.log(mobil);
console.log();

/*9. method concat()
concat() digunakan untuk menggabungkan dua atau lebih array.*/
//Contoh:
let pertama = [1,2,3];
let kedua = [4,5,6];
let gabungkan = pertama.concat(kedua);
console.log('9. method concat()');
console.log(gabungkan);
console.log();

/*10. method includes()
includes() digunakan untuk menentukan apakah sebuah array berisi elemen yang ditentukan.*/
let negara = ['Indonesia', 'Perancis', 'Austria', 'Swiss'];
let cek = negara.includes('Italia');
console.log('10. method includes()');
console.log(cek);