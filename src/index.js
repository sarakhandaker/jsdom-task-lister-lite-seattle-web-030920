document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
 
  form.addEventListener("submit", function(event){
   
    event.preventDefault()
    const input = document.getElementById("new-task-description")

    const ul = document.getElementById("tasks")
    const li = document.createElement("li")
    li.textContent = input.value

    ul.appendChild(li)

    const btn = document.createElement("button")
    
    btn.innerText = "X"

    li.appendChild(btn)

    btn.addEventListener("click",event=>{
    btn.parentElement.remove()})

    event.target.reset()
  
    const edit_btn = document.createElement("button")

    edit_btn.innerText = "Edit"
    li.appendChild(edit_btn)

    edit_btn.addEventListener("click",event=>{
      // debugger

     const label = document.getElementsByTagName("label")[0]
     label.innerText = "Edit task description:"

     const input =  document.getElementsByTagName("input")[0]
     input.value = li.innerText.replace("XEdit","")

     const submit =  document.getElementsByTagName("input")[1]
     submit.value = "Save the change"
     
      li.remove()
    })

  })
});
