function calculateDaysNeeded() {
    const pagesInputElement = document.getElementById('pages-input');
    const pagesInputValue = parseInt(pagesInputElement.value);
    // default output message - not valid


    const daysNeeded = 604 / pagesInputValue;
    const daysNeededStr = daysNeeded.toFixed(0);
    console.log('pagesInputValue', pagesInputValue)

    console.log('daysNeeded', daysNeeded)


    let pagesMessage = 'If you read '+ pagesInputValue + ' page(s) a day, you will complete it in about ' + daysNeededStr + 'days. ';
    if(!pagesInputValue|| isNaN(pagesInputValue) || pagesInputValue < 1 || !daysNeeded || daysNeeded <=0) {
        pagesMessage = 'Please input a valid Number of pages. (There are only 604 pages)'
    } else if(daysNeeded > 365) {
        pagesMessage += 'It might seem long, but it will be worth it. Consistency is key!';
    } else if (daysNeeded > 182) {
        pagesMessage += 'Less than a year! You can surely do it as long as you remain consistent.';
    } else if(daysNeeded > 30) {
        pagesMessage += 'Wow, that is not long at all. May you be consistent and khatam in time insyaallah.'
    } else {
        pagesMessage += 'Masyaallah, you can complete it in a month! Go for it.'
    }
    // display output message
    const pagesOutputElement = document.getElementById('pages-output');
    pagesOutputElement.innerHTML = pagesMessage;
}


function calculatePagesNeeded() {
    const daysInputElement = document.getElementById('days-input');
    const daysInputValue = daysInputElement.value;

    const pagesNeeded = 604 / daysInputValue;
    const pagesNeededStr = pagesNeeded.toFixed(0);
    // default output message - not valid
    let pagesMessage = 'If you hope to khatam the Quran by ' + daysInputValue + 'days, you need to read about ' + pagesNeededStr + ' page(s) per day.';

    //output message if valid 
    if(!daysInputValue|| isNaN(daysInputValue) || daysInputValue < 1 || !pagesNeeded) {
        pagesMessage = 'Please input a valid Number of Days. (There are only 604 pages)'
    }

    // display output message
    const daysOutputElement = document.getElementById('days-output');
    daysOutputElement.innerHTML = pagesMessage;

}