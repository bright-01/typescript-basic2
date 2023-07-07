function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface LabeledValue {
    label : string;
}

function printLabel2(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

interface SquareConfig {
    readonly color? : string,
    width? : number
}

let ab: number [] = [12, 3, 4];
let ro: ReadonlyArray<number> = ab;
// ro[0] = 12;// 에러
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig) : { color: string; area: number } {
    // ...
}

let mySquare = createSquare({ colour: "red", width: 100 });

interface SearchFunc {
    (source: string, subString :string): boolean
}

let mySearch : SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["BOB", "FRED"];

let myStr: string = myArray[0];

