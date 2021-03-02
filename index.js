import {Driver} from "./racecar_module.js";

let CL16 = new Driver('Charles Leclerc', 23, 16, 'Ferrari', 'Monaco', false);
let GR63 = new Driver('George Russell', 23, 63, 'Williams', 'United Kingdom', false);
let MS47 = new Driver('Mick Schumacher', 21, 47, 'Haas', 'Germany', true);
let LH44 = new Driver('Lewis Hamilton', 36, 44, 'Mercerdes', 'United Kingdom', false);

console.log(CL16.getDetails());
console.log(GR63.getDetails());
console.log(MS47.getDetails());
console.log(LH44.getDetails());

CL16.overtake();
GR63.passed();
MS47.crashed();
LH44.win();

console.log(Driver.older(MS47, LH44));