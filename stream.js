//Stream - to read, write, duplex(pipe), transform( conversion of jpg to png, file to zip, ...)
let fs = require("fs")
const path = require("path")
let data = ""

//File write method 
let w = fs.createWriteStream("sj.txt")

w.setDefaultEncoding("utf8")

w.write("San6")
w.end()
w.on("finish",function (ev) {
    console.log('Completed')
})

// //File read method
let r = fs.createReadStream("san.txt")

r.setEncoding("ascii")

r.on("data",function (ev) {
    data += ev
})
r.on("end",function (ev) {
   console.log(data)
})
r.on("error",function (ev) {
   console.log("Error")
})

// //File duplex method
let r1 = fs.createReadStream("san.txt")
let w1 = fs.createWriteStream("sj.txt")
r1.pipe(w1) // readed file updated in write file

let rs = fs.createReadStream("san.txt")
let ws = fs.createWriteStream(path.join(__dirname,"new","new.txt"))
rs.pipe(ws)

//File transform method
let zlib = require("zlib")

r1.pipe(zlib.createGzip).pipe(w1) // for converting normal file to zip file
r1.pipe(zlib.createGunzip).pipe(w1) // for converting zip file to normal file