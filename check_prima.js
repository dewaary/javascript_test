/* 

DERET PRIMA
===========

Diberikan sebuah function prima yang menerima satu parameter bertipe number
Output dari function ini adalah mengembalikan deretan angka prima dari 0 sampai angka itu sendiri
kedalam sebuah array

CONTOH CASE
===========

input : 10
output : [2, 3, 5, 7]

proses :

    angka 1 bukan prima
    angka 2 adalah prima -> maka masuk kedalam deret
    angka 3 adalah prima -> maka masuk kedalam deret
    angka 4 bukan prima
    angka 5 adalah prima -> maka masuk kedalam deret
*/

function prima(number) {
    // your code
    const result = [];
    for (let i = 2; i <= number; i++) {
        let isPrima = true;
        for (let j = 2; j < i; j++) {
            if(j !== 1 && i % j === 0) {
                isPrima = false;
                break;
            }
            
        }
        if(isPrima) {
            result.push(i);
        }
    }
    return result;
}


console.log(prima(10));
console.log(prima(20));
console.log(prima(100));
console.log(prima(150));
console.log(prima(200));