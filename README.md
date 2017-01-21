# arraylist-js

### Instalation
```sh
npm install arraylist-js
```
### usage
```javascript
var ArrayList = require("arraylist-js");

//Initialize a list
var names = new ArrayList();

//Create a list from an array
var numberArray = [1, 2, 3]
var numberList = new ArrayList();
numberList.create(numberArray);
console.log(numberList); //[1, 2, 3] now you can perform all the arraylist operations

//Add to a list
names.add("Paul"); //["Paul"]
names.add("John", "Magrette", "Dave"); //["Paul", "John", "Magrette", "Dave"]

//Add a value to a particular index
//params(index, value")

var numbers = new ArrayList(1, 2, 3, 4); //[1, 2, 3, 4];
numbers.addTo(2, 5); //[1, 2, 5, 3, 4] added 5 to the second index

//Get a value at index
numbers.get(0); // 1
numbers.get(2); // 5

//Get the last element in the list
numbers.last() // 4

//Check if the list contains a particular element
numbers.contains(5) //true
numbers.contains(13) //false

//Remove an object at an index
numbers.removeByIndex(0); //[2, 5, 3, 4]

//Remove the first instance of an object
numbers.removeByObject(4); //[2, 5, 3]

//You can pop and push to the arraylist
numbers.pop(); //3
console.log(numbers); //[2, 5]

numbers.push(10);
console.log(numbers); //[2, 5, 10]

//Size
numbers.size() //3

//Clear a list
numbers.clear();

//functional programming techiniques like map, filter
var names = new ArrayList("Paul", "Joan", "Mike")
names.filter(function(name){
    if(name !== "Mike"){
        return true;
    }
}
console.log(names); //["Paul", "Joan"]

names.map(function(name){
    return name + "s";
}
console.log(names); //["Pauls", "Joans"]

//Deep compare two array list
var a = new ArrayList(1, 2, 3);
var b = new ArrayList(1, 2, 3, 4);
var c = new ArrayList(1, 2, 3);

a.isEqualTo(b) // false
a.isEqualTo(c) // true

```
