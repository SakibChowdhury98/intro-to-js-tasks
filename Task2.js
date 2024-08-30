/*
### Task-2

Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

**Input:**
</br>
The first line of the input is the marks of the five subjects mentioned above, respectively.

**Output:**
</br>
Print the result in 2 decimal places.

---

**Sample Input:**
</br>
75.25, 65, 80, 35.45, 99.50

**Sample Output:**
</br>
71.04
*/

var Mathematics, Biology, Chemistry, Physics, Bangla;
Mathematics = 85;
Biology = 81;
Chemistry = 83;
Physics = 78;
Bangla = 80;
var marks = Mathematics + Biology + Chemistry + Physics + Bangla;
var average = marks/5;
console.log("marks = ", marks);
console.log("average = ", average);