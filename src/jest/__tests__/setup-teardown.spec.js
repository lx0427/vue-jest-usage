// test.only 可单独执行当前用例

describe('beforeAll,afterAll,beforeEach,afterEach execution order', () => {
    let queues = [];
    beforeAll(() => {
        queues.push('1 - beforeAll');
    });

    // ! 作用于每个test, 分别在test前后执行
    beforeEach(() => {
        queues.push('1 - beforeEach');
    });
    afterEach(() => {
        queues.push('1 - afterEach');
    });

    test('', () => {
        queues.push('1 - test');
    });

    describe('Scoped / Nested block', () => {
        beforeAll(() => {
            queues.push('2 - beforeAll');
        });

        // ! 作用于当前作用域内的每个test
        // ! 外部先进后出，内部后进先出
        beforeEach(() => {
            queues.push('2 - beforeEach');
        });
        afterEach(() => {
            queues.push('2 - afterEach');
        });

        test('', () => {
            queues.push('2 - test');
        });

        afterAll(() => {
            queues.push('2 - afterAll');
        });
    });

    afterAll(() => {
        queues.push('1 - afterAll');
        // console.log(queues);
    });
});

describe('describe,test execution order', () => {
    let tasks = [];

    tasks.push('describe outer-a');

    describe('describe inner 1', () => {
        tasks.push('describe inner 1');
        test('test 1', () => {
            tasks.push('test for describe inner 1');
            expect(true).toEqual(true);
        });
    });

    tasks.push('describe outer-b');

    test('test 1', () => {
        tasks.push('test for describe outer');
        expect(true).toEqual(true);
    });

    describe('describe inner 2', () => {
        tasks.push('describe inner 2');
        test('test for describe inner 2', () => {
            tasks.push('test for describe inner 2');
            expect(false).toEqual(false);
            // console.log(tasks);
        });
    });

    tasks.push('describe outer-c');
});
