/**
 * 确保之前的任务队列清空
 * @returns
 */
export function flushTask() {
    return new Promise((resolve) => {
        setTimeout(resolve); // ! 参考：flush-promises
    });
}
