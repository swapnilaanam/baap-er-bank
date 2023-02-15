function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    inputField.value = '';

    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);

    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

function isInValidInput(value) {
    if(isNaN(value)) {
       alert('Please, give a valid number type input');
       return true;
    }
    else {
        return false;
    }
}
