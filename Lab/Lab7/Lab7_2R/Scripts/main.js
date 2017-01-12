var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Product = (function () {
    function Product(newName, category, price, articleNumber) {
        this.Name = newName;
        this.Category = category;
        this.Price = price;
        this.ArticleNumber = articleNumber;
    }
    return Product;
}());
var DVD = (function (_super) {
    __extends(DVD, _super);
    function DVD(newName, category, price, articleNumber, movieLength) {
        _super.call(this, newName, category, price, articleNumber);
        this.Movielength = movieLength;
    }
    ;
    return DVD;
}(Product));
;
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(newName, category, price, articleNumber, author) {
        _super.call(this, newName, category, price, articleNumber);
        this.Author = author;
    }
    ;
    return Book;
}(Product));
;
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(newName, category, price, articleNumber, machine) {
        _super.call(this, newName, category, price, articleNumber);
        this.Machine = machine;
    }
    ;
    return Game;
}(Product));
;
/////////////////////////////////////////////////
//    Simulating Data-Lager                    //
/////////////////////////////////////////////////
//Create a Db simulation
var DbSimulation;
(function (DbSimulation) {
    var context = (function () {
        function context() {
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
        context.prototype.getProducts = function () {
            var ProductList = new Array();
            ProductList = ProductList.concat(this.Books);
            ProductList = ProductList.concat(this.DvDs);
            ProductList = ProductList.concat(this.Games);
            return ProductList;
        };
        context.prototype.getBooks = function () {
            return this.Books;
        };
        context.prototype.getDvDs = function () {
            return this.DvDs;
        };
        context.prototype.getGames = function () {
            return this.Games;
        };
        context.prototype.AddDvD = function (DvD) {
            this.DvDs.push(DvD);
        };
        context.prototype.AddBook = function (newName, category, price, articleNumber, author) {
            this.Books.push(new Book(newName, category, price, articleNumber, author));
        };
        context.prototype.AddGame = function (Game) {
            this.Games.push(Game);
        };
        return context;
    }());
    DbSimulation.context = context;
})(DbSimulation || (DbSimulation = {}));
/////////////////////////////////////////////////
//    Bussiness Logic                          //
/////////////////////////////////////////////////
var CRUD;
(function (CRUD) {
    var crudLogic = (function () {
        function crudLogic() {
            this.dbContext = new DbSimulation.context();
        }
        crudLogic.prototype.showProducts = function () {
            helpFunctions.isVisible("#divBooks");
            helpFunctions.isVisible("#divDvDs");
            helpFunctions.isVisible("#divGames");
            var text = "";
            //let dbContext: DbSimulation.context = new DbSimulation.context();
            var productList = new Array();
            productList = this.dbContext.getProducts();
            text = "<li class=\"text-center list-group-item active\">Products</li>";
            for (var i = 0; i < productList.length; i++) {
                text += "<li class=\"list-group-item\">Name: " + productList[i].Name + " - Category: " + productList[i].Category + " - Price: " + productList[i].Price + " - Article Number: " + productList[i].ArticleNumber + "</li>";
            }
            document.getElementById("outPutProduct").innerHTML = text;
            document.getElementById("outPutProduct").className = "alert alert-info";
            $("#divProduct").toggle();
        };
        ;
        crudLogic.prototype.showBooks = function () {
            helpFunctions.isVisible("#divProduct");
            var text = "";
            //let dbContext: DbSimulation.context = new DbSimulation.context();
            var booktList = new Array();
            booktList = this.dbContext.getBooks();
            text = "<li class=\"text-center list-group-item active\">Books</li>";
            for (var i = 0; i < booktList.length; i++) {
                text += "<li class=\"list-group-item\">Name: " + booktList[i].Name + " - Category: " + booktList[i].Category + " - Price: " + booktList[i].Price + " - Article Number: " + booktList[i].ArticleNumber + " Author: " + booktList[i].Author + "</li>";
            }
            document.getElementById("outPutBooks").innerHTML = text;
            document.getElementById("outPutBooks").className = "alert alert-info";
            $("#divBooks").toggle();
        };
        ;
        crudLogic.prototype.showDvDs = function () {
            helpFunctions.isVisible("#divProduct");
            var text = "";
            //let dbContext: DbSimulation.context = new DbSimulation.context();
            var dvdList = new Array();
            dvdList = this.dbContext.getDvDs();
            text = "<li class=\"text-center list-group-item active\">DvDs</li>";
            for (var i = 0; i < dvdList.length; i++) {
                text += "<li class=\"list-group-item\">Name: " + dvdList[i].Name + " - Category: " + dvdList[i].Category + " - Price: " + dvdList[i].Price + " - Article Number: " + dvdList[i].ArticleNumber + " - Movie Length: " + dvdList[i].Movielength + " </li>";
            }
            document.getElementById("outPutDVDs").innerHTML = text;
            document.getElementById("outPutDVDs").className = "alert alert-info";
            $("#divDvDs").toggle();
        };
        ;
        crudLogic.prototype.showGames = function () {
            helpFunctions.isVisible("#divProduct");
            var text = "";
            //let dbContext: DbSimulation.context = new DbSimulation.context();
            var gameList = new Array();
            gameList = this.dbContext.getGames();
            text = "<li class=\"text-center list-group-item active\">Games</li>";
            for (var i = 0; i < gameList.length; i++) {
                text += "<li class=\"list-group-item\">Name: " + gameList[i].Name + " - Category: " + gameList[i].Category + " - Price: " + gameList[i].Price + " - Article Number: " + gameList[i].ArticleNumber + " - OS: " + gameList[i].Machine + "</li>";
            }
            document.getElementById("outPutGames").innerHTML = text;
            document.getElementById("outPutGames").className = "alert alert-info";
            $("#divGames").toggle();
        };
        ;
        crudLogic.prototype.AddProduct = function () {
            //let dbContext: DbSimulation.context = new DbSimulation.context();
            var productName = $("#productName").val();
            var category = $("#category").val();
            var price = $("#price").val();
            var ArticleNumber = $("#articleNumber").val();
            //Check which product div gets the input 
            var productChoice = $("#produItem").val();
            var getProductInput = helpFunctions.checkProduct(productChoice);
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
            }
            ;
            helpFunctions.clearAllInputs();
            document.getElementById("outPutProduct").innerHTML = "";
            //this.showProducts();
            $("#divAddProduct").hide();
            $("#divProduct").hide();
        };
        ;
        return crudLogic;
    }());
    CRUD.crudLogic = crudLogic;
    ;
})(CRUD || (CRUD = {}));
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
var helpFunctions;
(function (helpFunctions) {
    function myToggle(divIdName) {
        var isVisible = $(divIdName).is(":visible");
        if (isVisible) {
            $(divIdName).hide();
        }
        else {
            $(divIdName).show();
        }
    }
    helpFunctions.myToggle = myToggle;
    ;
    function openAddProducts() {
        isVisible("#outPutProduct");
        $("#divAddProduct").toggle();
    }
    helpFunctions.openAddProducts = openAddProducts;
    ;
    function isVisible(divIdName) {
        var isVisible = $(divIdName).is(":visible");
        if (isVisible) {
            $(divIdName).hide();
        }
    }
    helpFunctions.isVisible = isVisible;
    ;
    function chooseYourProduct() {
        var x = document.getElementById("produItem").value;
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
        }
        ;
    }
    helpFunctions.chooseYourProduct = chooseYourProduct;
    ;
    function checkProduct(productChoice) {
        var choiceValueString = "";
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
        }
        ;
        return choiceValueString;
    }
    helpFunctions.checkProduct = checkProduct;
    ;
    function ifVisibleClearInput(divIdName, inputName) {
        var isVisible = $(divIdName).is(":visible");
        if (isVisible) {
            $(inputName).val('');
        }
        ;
    }
    helpFunctions.ifVisibleClearInput = ifVisibleClearInput;
    ;
    function clearAllInputs() {
        $("#productName").val('');
        $("#category").val('');
        $("#price").val('');
        $("#articleNumber").val('');
        ifVisibleClearInput("#authorNameDiv", "#authorName");
        ifVisibleClearInput("#movieLengthDiv", "#movieLength");
        ifVisibleClearInput("#osDiv", "#os");
    }
    helpFunctions.clearAllInputs = clearAllInputs;
    ;
})(helpFunctions || (helpFunctions = {}));
var WrappingAll;
(function (WrappingAll) {
    var ctx = new CRUD.crudLogic();
    function showProducts() {
        ctx.showProducts();
    }
    WrappingAll.showProducts = showProducts;
    ;
    function showBooks() {
        ctx.showBooks();
    }
    WrappingAll.showBooks = showBooks;
    ;
    function showDvDs() {
        ctx.showDvDs();
    }
    WrappingAll.showDvDs = showDvDs;
    ;
    function showGames() {
        ctx.showGames();
    }
    WrappingAll.showGames = showGames;
    ;
    function addProduct() {
        ctx.AddProduct();
    }
    WrappingAll.addProduct = addProduct;
    ;
})(WrappingAll || (WrappingAll = {}));
