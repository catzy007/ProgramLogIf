	//fungsi utama modustollens
	function modusTollens(premis1, premis2){
		document.getElementById("premis1").innerHTML = premis1;
		document.getElementById("premis2").innerHTML = premis2;
		
		//ambil 'q' pada 'premis 1' lalu hapus kata 'jika'
		var premis1q = globalRemover(globalGetQ(premis1, ' maka '), 'jika ');
		
		//hapus kata 'tidak' atau 'tidak benar' pada 'premis 2' 
		var premis2x = globalRemover(premis2, 'tidak benar ');
		var premis2x = globalRemover(premis2x, 'tidak ');
		
		//console.log(premis1q); //debug_line_can_be_removed
		//console.log(premis2x); //debug_line_can_be_removed
		
		//jika premis1p sama dengan premis2x dan jika premis2 merupakan negasi
		if(globalValidator(premis1, ' maka ') 
			&& premis1q == premis2x 
			&& globalValidator(premis2, 'tidak ')
		){
			document.getElementById("konklusi").innerHTML = modusTollensNegasiP(premis1);
		}else{
			document.getElementById("konklusi").innerHTML = "Tidak Valid!";
		}
	}

	//sebuah fungsi untuk menegasikan 'p' pada 'premis 1'
	function modusTollensNegasiP(premis1){
		var hasilP1='tidak benar ';
		var hasilP2=globalRemover(globalGetP(premis1, ' maka '), 'jika ');
		
		return hasilP1 + hasilP2;
	}
