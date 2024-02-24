// Array structure

let names = ["ahmed", "ali", "adham", "mostafa"];

console.log(names[1]); //  =>  ali
console.log(names[3]); //  =>  mostafa







// Nasted Array

let numberCase = [1, 2, 3, 4, [5, 6, 7]]; // => print in consol number 6
console.log(numberCase[4][1]); // => 6


// Editing in the Array
let n_ames = ["ahmed", "ali", "adham", "mostafa"];
 n_ames[1] = "islam" ; // => replace ali with islam 
 n_ames[2] = "kreem" ;  // => replace adham with kareem

 console.log(n_ames);




// JavaScript Array Methods



// 1- length =>  number of index ..............................
console.log(names.length); // =>  4
console.log(names[names.length - 1]); // => mostafa






// 2- Add and remove elements in array 

// 2-1- Add elements    push => end of array   unshift => start of array

let n__ames = ["ahmed", "ali", "adham", "mostafa"];

n__ames.push (" Asia", "ismail ")  // => add elements at the end of array

n__ames.unshift (" mahmoud", "mansour ")  // => add elements start of array

console.log(n__ames);



// 2-2  Delete elements    pop => end of array   shift => start of array

let n__aames = ["ahmed", "ali", "adham", "mostafa"];

n__aames.pop ()  // => delete elements at the end of array

n__aames.shift ()  // => delete elements start of array

console.log(n__aames);



// splice => delete or add elements from any place of array

let n__aamaaes = ["ahmed", "ali", "adham", "mostafa"];
n__aamaaes.splice(1,1); // => position   -  count  => remove
console.log(n__aamaaes);

n__aamaaes.splice(0,0," abdo"); // => position   -  count  => add
console.log(n__aamaaes);

// slice => take apart of array as a copy  ( start - end )

let n_aamahaes = ["ahmed", "ali", "adham", "mostafa"];
n_aamahaes .slice(0,2);
console.log(n_aamahaes .slice(0,2));



// search in Array 

// 1- indexof   => 1- mean that the element not found

let xyz = ["ahmed", "ali", "adham", "mostafa"];
console.log(xyz.indexOf('ali')); // => 1
console.log(xyz.indexOf('ahmed' , 1));  //=> 1- 

// 2- lastIndexof   =>  search from rhght
let xyzxyz = ["ahmed", "ali", "adham","ali", "adham", "mostafa"];
console.log(xyzxyz.lastIndexOf('ali',4));



// includes =>    true or false
let x_yz = ["ahmed", "ali", "adham", "mostafa"];
console.log(x_yz.includes('ali'));
console.log(x_yz.includes('ali',2));


// sort / reverse     => reverse all the array 
console.log(x_yz.reverse());

console.log(x_yz.sort()); //=> sort alphabet



// concat => concatenation of arrays

let arr1 =[1,2,3];
let arr2 =[4,5,6];
// arr1+=arr2
// console.log(arr1);   // => the result is string

console.log(arr1.concat(arr2)); // => printed as array


// join  => array to string 
let arr12 =[1,2,3];
console.log(arr12.join(" "));














































