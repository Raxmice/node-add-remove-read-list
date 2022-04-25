const edit = require('chalk');
const fs = require('fs');

//adding function
const add = (title, body) => {
    let note = []; //creating arrey to save data init
    try{
        note = JSON.parse(fs.readFileSync("notes.json")) //it will read the notes.js file and store as an note array 
    }
    catch(e){
        //console.log(e)
    }

    //
    let index = note.findIndex((x)=>x.title == title)
    //console.log(index) //it will print -1 when title dose not exsist
    if(index == -1){
        note.push({title, body});
        console.log(note)
        console.log(edit.bgGreen.black("data added."));
    }else{
        console.log(edit.bgRed.black("title = "+title+". is already exsists."));    
    }
    //writing on JSON file
    fs.writeFileSync("notes.json", JSON.stringify(note)); 
}
//removeing function
const remove = (title)=>{
    let note=[];
    try{
        note = JSON.parse(fs.readFileSync("notes.json")) //it will read the notes.js file and store as an note array 
    }
    catch(e){
        //console.log(e)
    }
    let index = note.findIndex((x)=>x.title == title)
    //console.log(index) //it will print -1 when title dose not exsist
    if(index == -1){
        console.log(note)
        console.log(edit.bgRed.black("title = "+title+". dose not exist."));
    }else{
        const removed = note.filter((x)=>x.title !== title);
        console.log(removed);
        fs.writeFileSync("notes.json", JSON.stringify(removed));  
        console.log(edit.bgGreen.black("data removed."));  
    }

}

//read function
const read = (title)=>{
    let note = []; //creating arrey to save data init
    try{
        note = JSON.parse(fs.readFileSync("notes.json")) //it will read the notes.js file and store as an note array 
    }
    catch(e){
        //console.log(e)
    }
        let index = note.findIndex((x)=>x.title == title); //index is an arrey value
        if(index !== -1){
            console.log(edit.bgYellow.black(title));
            console.log(edit.bgGray.black(`${note[index].body} `)); 
        }else{
            console.log(edit.bgRed.black("title = "+title+". dose not exist."));
        }
}

//list function
const list =()=>{
    let note = []; //creating arrey to save data init
    try{
        note = JSON.parse(fs.readFileSync("notes.json")) //it will read the notes.js file and store as an note array 
    }
    catch(e){
        //console.log(e)
    }
    let len = note.length;
    console.log(edit.bgBlue.black("Your Notes:"));
    for(i=0; i<len; i++){
    note = JSON.parse(fs.readFileSync("notes.json"));
    console.log(edit.bgGray.black(`${note[i].title} `));
    }

}
module.exports = { add, remove, read, list } //it will exports this functions data to app.js file (here add is a fuction const variable)

