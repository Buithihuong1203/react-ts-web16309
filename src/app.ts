export { };
type Product = {
    id: number,
    name: string,
    price: number
}
type Product2 = {
    id: number,
    name: string,
    status: boolean
}
type MergeType = Product | Product2;


const a: number = 10;
const b: number = 20;
const myName: string = "Hương";
const myAge: number = 20;
const myStatus: boolean = true;
const myObj: Product = { id: 1, name: "Hương", price: 210 };
//const myObj: { id: number, name: string } = { id: 1, name: "Hương" };
const arrNumber: number[] = [1, 2, 3, 4];
const arrString: string[] = ["a", "b", "c"];
const arrObj: MergeType[] = [
    { id: 1, name: "Sản phẩm", price: 200 },
    { id: 1, name: "Sản phẩm", status: true }
]
//const arrObj: { id: number, name: string }[] = [{ id: 1, name: "Sản phẩm" }];


function sum(numA: number, numB: number) {
    return numA + numB;
}
sum(a, b);


//const addToCart = (item: Product, name: string) {

//}