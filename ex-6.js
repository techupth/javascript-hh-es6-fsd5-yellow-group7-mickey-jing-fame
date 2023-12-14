let height = undefined;
let result;
function check(height){
   return height ?? "Height is not defiend";
}
result = check(height)
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
