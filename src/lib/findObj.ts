export function findObj<T>(
    array: T[],
    key: keyof T,
    value: T[keyof T]
): T | undefined {
    return array.find(item => item[key] === value);
}

export function findIndex(array: any[], key: string, value: string) {
    const result = array.findIndex(item => item[key] === value);
    return result;
}
