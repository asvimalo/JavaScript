
//Create classes and deriv.

module mainModels {
    export class Product {
        Name: string;
        Category: string;
        Price: number;
        ArticleNumber: string;

        constructor(newName: string, category:string, price:number, articleNumber:string)
        {
            this.Name = newName;
            this.Category = category;
            this.Price = price;
            this.ArticleNumber = articleNumber;
        }

    }

    class DVD extends Product {
        Movielength: number;

        constructor(Name, Category, Price, ArticleNumber, movieLength){
            
            super(Name, Category, Price, ArticleNumber);

            this.Movielength = movieLength;
        };

   
    };

    class Book extends Product {
        Author: string;
       
        constructor(Name, Category, Price, ArticleNumber, Author) {
            super(Name, Category, Price, ArticleNumber);
            this.Author = Author;
        };
    };
    class Game extends Product {
        Machine: string;
        
        constructor(Name, Category, Price, ArticleNumber, Machine) {
            super(Name, Category, Price, ArticleNumber);
            this.Machine = Machine;
        };
    }; 

};