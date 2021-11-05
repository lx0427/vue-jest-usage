const { analysisIDCard } = require('../tools');

test('idcard parsing', () => {
    let info = {
        birthday: '1993-08-13',
        sex: 1,
        sexName: '男',
        age: 28,
    };
    let empty = { birthday: '', sex: null, sexName: '', age: null };

    expect(analysisIDCard('')).toEqual(empty);
    expect(analysisIDCard('421083199308135959')).toEqual(info);
    expect(analysisIDCard('4210839311065959')).toEqual({ ...info, birthday: '1993-11-06', age: 27 });
    expect(analysisIDCard('4210839311055959')).toEqual({ ...info, birthday: '1993-11-05', age: 28 });
});
