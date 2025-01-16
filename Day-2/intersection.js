"use strict";
// type Person = {
//   name: string;
//   age: number;
// };
const user = {
    id: 101,
    name: "John",
    email: "john@example.com",
};
const accountDetails = {
    accountId: 9876123,
    accountType: "saving AC",
    balance: 98750,
};
const combineUserAndAccountDetails = (user, account) => {
    return Object.assign(Object.assign({}, user), account);
};
let combineInfo = combineUserAndAccountDetails(user, accountDetails);
console.log(combineInfo);
