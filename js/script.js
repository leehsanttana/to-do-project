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

    const options = document.createElement('div');
    options.classList.add('options');

    const liEdit = document.createElement('button');
    liEdit.classList.add('btn-edit');
    liEdit.innerText = 'Editar';
    const liRemove = document.createElement('button');
    liRemove.classList.add('btn-remove');
    liRemove.innerText = 'Remover';

    liElement.appendChild(toDo);
    liElement.appendChild(options)
    options.appendChild(liEdit);
    options.appendChild(liRemove);

    let active = false;

    function editTodo() {
      if (!active) {
        const optionEditTodo = document.createElement('div');
        optionEditTodo.classList.add('options-edit-to-do');
        liElement.appendChild(optionEditTodo);

        const liInput = document.createElement('input');
        liInput.setAttribute('type', 'text');
        liInput.value = toDo.innerText;
        optionEditTodo.appendChild(liInput);

        const liSave = document.createElement('button');
        liSave.classList.add('btn-save');
        liSave.innerText = 'Salvar';
        liInput.after(liSave);

        const liCancel = document.createElement('button');
        liCancel.classList.add('btn-cancel');
        liCancel.innerText = 'Cancelar';
        liInput.after(liCancel, liSave);

        active = true;

        function cancelEditTodo() {
          optionEditTodo.classList.add('remove');
          active = false;
          setTimeout(() => {
            optionEditTodo.remove();
          }, 500);
        }

        function saveEditTodo() {
          toDo.innerText = liInput.value;
          active = false;
          const divMsg = document.createElement('div');
          divMsg.classList.add('sussecs-message')
          divMsg.innerText = 'A alteração foi salva! 👍👍';
          optionEditTodo.after(divMsg);
          setTimeout(() => {
            optionEditTodo.classList.add('remove');
            divMsg.classList.add('remove');
            setTimeout(() => {
              optionEditTodo.remove();
              divMsg.remove();
            }, 500);
          }, 2000);
        }        

        liCancel.addEventListener('click', cancelEditTodo);
        liSave.addEventListener('click', saveEditTodo);
      }
    }

    function removeTodo() {
      liElement.classList.add('remove');
      setTimeout(() => {
        liElement.remove();
      }, 500); 
    }

    liEdit.addEventListener('click', editTodo);
    liRemove.addEventListener('click', removeTodo);
  } else {
    const errorMsg = document.createElement('p');
    errorMsg.innerText = 'Por favor, Insira um To-do.';
    input.after(errorMsg);
  }
}

addBtn.addEventListener('click', createTodo);
