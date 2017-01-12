//Create classes and deriv.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mainModels;
(function (mainModels) {
    var Product = (function () {
        function Product(newName, category, price, articleNumber) {
            this.Name = newName;
            this.Category = category;
            this.Price = price;
            this.ArticleNumber = articleNumber;
        }
        return Product;
    }());
    mainModels.Product = Product;
    var DVD = (function (_super) {
        __extends(DVD, _super);
        function DVD(Name, Category, Price, ArticleNumber, movieLength) {
            _super.call(this, Name, Category, Price, ArticleNumber);
            this.Movielength = movieLength;
        }
        ;
        return DVD;
    }(Product));
    ;
    var Book = (function (_super) {
        __extends(Book, _super);
        function Book(Name, Category, Price, ArticleNumber, Author) {
            _super.call(this, Name, Category, Price, ArticleNumber);
            this.Author = Author;
        }
        ;
        return Book;
    }(Product));
    ;
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game(Name, Category, Price, ArticleNumber, Machine) {
            _super.call(this, Name, Category, Price, ArticleNumber);
            this.Machine = Machine;
        }
        ;
        return Game;
    }(Product));
    ;
})(mainModels || (mainModels = {}));
;
//# sourceMappingURL=model.js.map