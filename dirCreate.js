const { ifError } = require("assert")
const fs = require("fs")
const fsPromises = require("fs").promises
const path = require("path")


// to create folder
fs.mkdir("old",function(err){
    if(err) throw err
    console.log("Folder created")
})

// to delete folder
fs.rmdir("old",function(err){
    if(err) throw err
    console.log("Folder deleted")
})