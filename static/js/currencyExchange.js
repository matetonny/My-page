document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    const exchangeBtn = document.getElementById('exchange-btn');
    const resultDiv = document.getElementById('exchangeResult');

    const apiKey = 'c90ad824e645a3d2093693b4'; // Replace with your ExchangeRate-API key
    const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.conversion_rates);
            currencies.forEach(currency => {
                const option1 = document.createElement('option');
                option1.value = currency;
                option1.textContent = currency;
                fromCurrencySelect.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = currency;
                option2.textContent = currency;
                toCurrencySelect.appendChild(option2);
            });
        })
        .catch(error => console.error('Error fetching exchange rates:', error));

    exchangeBtn.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount)) {
            resultDiv.textContent = 'Please enter a valid amount';
            return;
        }

        const convertApiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

        fetch(convertApiURL)
            .then(response => response.json())
            .then(data => {
                const rate = data.conversion_rate;
                const exchangedAmount = (amount * rate).toFixed(2);
                resultDiv.textContent = `${amount} ${fromCurrency} = ${exchangedAmount} ${toCurrency}`;
            })
            .catch(error => console.error('Error fetching exchange rates:', error));
    });
});