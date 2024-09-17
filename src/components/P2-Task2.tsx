
const filterNumbers = (number: number[]) => {
    let evens = [];

    for (let i = 0; i <= number.length - 1; i++) {
        if(i % 2 === 0 ){
        evens.push(i)
        }
    }
    return evens
}

let numbers: number[] = [2, 3, 67, 6, 5, 9, 1];

console.log(filterNumbers(numbers))
