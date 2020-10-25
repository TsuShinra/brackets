module.exports = function check(str, bracketsConfig) {
  console.log(str);
  console.log(bracketsConfig);
  let keep = [];
  let a = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j ++) {
      if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
        if ((str.lastIndexOf(bracketsConfig[j][0]) - str.indexOf(bracketsConfig[j][0])) % 2 === 0) {
          return false;
        }
        a +=1;
      }
      else if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
        keep.push(str[i]);
      }
      else if (str[i] === bracketsConfig[j][1]) {
        if (keep.length === 0 || keep[keep.length - 1] !== bracketsConfig[j][0]) {
          return false;
        }
        keep.pop();
      }
    }
  }
  return (keep.length === 0) && a % 2 === 0;
}

