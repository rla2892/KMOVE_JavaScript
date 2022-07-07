let ulTag = document.querySelector('ul');
let liTag = document.createElement('li');
liTag.innerText = 'New';
ulTag.appendChild(liTag);

let aTag = document.querySelector('a');
aTag.setAttribute('href', "http://daum.net");
aTag.innerText='다음'

function falert(msg){
    console.log(`falert : ${msg}`);

    let ulTag = document.querySelector('ul');
    let liTag = document.createElement('li');
    liTag.innerText = 'New';
    ulTag.appendChild(liTag);

    // alert(msg);
    return
}

const deleteLast = () => {
    let ulTag = document.querySelector('ul');
    ulTag.lastElementChild.remove();
}

let addEv = document.querySelector('#add');
let removeEv = document.querySelector('#remove');

addEv.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.currentTarget);
    console.log(e.target.innerText);
    falert();
});
removeEv.addEventListener('click', () => {
    deleteLast();
});
