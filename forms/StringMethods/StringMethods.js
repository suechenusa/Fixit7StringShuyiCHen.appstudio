//a. create a variable named quoteString
let quoString = "Failure is simply the opportunity to begin again this time more intelligently."
console.log(quoString)

//b.use upper case and save it to a new variable named upperCaseString
let upperCaseString = quoString.toUpperCase()
console.log(upperCaseString)
//


//c.create a variable named authorString
let authorString = "-Henry Ford"
console.log(authorString)

//d.put the authorString value on the end of quoteString value, the new string a variable named completeString
let completeString = quoString.concat(authorString)
console.log(completeString)

//e.create a new string vriable name secondQuote
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"

//f.change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString
let lowerCaseString = secondQuote.toLowerCase()
console.log(lowerCaseString)

//g.find the character at the 3rd position of secondQuote
let letter = secondQuote.charAt(2)
console.log(letter)

//h.create a new vairable named findString. remove this part of the second Quote string and put it in find String variable
let findString = secondQuote.replace ("What separates the talented individual from the successful one is a lot of hard work.","")
console.log(findString)