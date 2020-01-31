function initForms() {
    const loginForm = document.getElementById('login'),
        registerForm = document.getElementById('register');
    return [loginForm, registerForm]
}

initForms().forEach(el => {
    el.querySelector('.button').addEventListener('click', function(){action(this, el)});
});

function action(context, form) {
    const login = form.querySelector('[name="email"]').value,
        password = form.querySelector('[name="password"]').value;

    if (context.innerText === 'Войти') {
        Profile.login({login, password}, (err, data) => data ? location = './home.html' : console.log(err))
    } else if (context.innerText === 'Зарегистрироваться') {
        Profile.register({login, password}, (err, data) => data ? location = './home.html' : console.log(err));
    }
    //this.removeEventListener('click', action);
}



