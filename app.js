const title = document.querySelector('.inputTitle');
const note = document.querySelector('.inputNote');
const button  = document.querySelector('.addbutton');
const list = document.querySelector('.list');

document.addEventListener('DOMContentLoaded',getTasks)
button.addEventListener('click',addnote);
list.addEventListener('click',dlt);


function addnote(event){
    event.preventDefault();
    // console.log('hello');
    const div = document.createElement('div');
    div.classList.add('task');

    const li = document.createElement('li');
    li.innerText = title.value;
    li.classList.add('taskitem');
    div.appendChild(li);

    const li1 = document.createElement('li');
    li1.innerText = note.value;
    li1.classList.add('taskitem1');
    div.appendChild(li1);

    save ();

    const  editbutton = document.createElement('button');
    editbutton.innerHTML = '<i class="fas fa-edit"></i>';
    editbutton.classList.add('edit');
    div.appendChild(editbutton);

    const  deletetbutton = document.createElement('button');
    deletetbutton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deletetbutton.classList.add('delete');
    div.appendChild(deletetbutton);

    list.appendChild(div);
    title.value = "";
    note.value = "";

 }

 function dlt(e){
    const item = e.target;
    if (item.classList[0] === 'delete'){
        const app = item.parentElement;
        app.remove();
    }
 }

 function save(){
     var tasks;
     if (localStorage.getItem('tasks')=== null){
         tasks = [];
     }else{
         tasks = JSON.parse(localStorage.getItem('tasks'));
     }
    tasks.push({
        title: title.value,
        note: note.value
    });
    localStorage.setItem('tasks',JSON.stringify(tasks))
 }

 function getTasks(){
     let tasks;
     if (localStorage.getItem('tasks')=== null){
         tasks = [];
     }else{
         tasks = JSON.parse(localStorage.getItem('tasks'));
     }
    tasks.foreach(function(task){
        const div = document.createElement('div');
        div.classList.add('task');
    
        const li = document.createElement('li');
        li.innerText = task;
        li.classList.add('taskitem');
        div.appendChild(li);
    
        // const li1 = document.createElement('li');
        // li1.innerText = task.note;
        // li1.classList.add('taskitem1');
        // div.appendChild(li1);
    
        const  editbutton = document.createElement('button');
        editbutton.innerHTML = '<i class="fas fa-edit"></i>';
        editbutton.classList.add('edit');
        div.appendChild(editbutton);
    
        const  deletetbutton = document.createElement('button');
        deletetbutton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deletetbutton.classList.add('delete');
        div.appendChild(deletetbutton);
    
        list.appendChild(div);
        
    })
 }