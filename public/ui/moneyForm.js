function initForms() {
    const addMoneyForm = document.getElementById('addMoney'),
        conversionMoneyForm = document.getElementById('conversionMoney'),
        sendMoneyForm = document.getElementById('sendMoney');
    return [addMoneyForm, conversionMoneyForm, sendMoneyForm]
}

initForms().forEach(el => {
    el.querySelector('.button').addEventListener('click', function(){action(this, el)});
});

function action(context, form) {
    if (context.innerText === 'Пополнить') {
        const amount = form.querySelector('[placeholder="Сумма"]').value,
            currency = form.getElementsByTagName('select')[0].value;
        Profile.addMoney({currency, amount}, (err, data) => console.log(data))
    } else if (context.innerText === 'Конвертировать') {
        const targetAmount = form.querySelector('[placeholder="Сумма"]').value,
            fromCurrency = form.getElementsByTagName('select')[0].value,
            targetCurrency = form.getElementsByTagName('select')[1].value;
        Profile.convertMoney({fromCurrency, targetCurrency, targetAmount}, (err, data) => console.log(data));
    } else if (context.innerText === 'Перевести') {
        const amount = form.querySelector('[placeholder="Сумма"]').value,
            to = form.getElementsByTagName('select')[0].value,
            currency = form.getElementsByTagName('select')[1].value;
        Profile.transferMoney({to, currency, amount}, (err, data) => console.log(data));
    }
    //this.removeEventListener('click', action);
}
