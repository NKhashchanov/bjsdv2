// FAVORITES:
// ApiConnector.getFavorites((err, data) => console.log(data));


function initFormsFavorites() {
    const addUserForm = document.getElementById('addUser');
    return [addUserForm];
}

initFormsFavorites().forEach(el => {
    el.querySelector('.button').addEventListener('click', function(){actionFavorites(this, el)});
});

function actionFavorites(context, form) {
    if (context.innerText === 'Добавить') {
        const id = form.querySelector('[placeholder="ID"]').value,
            name = form.querySelector('[placeholder="Имя"]').value;
        Profile.addUserToFavorites({id, name}, (err, data) => console.log(data))
    }
    //this.removeEventListener('click', action);
}

function initTrash() {
    const trash = document.querySelectorAll('.mini');
    return trash;
}

initTrash().forEach(el => {
    el.addEventListener('click', removeUserFromFavorites);
});

function removeUserFromFavorites() {
    const id = this.parentElement.previousElementSibling.previousElementSibling.dataset.addresseeId;
    Profile.removeUserFromFavorites({id}, (err, data) => console.log(data))
}
