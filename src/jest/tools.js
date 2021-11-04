const sum = function sum(a, b) {
    return a + b;
};
const fetchData = function (flag = true) {
    return new Promise((resolve, reject) => {
        if (flag) {
            let data = 'peanut butter';
            resolve(data);
        } else {
            reject('error');
        }
    });
};

module.exports = {
    sum,
    fetchData,
};
