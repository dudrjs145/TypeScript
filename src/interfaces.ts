/*
  TypeScript의 핵심 원칙 중 하나는 타입 검사의 값의 형태에 초점을 맞추고 있다는 점.
  - 형태가 동일하다면, 같은 타입이라고 판단함
  - TS for JS Programmers의 구조적 타입 시스템 참고
  - '덕 타이핑' or '구조적 서브타이핑'이라고 함
  
  인터페이스 이런 타입들의 이름을 짓는 역할을 하고 코드 안의 계약을 정의하는 것 뿐만 아니라
  프로젝트 외부에서 사용하는 코드의 계약을 정의하는 강력한 방법
*/


/*
  - 인터페이스
*/
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(`printLabel: ${labeledObj.label}`);
}

let myObj = { size: 10, label: 'Size 10 Object' };

// 타입 검사는 프로퍼티들의 순서를 요구하지 않음,
// 인터페이스가 요구하는 프로퍼티들이 존재하는지와 프로퍼티들이 요구하는 
// 타입을 가졌는지만 확인
printLabel(myObj); // 정상출력


/*
  - 선택적 프로퍼티(Optional Properties)
  - 변수명?, ?를 붙여서 선택적 프로퍼티 선언
  - 선택적 프로퍼티들은 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달하는
  - option bags 같은 패턴을 만들 때 유용
*/
interface SquareConfig{
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  console.log(`Square Config: ${config.color}, ${config.width}`)
  return newSquare;
}
let mySquare = createSquare({ color: "black" });


/*
  - 읽기전용 프로퍼티(Readonly properties)
  - readonly 키워드를 넣어서 지정
  - 객체가 처음 생성될 때만 수정 가능
  - 객체 리터럴을 할당하면 수정이 불가능하다.
*/

interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 20 };
  // point.x = 5   // error발생

// ReadonlyArray 타입
let a: number[] = [1, 2, 3, 4, 5];
let ro: ReadonlyArray<number> = a;
  // ro.push(5)  오류 발생

// 타입단언으로 오버라이드는 가능
a = ro as number[];


/*
  - Readonly VS const
  - 프로퍼티는 Readonly 사용
  - 변수는 const 사용
*/


/*
  - 초과 프로퍼티 검사 (Excess Property Checks)
  - 선택적 프로퍼티를 이용한 option bags 기술을 배웠다.
  - 하지만, 그냥 사용하면 에러가 발생할 수도 있다.
*/


// width 프로퍼티는 적합하고, colour 프로퍼티는 없기 때문에 문제없다고 생각할 수 있다
// 하지만, TypeScript에서 객체 리터럴은 다른 변수에 할당할 때나  인수로 전달할 때
// 특별한 처리를 받고, 초과 프로퍼티 검사를 받는다.
// 만약 객체 리터럴이 '대상 타입'이 갖고 있지 않은 프로퍼티를 갖고 있으면 에러가 발생한다.


// 타입 단언을 통해 검사를 피할 수 있다.
let squar = createSquare({
  colour: 'red',
  width: 100
} as SquareConfig);

// 만약 추가 프로퍼티가 있을걸 확신한다면
// 문자열 인덱스 서명 - String Index Signatuer를 사용 
interface newSquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

let sqaureOptions = { colour: 'red', width: 100 };
let newSquare = createSquare(sqaureOptions);


/*
  - 함수 타입
  - 인터페이스는 함수 타입을 설명할 수 있다.
  - 인터페이스로 ㅎ마수 타입을 기술하기 위해, 인터페이스에 호출 서명 - Call Signature를 전달
  - 이는 매개변수 목록과 반환 타입만 주어진 함수 선언과 비슷하다.
*/
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  console.log('Function Type Interface: ', result);
  return result > -1;
}
console.log(mySearch('Hellow', 'll'));

/*
  - Indexable Type
  - 인덱서블 타입은 인덱싱 할때 해당 반환 유형과 함께 객체를 인덱싱하는 데
  - 사용할 수 있는 타입을 기술하는 Index-Signature를 가지고 있다.

  - 즉, String-Index Signature에서 any를 사용했는데
  - Index-Signature에서는 명시적으로 말해줄 수 있는 장점이 있따.
*/

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ['Bob', 'Fred'];

// StringArray가 number로 색인화(indexed)되면,
// string을 반환
let myStr: string = myArray[0];
console.log(myStr);

// - Index-Signature가 있으면, 모든 명시적 멤버들은
// 해당 Index-Signature 구조를 따라야 한다.
interface NumberOrStringDictionary {
  [index: string]: string | number;
  length: number;
  name: string;
}

let dict: NumberOrStringDictionary;
dict = {
  length: 1,
  name: 'hello',
  mode: 'light'
}
console.log(dict.mode)



/*
  - Class Type
  - 1.인터페이스 구현
  - 2. 클래스의 Static과 Instance의 차이점
    
*/

// 1. 인터페이스 구현
// 클래스가 특정 계약(contract)을 충족시키도록 명시적으로 강제하는 C#, Java에서의 일반적인 사용 방법
// 인터페이스는 클래스의 public과 private 모두보다는, public을 기술합니다.
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) { }
  
  setTime(d: Date) {
    this.currentTime = d;
  }
}

// 2. 클래스의 Static과 Instance의 차이점
// 클래스와 인터페이스를 다룰 때, 클래스는 두 가지 타입을 가진다.
// - 클래스가 인터페이스를 implement할 때, 인스턴스만 검사
// 타입: 스태틱 타입,  인스턴스 타입
// 생성 시그니쳐(Construct Sign)은 스태틱 타입 

// 클래스의 스태틱 부분을 직접적으로 다룰 필요가 있따.

interface ClockConstructor {
  new (hour: number, minute: number): newClockInterface
}

interface newClockInterface {
  tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): newClockInterface{
  return new ctor(hour, minute);
}

class DigitalClock implements newClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('tick tok');
  }
}

class AnalogClock implements newClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('tick tok');
  }
}

// createClcok 안에 ClockConstructor 타입이므로, AnalogClock이 올바른 생성자 시그니처를 갖는지 검사한다.
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


// 다른 방법으로는 클래스 표현을 사용하는 것
interface EasyClockConstructor {
  new (hour: number, minute: number);
}
interface EasyClockInterface {
  tick();
}

const EasyClock: ClockConstructor = class EasyClock implements EasyClockInterface {
  constructor(h: number, m:number){}
  tick() {
    console.log('beep beep');
  }
}


/*
  - 인터페이스 확장 (Extending Interfaces)
*/
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
