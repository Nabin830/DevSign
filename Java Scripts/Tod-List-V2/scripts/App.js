import Config from "./Config.js";
import Element from "./Element.js";
import Todo from "./Todo.js"
Todo.RenderTasks(Config.TaskList)

// on click of add task button the input field appers 
Element.addTaskBlock.onclick = () => {
    Element.Header.classList.add('write')
}

Element.Cancel.onclick = ()=>{
    Element.Header.classList.remove('write')
}

 //add new task

  Element.AddTask.onclick = ()=>{
    Todo.AddNewtask()
  }
 
  //edit,delete

  TodoList.addEventListener('click',function(e){
    let target=e.target;
    let button =target.getAttribute('data-button')

    if (button == 'delete'){
      let li = target.parentElement.parentElement
      let TaskId = li.getAttribute('data-task-id')


    }
  })