
function calculateOrderPrice() {
    const restuarantInputElement = document.getElementById('restaurant-input');
    const restuarantInputValue = restuarantInputElement.value;
    const gstCheckboxElement = document.getElementById('gst-checkbox');
    const serviceCheckboxElement = document.getElementById('service-checkbox');
    // default output message - not liable
    let restaurantMessage = 'Please input a valid Menu Price and at least select the one of the additional charges (GST or Service Charge)';
    let totalPrice = restuarantInputValue;
    // output message if liable or not valid
    if(gstCheckboxElement.checked && serviceCheckboxElement.checked) {
        totalPrice =  restuarantInputValue * 1.177;
        restaurantMessage = 'Inclusive of GST and Service Charge, the amount payable is $' + totalPrice.toFixed(2);
    } else if (gstCheckboxElement.checked) {
        totalPrice =  restuarantInputValue * 1.07;
        restaurantMessage = 'Inclusive of GST, the amount payable is $' + totalPrice.toFixed(2);
    } else if (serviceCheckboxElement.checked) {
        totalPrice =  restuarantInputValue * 1.1;
        restaurantMessage = 'Inclusive of Service Charge, the amount payable is $' + totalPrice.toFixed(2);
    } 
    // display output message
    const restaurantOutputElement = document.getElementById('restaurant-output');
    restaurantOutputElement.innerHTML = restaurantMessage;
}


function calculatePostageRate() {
    const postageInputElement = document.getElementById('postage-input');
    const postageInputValue = postageInputElement.value;
    const standardRegularElement = document.getElementById('standard-regular-radio');
    const standardLargeElement = document.getElementById('standard-large-radio');
    const nonStandardElement = document.getElementById('non-standard-radio');


    // default output message - not valid
    let postageMessage = 'Please input a valid weight less than 2000 grams (Max weight)';

    //output message if valid 
    if(!isNaN(postageInputValue) && postageInputValue && postageInputValue <= 2000) {
        let postageRate = 0;
        // if standard regular postage is chosen
        if(standardRegularElement.checked) {
            postageRate = calculateStandardRegularPostageRate(postageInputValue)
        } else if(standardLargeElement.checked) {
            // if standard large postage is chosen
            postageRate = calculateStandardLargePostageRate(postageInputValue);
        } else {
            // if non-standard postage is chosen
            postageRate = calculateNonStandardPostageRate(postageInputValue);
        }
        postageMessage = 'Your postage charge is $' + postageRate.toFixed(2)
    }

    // display output message
    const postageOutputElement = document.getElementById('postage-output');
    postageOutputElement.innerHTML = postageMessage;
}

function calculateStandardRegularPostageRate(weight) {
    if(weight <= 20) return 0.3;
    return 0.37;
}

function calculateStandardLargePostageRate(weight) {
    if(weight <= 100) {
        return 0.6;
    } else if(weight <= 250) {
        return 0.9;
    } else if(weight <= 500) {
        return 1.15;
    } else if(weight <= 1000) {
        return 2.55;
    } 
    return 3.35;
}

function calculateNonStandardPostageRate(weight) {
    if(weight <= 40) {
        return 0.6;
    } else if(weight <= 100) {
        return 0.9;
    } else if(weight <= 250) {
        return 1.15;
    } else if(weight <= 500) {
        return 1.70;
    } else if(weight <= 1000) {
        return 2.55;
    } 
    return 3.35;
}