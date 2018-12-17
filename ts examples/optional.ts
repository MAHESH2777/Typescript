interface User{
name:string;
age:number;
address?:string//Optional

}



let userInfo=function(user:User){
let info="Hello,"+user.name+"YourAge is-"+user.age+"andAddress is-"+user.address;
return info;
}


let info = {
    name: "Jhonny",
    age: 28
};
console.log(userInfo(info));
