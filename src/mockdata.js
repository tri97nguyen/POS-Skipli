import { database, storageRef } from './firebase'


var tables = [
    { tableNum: 0, capacity: 4, orderHistory: [], currentOrder: "" },
    { tableNum: 1, capacity: 2, orderHistory: [], currentOrder: "" },
    { tableNum: 2, capacity: 3, orderHistory: [], currentOrder: "" },
    { tableNum: 3, capacity: 4, orderHistory: [], currentOrder: "" },
    { tableNum: 4, capacity: 4, orderHistory: [], currentOrder: "" },
    { tableNum: 5, capacity: 2, orderHistory: [], currentOrder: "" },

]

var dishes = [ // need firebase push auto key
    { price: 10, name: 'Pho', photoURL: "https://firebasestorage.googleapis.com/v0/b/skipli-c72ad.appspot.com/o/dishesImage%2Fpho.jpg?alt=media&token=c4702b49-a416-4677-9d6b-affdbcc88858" },
    { price: 5, name: "Goi Cuon", photoURL: "https://firebasestorage.googleapis.com/v0/b/skipli-c72ad.appspot.com/o/dishesImage%2Fgoi-cuon.jpg?alt=media&token=cc6ade65-025f-49c6-a3c5-26da4bcd4bb1" },
    { price: 2, name: "Pepsi", photoURL: "https://firebasestorage.googleapis.com/v0/b/skipli-c72ad.appspot.com/o/dishesImage%2Fpepsi.jpg?alt=media&token=4c947333-0540-421b-bd36-0c49f0d1f736" },
    { price: 2, name: "Coke", photoURL: "https://firebasestorage.googleapis.com/v0/b/skipli-c72ad.appspot.com/o/dishesImage%2Fcoke.jpg?alt=media&token=36948e5d-32e4-4c69-b614-7062ec2478a7" },
    { price: 8, name: "Chiken Noodle", photoURL: "https://firebasestorage.googleapis.com/v0/b/skipli-c72ad.appspot.com/o/dishesImage%2Fchiken-noodle.jpg?alt=media&token=f992dc15-251d-4c29-8649-b6ecd02a079b" },
    { price: 12, name: "Pork Chop", photoURL: "https://firebasestorage.googleapis.com/v0/b/skipli-c72ad.appspot.com/o/dishesImage%2Fpork-chop.jpg?alt=media&token=f103655c-e15a-472a-bb2f-0a7ab2fb33d3" },
    { price: 15, name: "Spicy Soup", photoURL: "https://firebasestorage.googleapis.com/v0/b/skipli-c72ad.appspot.com/o/dishesImage%2Fspicy-soup.jpg?alt=media&token=bee777cf-7799-4271-ba3f-c04d6d90c5c6" },
    { price: 10, name: "Grilled Pork & Egg Roll", photoURL: "https://firebasestorage.googleapis.com/v0/b/skipli-c72ad.appspot.com/o/dishesImage%2Fgrilled-pork-egg-roll.jpg?alt=media&token=935ead99-2c39-4c78-aa84-765d9784acef" },
    { price: 5, name: "Sugarcane Shrimp", photoURL: "https://firebasestorage.googleapis.com/v0/b/skipli-c72ad.appspot.com/o/dishesImage%2Fsugarcane-shrimp.jpg?alt=media&token=522270b1-3f02-45c1-9387-1ae5769b8477" },
]

function mockData() {
    database.ref("tables").set(tables, () => console.log("mock tables success"));
    dishes.forEach(dish => database.ref("dishes").push(dish, () => console.log("mock dishes success")));
}

async function getUrl() {
    var images = await storageRef.child("dishesImage").listAll();
    images.items.forEach(item => {

        item.getDownloadURL().then(url => {
            console.log("item name", item.name);
            console.log(url);
        })
    })
}

window.mockData = mockData;
window.getImageUrl = getUrl;

