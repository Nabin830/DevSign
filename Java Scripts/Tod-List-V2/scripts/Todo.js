import Element from "./Element.js";
import Config from "./Config.js";


const AddNewtask = ()=>{
let title,desc,id
title =Element.Title.value
desc =Element.Desc.value
id = Config.TaskList.length + 1


Config.TaskList.push({
    id,
    title,
    description : desc
})
RenderTasks(Config.TaskList)



}

const RenderTasks = (tasks)=>{

Element.TodoList.innerHTML =''
    tasks.forEach(task => {
        let li = `<li>
    <div class="radio"task-id =${task.id} ></div>
    <div class="content">
      <h3>${task.title}</h3>
      <p>${task.description}</p>
    </div>
      <div class="action">
        <img src="./images/edit.svg" data-button="edit />
        <img class="delete" src="./images/delete.svg" data-button="delete"/>
    </div>
  </li>`;
  Element.TodoList.insertAdjacentHTML('beforeend',li)
    
    });
    
}






export default{
    AddNewtask,
    RenderTasks
}