// Buffer - used for uploading data
// Method 1
let a = new Buffer(10)

let length = a.write(" S","ascii") // to find length
console.log(length)
console.log(a)
console.log(a.toJSON())
console.log(a.toString())

//Method 2
let b = new Buffer("Santhosh")

console.log(b)
console.log(b.toJSON())
console.log(b.toString())

//Method 3
let c = new Buffer([1,2,3,4,5])

console.log(c)
console.log(c.toJSON())
console.log(c.toString())

// for loop - to display alphabets
let d = new Buffer(60)
for(i=0;i<26;i++){
    d[i] = i + 65 // first 26 boxes filled
    d[i+26] = i + 97 // after 26 boxes filled
}
console.log(d)
console.log(d.toJSON())
console.log(d.toString())
