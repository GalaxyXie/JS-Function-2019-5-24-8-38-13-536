function countWords(message){
  // wirte your code here
  var count=0;
  var arr=message.split(' ');
  count=arr.length;
  console.log(count);
  return count;

}
countWords('Good morning, I love JavaScript.'); // should return 5