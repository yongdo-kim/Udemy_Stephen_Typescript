//전형적인 인터페이스
interface Reportable {
  summary(): string;
}

//클래스를 쓰지 않고 {}으로 객체 생성 
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

//(인자가 있다면:인자타입):반환값 => {여기서 로직사용}
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
