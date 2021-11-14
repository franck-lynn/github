const add = <T extends string | number>(a: T, b: T): T extends string? string: number => <any>a + b
export {add}