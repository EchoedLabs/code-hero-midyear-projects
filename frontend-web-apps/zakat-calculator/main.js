// nisab value
const nisabValue = 4964
const nisabElement = document.getElementById('nisab-value');
nisabElement.innerHTML = '$' + nisabValue;

//fitrah rates
const fitrahNormalRate = 5.30;
const fitrahHigherRate = 7.00;
const normalRateElement = document.getElementById('normal-rate');
const higherRateElement = document.getElementById('higher-rate');
normalRateElement.innerHTML = fitrahNormalRate.toFixed(2);
higherRateElement.innerHTML = fitrahHigherRate.toFixed(2);


function calculateZakatSavings() {
    const zakatSavingsInputElement = document.getElementById('zakat-savings-input');
    const zakatSavingsInputValue = zakatSavingsInputElement.value;
    // default output message - not liable
    let zakatSavingsMessage = 'You are not liable for Zakat on Savings as your minumum savings for the past year is below $' + nisabValue;

    // output message if liable or not valid
    if(zakatSavingsInputValue >= nisabValue) {
        const zakatAmount = zakatSavingsInputValue * 0.025;
        zakatSavingsMessage = 'Your amount payable for Zakat on Savings is $' + zakatAmount;
    } else if (!zakatSavingsInputValue || isNaN(zakatSavingsInputValue)) {
        zakatSavingsMessage = 'Please input a valid Minimum Savings Amount';
    }
    // display output message
    const zakatSavingsOutputElement = document.getElementById('zakat-savings-output');
    zakatSavingsOutputElement.innerHTML = zakatSavingsMessage;
}


function calculateZakatFitrah() {
    const zakatFitrahInputElement = document.getElementById('zakat-fitrah-input');
    const zakatFitrahInputValue = zakatFitrahInputElement.value;
    const zakatFitrahNormalRateElement = document.getElementById('normal-rate-radio');

    // default output message - not valid
    let zakatFitrahMessage = 'Please input a valid value for the Number of Persons that you are paying the zakat fitrah for';

    //output message if valid 
    if(!isNaN(zakatFitrahInputValue) && zakatFitrahInputValue) {
        let zakatFitrahAmount = 0;
        // if normal rate is chosen
        if(zakatFitrahNormalRateElement.checked) {
            zakatFitrahAmount = zakatFitrahInputValue * fitrahNormalRate
            zakatFitrahMessage = 'Your amount payable for Zakat Fitrah (Normal Rate) is $' + zakatFitrahAmount.toFixed(2)
        } else {
            // if higher rate is chosen
            zakatFitrahAmount = zakatFitrahInputValue * fitrahHigherRate;
            zakatFitrahMessage = 'Your amount payable for Zakat Fitrah (Higher Rate) is $' + zakatFitrahAmount.toFixed(2)
        }
    }

    // display output message
    const zakatFitrahOutputElement = document.getElementById('zakat-fitrah-output');
    zakatFitrahOutputElement.innerHTML = zakatFitrahMessage;

}