let fs = require("fs");
let path = require("path");

function sfunction(input){
    let path = input[1];
    if(fs.existsSync(path)){
        let content = "" + fs.readFileSync(path);
        let list = content.split("\r\n");

        
        for(let i = 0; i < list.length; i++){
            if(list[i].length == 0){
                if(list[i-1].length != 0){
                    console.log(list[i]);
                }
            }
            else{
                console.log( list[i]);
            }     

        }
       
    }
    else{
        console.log("Enter correct file path");
        return;
    }



}

function nfunction(input){
    console.log("nfunction");

    let path = input[1];
    if(fs.existsSync(path)){
        let content = "" + fs.readFileSync(path);
        console.log(content);
        let list = content.split("\r\n");

        for(let i = 0; i < list.length; i++){
            console.log( i+1 + ". "+ list[i]);
        }
       
    }
    else{
        console.log("Enter correct file path");
        return;
    }


}

function bfunction(input){
    console.log("bfunction");

    let path = input[1];
    if(fs.existsSync(path)){
        let content = "" + fs.readFileSync(path);
        console.log(content);
        let list = content.split("\r\n");

        let j = 1;
        for(let i = 0; i < list.length; i++){
            if(list[i].length > 0){
                console.log( j + ". "+ list[i]);
                j++;
            }
            else{
                console.log( " "+ list[i]);
            }
            
        }
       
    }
    else{
        console.log("Enter correct file path");
        return;
    }
}


module.exports = {
    sfn : sfunction,
    nfn : nfunction,
    bfn : bfunction
}