// April Rieger -------- ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// create a function that takes in a string
const codeMyWord = (string) => {
	//first we need to split our string so we can map through the values
		return string.split('').map((value) => {
			// then our conditional statements
			if (value === "a") return "4"
			else if (value === "e") return "3"
			else if (value === "i") return "1"
			else if (value === "o") return "0"
			else return value
				// join the values back into a string and return the coded message
			}).join('')

}
console.log(codeMyWord(secretCodeWord1))
console.log(codeMyWord(secretCodeWord2))

//evaluates whether of not there are certain letters that need to be changed
//spits out the coded message




// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"


const wordsWithA = (array) => {
newArray = array.filter(array => array.includes("a") || array.includes("A"))
    return newArray
}

console.log(wordsWithA(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.


// create a function that takes in an array for an argument and filters through the values
var hand1 = [5, 5, 3, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// Create a function that takes in an array as an argument
const fullHouse = (array) => {
  // Sort the array in order
  let sortMe = array.sort((a,b)=>a-b)
  // Check to see if the values are equal to one another (0-2 && 3-4 || 0-1 && 2-4)
  if (sortMe[0] === sortMe[1] && sortMe[0] === sortMe[2] && sortMe[3] === sortMe[4]) {
    return true
  } else if (sortMe[0] === sortMe[1] && sortMe[2] === sortMe[3] && sortMe[2] === sortMe[4]) {
    return true
  } // else return false
    else return false
}

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
