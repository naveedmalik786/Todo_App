
        const item = document.querySelector('#item');
        const addButton = document.querySelector('#addButton');
        const deleteButton = document.querySelector('#deleteButton');
        const todobox = document.querySelector('#to-do-box');

        addButton.addEventListener('click', addTodo);
        deleteButton.addEventListener('click', deleteTodo);

        item.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                addTodo();
            }
        });

        function addTodo() {
            const value = item.value.trim();
            if (value !== '') {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${value}</span>
                    <i class="fas fa-times"></i>
                `;
                todobox.appendChild(listItem);

                const deleteIcon = listItem.querySelector('.fas.fa-times');
                deleteIcon.addEventListener('click', function () {
                    listItem.remove();
                });

                item.value = '';
            }
        }

        function deleteTodo() {
            const selectedItems = document.querySelectorAll('#to-do-box li');
            if (selectedItems.length > 0) {
                selectedItems[selectedItems.length - 1].remove();
            }
        }
    