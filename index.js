import {F1Driver} from "./f1_module.js";

let CL16 = new F1Driver('Charles Leclerc', '23', '16', 'Ferrari', 'Monaco', false);
let GR63 = new F1Driver('George Russell', '23', '63', 'Williams', 'United Kingdom', false);

console.log(CL16.getDetails());
console.log(GR63.getDetails());