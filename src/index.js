// var val1 = "aaaa";
// console.log(val1);

// val1 = "bbbb";
// console.log(val1);

// var val1 = "cccc";
// console.log(val1);

// let val2 = "dddd";
// console.log(val2);

// val2 = "eeee";
// console.log(val2);

// let val2 = "ffff";

// const val3 = "gggg";
// console.log(val3);

// val3 = "hhhh";

//const val3 = "iiii";

// const val4 = {
//   name: "jjjj",
//   age: 47
// };
// console.log(val4);

// val4.name = "kkkk";
// val4.address = "kagawa";
// console.log(val4);

// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "lion";
// console.log(val5);
// val5.push("fish");
// console.log(val5);

// const name = "lewis";
// const age = 47;

// const message = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message);

// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// function func1(str) {
//   return str;
// }
// const func2 = function (str) {
//   return str;
// };
// console.log(func1("lewis"));
// console.log(func2("lewis986"));

// const func3 = (str) => {
//   return str;
// };
// console.log(func3("lewis-chan"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(769, 10.87));

// const myProfile = {
//   name: "leiws",
//   age: 47
// };

// const message1 = `名前は${myProfile.name}, 年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}, 年齢は${age}ですか？`;
// console.log(message2);

// const myProfile = ["lewis", 47];
// const message3 = `名前は${myProfile[0]}、年齢は${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}、年齢は${age}やねん`;
// console.log(message4);

// const sayHello = (name = "guest") => console.log(`こんにちは！${name}さん`);
// sayHello("lewis");

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr2);
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const nameArr = ["lewis", "chan", "powell"];
// // for (let i = 0; i < nameArr.length; i++) {
// //   console.log(`${i + 1}番目は、${nameArr[i]}です。`);
// // }

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// // nameArr.map((name, i) => console.log(`${i + 1}番目は、${name}です。`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 0;
// // });
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "lewis") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
