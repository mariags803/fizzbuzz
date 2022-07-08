const isDivisible = (dividend: number, divider: number) => dividend % divider === 0;

export const fizzbuzz = (number: number) => {
    if (isDivisible(number,15)) return 'fizzbuzz';
    if (isDivisible(number,3)) return 'fizz';
    if (isDivisible(number,5)) return 'buzz';
    return number.toString();
}