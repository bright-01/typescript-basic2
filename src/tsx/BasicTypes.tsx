/*BOOLEAN*/
let isDone: boolean = false;

/*NUMBER*/
let decial: number = 6;
let hex: number = 0xff00d;
let binary: number = 0b1010;
let octal: number = 0o774;

/*STRING*/
let color: string = 'blue';
color = 'red';
let fullName: string = 'mwcheon';
let age:number = 33;
let sentence: string = `hello, my name is ${fullName}.
i'll be ${age + 1} years lod next month.`;

/*ARRAY*/
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

/*TUPLE*/
let x: [string, number];
x = ["hello", 10];
console.log(x[0].substring(1));
// console.log(x[1].substring(1)); // 에러
// x[3] = "world"; 오류

enum Color {Red, Green, Blue}
let c : Color = Color.Blue;

/*ENUM*/
enum Color2 { Red = 1, Green = 2, Blue = 3}
let d: Color2 = Color2.Green;
let colorName: string = Color2[2];
console.log(colorName); // Green이 출력

/*ANY*/
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed();

let perttySure: Object = 4;
// prettySure.toFixed(); toFixed는 Object에 존재 하지 않음
let list3: any = [1, true, 'free'];
list3[1] = 100;

/*VOID*/
function warnUser(): void {
    console.log("this is my warning message");
}
// let unusable: void = undefined;
// unusable = null;

/*Null and undefined*/
let u : undefined = undefined;
let n: null = null;

/*Never*/
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error('something failed');
}

function infiniteLoop(): never {
    while (true) {

    }
}

/*Object*/
declare function create(o: object | null): void;
create({prop: 0})
create(null);
// create(43); 오류
// create("string"); 오류
// create(false); 오류
// create(undefined); 오류

/*Type assertions*/
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length

let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;



