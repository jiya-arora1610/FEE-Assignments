(function (){
    //let todos=[];
    
    let todos = JSON.parse(localStorage.getItem("todos")) || [] ;
    let id  = Number(localStorage.getItem("id")) || 0;

    // Reset saved todos and id while testing
    // localStorage.removeItem("todos");
    // localStorage.removeItem("id");
    // todos = [];
    // id = 0;

    const todocontainer=document.getElementById("todo");
    const todoinput=document.createElement("input");
    todoinput.type="text";
    todoinput.placeholder="Enter task..."
    const addbtn=document.createElement("button");
    addbtn.textContent="ADD";

    const searchinput=document.createElement("input");
    searchinput.type="text";
    searchinput.placeholder="Search task...";

    const todolist=document.createElement("div");
    todolist.style.border="2px solid black"
    todocontainer.append(todoinput,addbtn,searchinput,todolist);

   

    function rendertask(task){
        
        const todoitem=document.createElement("div");
        todoitem.style.border="2px solid red";
        todoitem.style.margin="10px";
        todoitem.dataset.id=task.id;

        if(task.complete){
            todoitem.style.backgroundColor="green";
        }

        const p=document.createElement("p");
        p.textContent=task.text;
        const deletebtn=document.createElement("button");
        deletebtn.textContent="Delete";
        const editbtn=document.createElement("button");
        editbtn.textContent="Edit";
        const finbtn = document.createElement("button");
        finbtn.textContent = "Complete";

        finbtn.addEventListener("click", function(){
            task.complete=true;
            todoitem.style.backgroundColor = "green";
            finbtn.remove();
            localStorage.setItem("todos",JSON.stringify(todos));
        })
        
        editbtn.addEventListener("click",function(){
            const editinput=document.createElement("input");
            editinput.value=task.text;
            const savebtn=document.createElement("button");
            savebtn.textContent="Save";
            todoitem.prepend(editinput,savebtn);
            editinput.focus();
            savebtn.addEventListener("click",function(){
                const updatedtask=editinput.value;
                if(!updatedtask){
                    return;
                }
                task.text=updatedtask;
                p.textContent=task.text;
                editinput.remove();
                savebtn.remove();
                localStorage.setItem("todos",JSON.stringify(todos));
                console.log(todos);
            })
        })

        deletebtn.addEventListener("click",function(){
            const index=todos.findIndex(function(todo){
                return todo.id===task.id;
            });
            if(index!==-1){
                todos.splice(index,1);
                id=id-1;
                localStorage.setItem("todos",JSON.stringify(todos));
                localStorage.setItem("id",id);
            }
            todoitem.remove();
        })
        todoitem.append(p,deletebtn,editbtn);
        if(!task.complete){
            todoitem.append(finbtn);
        }
        todolist.prepend(todoitem);
        
    }
    function addtodo(){
        const task=todoinput.value;
        if(!task){
            return;
        }
        id = id + 1;
        const obj = {
            id: id,
            text: task,
            complete: false,
            edit:0
        }

        console.log(task);
        
        todos.unshift(obj);
        localStorage.setItem("todos",JSON.stringify(todos));
        localStorage.setItem("id",id);

        rendertask(obj);
        todoinput.value="";
        todoinput.focus();
    }
    todos.slice().reverse().forEach(function(task){
        rendertask(task);
    });
    addbtn.addEventListener("click",addtodo);

    searchinput.addEventListener("input",function(){
        const searchtext=searchinput.value.toLowerCase();
        const items=todolist.children;

        for(let i=0;i<items.length;i++){
            const tasktext=items[i].querySelector("p").textContent.toLowerCase();

            if(tasktext.includes(searchtext)){
                items[i].style.display="block";
            }
            else{
                items[i].style.display="none";
            }
        }
    });
    todoinput.addEventListener("keydown",function(e){
        // console.log(e);
        if(e.key==="Enter"){
            addtodo();
        }
    })

})()


//search button functionality