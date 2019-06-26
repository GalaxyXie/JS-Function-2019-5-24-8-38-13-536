function alphabetSort(message){
  // wirte your code here
  //若要区分大小写，那就定义一个大小写混杂的数组即可
  var alphabet=new Array();
 /* for(var i=0;i<26;i++){
  	alphabet[i]=String.fromCharCode(97+i);
  }*/
  for (var i = 0; i <52; i++) {
  	if(i%2==0){
  	alphabet[i]=String.fromCharCode(97+i/2);
  	}
  	else{
  	alphabet[i]=String.fromCharCode(65+(i-1)/2);
  	}
  }
  console.log(alphabet);
  var arr=message.split("");
  var result="";
  for (var i = 0; i < 52; i++) {
  	for (var j = 0; j < arr.length; j++) {
  		if(arr[j]==alphabet[i])
  			result+=arr[j];
  	}
  }
  console.log(result);
  return result;
}
alphabetSort('hello'); // should return 'ehllo'
alphabetSort('hellHasdadfeo'); 