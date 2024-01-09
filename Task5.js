//////Do the below programs in anonymous function & IIFE.

//////////////a.Print odd numbers in an array

let arr1 = [1,2,3,4,5]
let odds = arr1.filter(n => n%2)
console.log(odds)

//////////////b.Convert all the strings to title caps in a string array

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase("welcome to guvigeeks"));


/////////////c.Sum of all numbers in an array

function sumofallNumber(N){
    let sum = 0
    for(var i = 1; i<=N; i++)
    {  
        sum = sum + i;       
    }
 return sum;
}
console.log(sumofallNumber(10));


//////////////d.Return all the prime numbers in an array

function primenumOf(arr){
    for (var i=0 ; i<=arr.length; i++) {
        if((i%2===0) || (i%3===0))
            continue;
        console.log(i);
    }
}
primenumOf([1,2,3,4,5,6,7,8,9,10,11,12,13]);


///////////g.Remove duplicates from an array

var arr = ["apple", "mango", "apple",
"orange", "mango", "mango"];

function removeDuplicates(arr) {
return [...new Set(arr)];
}

console.log(removeDuplicates(arr));

//e-Return all the palindromes in an array
let palindromes = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'] 
let checkPalindrom = function(str) { 
  return str == str.split('').reverse().join('');
}
const result = palindromes.filter(pal => checkPalindrom(pal));
console.log(result);

//f-Return median of two sorted arrays of same size
function bruteForce(nums1 = [], nums2 = []) {
    const mergedNums = [...nums1, ...nums2].sort((a, b) => a - b);
    const midPoint = Math.floor(mergedNums.length / 2);
  
    return mergedNums.length % 2 !== 0
      ? mergedNums[midPoint]
      : (mergedNums[midPoint - 1] + mergedNums[midPoint]) / 2;
  }
  

//g-Return median of two sorted arrays of same size
// merge sort
// complexity O(n + m)
function findMedianSortedArrays(nums1 = [], nums2 = []) {
    let i1 = 0;
    let i2 = 0;
    const len1 = nums1.length;
    const len2 = nums2.length;
    const len = len1 + len2;
  
    if (len === 0) {
      return null;
    }
  
    const merged = [];
  
    while (i1 < len1 && i2 < len2) {
      if (nums1[i1] <= nums2[i2]) {
        merged.push(nums1[i1++]);
      } else {
        merged.push(nums2[i2++]);
      }
    }
  
    while (i1 < len1) {
      merged.push(nums1[i1++]);
    }
    while (i2 < len2) {
      merged.push(nums2[i2++]);
    }
  
    const isOdd = len % 2;
    if (isOdd) {
      return merged[(len - 1) / 2];
    } else {
      return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
    }
  }
  
  const nums1 = [1,3];
  const nums2 = [2];
  
  console.log(findMedianSortedArrays(nums1, nums2))
  

///////////h.Rotate an array by k times


function arrayRotate(arr, reverse) {
    if (reverse) {
        arr.unshift(arr.pop());
    }
    else {
        arr.push(arr.shift());
    }  
    return arr;
  }
  console.log(arrayRotate([1,2,3,4,5]))






///////////////////Do the below programs in arrow functions

/////////////////a.Print odd numbers in an array

const array1 = [1,2,3,4,5];
array1.forEach((num) => num % 2 !== 0 && console.log(num));



////////////////b. Convert all the strings to title caps in a string array

let title = "welcome to guvigeeks"
let titleCase = title.toLowerCase().split(' ').map((s) => {
    let letterToCapitalize = s.match(/\w/)[0];
    return s.replace(letterToCapitalize, letterToCapitalize.toUpperCase())
    }).join(' ');
console.log(titleCase)


////////////////c.Sum of all numbers in an array

var arr = [4, 8, 7, 13, 12]
  
    // Creating variable to store the sum
    var sum = 0;
  
    // Calculation the sum using forEach
    arr.forEach(x => {
        sum += x;
    });
    console.log("Sum is " + sum);

//////////////////d.Return all the prime numbers in an array

    const primenumOf1 = (arr) => {
        for (var i=0 ; i<=arr.length; i++) {
            if((i%2===0) || (i%3===0))
                continue;
            console.log(i);
        }
    }
    primenumOf1([1,2,3,4,5,6,7,8,9,10,11,12,13]);