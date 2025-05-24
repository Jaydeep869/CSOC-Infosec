const fs = require('fs');
const { join } = require('path');

const input1 = process.argv[2]; 
const input2 = process.argv[3]; 
var input3 = process.argv[4];
var input4 = process.argv[5]; 

const datas = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const guide={
    '--create': 'create a new user',
    '--addtodo': 'add a todo',
    '--delete': 'delete a todo',
    '--getall': 'get all todos',
    '--update': 'update a todo',
    '--help': 'get help',
}
const cmds={
    'cmd1': 'node index.js --create <username> --addtodo <todo>',
    'cmd2': 'node index.js <username> --addtodo <todo>',
    'cmd3': 'node index.js <username> --delete <todo>',
    'cmd4': 'node index.js <username> --getall',
    'cmd5': 'node index.js <username> --update <todo> <status>',
}

const name = datas.find((user) => user.name === input1);
if(!name && input1 !== '--create' && input1 !== '--help') {
    console.log("user not found");
    console.log('Follow the guide below');
    console.log('Guide:', guide);
    console.log('Commands:', cmds);
    return;}
const i = datas.findIndex((user) => user.name === input1);
if (name) {
    if (input2 === '--addtodo') {
      if (input3 === undefined) {
        return console.log('please enter todo');
      }
      const todo = {
        title: input3,
        completed: false,
      };
      const user = datas[i];
      user.todo.push(todo);
      try {
        fs.writeFileSync('data.json', JSON.stringify(datas));
        return console.log('added todo');
      } catch (error) {
        console.error('Error writing to file:', error);
      }
    } else if (input2 === '--delete') {
      const todoIndex = datas[i].todo.findIndex(
        (todo) => todo.title === input3
      );
      if (todoIndex !== -1) {
        datas[i].todo.splice(todoIndex, 1);
        try {
          fs.writeFileSync('data.json', JSON.stringify(datas));
          return console.log('deleted todo');
        } catch (error) {
          console.error('Error writing to file:', error);
        }
      } else {
        return console.log('todo not found');
      }
    } else if (input2 === '--getall') {
      const userTodos = datas[i].todo;
      for (let j = 0; j < userTodos.length; j++) {
        console.log(`Todo no: ${j + 1}`);
        console.log(`Title: ${userTodos[j].title}`);
        console.log(`Status: ${userTodos[j].completed}`);
        console.log('---------------------');
      }
    } else if (input2 === '--update') {
      const todoToUpdate = datas[i].todo.find((todo) => todo.title === input3);
      if (!todoToUpdate) {
        return console.log('Todo not found');
      }
      todoToUpdate.completed = input4;
      try {
        fs.writeFileSync('data.json', JSON.stringify(datas));
        return console.log('updated todo');
      } catch (error) {
        console.error('Error writing to file:', error);
      }
    } else {
      return console.log('please enter valid cmd');
    }
  }
else if (
    input1 === '--create' &&
    input2 !== undefined &&
    input3 === '--addtodo'
  ) {
   
    if (input2 === '--addtodo') {
      return console.log('enter username');
    }
    const userExists = datas.some(user => user.name === input2);
    if (userExists) {
      return console.log('user exist already');
    }
    if (input4 === undefined) input4 = '';
    const newUser = {
      name: input2,
      todo: [{'title': input4, 'completed': false}],
    };
    
    try {
      datas.push(newUser);
      fs.writeFileSync('data.json', JSON.stringify(datas));
      return console.log('added user and todo');
    } catch (error) {
      console.error('Error writing to file:', error);
    }
  }
  else if (input1 === '--help') {
  console.log('Guide:', guide);
    console.log('Commands:', cmds);
    return
}
  else {
   console.log(`please enter valid cmd or username, Follow the guide below`);
    console.log('Guide:', guide);
    console.log('Commands:', cmds);
    return;
  }

