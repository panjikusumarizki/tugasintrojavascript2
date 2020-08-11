const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal < nilaiAkhir){
        if (dataArray.length < 5){
            return 'Jumlah data dalam dataArray harus lebih dari 5 !';
        } else {
            let filterAngka = dataArray.filter(angka => angka > nilaiAwal && angka < nilaiAkhir);
            if (filterAngka.length != 0){
                let sorting = filterAngka.sort((a,b) => a-b);
                return sorting;
            } else {
                return 'Jumlah angka dalam dataArray tidak ada !';
            }
        }
    } else {
         return 'Nilai akhir harus lebih besar dari nilai awal !';
    }
};

console.log(seleksiNilai(13, 20, [2, 5, 10, 12, 20]));