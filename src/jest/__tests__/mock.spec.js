function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

test('', () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);

    // 此 mock 函数被调用了两次
    expect(mockCallback.mock.calls.length).toBe(2);

    // 第一次调用函数时的第一个参数是 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // 第二次调用函数时的第一个参数是 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // 第一次函数调用的返回值是 42
    expect(mockCallback.mock.results[0].value).toBe(42);

    // console.log(mockCallback.mock);
    // {
    //     calls: [ [ 0 ], [ 1 ] ],
    //     instances: [ undefined, undefined ],
    //     invocationCallOrder: [ 1, 2 ],
    //     results: [ { type: 'return', value: 42 }, { type: 'return', value: 43 } ]
    //  }

    const myMock = jest.fn();
    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    console.log(myMock(), myMock(), myMock(), myMock());

    const myMockFn = jest
        .fn(() => 'default')
        .mockImplementationOnce(() => 'first call')
        .mockImplementationOnce(() => 'second call');

    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
    // > 'first call', 'second call', 'default', 'default'
});

const { diff } = require('jest-diff');

const a = { a: { b: { c: 5 } } };
const b = { a: { b: { c: 6 } } };

const result = diff(a, b);

// print diff
console.log(result);
