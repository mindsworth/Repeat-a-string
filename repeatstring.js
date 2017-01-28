function repeatStringNumTimes(str, num) {
  // repeat after me
  var count = 0;
  var strArr = [];
  while(count < num ) {
    strArr.push(str);
    count++;
  }
  
  return strArr.join('');
}

repeatStringNumTimes("abc", 3);
