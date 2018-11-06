function longestString(arr) {
    var maxLength = arr[0];
    for (var i = 0; i < arr.length; i++) {
      
      if (arr[i].length > maxLength.length) {
        maxLength = arr[i];
      }
    }
    return maxLength;
  }
  
  var myArray = ["first","second","third","longest","saaab","no"];
  var secondArray =['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr']
  console.log(longestString(myArray));
  console.log(longestString(secondArray));