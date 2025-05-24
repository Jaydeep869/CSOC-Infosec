const fs = require('fs');
const { join } = require('path');
var dat=JSON.parse(fs.readFileSync(__dirname+"/data.json",'utf-8'))

const cmd=process.argv[2];
const input=process.argv[3];
const new_input=process.argv[4];
if (cmd=="addTodo" && input && new_input==undefined){
    let data={}
    data=dat;
    const todo={
        id:Date.now(),
        title:input,
        completed:false
    }
    for (let i=0;i<data.length;i++){
        if (data[i].title==input){
            console.log("Todo already exists");
            return;
        }
    }
    if (!input){
        console.log("Please provide a todo title");
        return;
    }
    data.push(todo);
    fs.writeFileSync("data.json",JSON.stringify(data));
    console.log("Todo added successfully");
}
else if (cmd==="deleteTodo"){
    if (!input){
        console.log("Please provide a todo title to delete");
        return;
    }
    const tododel=dat.filter((todo)=>todo.title!=input);
    fs.writeFileSync("data.json",JSON.stringify(tododel));
}
else if (cmd==="getallTodo"){
    const data=JSON.parse(fs.readFileSync("data.json",'utf-8'));
    for (let i=0;i<data.length;i++){
        console.log(`Todo no: ${i+1}`);
        console.log(`Title: ${data[i].title}`);
        console.log(`Status: ${data[i].completed}`);
        console.log("---------------------");
    }
    console.log("All todos");
}
else if (cmd==="updateTodo"){
    const data=JSON.parse(fs.readFileSync("data.json",'utf-8'));
    const todo=data.find((todo)=>todo.title==input);
    if (!todo){
        console.log("Todo not found");
        return;
    }
    if(new_input!=="true"){
        console.log("Please provide a valid input");
        return;
    }
    todo.completed=new_input;
    fs.writeFileSync("data.json",JSON.stringify(data));
    console.log("Todo updated successfully");
}
else{
    console.log("Please provide a valid command");
    console.log("Available commands are: addTodo, deleteTodo, getallTodo, updateTodo");
    console.log("Usage: node index.js <command> <input> <new_input>");
    console.log("Ex: node index.js addTodo 'Go to gym'");
    console.log("Ex: node index.js deleteTodo 'Go to gym'");
    console.log("Ex: node index.js getallTodo");
    console.log("Ex: node index.js updateTodo 'Go to gym' 'true'");
}
