const input = document.querySelector('[data-todo="input"');
const addBtn = document.querySelector('[data-todo="add-btn"');
const todoContainer = document.querySelector('[data-todo="container"');

const ulElement = document.createElement('ul');
ulElement.classList.add('to-dos');
todoContainer.appendChild(ulElement);

function createTodo() {
  if (input.value !== '') {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    const toDo = document.createElement('p');
    toDo.innerText = input.value;

    const liEdit = document.createElement('button');
    liEdit.classList.add('btn-edit');
    liEdit.innerText = 'Editar';
    const liRemove = document.createElement('button');
    liRemove.classList.add('btn-remove');
    liRemove.innerText = 'Remover';

    liElement.appendChild(toDo);
    liElement.appendChild(liEdit);
    liElement.appendChild(liRemove);

    let active = false;

    function editTodo() {
      if (!active) {
        const divEditTodo = document.createElement('div');
        liElement.appendChild(divEditTodo);

        const liInput = document.createElement('input');
        liInput.setAttribute('type', 'text');
        liInput.value = toDo.innerText;
        divEditTodo.appendChild(liInput);

        const liSave = document.createElement('button');
        liSave.innerText = 'Salvar';
        liInput.after(liSave);

        active = true;

        function saveTodo() {
          toDo.innerText = liInput.value;
          console.log('A alteração foi salva!');

          active = false;

          setTimeout(() => {
            divEditTodo.style.display = 'none';
          }, 1000);
        }

        liSave.addEventListener('click', saveTodo);
      }
    }

    function removeTodo() {
      liElement.remove();
    }

    liEdit.addEventListener('click', editTodo);
    liRemove.addEventListener('click', removeTodo);
  }
}

addBtn.addEventListener('click', createTodo);
