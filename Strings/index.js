// Q -> Given Strings a and b. write a program to check if 'b' is in an alternating character substring of 'a'. i.e. all characters of 'b' are found in 'a' at alternating positions in the same order.

let strA = "suryaggehjoiydb"
let strB = "sragh"

function compareStrings (str1, str2){
  let flag = false
  for (let idx = 0; idx < str2.length; idx++) {
    console.log(str2[idx],str1[idx*2]);
    if(str2[idx] !== str1[idx*2]) {
      flag = false
    }
    else{
      flag = true
    }
  }
  return flag
}
console.log(compareStrings(strA,strB));