let fs = require("fs");
let path = require("path");
let sbn = require("./snb_commands");


let input = process.argv.slice(2);


// if(input.length == 1){
//     if(fs.existsSync(input[0]) == true){
//         let content = fs.readFileSync(input[0]);
//         console.log("" +content);
//    }
//    else{
//        console.log("Enter correct file path");
   
//    }
// }

// else{
    if(input[0] == "-s"){
        sbn.sfn(input);
    }
    else if(input[0] == "-n"){
        sbn.nfn(input);
    }
    else if(input[0] == "-b"){
        sbn.bfn(input);
    }
    else{
        let content = "";
        for(let i = 0; i < input.length; i++){
            if(fs.existsSync(input[0]) == true){
                content += fs.readFileSync(input[i]) + "\n";   
            }
            else{
                console.log("Enter correct file path");
                return;
            }
        }
        console.log(content);
    }
//}

