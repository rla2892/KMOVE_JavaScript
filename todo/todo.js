
let addBtn = document.querySelector("#add-button");
let inputText = document.querySelector("#inputext");
let todoList = document.querySelector("#items");

addBtn.addEventListener('click', ()=>{
    let todoText = inputText.value;

    let li = document.createElement('li');
    li.setAttribute('class', 'item');

    let spanTask = document.createElement('span');
    spanTask.setAttribute('class','task');
    spanTask.innerText = todoText;
    li.appendChild(spanTask);

    let spanManage = document.createElement('span');
    spanManage.setAttribute('class','manage');
    li.appendChild(spanManage);

    let spanLike = document.createElement('span');
    spanLike.setAttribute('class', 'like');
    spanManage.appendChild(spanLike);

    let iLike = document.createElement('i');
    iLike.setAttribute('class', 'material-icons');
    iLike.innerText = 'favorite_border';
    spanLike.appendChild(iLike);

    let spanDel = document.createElement('span');
    spanDel.setAttribute('class', 'delete');
    spanManage.appendChild(spanDel);

    let iDel = document.createElement('i');
    iDel.setAttribute('class', 'material-icons');
    iDel.innerText = 'delete';
    spanDel.appendChild(iDel);

    todoList.appendChild(li);

    inputText.value = '';
});

