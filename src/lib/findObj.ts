export function findObj(array: any[], key: string, value: string) {
    const result = array.filter(item => item[key] === value);
    return result[0];
}
