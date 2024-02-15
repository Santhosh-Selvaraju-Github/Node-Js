const http = require("http")
const fs = require("fs")
const bcrypt = require("bcrypt")
pw = "san"
pw1 = "sun"

bcrypt.genSalt(2,function (err,salt) {
    bcrypt.hash(pw,salt,function(err,hash){
        console.log(hash)
        bcrypt.compare(pw1,hash,function(err,same){
            console.log(same)
        })
    })
})
