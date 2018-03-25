//1. Read a file
const readline = require('readline');
//file system library
const fs = require('fs');

//for creating the platform for sending and getting information in node
const interFace = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//for asking the question and doing something with the answer
interFace.question('What is your file name: ', (answer) => {
    fs.readFile(answer, function(error,data){
        if (error){
            //for getting the message value from the error object
            console.log(error.message)
        }else{
            var inWords = data.toString()
            var upperWords = inWords.toUpperCase();
            console.log(upperWords);
        }
    })
    interFace.close();
});

//2. DNS lookup

const readline = require('readline');
//dns library
const dns = require('dns');

const interFace = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
interFace.question('What is your domain name: ', (answer) => {
    //for lookig up for a domain name
    dns.lookup(answer,(error, address) => {
        //if the domain is wrong 
        if (error){
            console.log(error.message)
        //if the domain is valid    
        }else{
            console.log('address: ', address);
        }
    });
    interFace.close();
});












    


