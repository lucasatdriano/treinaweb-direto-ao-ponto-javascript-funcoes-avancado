// JavaScript code​​​​​‌​​​​​‌‌​​​‌​​​​‌‌​‌‌​​‌‌​ below
// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const bookData = {
    title: 'Pride and Prejudice',
    author: 'Emily Bronté',
    quantity: 3,
    edition: 4,
};

const comicBookData = {
    title: 'Spiderman',
    author: 'Stan Lee',
    quantity: 3,
    graphicArtist: 'Todd McFarlane',
};

class Book {
    constructor(title, author, quantity, edition) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
        this.edition = edition;
    }

    setEdition(newEdition) {
        console.log(`Edição ${this.edition} atualizada pela ${newEdition}`);
        return (this.edition = newEdition);
    }

    sell() {
        if (this.quantity > 0) {
            console.log(`Tinha ${this.quantity} livros ${this.title}`);
            return this.quantity - 1;
        }
    }
}

class ComicBook extends Book {
    constructor(title, author, quantity, graphicArtist) {
        super(title, author, quantity, 0);
        this.graphicArtist = graphicArtist;
    }
}

const book = new Book(
    bookData.title,
    bookData.author,
    bookData.quantity,
    bookData.edition,
);
const comicBook = new ComicBook(
    comicBookData.title,
    comicBookData.author,
    comicBookData.quantity,
    comicBookData.graphicArtist,
);
const result = [book, comicBook];

console.log(book);
console.log(book.sell());
console.log(book.setEdition(5));
console.log(book);
console.log(comicBook);
console.log(result);
