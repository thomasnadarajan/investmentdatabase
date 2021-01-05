function checkIfMinimum() {
    var amount = parseFloat(document.getElementById('amount').value);
    var select = document.getElementById("select")
    var prem = document.getElementById('prem')
    if (select.checked == true) {
        if (amount < 25000 || amount > 250000) {
            document.getElementById('feedback').innerText = "Min or max not adhered to."
            document.getElementById("feedback").style.display = "block"
            return false
        }
    }
    else if (prem.checked == true) {
        if (amount < 10000 || amount > 250000) {
            document.getElementById('feedback').innerText = "Min or max not adhered to."
            document.getElementById("feedback").style.display = "block"
            return false
        }
    }
    else {
        document.getElementById("feedback").innerText = "Ensure all fields filled."
        document.getElementById("feedback").style.display = "block"
        return false
    }
    return true
}
function checks() {
    var form_elems = document.getElementById('data').elements
    for (var i = 0; i < form_elems.length; i++) {
        if (form_elems[i].type != "radio") {
            if (form_elems[i].value == "") {
                document.getElementById('feedback').innerText = "Ensure all fields are filled."
                document.getElementById("feedback").style.display = "block"
                return false
            }
        }
    }
    return checkIfMinimum()
}