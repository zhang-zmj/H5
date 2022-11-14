

/*
1、遍历给定数组，找出最小元素，将其与首元素交换
2、内循环负责找出最小元素的下标，外循环负责将内循环找出的最小元素放到有序的位置上
*/ 
function selectSort(arr) {

  var len = arr.length;
  var min = 0;

  for (let i = 0; i < len; i++) {
    min = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]

  }

  return arr

}

