import {F1Driver} from "./f1_module.js";

let CL16 = new F1Driver('Charles Leclerc', '23', '16', 'Ferrari', 'Monaco', false);
let GR63 = new F1Driver('George Russell', '23', '63', 'Williams', 'United Kingdom', false);
let MS47 = new F1Driver('Mick Schumacher', '21', '47', 'Haas', 'Germany', true);
let LH44 = new F1Driver('Lewis Hamilton', '', '44', 'Mercerdes', 'United Kingdom', false);

let drivers = [CL16, GR63, MS47, LH44];

console.log(CL16.getDetails());
console.log(GR63.getDetails());
console.log(MS47.getDetails());
console.log(LH44.getDetails());

CL16.overtake();