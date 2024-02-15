const fs = require("fs")
const fsPromises = require("fs").promises
const path = require("path")

// Using Async and await method
const file = async() =>{
    try{
        //read file
        const read = await fsPromises.readFile("san.txt",'utf8')
        console.log(read)

        //wrire file
        const write = await fsPromises.writeFile(path.join(__dirname,"new","new.js"),read)
        console.log("Written completed")

        //append file
        const append = await fsPromises.appendFile(path.join(__dirname,"new","new.txt"),read)
        console.log(append)

        //rename file
        const rename = await fsPromises.rename(path.join(__dirname,"new","san.txt"),path.join(__dirname,"new","tnx.txt"))
        console.log(rename)

        //unlink(delete) file
        const del = await fsPromises.unlink(path.join(__dirname,"new","tnx.txt"))
        console.log(del)
    }catch(err){
        console.error(err)
    }
}

file()

//exit on uncaught errors
process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });
