import assert from "assert";
import test from "ava";
import {Driver} from "./racecar_module.js";

// Make some instances of the class so that we can run tests on the class methods.
let testDriver1 = new Driver('Driver One', 21, 1, 'Team One', 'Country One', true);
let testDriver2 = new Driver('Driver Two', 22, 2, 'Team Two', 'Country Two', false);

//Run tests
test('Tests are running', t => {
    t.pass(); //Checking that the test file is working.
})

// Check if the function overtake is returning the correct string
test('overtake', t =>{
    assert.strictEqual(testDriver1.overtake(), 'Yay! You gained a place!');
    t.pass();
})

// Checks if the rookie property is of type Boolean
test('types', t => {
    assert.ok(typeof testDriver2.rookie, 'Boolean');
    t.pass();
})