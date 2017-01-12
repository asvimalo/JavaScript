
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                       EXERCISE 1 - My version
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function () {
    
    document.getElementById("result2").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "hidden";
});

class moneyExchange {
    private currency: string;
    private amount: number;

    

    constructor(inputCurrency: string, newAmount: number) {
        this.currency = inputCurrency;
        this.amount = newAmount;

    };
    public exchangeFactory(): string {
        let result: string;
        if (this.currency.toLowerCase() === "kr") {
            this.amount *= 0.104904738;
            result = "   Eur: " + this.amount;
        }
        else if (this.currency.toLowerCase() === "eur") {
            this.amount *= 9.53245789;
            result ="   Kr: " + this.amount;
        }
        return result;

    };
   


};





let exchange = function () {

    //Clean old stuff
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("money").innerHTML = "";

    //Pic elements from inputs
    let selectedElement = (document.getElementById("checkCurrency") as HTMLSelectElement);
    let option = (selectedElement.options[selectedElement.selectedIndex] as HTMLInputElement).value;
    let amount = Number((document.getElementById("amount") as HTMLInputElement).value);

    //Call class moneyExchange
    let newMoneyExchange = new moneyExchange(option, amount);
    let result = newMoneyExchange.exchangeFactory();

    document.getElementById("money").innerHTML = result;
    document.getElementById("result").style.visibility = "visible";
}; 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                       EXERCISE 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class exchangeMoneyOption2 {
    private amount: number;

    constructor(newAmount: number) {
        this.amount = newAmount;

    }

    public exchangeToEuros(): string {
        this.amount *= 0.104904738;
        let result = "   Eur: " + this.amount;
        return result;

    };
    public exchangeToKronor(): string {
        this.amount *= 9.53245789;
        let result = "   Kr: " + this.amount;
        return result;

    };
};

let exchaToEuros = function () {
    document.getElementById("result2").style.visibility = "hidden";
    document.getElementById("money2").innerHTML = "";
    let amount = Number((document.getElementById("krInput") as HTMLInputElement).value);

    let newMoneyExchange = new exchangeMoneyOption2(amount);
    let result = newMoneyExchange.exchangeToEuros();
    document.getElementById("money2").innerHTML = result;
    document.getElementById("result2").style.visibility = "visible";
}; 
let exchaToKr = function () {
    document.getElementById("result2").style.visibility = "hidden";
    document.getElementById("money2").innerHTML = "";
    let amount = Number((document.getElementById("euroInput") as HTMLInputElement).value);

    let newMoneyExchange = new exchangeMoneyOption2(amount);
    let result = newMoneyExchange.exchangeToKronor();
    document.getElementById("money2").innerHTML = result;
    document.getElementById("result2").style.visibility = "visible";
}; 