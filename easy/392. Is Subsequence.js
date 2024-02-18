var isSubsequence = function(s, t) {
    if (s.length > t.length) return false;

    let j = 0;
    let i = 0;
   for (let i =0; i < t.length; i++){
    if (s[j] == t[i]){
        j++;
    }
   }
   return j == s.length;
};

let s = "abc"
let t = "ahbgdc"
console.log(isSubsequence(s,t));