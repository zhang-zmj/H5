
/*
1、内循环前面较小的和后面较大的互换位置
2、外循环数组循环的次数
*/
function bubbleSort(arr) {

  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr

}

