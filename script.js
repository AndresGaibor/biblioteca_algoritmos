document.addEventListener("DOMContentLoaded", function () {
  const bookList = document.getElementById("bookList");
  const genreFilter = document.getElementById("genreFilter");

  function renderBooks(books) {
    bookList.innerHTML = "";
    if (books.length === 0) {
      bookList.innerHTML =
        "<li class='list-group-item'>No se encontraron libros.</li>";
    } else {
      books.forEach((book) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${book.titulo} (${book.genero})`;
        bookList.appendChild(li);
      });
    }
  }

  function fetchBooks(filter = "") {
    let url = "/books";
    if (filter) {
      url += `?genre=${filter}`;
    }
    // Usa http:// para especificar el protocolo
    fetch(`http://127.0.0.1:3000${url}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos:", data); // Añadir esta línea para depuración
        renderBooks(data);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }

  genreFilter.addEventListener("change", function () {
    const selectedGenre = this.value;
    fetchBooks(selectedGenre);
  });

  // Renderiza todos los libros al cargar la página
  fetchBooks();
});
