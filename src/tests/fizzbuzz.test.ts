import {fizzbuzz} from "../fizzbuzz";
describe("FizzBuzz", ()=>{
    it("Returns number 1 as string for number 1", ()=>{
        expect(fizzbuzz(1)).toBe("1");
    });

    it("Returns fizz for number 3", ()=>{
        expect(fizzbuzz(3)).toBe("fizz");
    });

    it("Returns buzz for number 5", ()=>{
        expect(fizzbuzz(5)).toBe("buzz");
    });

    it("Returns fizzbuzz for number 15", ()=>{
        expect(fizzbuzz(15)).toBe("fizzbuzz");
    });

    it("Returns fizz for a number that is multiple of 3", ()=>{
        expect(fizzbuzz(6)).toBe("fizz");
    });

    it("Returns buzz for a number that is multiple of 5", ()=>{
        expect(fizzbuzz(10)).toBe("buzz");
    });

    it("Returns fizzbuzz for a number that is multiple of 15", ()=>{
        expect(fizzbuzz(30)).toBe("fizzbuzz");
    });

    it("Returns the number as string if the number is not multiple of 3 or 5", ()=>{
        expect(fizzbuzz(19)).toBe("19");
    });
});