document.querySelector('#push').onclick = function(){
    if(document.querySelector('#taskInput').value.length == 0){
      alert("Kindly Enter Task Name!!!!")
    } else {
      document.querySelector('#tasks').innerHTML += `
        <div class="task">
          <span class="taskname">
            ${document.querySelector('#taskInput').value}
          </span>
          <button class="update">Update</button>
          <button class="delete">Delete</button>
        </div>
      `;
      
      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
          this.parentNode.remove();
        }
      }
      
      var update_buttons = document.querySelectorAll(".update");
      for(var i=0; i<update_buttons.length; i++){
        update_buttons[i].onclick = function(){
          var taskElement = this.parentNode;
          var taskNameElement = taskElement.querySelector(".taskname");
          var currentTaskName = taskNameElement.textContent;

          var newTaskName = prompt("Update Task", currentTaskName);

          if (newTaskName !== null && newTaskName.trim() !== "") {
            taskNameElement.textContent = newTaskName;
          }
        }
      }
    }
  }
