import { database } from './firebase'


var tables = [
    { tableNum: 0, capacity: 4, orderHistory: [], currentOrder: "" },
    { tableNum: 1, capacity: 2, orderHistory: [], currentOrder: "" },
    { tableNum: 2, capacity: 3, orderHistory: [], currentOrder: "" },
    { tableNum: 3, capacity: 4, orderHistory: [], currentOrder: "" },
    { tableNum: 4, capacity: 4, orderHistory: [], currentOrder: "" },
    { tableNum: 5, capacity: 2, orderHistory: [], currentOrder: "" },

]

var dishes = [ // need firebase push auto key
    { price: 10, name: 'Pho', photoURL: "" },
    { price: 5, name: "Goi Cuon", photoURL: "" },
    { price: 2, name: "Pepsi", photoURL: "" },
    { price: 2, name: "Coke", photoURL: "" },
    { price: 8, name: "Chiken Noodle", photoURL: "" },
    { price: 12, name: "Pork Chop", photoURL: "" },
    { price: 15, name: "Spicy Soup", photoURL: "" },
    { price: 10, name: "Grilled Pork & Egg Roll", photoURL: "" },
    { price: 5, name: "Sugarcane Shrimp", photoURL: "" },
]

export function mockData() {
    database.ref("tables").set(tables, () => console.log("mock tables success"));
    dishes.forEach(dish => database.ref("dishes").push(dish, () => console.log("mock dishes success")));
}   

window.mockData = mockData;

console.log("mockdata running")