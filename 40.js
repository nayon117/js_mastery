// create a class representing a book with properties like title, author and year.Add a method to the book class to get the book's age(current year- age of publications)

class Book {
    constructor (title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }

    getAge(){
        const currentYear = new Date ().getFullYear();
        return currentYear - this.year;
    }
}

const book1 = new Book ("al chemist",'paolo coel',2000)
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

const age = book1.getAge()
console.log(age);