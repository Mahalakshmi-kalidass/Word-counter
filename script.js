const word = document.getElementById("word");
const char = document.getElementById("char");
const txt = document.getElementById("box");

var character = 0;

 
function frequency(ele){ 
  let element = ele.value;
  char.value= element.length;
  wordCount(txt);
}
 
function wordCount(txt){
  let str = txt.value;
  let len = str.length;
 var wordc = 0;
for(let  i =0;i<len;i++){
  if(len>1){
   if(str[i]===" " &&str[i-1]!=" " && i!=0){
     console.log(str[i]);
    wordc++;
    word.value = wordc;
   }
  }
 else{
   word.value=0;
 }
}
}
  






