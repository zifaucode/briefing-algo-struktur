===========================================================================================
===========================================================================================

function getKelas(kelas) {
    switch (kelas) {
      case 7 :
      case 8 :
      case 9 :
        console.log('SMP');
        break;
      case 10 :
      case 11 :
      case 12 :
        console.log('SMA');
        break;
      default:
        console.log('N/A')
    }
   
}

getKelas(11);

===========================================================================================
===========================================================================================

function getAngka(arr) {
  let angkaSaja = arr;
  let sum = 0;

  for (let i = 0; i < angkaSaja.length; i++ ) {
    if (angkaSaja[i] < 10) {
      continue;
    }
    if (angkaSaja[i] > 20) {
      break;
    }
    sum += angkaSaja[i];
  }
  return sum; 
 }

console.log(getAngka([10, 20, 12]));

===========================================================================================
===========================================================================================

function getText(text, n) {
  let textSaja = text;
  let banyakText = n;
  let fauziGanteng = '';
  
  for (let i = 0; i < banyakText; i++ ) {
     fauziGanteng =  textSaja + ',' + fauziGanteng;
  }
  console.log(fauziGanteng);
  
  if (fauziGanteng.length > 10) {
      console.log("Karakter melebihi 10 karakter");
  } else {
     console.log("Karakter sesuai kriteria");
  }

}
getText('fauzi', 5);

===========================================================================================
===========================================================================================
