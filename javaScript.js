//Function Hide Content if no nodes Child
const pageContent = document.querySelector(".pageData");
pageContent.hasChildNodes() ? pageContent.style.visibility = 'visible' : pageContent.style.visibility = 'hidden';
//-------------------------------------------------------------------------------------------------------------

//Add button Functions:
var addBtn = document.querySelector(".addBtn");
addBtn.addEventListener('click', function(e) {
    let inputData = document.querySelector(".add").value;
    //Create Elements -->
    const li = document.createElement("div");
    const textData = document.createElement("span");
    const deleteBtn = document.createElement("button");
    //Append to Page Data --> (DOM)
    li.appendChild(textData);
    li.appendChild(deleteBtn);
    pageContent.appendChild(li);
    li.className = "parentNode";
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delBtn";
    textData.textContent = inputData;
    textData.className = "textData";
    pageContent.style.visibility = "visible";
    document.querySelector(".add").value = '';
})

//-------------------------------------------------------------------------------------------------------------

//Delete Button Function of Element
//Long Time Method -> 
/*
const listItems = document.querySelectorAll('.delBtn');
Array.from(listItems).forEach(function(item) {
    item.addEventListener('click', (e) => {

        const currentNode = e.target.parentElement;
        console.log('child element to remove:', currentNode);
        console.log('parent element to remove child from:', currentNode.parentElement);
        currentNode.parentNode.removeChild(currentNode);

    });
});
*/
//Short Time Method (More Effecient)--->
const list = document.querySelector('.pageData');
list.addEventListener('click', (e) => {
    if (e.target.className == 'delBtn') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
    list.hasChildNodes() ? list.style.visibility = 'visible' : list.style.visibility = 'hidden';
});

//-------------------------------------------------------------------------------------------------------------


// Hide All Books : (With Handeled Code)
const checkBox = document.querySelector('#hide');
checkBox.addEventListener('click', function() {
    if (checkBox.checked == true)

        pageContent.style.visibility = 'hidden';

    else if (checkBox.checked == false && pageContent.hasChildNodes() == false)
        pageContent.style.visibility = 'hidden';
    else if (checkBox.checked == false && pageContent.hasChildNodes() == true)
        pageContent.style.visibility = 'visible';

})

//-------------------------------------------------------------------------------------------------------------


const searchBtn = document.querySelector('.searchBtn');
searchBtn.addEventListener('click', function(e) {
    let searchValue = document.querySelector('.search').value.toLowerCase();
    const list = document.querySelectorAll('.parentNode');
    Array.from(list).forEach(function(books) {
        const textParentData = books.firstElementChild.textContent;
        if (textParentData.toLocaleLowerCase().indexOf(searchValue) != -1) {
            books.style.display = "block";
        } else
            books.style.display = "none";
    })

})

//Search Bar :