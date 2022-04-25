const edit = require('chalk');
const yargs = require('yargs');
const commands = require('./commands'); //data from this file (file connecting)


let command = yargs.argv._[0]; //dec arr
let title = yargs.argv.title; //dec var
let body = yargs.argv.body; //dec var

//adding note
if (command == "add"){
    //passing values to add fuction on commands file
    if(title && body){
        commands.add(title, body);
    }else if(title){
        console.log("body=__ required.");
    }else{
        console.log("title=___ required.");
    }
}

//remove note
else if (command == "remove"){
    if(title){
        commands.remove(title);
    }
}

//listing note
else if (command == "list"){
    commands.list();
}

//reading data
else if (command == "read"){
    if(title){
        commands.read(title);
    }
}

else{
    console.log(edit.bgYellow.black("Enter any command to perform "));
    console.log(edit.underline.red("Commands are:")+ edit.yellow(" add, remove, read, list "));
    console.log(edit.underline.red("Example:")+ edit.green(" node app add --title=sangam --body=my body "));
    console.log(edit.underline.red("Example:")+ edit.green(" node app remove --title=sangam "));
    console.log(edit.underline.red("Example:")+ edit.green(" node app read --title=sangam "));
    console.log(edit.underline.red("Example:")+ edit.green(" node app list "));
}