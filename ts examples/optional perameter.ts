interface User {
    name: string;
    age: number;
    address?: string //Optional
}
let info = {
    name: "Jhonny",
    age: 28
};
console.log(userInfo(info));
