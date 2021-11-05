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

const analysisIDCard = (IDCardNo = '') => {
    if (!IDCardNo || ![16, 18].includes(IDCardNo.length)) {
        return { birthday: '', sex: null, sexName: '', age: null };
    }
    if (IDCardNo.length === 16) {
        IDCardNo = IDCardNo.substring(0, 6) + '19' + IDCardNo.substring(6);
    }
    let d = new Date();
    let now = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
    };
    let year = IDCardNo.substring(6, 10);
    let month = IDCardNo.substring(10, 12);
    let day = IDCardNo.substring(12, 14);
    let sexFlag = parseInt(IDCardNo.substr(16, 1)) % 2; //获取性别
    //获取年龄
    let ageIncrease = -1;
    if (month < now.month || (month == now.month && day <= now.day)) {
        ageIncrease++;
    }
    return {
        birthday: `${year}-${month}-${day}`,
        sex: sexFlag ? 1 : 2,
        sexName: sexFlag ? '男' : '女',
        age: now.year - year + ageIncrease,
    };
};

module.exports = {
    sum,
    fetchData,
    analysisIDCard,
};
