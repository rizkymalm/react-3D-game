export function findObj(array: any[], key: string, value: string) {
    const result = array.filter(item => item[key] === value);
    return result[0];
}

export function findIndex(array: any[], key: string, value: string) {
    const result = array.findIndex(item => item[key] === value);
    return result;
}
