
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


module.exports = {
    double,
    increase
};



