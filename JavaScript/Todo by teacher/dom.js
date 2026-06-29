const title = document.querySelector("#title");
const desc = document.querySelector("#desc");
const form = document.querySelector("form");
const todos = document.querySelector("#todolist");

form.addEventListener('submit' ,(e) => {
    e.preventDefault();
const titleText = title.value.trim();
const descText = desc.value.trim();

if(titleText === '' || descText === ''){
    alert("Please fill the input fields");
    return;
}

const li = document.createElement('li');

const newTitle = document.createElement('h3');
newTitle.innerText = titleText;

const newDesc = document.createElement('p');
newDesc.innerText = descText;

const deleteBtn = document.createElement('button');
deleteBtn.innerText = 'Delete';

deleteBtn.style.backgroundColor = "red";
deleteBtn.style.padding = "5px";
deleteBtn.style.borderRadius = "5px";

li.append(newTitle);
li.append(newDesc);
li.append(deleteBtn);
todos.append(li);


})