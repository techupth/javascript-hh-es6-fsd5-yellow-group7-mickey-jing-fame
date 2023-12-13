let height = undefined;
let result = "Height is not defined";
function check(height) {
  return height ?? result;
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
