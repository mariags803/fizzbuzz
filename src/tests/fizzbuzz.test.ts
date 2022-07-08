import {fizzbuzz} from "../fizzbuzz";
describe("FizzBuzz should", ()=>{
    it("Number = 1 returns '1'", ()=>{
        const result = fizzbuzz(1);
        const expected = "1";
        expect(result).toBe(expected);
    });

    it("Number = 3 returns 'fizz'", ()=>{
        const result = fizzbuzz(3);
        const expected = "fizz";
        expect(result).toBe(expected);
    });

    it("Number = 5 returns 'buzz'", ()=>{
        const result = fizzbuzz(5);
        const expected = "buzz";
        expect(result).toBe(expected);
    });

    it("Number = 15 returns 'fizzbuzz'", ()=>{
        const result = fizzbuzz(15);
        const expected = "fizzbuzz";
        expect(result).toBe(expected);
    });

    it("Number = 6 returns '6'", ()=>{
        const result = fizzbuzz(6);
        const expected = "fizz";
        expect(result).toBe(expected);
    });

    it("Number = 10 returns 'buzz'", ()=>{
        const result = fizzbuzz(10);
        const expected = "buzz";
        expect(result).toBe(expected);
    });

    it("Number = 30 returns 'fizzbuzz'", ()=>{
        const result = fizzbuzz(30);
        const expected = "fizzbuzz";
        expect(result).toBe(expected);
    });

    it("Number = 19 returns '19'", ()=>{
        const result = fizzbuzz(19);
        const expected = "19";
        expect(result).toBe(expected);
    });
});