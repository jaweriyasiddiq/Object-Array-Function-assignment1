//Assignment 1: Building Your Friend List
type Friend = {
  firstName: string;
  lastName: string;
  id?: number;
};
let people: { friends: Friend[] } = { friends: [] };
let friend1: Friend = {
  firstName: "misbah",
  lastName: "khan",
  id: 1,
};
let friend2: Friend = {
  firstName: "Mutaiba",
  lastName: "Chuhan",
};
let friend3: Friend = {
  firstName: "asifa",
  lastName: "Qasim",
};
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

console.log(people);

//Assignment 2:Manipulating an Array: Rearranging Words

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.shift();
scrambledArray.unshift("I");
scrambledArray.pop();
scrambledArray.splice(1, 3);
scrambledArray.splice(3, 0, "student", "of");
let respounce = scrambledArray.join("  ");
console.log(respounce);


//Assignment 3: Company Product Catalog
type Product = { name: string; model: number; cost: Number; Quantity: number };
let inventory: Product[] = [];
let Product1: Product = {
  name: "car",
  model: 2024,
  cost: 5000000,
  Quantity: 9,
};
let Product2: Product = {
  name: "macbook",
  model: 2023,
  cost: 500000,
  Quantity: 6,
};
let Product3: Product = {
  name: "iphone",
  model: 2024,
  cost: 100000,
  Quantity: 12,
};

inventory.push(Product1);
inventory.push(Product2);
inventory.push(Product3);
console.log(inventory[2].Quantity);

//Assignment 4: Student List Organizer
type Student = {
  name: string;
  seniorstudent: boolean;
  assignmentcomplete: boolean;
};
let student1: Student = {
  name: "jaweriya",
  seniorstudent: false,
  assignmentcomplete: true,
};
let student2: Student = {
  name: "Mutaiba",
  seniorstudent: true,
  assignmentcomplete: true,
};
let student3: Student = {
  name: "Abeera",
  seniorstudent: false,
  assignmentcomplete: false,
};

let student_1 = student1.seniorstudent && student1.assignmentcomplete;
let student_2 = student2.seniorstudent && student2.assignmentcomplete;
let student_3 = student3.seniorstudent && student3.assignmentcomplete;

function students() {
  if (student1.seniorstudent && student1.assignmentcomplete === student_1) {
    console.log(student1);
  } else if (
    student2.seniorstudent &&
    student2.assignmentcomplete === student_2
  ) {
    console.log(student2);
  } else {
    console.log(student3);
  }
}
students();
