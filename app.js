let z = require("http") // for creating a server
let fs = require("fs") // for creating a file
let port = 5000
// to create a local server
z.createServer(function (req,res) {
    res.write("abc")
    res.end()
}).listen(port)
console.log(`Server running at ${port}`)

fs.writeFileSync("san.js","San") // to write in a file
fs.writeFileSync("san1.js","San")
fs.appendFileSync("san.js","123") // to append in a file, add at last
let read = fs.readFileSync("san.js")  // to read a file, shows in hex value
let read1 = read.toJSON() // to read a file, shows in decimal value
let read2 = read.toString() // to read a file, shows in string value
console.log(read)
console.log(read1)
console.log(read2)

//"open" - common value for all read, write, append data
fs.open("san.js",function (err,fd) {
    fs.read(fd,function(err,byte,buf){
        console.log(byte)
        console.log(buf)
    })
})

