
function double(num) {
    function doubleNum() {
        return num * 2;
    }
    return doubleNum;
}

function increase(num) {
    function addToNum(addition) {
        num += addition;
        return num;
    }
    return addToNum;
}

function mergeSort() {

    let numArr = [];

    function mergeSorting(num) {
        numArr.push(num);
        numArr.sort(function (a, b) {
            return b - a;
        }
        )
        return numArr[0];
    }
    return mergeSorting;
}

function total() {
    let total = 0;

    function addToTotal(arr) {
        arr.forEach(num => total += num);
        return total
    }
    return addToTotal;
}

function gibberish() {
    let gibb = '';
    function addToStr(str) {
        if (typeof str == 'string') {
            gibb += ' ' + str;
        } else {
            gibb += " " + str.join(" ") + '.';
        }
        return gibb;
    }
    return addToStr;

}

function calculator() {
    let total = 0;
    function calculator(num1, num2, operation) {
        switch (operation) {
            case "+":
                total += num1 + num2
                break;
            case "-":
                total += num1 - num2
                break;
            case "*":
                total += num1 * num2
                break;
            case "/":
                total += num1 / num2
                break;
        }
        return total
    }
    return calculator;
}

function trainstation() {
    let people = [];

    function arrive(person) {
        people.push(person);

    }
    function getPeople() {
        return people;
    }
    function giveMoney(randomPersonId, amountOfMoney) {
        if (people[randomPersonId]) {
            people[randomPersonId].amount += amountOfMoney;
        }

    }
    function trainArrives() {
        people = people.filter(function (person) {
            return person.amount < 20;
        })

        return people;

    }
    return { arrive, getPeople, giveMoney, trainArrives };
}

function dogHouse(){
    const dogs= {}
    function houseDog(dog){
        if(dogs.hasOwnProperty(dog.location)){
            dogs[dog.location].push(dog)
        }else{
            dogs[dog.location] = [dog];
        }
    }
    function getDogsByLocation(location){
        if(dogs[location]) return dogs[location];
    }
    return {houseDog,getDogsByLocation}
}

function shop(){
    const storage = {};
    let revenue = 0;

    function addStock(){

    }
    function sellStock(){
        
    }
    function getRevenue(){
        
    }

    return {addStock, sellStock, getRevenue};
        
}

module.exports = {
    double,
    increase,
    mergeSort,
    total,
    gibberish,
    calculator,
    trainstation,
    dogHouse,
    shop
};



