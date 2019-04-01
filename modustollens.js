	//fungsi utama modustollens
	function modusTollens(premis1, premis2){
		document.getElementById("premis1").innerHTML = premis1;
		document.getElementById("premis2").innerHTML = premis2;
		if(modusTollensGetQ(premis1) == modusTollensCleanPremis(premis2) && modusTollensIsPNegasi(premis2)){
			document.getElementById("konklusi").innerHTML = modusTollensNegasiP(premis1);
		}else{
			document.getElementById("konklusi").innerHTML = "Tidak Valid!";
		}
	}

	//sebuah fungsi untuk menegasikan 'p' pada 'premis 1'
	function modusTollensNegasiP(premis1){
		var hasilP='tidak benar ';
		return hasilP + modusTollensGetP(premis1);
	}

	//sebuah fungsi untuk menghilangkan negasi pada 'premis 2'
	function modusTollensCleanPremis(premis2){
		var mark=0; var key1='tidak '; var key2=' tidak ';
		var startStr=0; var endStr=premis2.length;
		var result;

		for(var i=0; i<premis2.length; i++){
			for(var j=0; j<key1.length; j++){
				if(premis2.charAt(i+j) == key1.charAt(j)){
					//console.log(strQ.charAt(i+j) + ' ' + key1.charAt(j) + ' ' + mark + ' ' + key1.length);
					mark++;
				}else{
					mark=0;
					break;
				}
				if(mark == key1.length){
					endStr=i;
				}
			}
		}
		result = premis2.slice(0, endStr);
		return result + premis2.slice(endStr + key1.length, premis2.length);
	}

	//sebuah fungsi untuk mengecek apakah 'premis 2' berupa negasi
	function modusTollensIsPNegasi(premis2){
		var mark=0; var key1='tidak ';
		var strQ = modusPonensGetQ(premis2);
		
		//algroitma untuk mencari kata 'tidak' pada 'premis 2'
		for(var i=0; i<strQ.length; i++){
			for(var j=0; j<key1.length; j++){
				if(strQ.charAt(i+j) == key1.charAt(j)){
					//console.log(strQ.charAt(i+j) + ' ' + key1.charAt(j) + ' ' + mark + ' ' + key1.length);
					mark++;
				}else{
					mark=0;
					break;
				}
				if(mark == key1.length){
					return true;
				}
			}
		}
		return false;
	}

	//sebuah fungsi untuk mengekstrak 'p' dari 'premis 1'
	function modusTollensGetP(premis1){
		var mark=0; 
		var key1='jika '; var key2=' maka ';
		var startStr=0; var endStr=0;
		
		//algoritma untuk menentukan awal 'p' tanpa 'jika'
		for(var i=0; i<premis1.length; i++){
			for(var j=0; j<key1.length; j++){
				if(premis1.charAt(i+j) == key1.charAt(j)){
					//console.log(premis1.charAt(i+j) + ' ' + key1.charAt(j) + ' ' + mark + ' ' + key1.length);
					mark++;
				}else{
					mark=0;
					break;
				}
				if(mark == key1.length){
					startStr = mark;
				}
			}
		}
		//console.log(startStr + ' ' + endStr); //debug_line_can_be_removed
		
		//algoritma untuk menentukan akhir 'p'
		mark=0;
		for(var i=0; i<premis1.length; i++){
			for(var j=0; j<key2.length; j++){
				if(premis1.charAt(i+j) == key2.charAt(j)){
					mark++;
				}else{
					mark=0;
					break;
				}
				if(mark == key2.length){
					endStr = i;
				}
			}
		}
		//console.log(startStr + ' ' + endStr + ' ' + i); //debug_line_can_be_removed
		
		if(endStr < premis1.length){
			//console.log(premis1.slice(startStr, endStr)); //debug_line_can_be_removed
			return premis1.slice(startStr, endStr);
		}else{
			return 'NULL!';
		}
	}

	//sebuah fungsi untuk mengekstrak 'q' dari 'premis 1'
	function modusTollensGetQ(premis1){
		var mark; var key=' maka ';
		var startStr=0; var endStr=premis1.length;
		
		for(var i=0; i<premis1.length; i++){
			for(var j=0; j<key.length; j++){
				if(premis1.charAt(i+j) == key.charAt(j)){
					mark++;
				}else{
					mark=0;
					break;
				}
				if(mark == key.length){
					startStr = i+key.length;
				}
			}		
		}
		if(startStr < premis1.length){
			//console.log(premis1.slice(i + key.length, premis1.length)); //debug_line_can_be_removed
			return premis1.slice(startStr, endStr);
		}
	}
