interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// //다른곳에서 쓰기 위해서는 export 필수
// export class Sorter {
//   //   collection: number[]; : constructor에서 public을 쓰면 따로 변수명 안써도 ok

//   //범용성을 위해서 단순히 number[], string만 받는게 아니라 interface를 받아야함.
//   constructor(public collection: Sortable) {
//     this.collection = collection;
//   }

//   sort(): void {
//     //const length = this.collection.length;
//     const { length } = this.collection; //디스럭쳐링

//     //버블정렬
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         //instance of == 타입가드
//         //compare, swap 함수를 만들어서 클래스로 깔끔하게 정리
//         if (this.collection.compare(j, j + 1)) {
//           this.collection.swap(j, j + 1);
//         }
//       }
//     }
//   }
// }

// 위 내용을 기반으로 abstract class 만들기
export abstract class Sorter {
  //이걸 implement한 child에서 구현
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  //이건 이미 구현됨.
  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
