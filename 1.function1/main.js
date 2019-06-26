function reverseString(message){
  // wirte your code here
  var reverseString=message.split("").reverse().join("");
  console.log(reverseString);
  return reverseString;
}
reverseString('hello'); // should return 'olleh'