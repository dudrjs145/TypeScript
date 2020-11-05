
// Boolean
// true or false
let isDone: boolean = false;

/*
  - Number
  - javaScript와 동일하게 모든 숫자는 부동 소수 값
  - 부동 소수에는 number라는 타입이 붙혀집니다.
  - TypeScript는 16진수, 10진수 리터럴 및 
  - ECMAScript2015에 소개된 2진수, 8진수 리터럴도 지원
*/
let decimal: number = 312;
let hex: number = 0x138;
let octal: number = 0o470;
let binary: number = 0b100111000;

/*
  - String
  - 큰따옴표(""), 작은따옴표(''), 백틱(``) 등을 사용하여 표현
*/
let fullName: string = 'Kim Younggun';
let age: number = 28;
let sentence: string = `name: ${fullName} age: ${age}`;

/*
  - Array
  - 타입[] or 제네릭 배열 타입을 통해 선언
*/
let list: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];

/*
  - 튜플
  - 요소의 타입과 개수가 고정된 배열을 표현할 수 있다.
  -단 요소가 모두 같을 필요가 없다.
*/
let x: [string, number] = ['hello', 10];


/*
  - 열거(enum)
  - javaScript의 표준 자료형 집합과 사용하면 도움이 될만한 데이터 형
  - enum은 집합에 더 나은 이름을 붙여줄 수 있다.
*/
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
// 기본적으로 enum은 0 부터 시작하여 멤버들의 번호를 매김
// 멤버 중 하나의 값을 수동으로 설정하여 번호를 바꿀 수 있따.
enum Color2 { Red = 1, Green, Blue }
let c2: Color2 = Color2.Green;

/*
  - Any
  - 타입을 모를 경우에 사용
  - 타입 검사를 하지 않고, 그 값들이 컴파일 시간에 검사를 통과
*/
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // 성공, 분명히 부울입니다.

/* 
  - Void
  - any의 반대 타입, 어떤 타입도 존재할 수 없음
  - 반환값이 없을 때 반환 타입을 표현하기 위해 자주 쓰임
*/
let unusable: void = undefined;

/*
  - Null & Undefined
  - '--strictNullChecks'를 사용하면, 
  - null과 undefined는 오직 any와 각자 자신들 타입에만 할당 가능
*/
let u: undefined = undefined;
let n: null = null;

/*
  - Never
  - 절대 발생할 수 없는 타입을 뜻함
  - never는 함수 표현식에서 항상 오류를 발생시키거나,
  - 절대 반환하지 않는 반환 타입으로 쓰임
  - 변수 또한 타입 가드에 의해 아무 타입도 얻지 못하게 좁혀지면 never타입을 얻을 수 있음
  - ! 모든 타입에 할당 가능한 하위 타입
*/

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
  throw new Error(message);
}

// 반환 타입이 never로 추론
function fail() {
  return error("Something failed");
}

/*
  - Object 객체
  - 객체는 원시타입이 아님을 나타낸다.
  - object 타입을 쓰면, Object.create 같은 API 가 더 잘 나타납니다. 예를 들어:
*/
declare function create(o: object | null): void;

create({ prop: 0 }); // 성공
create(null); // 성공

// object객체에는 원시타입을 넣을 수 없다.
/*
create(42); // 오류
create("string"); // 오류
create(false); // 오류
create(undefined); // 오류
*/

/*
  - Type assertions 타입 단언
  - 타입 단언은 컴파일러에게 타입을 지정해저는 것
  - 타입 변환과 유사하지만, 다른 특별한 검사를 하거나 데이터를 재구성하지는 않는다.
  - 이는 런타임에 영향을 미치지 않으며, 온전히 컴파일러만 이를 사용
*/
// angle-bracket 문법
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as 문법
// jsx와 함께 사용시 as만 허용
let asSomeValue: any = "this is a string";
let asStrLength: number = (asSomeValue as string).length;
