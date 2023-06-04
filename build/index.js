"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const Sorter_1 = require("./Sorter");
const sorter = new Sorter_1.Sorter(new NumberCollection_1.NumberCollection([10, 3, -5, 0]));
sorter.sort();
console.log(sorter.collection);
//string은 인덱스를 통해 값을 가져올 수 있지만 업데이트는 불가능함.
