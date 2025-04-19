const myLibrary = [];

function Book(id, title, desc, status){
    if(!new.target){
        console.error("The function you are using is a constructor");
    }
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.status = status;
}

function addBookToLibrary(title, desc, status){
    let uniqueId = crypto.randomUUID();
    let book = new Book(title, desc, status);
    myLibrary.push(book);
    console.log(book + "Added to library.");
}

addBookToLibrary("Harry Potter", "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Ron Weasley and Hermione Granger, all of whom are students at Hogwarts School of Witchcraft and Wizardry.", "new");

addBookToLibrary("Spiderman", "Spider-Man is a superhero in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.", "new");

addBookToLibrary("Interstellar", "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.", "new");

