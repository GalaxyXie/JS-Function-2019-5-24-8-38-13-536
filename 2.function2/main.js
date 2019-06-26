function palindrome(message){
  // wirte your code here
  var reverseString=message.split("").reverse().join("");
  if(reverseString==message){
  	console.log("true");
  	return true;
  }else{
  	console.log("false");
  	return false;
  }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true