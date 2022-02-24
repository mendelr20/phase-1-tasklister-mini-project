document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault()
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let task = document.querySelector('#new-task-description')
    buildToDo(task.value)
    form.reset()
  })
})

function buildToDo(toDo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${toDo} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}