
//=============================================================================
/*                              Q1                                           */
//=============================================================================
//write a function that takes a string as an input and returns an array
//containing the length of each word in that string.
//solve it using one of the helpers functions(reduce,each,map,filter)
//wordLengths("hello its me") // [5,3,2]

function wordLengths(str){
    const strArray = str.split(' ')
    const arr = []
    for(let i = 0;i<strArray.length;i++){
        arr.push(strArray[i].length)
    }
    return arr
}


//=============================================================================
/*                                  Q2                                    */
//=============================================================================
// Using reduce, write a function countOccurrences that accepts two parameters: a string, 
// and a character (e.g. "a"), and returns number of times that character occured:
// countOccurrences("hello", "l"); // 2
// countOccurrences("hello, world!", "l"); // 3

function countOccurrences(string, character) {
    return string.split('').reduce((acc,el) => {
        if(acc===el){
            acc += el
        }
        return acc.length-1
    },character)
}


//=============================================================================
/*                                  Q3                                    */
//=============================================================================
//write a function that takes a string as an input and returns an array
//with only the words of length that are longer than 3.
//solve it using one of the helpers functions(reduce,each,map,filter)


function wordsLongerThanThree(str) {
    str.split(' ').filter((el) => {
        return el.length>3
    })
}


//=============================================================================
/*                                  Q4                                        */
//=============================================================================
//Using recursion, write a function called repeatString that takes two parameters: a string str, 
//which is the string to be repeated, and count, a number 
//representing how many times the string str should be repeated.
//repeatString('dog', 0); // => '' 
//repeatString('dog', 1); // => 'dog' 
//repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
//repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) { 
    if(count === 0){
        return ''
    }
    return str + repeatString(str,count-1)
} 
 

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
//Depending on data modeling concept that you have learned:
//Write a factory function favoriteFood which accepts two parameters a name and favoriteFood.
//Write a function sayFavoriteFood which takes an object with a name and favoriteFood property. 
//The function will return a string stating the person’s name and favorite food.
//var person = favoriteFood("Kyle", "bananas");
//sayFavoriteFood(person); ==> "Kyle's favorite food is bananas"

function favoriteFood(name, favoriteFood) {
  return {
      name,
      favoriteFood
  }
}

function sayFavoriteFood(object){
  return `${object.name}'s favorite food is ${object.favoriteFood}`
  
}


//=============================================================================
/*                                  Q6                                      */
//=============================================================================
//lets create a Circle class using OOP concept,
 // we need to create the circles (lets create only one for now), 
 //the invocation should take the radius of the circle. 
  // var circle1 = Circle(70);

  //Create a function increaseRadius that multiplies circle radius by n value.
  //Create a function circleArea to compute the area of the circle.
  //Create a function  circlePerimeter to compute the perimeter of the circle.
  //Create two circles  from Circle function and save them in one array called circles!
  //Write function displayCircles that take circles array as an input and 
  //the output should display all the circle's information(Radius, Area, and Perimeter of a circle).

  function Circle(radius){
      let rad = radius
      return {
        increaseRadius: function(n){
            return rad*n    
        },
        circleArea: function(){
            return rad*rad*Math.PI
        },
        circlePerimeter:function(){
            return 2*rad*Math.PI
        },
        radius
      }
  }

  let circle1 = Circle(50)
  let circle2 = Circle(70)
  const circles = [circle1,circle2]

  function displayCircles(arr){
      let str = ''
      for(let i = 0;i<arr.length;i++){
          str += `${i+1} Radius is ${arr[i].radius}, Area is ${arr[i].circleArea()}, Perimeter is ${arr[i].circlePerimeter()} \n`
      }
      return str
  }
  

//=============================================================================
/*                                  Q7                                       */
//=============================================================================
//lets make an multiplier function using closures.
//The  multiplier  function takes a single parameter,
//and returns an anonymous function that takes a single parameter
//and returns the product  x of y.
// var multiplier1 = multiplier(2);
// multiplier1(3); ==> 6

function multiplier(x) {
  let multi = x 
  return function (y){
      return multi * y
  }
}


//=============================================================================
/*                                  Q8                                       */
//=============================================================================

//Write a function indexesOnly which takes an array,
//and replaces each element with their corresponding index values.
//indexesOnly(["a", "b", "c", 10, true]) ==>  [0,1,2,3,4]
//Note: Your function should not create a new array, 
//but replace the values of the original input array.
//ANOTHER NOTE : solve this question using while loop. 

function indexesOnly (array) {
  for(let i =0;i<array.length;i++){
    array[i] = i
  }
}
//=============================================================================
/*                                  Q9                                       */
//=============================================================================
/*
Write a function displayBusTimes which takes in an object and a string. 
The object is the collection of bus time schedules, 
and the string will be the bus line the user's interested in. See below:
*/
var cityZBusSchedules = {
  bus12Schedule: [9, 18, 27, 36],
  bus15Schedule: [11, 22, 33, 44],
  bus22Schedule: [15, 30, 45]
};

//Your function should output a string with the times the user is interested in.

//Calling your function should result in something like:
displayBusTimes(cityZBusSchedules, "bus15Schedule"); //"The bus will arrive in the next [11,22,33,44] minutes."

//Of course, depending on the input value, it should output correct values..
displayBusTimes(cityZBusSchedules, "bus22Schedule"); //"The bus will arrive in the next [15,30,45] minutes."

function displayBusTimes(busScheduleObj, busLine) {
	return busScheduleObj[busLine]
}

//=============================================================================
/*                                  Q10                                      */
//=============================================================================
//Short Answer Questions
//In your own words, no more than 3 sentences, answer the following:

//Q1:When accessing object properties, what is the difference between dot notation and bracket notation?
// we can access properties from both, but when we need to insert data to the obj, dot behaves as adding a string named 
// what ever after the dot, but we can use initialized variable inside the bracket notation 

//Q2 :What does the typeof operator do?
// returns the type of our input if its number, string .. or object

//Q3 :How do we add a property to an object?
// using the Q1

