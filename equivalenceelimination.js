	function equElim(premis1, premis2){
		document.getElementById("premis1").innerHTML = premis1;
		document.getElementById("premis2").innerHTML = premis2;

		premis2 = globalRemover(premis2, 'jika ');

		if(globalValidator(premis1, ' jika dan hanya jika ') && globalValidator(premis2, ' maka ') && 
			(globalGetP(premis1, ' jika dan hanya jika ') == globalGetP(premis2, ' maka ') 
			&& globalGetQ(premis1, ' jika dan hanya jika ') == globalGetQ(premis2, ' maka ')) 
		){
			document.getElementById("konklusi").innerHTML = equElimResult(premis1, premis2);
		}else{
			document.getElementById("konklusi").innerHTML = "Tidak Valid!";
		}
	}
		
	function equElimResult(premis1, premis2){
		
		var premis1p = globalGetP(premis1,' jika dan hanya jika ');
		var premis1q = globalGetQ(premis1,' jika dan hanya jika ');
		var premis2p = globalGetP(premis2,' maka ');
		var premis2q = globalGetQ(premis2,' maka ');
		
		return 'jika ' + premis2q + ' maka ' + premis2p;
	}
