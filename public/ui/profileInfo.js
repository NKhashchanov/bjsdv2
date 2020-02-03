function showProfile(data) {
    console.log(data)
    const profileList = document.querySelector('.list');
    const profileID = profileList.querySelector('[data-user-id]'),
        profileName = profileList.querySelector('[data-user-name]'),
        profileMoney = profileList.querySelector('ul');
    profileID.dataset.userId = data.id;
    profileID.innerText = data.id;
    profileName.dataset.userName = data.login;
    profileName.innerText = data.login;
    for (let i in data.balance) {
        if (i === 'RUB') {
            profileMoney.querySelector('[data-user-wallet-rub]').dataset.userWalletRub = data.balance[i];
            profileMoney.querySelector('[data-user-wallet-rub]').innerText = data.balance[i];
        }
        if (i === 'EUR') {
            profileMoney.querySelector('[data-user-wallet-eur]').dataset.userWalletEur = data.balance[i];
            profileMoney.querySelector('[data-user-wallet-eur]').innerText = data.balance[i];
        }
        if (i === 'USD') {
            profileMoney.querySelector('[data-user-wallet-usd]').dataset.userWalletUsd = data.balance[i];
            profileMoney.querySelector('[data-user-wallet-usd]').innerText = data.balance[i];
        }
        if (i === 'NTC') {
            profileMoney.querySelector('[data-user-wallet-ntc]').dataset.userWalletNtc = data.balance[i];
            profileMoney.querySelector('[data-user-wallet-ntc]').innerText = data.balance[i];
        }
    }
}


