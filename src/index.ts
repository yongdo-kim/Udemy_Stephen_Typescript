import { NumberCollection } from "./NumberCollection";
import { Sorter } from "./Sorter";

const sorter = new Sorter(new NumberCollection([10, 3, -5, 0]));
sorter.sort();
console.log(sorter.collection);

//string은 인덱스를 통해 값을 가져올 수 있지만 업데이트는 불가능함.
