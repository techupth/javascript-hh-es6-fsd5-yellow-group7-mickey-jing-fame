let height = undefined;

const nullishCoalescing = (input) => {
  return input ?? "Height is not defined";
};

let result = nullishCoalescing(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
