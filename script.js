const myLibrary = [];

function Book(id, title, desc, status) {
  if (!new.target) {
    console.error("The function you are using is a constructor");
  }
  this.id = id;
  this.title = title;
  this.desc = desc;
  this.status = status;
}

function addBookToLibrary(title, desc, status) {
  let uniqueId = "id" + crypto.randomUUID();
  let book = new Book(uniqueId, title, desc, status);
  myLibrary.push(book);
}

addBookToLibrary(
  "Harry Potter",
  "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Ron Weasley and Hermione Granger, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
  "new"
);

addBookToLibrary(
  "Spiderman",
  "Spider-Man is a superhero in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.",
  "new"
);

addBookToLibrary(
  "Interstellar",
  "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  "new"
);

addBookToLibrary(
  "Dune",
  "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.",
  "new"
);

function showBook() {
  let index = 0;
  const cardContainer = document.querySelector(".cardContainer");
  for (const obj of myLibrary) {
    // Only show if the book's not alr there.
    if (!cardContainer.contains(document.querySelector("#" + obj.id))){
        const card = document.createElement("div");
        const title = document.createElement("div");
        const desc = document.createElement("div");
        const status = document.createElement("div");
        const removeBtn = document.createElement("button");
        card.classList.add("card");
        title.classList.add("cardTitle");
        desc.classList.add("cardDesc");
        status.classList.add("cardStatus");
        removeBtn.classList.add("removeBtn");
        title.textContent = obj.title;
        desc.textContent = obj.desc;
        status.textContent = obj.status;
        removeBtn.textContent = "Remove";
        if (status.textContent != "new") {
          status.style.color = "red";
        }
        card.id = obj.id;

        removeBtn.addEventListener("click", ()=>document.querySelector("#" + obj.id).remove())

        card.append(title, desc, status, removeBtn);
        cardContainer.appendChild(card);
    }
  }
}

showBook();

const dialog = document.querySelector("dialog");
const newBookBtn = document.querySelector(".newBookBtn");
const addBookBtn = document.querySelector(".addBookBtn");

newBookBtn.addEventListener("click", () => dialog.showModal());
dialog.addEventListener("click", (e) => {
  if (e.target == dialog) {
    dialog.close();
  }
});

addBookBtn.addEventListener("click", (e) => {
  const title = document.querySelector("dialog #title");
  const desc = document.querySelector("dialog #desc");
  const status = document.querySelector("dialog #status");

  addBookToLibrary(title.value, desc.value, status.value);
  showBook();
});
