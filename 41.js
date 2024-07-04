// create a sublcass magazine that extends the book class with an additional property 'issue' .Add a method to the magazine class to get the magazine  issue number.

class Book {
    constructor (title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
}
class Magazine extends Book {
    constructor(title,author,year,issue) {
        super(title,author,year)
        this.issue=issue;
    }
    getIssueNumber(){
        return this.issue;
    }
}
const myMagazine = new Magazine("Dxo","zayn",2023,5)

const issue = myMagazine.getIssueNumber()
console.log(issue);