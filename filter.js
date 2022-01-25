const checkLength = (phoneNumber) => {
    return phoneNumber.length <= 10;
}

const filterLongNumbers = (numbers) => {
    return numbers.filter(checkLength)
}

console.log(filterLongNumbers(['0123456789','123456789','00123456789']))