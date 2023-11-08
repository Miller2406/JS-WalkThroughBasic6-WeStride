// จงเขียน Function ตรวจสอบประโยคนั้นว่ามีช่องว่างทั้งหมดเท่าไร

function checkSpaces(words) {
    const arr = words.split(' ');
    const arrL = arr.length;
    const findSpace = arrL - 1;
    console.log(arrL);
    return findSpace;
}

console.log(checkSpaces('hi my name is bob'));
console.log(checkSpaces('how are you today'));