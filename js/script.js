const input = document.getElementById('input')
const button = document.getElementById('create-btn')
const ul = document.querySelector('.task-list')

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (!input.value) {
        return alert("A tarefa não foi preenchida")
    }

    const cheackbox = `<input type="checkbox">`
    const li = `<li class="task-item">
    ${cheackbox}
    <p>${input.value}</p>
    </li>`

    ul.innerHTML += li
})