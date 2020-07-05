
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');

addButton.addEventListener('click' , addItem );
removeButton.addEventListener('click', removeItem);

function addItem(){
    let ul = document.getElementById('list');
    let resource = document.getElementById('resource');
    let href = document.getElementById('href');
    let li = document.createElement("li");
    li.setAttribute('id',resource.value);
    li.appendChild(document.createTextNode(resource.value + "  " + href.value ));
    ul.appendChild(li);
}

function removeItem(){
    let resource = document.getElementById('resource');
    let item = document.getElementById(resource.value);
    let ul = document.getElementById('list');
    ul.removeChild(item);
}
