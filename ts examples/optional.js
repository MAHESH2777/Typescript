var userInfo = function (user) {
    var info = "Hello," + user.name + "YourAge is-" + user.age + "andAddress is-" + user.address;
    return info;
};
var info = {
    name: "Jhonny",
    age: 28
};
console.log(userInfo(info));
