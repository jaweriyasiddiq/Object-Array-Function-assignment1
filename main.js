var people = { friends: [] };
var friend1 = {
    firstName: "misbah",
    lastName: "khan",
    id: 1,
};
var friend2 = {
    firstName: "Mutaiba",
    lastName: "Chuhan",
};
var friend3 = {
    firstName: "asifa",
    lastName: "Qasim",
};
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
console.log(people);
//Assignment 2:Manipulating an Array: Rearranging Words
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.shift();
scrambledArray.unshift("I");
scrambledArray.pop();
scrambledArray.splice(1, 3);
scrambledArray.splice(3, 0, "student", "of");
var respounce = scrambledArray.join("  ");
console.log(respounce);
var inventory = [];
var Product1 = { name: "car", model: 2024, cost: 5000000, Quantity: 9 };
var Product2 = { name: "macbook", model: 2023, cost: 500000, Quantity: 6 };
var Product3 = { name: "iphone", model: 2024, cost: 100000, Quantity: 12 };
inventory.push(Product1);
inventory.push(Product2);
inventory.push(Product3);
console.log(inventory[2].Quantity);
var student1 = { name: "jaweriya", seniorstudent: false, assignmentcomplete: true };
var student2 = { name: "Mutaiba", seniorstudent: true, assignmentcomplete: true };
var student3 = { name: "Abeera", seniorstudent: false, assignmentcomplete: false };
var student_1 = student1.seniorstudent && student1.assignmentcomplete;
var student_2 = student2.seniorstudent && student2.assignmentcomplete;
var student_3 = student3.seniorstudent && student3.assignmentcomplete;
function students() {
    if (student1.seniorstudent && student1.assignmentcomplete === student_1) {
        console.log(student1);
    }
    else if (student2.seniorstudent && student2.assignmentcomplete === student_2) {
        console.log(student2);
    }
    else {
        console.log(student3);
    }
}
students();
