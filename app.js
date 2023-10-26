//select the elements

const toDoList = document.getElementById("todolist")
const input = document.getElementById("input")
const addBtn = document.getElementById("button")

//initialize an empty array
let arr = [];

//first function
addBtn.addEventListener("click", ()=>{
    //add to the array

    arr.push(input.value)
    input.value=""

    //call the showlist function
    showList()


})
//second function
function showList(){
    //everytime the function runs, we have to clear the conatiner first
    toDoList.innerHTML = "";
    //HDF - foreach - append all the list items for the array
    arr.forEach((el,i,arr)=>{
        // toDoList.innerHTML += "<li>"+el + "<a onclick= 'editList("+i+")'>"+"Edit"+"</a>"+ "</li>"
        let listitem = document.createElement("li")
        let anchor1 = document.createElement("a")
        let anchor2 = document.createElement("a")

        listitem.innerText = el;
        anchor1.innerText = "Edit"
        anchor1.onclick = ()=>{
            editList(i);
        }
        anchor2.innerText = "Delete "
        anchor2.style.marginRight = "10px"
        anchor2.onclick = ()=>{
            deleteList(i);
        }

        listitem.append(anchor1,anchor2)
        toDoList.append(listitem)
        
        
    })
}

//third function
function editList(i){
    let newvalue = prompt("Please enter a new value")
    console.log(newvalue)

    arr.splice(i,1,newvalue)
    showList()
}

function  deleteList(el,index){
    arr.splice(index,1)
    showList()
}


//fourth function
