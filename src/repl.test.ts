import { cleanInput } from './repl.js';
import { describe, test, expect } from 'vitest';


describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"],
    },
    {
        input: "   test   string   ",
        expected: ["test", "string"],
    },
    {
        input: "  spaced   out  ",
        expected: ["spaced", "out"],
    },
    {
        input: "one",
        expected: ["one"],
    },
    {
        input: "",
        expected: [],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input); // ✅ Call the function with the input

        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});


