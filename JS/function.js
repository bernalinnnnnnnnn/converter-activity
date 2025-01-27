function convert() {
    const num1 = document.getElementById('input').value;

    if(num1 == "") {
        const num1 = num * '1';
    document.getElementById('display').value = num1;
    }

    else {
        document.getElementById('outputValue1').value = input * 0.0060;
        document.getElementById('outputValue2').value = input * 0.17;
        document.getElementById('outputValue3').value = input * 0.05427;
        document.getElementById('outputValue4').value = input * 0.0722;
    }
}

