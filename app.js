console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {  // Check if the current value is odd
            console.log(i);
        }
    }
}
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    if (!userName || !age) {
      console.log("Please provide a name and age.");
    } else if (age >= 16) {
      console.log(`Congrats ${userName}, you can drive!`);
    } else {
      console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
    }
  }
  checkAge("Chuck", 40);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkPointLocation(x, y){
if (x == 0 && y == 0) {
    console.log("The point is at the origin.");
} else if (x == 0) {
    console.log("The point is on the y axis.");
} else if (y == 0) {
    console.log("The point is on the x axis.");
} else if (x > 0 && y > 0) {
    console.log("The point is in Quadrant 1.");
} else if (x < 0 && y > 0) {
    console.log("The point is in Quadrant 2.");
} else if (x < 0 && y < 0) {
    console.log("The point is in Quadrant 3.");
} else {
    console.log("The point is in Quadrant 4.");
    }
}
checkPointLocation(0, 2);   
checkPointLocation(1, 2);   
checkPointLocation(-6, 18); 

// Exercise 4 Section 
console.log("EXERCISE 4:\n==========\n");
function checkTriangleType(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
        return "Invalid triangle: All sides must be positive.";
    }
    
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return "Invalid triangle: The sum of any two sides should be greater than the third side.";
    }

    if (side1 == side2 && side2 == side3) {
        return "Equilateral triangle: All sides are equal.";
    } else if (side1 == side2 || side1 == side3 || side2 == side3) {
        return "Isosceles triangle: Two sides are equal.";
    } else {
        return "Scalene triangle: All sides are different.";
    }
}

console.log(checkTriangleType(1, 2, 2));
console.log(checkTriangleType(1, 1, 2));
console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(5, 4, 3));


