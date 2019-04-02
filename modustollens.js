	//fungsi utama modustollens
	function modusTollens(premis1, premis2){
		document.getElementById("premis1").innerHTML = premis1;
		document.getElementById("premis2").innerHTML = premis2;
		
		//ambil 'q' pada 'premis 1' lalu hapus kata 'jika'
		var premis1q = globalRemover(globalGetQ(premis1, ' maka '), 'jika ');
		
		//hapus kata 'tidak' atau 'tidak benar' pada 'premis 2' 
		var premis2x = globalRemover(premis2, 'tidak benar ');
		var premis2x = globalRemover(premis2x, 'tidak ');
		
		//hapus kata 'tidak' atau 'tidak benar' pada 'premis 1 q' 
		var premis1qx = globalRemover(globalGetQ(premis1, ' maka '), 'tidak benar ');
		var premis1qx = globalRemover(premis1qx, 'tidak ');

		
		console.clear();
		console.log('P1      = ' + premis1);
		console.log('P1 Q    = ' + premis1q);
		console.log('P2      = ' + premis2);
		console.log('P1 Q X  = ' + premis1qx);
		console.log('P2   X  = ' + premis2x);
		console.log('\"' + premis1q + '\" tidak sama dengan \"' + premis2 + '\"');
		console.log('\"' + premis1qx + '\" sama dengan \"' + premis2x + '\"');
		

		//jika premis1p sama dengan premis2x dan jika premis2 merupakan negasi
		if(globalValidator(premis1, ' maka ')	//'premis 1 q' harus berupa 'maka'
			&& premis1q != premis2				//'premis 1 q' tak boleh sama degan 'premis 2'
			&& premis1qx == premis2x			//'premis 1 q' yang telah diproses harus sama dengan 'premis 2' yang telah diproses
		){
			if(globalValidator(premis1q, 'tidak ') && globalValidator(premis2, 'tidak ')){
				document.getElementById("konklusi").innerHTML = "Tidak Valid!";
			}else{
				document.getElementById("konklusi").innerHTML = modusTollensNegasiP(premis1);
			}
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
