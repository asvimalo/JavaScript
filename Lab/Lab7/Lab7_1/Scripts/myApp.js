/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                       EXERCISE 1 - My version
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    document.getElementById("result2").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "hidden";
});
var moneyExchange = (function () {
    function moneyExchange(inputCurrency, newAmount) {
        this.currency = inputCurrency;
        this.amount = newAmount;
    }
    ;
    moneyExchange.prototype.exchangeFactory = function () {
        var result;
        if (this.currency.toLowerCase() === "kr") {
            this.amount *= 0.104904738;
            result = "   Eur: " + this.amount;
        }
        else if (this.currency.toLowerCase() === "eur") {
            this.amount *= 9.53245789;
            result = "   Kr: " + this.amount;
        }
        return result;
    };
    ;
    return moneyExchange;
}());
;
var exchange = function () {
    //Clean old stuff
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("money").innerHTML = "";
    //Pic elements from inputs
    var selectedElement = document.getElementById("checkCurrency");
    var option = selectedElement.options[selectedElement.selectedIndex].value;
    var amount = Number(document.getElementById("amount").value);
    //Call class moneyExchange
    var newMoneyExchange = new moneyExchange(option, amount);
    var result = newMoneyExchange.exchangeFactory();
    document.getElementById("money").innerHTML = result;
    document.getElementById("result").style.visibility = "visible";
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                       EXERCISE 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var exchangeMoneyOption2 = (function () {
    function exchangeMoneyOption2(newAmount) {
        this.amount = newAmount;
    }
    exchangeMoneyOption2.prototype.exchangeToEuros = function () {
        this.amount *= 0.104904738;
        var result = "   Eur: " + this.amount;
        return result;
    };
    ;
    exchangeMoneyOption2.prototype.exchangeToKronor = function () {
        this.amount *= 9.53245789;
        var result = "   Kr: " + this.amount;
        return result;
    };
    ;
    return exchangeMoneyOption2;
}());
;
var exchaToEuros = function () {
    document.getElementById("result2").style.visibility = "hidden";
    document.getElementById("money2").innerHTML = "";
    var amount = Number(document.getElementById("krInput").value);
    var newMoneyExchange = new exchangeMoneyOption2(amount);
    var result = newMoneyExchange.exchangeToEuros();
    document.getElementById("money2").innerHTML = result;
    document.getElementById("result2").style.visibility = "visible";
};
var exchaToKr = function () {
    document.getElementById("result2").style.visibility = "hidden";
    document.getElementById("money2").innerHTML = "";
    var amount = Number(document.getElementById("euroInput").value);
    var newMoneyExchange = new exchangeMoneyOption2(amount);
    var result = newMoneyExchange.exchangeToKronor();
    document.getElementById("money2").innerHTML = result;
    document.getElementById("result2").style.visibility = "visible";
};
//# sourceMappingURL=myApp.js.map