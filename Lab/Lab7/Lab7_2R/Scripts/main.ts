
//jQuery make ready all divs
$(document).ready(function () {
    document.getElementById("divProduct").style.display = "none";
    document.getElementById("divBooks").style.display = "none";
    document.getElementById("divDvDs").style.display = "none";
    document.getElementById("divGames").style.display = "none";
    document.getElementById("authorNameDiv").style.display = "none";
    document.getElementById("movieLengthDiv").style.display = "none";
    document.getElementById("osDiv").style.display = "none";
    document.getElementById("divAddProduct").style.display = "none";

    //document.getElementById("outPutAddProduct").style.visibility = "hidden";
});
/////////////////////////////////////////////////
//    Model                                    //
/////////////////////////////////////////////////

//Create base and derived classes
class Product {
    public Name: string;
    Category: string;
    Price: number;
    ArticleNumber: string;


    constructor(newName: string, category: string, price: number, articleNumber: string) {
        this.Name = newName;
        this.Category = category;
        this.Price = price;
        this.ArticleNumber = articleNumber;

    }

}

class DVD extends Product {
    Movielength: number;

    constructor(newName: string, category: string, price: number, articleNumber: string, movieLength: number) {

        super(newName, category, price, articleNumber);

        this.Movielength = movieLength;
    };


};

class Book extends Product {
    Author: string;

    constructor(newName: string, category: string, price: number, articleNumber: string, author: string) {
        super(newName, category, price, articleNumber);
        this.Author = author;
    };
};
class Game extends Product {
    Machine: string;

    constructor(newName: string, category: string, price: number, articleNumber: string, machine: string) {
        super(newName, category, price, articleNumber);
        this.Machine = machine;
    };
};

/////////////////////////////////////////////////
//    Simulating Data-Lager                    //
/////////////////////////////////////////////////

//Create a Db simulation
module DbSimulation {

    export class context {

        public Products: Array<Product>;
        public DvDs: Array<DVD>;
        public Books: Array<Book>;
        public Games: Array<Game>;

        constructor() {

            this.DvDs = [new DVD("test", "DvD", 999, "test", 120),
                new DVD("test", "DvD", 999, "test", 120),
                new DVD("test", "DvD", 999, "test", 120),
                new DVD("test", "DvD", 999, "test", 120),
                new DVD("test", "DvD", 999, "test", 120)];
            this.Books = [new Book("test", "Book", 999, "test", "test"),
                new Book("test", "Book", 999, "test", "test"),
                new Book("test", "Book", 999, "test", "test"),
                new Book("test", "Book", 999, "test", "test"),
                new Book("test", "Book", 999, "test", "test"),
                new Book("test", "Book", 999, "test", "test")];
            this.Games = [new Game("test", "Game", 999, "test", "test"),
                new Game("test", "Game", 999, "test", "test"),
                new Game("test", "Game", 999, "test", "test"),
                new Game("test", "Game", 999, "test", "test"),
                new Game("test", "Game", 999, "test", "test"),
                new Game("test", "Game", 999, "test", "test")];

        }
        //public test: Product = new Product("test", "DvD", 999, "test");
        //constructor() {
        //    this.Products = [this.test,
        //        new DVD("test", "DvD", 999, "test", 120),
        //        new DVD("test", "DvD", 999, "test", 120),
        //        new DVD("test", "DvD", 999, "test", 120),
        //        new DVD("test", "DvD", 999, "test", 120),
        //        new DVD("test", "DvD", 999, "test", 120),

        //        new Book("test", "Book", 999, "test", "test"),
        //        new Book("test", "Book", 999, "test", "test"),
        //        new Book("test", "Book", 999, "test", "test"),
        //        new Book("test", "Book", 999, "test", "test"),
        //        new Book("test", "Book", 999, "test", "test"),
        //        new Book("test", "Book", 999, "test", "test"),

        //        new Game("test", "Game", 999, "test", "test"),
        //        new Game("test", "Game", 999, "test", "test"),
        //        new Game("test", "Game", 999, "test", "test"),
        //        new Game("test", "Game", 999, "test", "test"),
        //        new Game("test", "Game", 999, "test", "test"),
        //        new Game("test", "Game", 999, "test", "test")];

        //}
        public getProducts(): Array<Product> {
            let ProductList: Array<Product> = new Array<Product>();
            ProductList = ProductList.concat(this.Books);
            ProductList = ProductList.concat(this.DvDs);
            ProductList = ProductList.concat(this.Games);
            return ProductList;
        }
        public getBooks(): Array<Book> {

            return this.Books;

        }
        public getDvDs(): Array<DVD> {

            return this.DvDs;

        }
        public getGames(): Array<Game> {
            return this.Games;
        }

        public AddDvD(DvD: DVD) {
            this.DvDs.push(DvD);
        }
        public AddBook(newName: string, category: string, price: number, articleNumber: string, author: string): void {
            this.Books.push(new Book(newName, category, price, articleNumber, author));
        }
        public AddGame(Game: Game) {
            this.Games.push(Game);
        }
    }
}
/////////////////////////////////////////////////
//    Bussiness Logic                          //
/////////////////////////////////////////////////

module CRUD {
    export class crudLogic {

        private dbContext: DbSimulation.context;
        

        constructor() {
            this.dbContext = new DbSimulation.context();
           
        }

        public showProducts(): void {
            helpFunctions.isVisible("#divBooks");
            helpFunctions.isVisible("#divDvDs");
            helpFunctions.isVisible("#divGames");
            let text: string = "";

            //let dbContext: DbSimulation.context = new DbSimulation.context();
            let productList: Array<Product> = new Array<Product>();
            productList = this.dbContext.getProducts();

            text = "<li class=\"text-center list-group-item active\">Products</li>"
            for (let i = 0; i < productList.length; i++) {
                text += "<li class=\"list-group-item\">Name: " + productList[i].Name + " - Category: " + productList[i].Category + " - Price: " + productList[i].Price + " - Article Number: " + productList[i].ArticleNumber + "</li>";

            }

            document.getElementById("outPutProduct").innerHTML = text;
            document.getElementById("outPutProduct").className = "alert alert-info";


            $("#divProduct").toggle();

        };
        public showBooks(): void {

            helpFunctions.isVisible("#divProduct");
            let text: string = "";

            //let dbContext: DbSimulation.context = new DbSimulation.context();
            let booktList: Array<Book> = new Array<Book>();
            booktList = this.dbContext.getBooks();
            text = "<li class=\"text-center list-group-item active\">Books</li>"
            for (let i = 0; i < booktList.length; i++) {
                text += "<li class=\"list-group-item\">Name: " + booktList[i].Name + " - Category: " + booktList[i].Category + " - Price: " + booktList[i].Price + " - Article Number: " + booktList[i].ArticleNumber + " Author: " + booktList[i].Author + "</li>";

            }

            document.getElementById("outPutBooks").innerHTML = text;
            document.getElementById("outPutBooks").className = "alert alert-info";

            $("#divBooks").toggle();
            




        };
        public showDvDs(): void {
            helpFunctions.isVisible("#divProduct");

            let text: string = "";

            //let dbContext: DbSimulation.context = new DbSimulation.context();
            let dvdList: Array<DVD> = new Array<DVD>();
            dvdList = this.dbContext.getDvDs();

            text = "<li class=\"text-center list-group-item active\">DvDs</li>"
            for (let i = 0; i < dvdList.length; i++) {
                text += "<li class=\"list-group-item\">Name: " + dvdList[i].Name + " - Category: " + dvdList[i].Category + " - Price: " + dvdList[i].Price + " - Article Number: " + dvdList[i].ArticleNumber + " - Movie Length: " + dvdList[i].Movielength + " </li>";

            }

            document.getElementById("outPutDVDs").innerHTML = text;
            document.getElementById("outPutDVDs").className = "alert alert-info";

            $("#divDvDs").toggle();



        };
        public showGames(): void {
            helpFunctions.isVisible("#divProduct");

            let text: string = "";

            //let dbContext: DbSimulation.context = new DbSimulation.context();
            let gameList: Array<Game> = new Array<Game>();
            gameList = this.dbContext.getGames();

            text = "<li class=\"text-center list-group-item active\">Games</li>"
            for (let i = 0; i < gameList.length; i++) {
                text += "<li class=\"list-group-item\">Name: " + gameList[i].Name + " - Category: " + gameList[i].Category + " - Price: " + gameList[i].Price + " - Article Number: " + gameList[i].ArticleNumber + " - OS: " + gameList[i].Machine + "</li>";

            }

            document.getElementById("outPutGames").innerHTML = text;
            document.getElementById("outPutGames").className = "alert alert-info";

            $("#divGames").toggle();



        };
        public AddProduct() {

            //let dbContext: DbSimulation.context = new DbSimulation.context();
            let productName: string = $("#productName").val();
            let category: string = $("#category").val();
            let price: number = $("#price").val();

            let ArticleNumber: string = $("#articleNumber").val();
            //Check which product div gets the input 
            let productChoice = $("#produItem").val();
            let getProductInput: string = helpFunctions.checkProduct(productChoice);

            //Check Product to instanciate

            switch (productChoice) {
                case "book":

                    this.dbContext.AddBook(productName, category, price, ArticleNumber, getProductInput);
                    break;
                case "dvd":

                    this.dbContext.AddDvD(new DVD(productName, category, price, ArticleNumber, Number(getProductInput)));
                    break;
                case "game":

                    this.dbContext.AddGame(new Game(productName, category, price, ArticleNumber, getProductInput));
                    break;


            };
            helpFunctions.clearAllInputs(); 
            document.getElementById("outPutProduct").innerHTML = "";
            //this.showProducts();
            $("#divAddProduct").hide();
            $("#divProduct").hide();
            
            


        };


    };


}

//let dbContext: DbSimulation.context = new DbSimulation.context();
//export function showProducts(): void {
//    helpFunctions.isVisible("#divBooks");
//    helpFunctions.isVisible("#divDvDs");
//    helpFunctions.isVisible("#divGames");
//    let text: string = "";

//    //let dbContext: DbSimulation.context = new DbSimulation.context();
//    let productList: Array<Product> = this.dbContext.getProducts();
//    text = "<li class=\"text-center list-group-item active\">Products</li>"
//    for (let i = 0; i < productList.length; i++) {
//        text += "<li class=\"list-group-item\">Name: " + productList[i].Name + " - Category: " + productList[i].Category + " - Price: " + productList[i].Price + " - Article Number: " + productList[i].ArticleNumber + "</li>";

//    }

//    document.getElementById("outPutProduct").innerHTML = text;
//    document.getElementById("outPutProduct").className = "alert alert-info";


//    $("#divProduct").toggle();

//};
//export function showBooks() {

//    helpFunctions.isVisible("#divProduct");
//    let text: string = "";

//    //let dbContext: DbSimulation.context = new DbSimulation.context();
//    let booktList: Array<Book> = this.dbContext.getBooks();
//    text = "<li class=\"text-center list-group-item active\">Books</li>"
//    for (let i = 0; i < booktList.length; i++) {
//        text += "<li class=\"list-group-item\">Name: " + booktList[i].Name + " - Category: " + booktList[i].Category + " - Price: " + booktList[i].Price + " - Article Number: " + booktList[i].ArticleNumber + " Author: " + booktList[i].Author + "</li>";

//    }

//    document.getElementById("outPutBooks").innerHTML = text;
//    document.getElementById("outPutBooks").className = "alert alert-info";

//    $("#divBooks").toggle();




//};
//export function showDvDs() {
//    helpFunctions.isVisible("#divProduct");

//    let text: string = "";

//    //let dbContext: DbSimulation.context = new DbSimulation.context();
//    let dvdList: Array<DVD> = this.dbContext.getDvDs();
//    text = "<li class=\"text-center list-group-item active\">DvDs</li>"
//    for (let i = 0; i < dvdList.length; i++) {
//        text += "<li class=\"list-group-item\">Name: " + dvdList[i].Name + " - Category: " + dvdList[i].Category + " - Price: " + dvdList[i].Price + " - Article Number: " + dvdList[i].ArticleNumber + " - Movie Length: " + dvdList[i].Movielength + " </li>";

//    }

//    document.getElementById("outPutDVDs").innerHTML = text;
//    document.getElementById("outPutDVDs").className = "alert alert-info";

//    $("#divDvDs").toggle();



//};
//export function showGames() {
//    helpFunctions.isVisible("#divProduct");

//    let text: string = "";

//    //let dbContext: DbSimulation.context = new DbSimulation.context();
//    let gameList: Array<Game> = this.dbContext.getGames();
//    text = "<li class=\"text-center list-group-item active\">Games</li>"
//    for (let i = 0; i < gameList.length; i++) {
//        text += "<li class=\"list-group-item\">Name: " + gameList[i].Name + " - Category: " + gameList[i].Category + " - Price: " + gameList[i].Price + " - Article Number: " + gameList[i].ArticleNumber + " - OS: " + gameList[i].Machine + "</li>";

//    }

//    document.getElementById("outPutGames").innerHTML = text;
//    document.getElementById("outPutGames").className = "alert alert-info";

//    $("#divGames").toggle();



//};
//export function AddProduct() {

//    //let dbContext: DbSimulation.context = new DbSimulation.context();
//    let productName: string = $("#productName").val();
//    let category: string = $("#categoryName").val();
//    let price: number = $("#productPrice").val();

//    let ArticleNumber: string = $("#articleNumber").val();
//    //Check which product div gets the input 
//    let productChoice = ($("#produItem").val() as HTMLSelectElement).value;
//    let getProductInput: string = helpFunctions.checkProduct(productChoice);

//    //Check Product to instanciate

//    switch (productChoice) {
//        case "book":

//            this.dbContext.AddBook(new Book(productName, category, price, ArticleNumber, getProductInput));
//            break;
//        case "dvd":

//            this.dbContext.AddDvD(new DVD(productName, category, price, ArticleNumber, Number(getProductInput)));
//            break;
//        case "game":

//            this.dbContext.AddGame(new Game(productName, category, price, ArticleNumber, getProductInput));
//            break;


//    };
//    $("#divAddProduct").hide();
//    showProducts();

//};



/////////////////////////////////////////////////
//    Help Functions                           //
/////////////////////////////////////////////////


module helpFunctions {

    export function myToggle(divIdName) {
        var isVisible = $(divIdName).is(":visible");
        if (isVisible) { $(divIdName).hide(); }
        else { $(divIdName).show(); }
    };
    export function openAddProducts() {

        isVisible("#outPutProduct");
        $("#divAddProduct").toggle();

    };
    export function isVisible(divIdName: string) {

        var isVisible = $(divIdName).is(":visible");

        if (isVisible) { $(divIdName).hide() }

    };
    export function chooseYourProduct() {

        var x = (document.getElementById("produItem") as HTMLSelectElement).value;

        //Check Product to open the correspondin attribute div

        switch (x) {
            case "book":
                isVisible("#movieLengthDiv");
                isVisible("#osDiv");
                $("#authorNameDiv").show();

                break;
            case "dvd":
                isVisible("#authorNameDiv");
                isVisible("#osDiv");
                $("#movieLengthDiv").show();

                break;
            case "game":
                isVisible("#authorNameDiv");
                isVisible("#movieLengthDiv");
                $("#osDiv").show();
                break;
        };
    };
    export function checkProduct(productChoice): string {

        let choiceValueString = "";

        switch (productChoice) {
            case "book":
                choiceValueString = $("#authorName").val();
                break;
            case "dvd":
                choiceValueString = $("#movieLength").val();

                break;
            case "game":
                choiceValueString = $("#os").val();
                break;

        };
        return choiceValueString;


    };
    export function ifVisibleClearInput(divIdName: string,inputName:string) {
        var isVisible = $(divIdName).is(":visible");
        if (isVisible) { $(inputName).val('') };
    };
    export function clearAllInputs(): void {
        $("#productName").val('');
        $("#category").val('');
        $("#price").val('');
        $("#articleNumber").val('');
        ifVisibleClearInput("#authorNameDiv","#authorName");
        ifVisibleClearInput("#movieLengthDiv","#movieLength");
        ifVisibleClearInput("#osDiv","#os");
    };
   

}

module WrappingAll {

    let ctx: CRUD.crudLogic = new CRUD.crudLogic();

    export function showProducts() {

        ctx.showProducts();
    };
    export function showBooks() {

        ctx.showBooks();
    };
    export function showDvDs() {

        ctx.showDvDs();
    };
    export function showGames() {

        ctx.showGames();
    };
    export function addProduct() {

        ctx.AddProduct();
    };


}