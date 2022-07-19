window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector('#new-task-input');
    const list_element = document.querySelector('#tasks');
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Please fill out the task");
            return;
        }


        const task_element = document.createElement("div");
        task_element.classList.add("task");

        const task_content = document.createElement("div");
        task_content.classList.add("content");
        
        task_element.appendChild(task_content);

        const task_input_element = document.createElement("input");
        task_input_element.classList.add("text");
        task_input_element.type="text";
        task_input_element.value = task;
        task_input_element.setAttribute("readonly", "readonly");

        task_content.appendChild(task_input_element);


        const task_actions = document.createElement("div");
        task_actions.classList.add("actions");

        const task_actions_edit = document.createElement("button");
        task_actions_edit.classList.add("edit");
        task_actions_edit.innerHTML="Edit";

        const task_actions_delete = document.createElement("button");
        task_actions_delete.classList.add("delete");
        task_actions_delete.innerHTML="Delete";



        task_actions.appendChild(task_actions_edit);
        task_actions.appendChild(task_actions_delete);



        task_element.appendChild(task_actions);


        list_element.appendChild(task_element);



        task_actions_edit.addEventListener("click", ()=>{
            if(task_actions_edit.innerText.toLowerCase()=="edit"){
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
                task_actions_edit.innerText = "Save";

            }else{
                task_input_element.setAttribute("readonly","readonly");
                task_actions_edit.innerText = "Edit";
            }
        });

        task_actions_delete.addEventListener("click",()=>{
            list_element.removeChild(task_element);
        });
        
    })

});


