 const nama = "Nia"
        let nomorHp = '0832467325463'
        noHp = '08xxxxxxx'
        let hasilPenjualanHariIni = "Rp 3.000.000"
        let hasil_penjualan_hariIni = "Rp 3.000.000"
        var alamat = "Jakarta"
        alamat = "Lampung"

        const today = new Date();
        document.getElementById('root').innerHTML = today

        function hitungTotalBayar() {
            const nik = document.getElementById('nik').value
            if(nik.length < 14) {
                document.getElementById('errorMsg').innerHTML = "NIK minimal 14 digit."
            }else if(nik == ''){
                    document.getElementById('errorMsg').innerHTML = "NIK tidak boleh kosong"

            }else{
                document.getElementById('errorMsg').innerHTML = ""
                document.getElementById('nik').value = ""
                document.getElementById('resultNIK').innerHTML = "NIK " + nik +" Terdaftar!"
            }
        }
        