// Q -> Given a string containing brackets, determine if all brackets have a matching counterpart. If all brackets in the string form balanced pairs, return true. If not, return false

var a = "[{}]{}({})"

function compareParenthesis(string){
  let arr = [];
  let lastEle;
  for(let i = 0; i < string.length;i++){
    [lastEle] = arr.slice(-1)
    if(string[i]==="{"||string[i]==="("||string[i]==="["){
      arr.push(string[i])
    }
    else {
      if(string[i]==="}"&& lastEle === "{"||string[i]===")"&& lastEle === "("||string[i]==="]"&& lastEle === "["){
      lastEle = string[i-1]
      arr.pop()
      } 
    }                                                        
  }
    return arr.length===0
}
  console.log(compareParenthesis(a));
