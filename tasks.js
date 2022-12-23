
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
 
  if (text === 'quit\n'|| text === 'exit\n') {
    quit();
  }
  else if(text.startsWith('hello')||text=="hello"){
  hello(text)

  }else if(text==='list\n'){
    list();

  }
  else if(text ==='help\n'){
    help();
  }else if(text.startsWith('add')){
    add(text)
  }else if(text.startsWith('remove') ){
    remove(text)
  }else if(text.startsWith('edit')){
    edit(text)
  }
  else{
    unknownCommand(text);
  }
}


// this function to run the commend help
function help() {
    console.log("hello    :hello dear!\nhello+any :hello any!\nlist    :display list of tasks\nadd     :add task to the list\nremove      :remove element from the list\nquit or exit :exit the app")
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  
  console.log(text.trim()+"!")
}
//declare list
var NewList=["add","remove","commit","push"];
//list
function list(){
  NewList.map((index)=>{
  console.log(`${NewList.indexOf(index)+1}-[*]${index}`);
  })
}
// add function 
function add(text){

  if(text.slice(3).trim() == "" ){
    console.log('error you must add a task')
  }
  else {
    NewList.push(text.slice(3).trim())
    console.log("added")
    }
}
//remove function
function remove(text){
  if(text.slice(6).trim() == ""){
    NewList.pop();
  }else if(parseInt(text.substring(6))>NewList.length){
     console.log("this number is not exist")
  }
  else {
    NewList.splice(parseInt(text.substring(6))-1,1)
  }
}
///edit function 
function edit(text){
if(text.slice(4).trim()==""){
  console.log("error")
}else if(parseInt(text.substring(5))<NewList.length){
  NewList[parseInt(text.substring(4))-1]=text.substring(6).trim()
}else if(isNaN(text.substring(4))){
 NewList.pop()
 NewList.push(text.slice(4).trim())
}
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("malak Wahyb")
