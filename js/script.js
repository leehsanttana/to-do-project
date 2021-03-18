const input = document.querySelector('[data-todo="input"');
const addBtn = document.querySelector('[data-todo="add-btn"');
const mainContainer = document.querySelector('[data-todo="main-container"');
const todoContainer = document.querySelector('[data-todo="to-do-container"');

const ulElement = document.createElement('ul');
ulElement.classList.add('to-dos');
mainContainer.appendChild(ulElement);

let active = false;

function error(){
    active = true;
    const errorMsg = document.createElement('p');
    errorMsg.classList.add('error-message');
    errorMsg.innerText = 'Por favor, Insira um To-do!';
    todoContainer.after(errorMsg);

    setTimeout(() => {
      errorMsg.classList.add('remove');
      setTimeout(() => {
        errorMsg.remove();
      }, 500);
      
    }, 1000);
}

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

    function editTodo() {
      if (!active) {
        const editTodo = document.createElement('div');
        editTodo.classList.add('edit-to-do');
        liElement.appendChild(editTodo);

        const liInput = document.createElement('input');
        liInput.setAttribute('type', 'text');
        liInput.value = toDo.innerText;
        editTodo.appendChild(liInput);

        const optionseditTodo = document.createElement('div');
        optionseditTodo.classList.add('options-edit-to-do');
        editTodo.appendChild(optionseditTodo);

        const liCancel = document.createElement('button');
        liCancel.classList.add('btn-cancel');
        liCancel.innerText = 'Cancelar';
        optionseditTodo.appendChild(liCancel);

        const liSave = document.createElement('button');
        liSave.classList.add('btn-save');
        liSave.innerText = 'Salvar';
        optionseditTodo.appendChild(liSave);

        active = true;

        function canceleditTodo() {
          editTodo.classList.add('remove');
          active = false;
          setTimeout(() => {
            editTodo.remove();
          }, 500);
        }

        function saveeditTodo() {
          toDo.innerText = liInput.value;
          active = false;
          const divMsg = document.createElement('div');
          divMsg.classList.add('sussecs-message')
          divMsg.innerText = 'A alteração foi salva! 👍👍';
          editTodo.after(divMsg);
          setTimeout(() => {
            editTodo.classList.add('remove');
            divMsg.classList.add('remove');
            setTimeout(() => {
              editTodo.remove();
              divMsg.remove();
            }, 500);
          }, 2000);
        }        

        liCancel.addEventListener('click', canceleditTodo);
        liSave.addEventListener('click', saveeditTodo);
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
    if (!active) {
      error();
      setTimeout(() => {
        active = false;
      }, 1000);
    }  
  }
}

addBtn.addEventListener('click', createTodo);
