import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  //getter method : 호출시 메소드 ()없이 바로 소환가능
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
