const express = require("express");
const sql = require("mssql");
const app = express();
const port = 3000;

const cors = require("cors"); // Agregar esta línea

const config = {
  user: "sa", // reemplaza 'your_username' con tu usuario de SQL Server
  password: "ClaveS1gur@321", // tu contraseña
  server: "localhost", // o la dirección de tu servidor
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors()); // Agregar esta línea

// Conexión a la base de datos
sql.connect(config, (err) => {
  if (err) console.log(err);
  else console.log("Conectado a la base de datos");
});

app.use(express.static("public"));

// Ruta para obtener los libros
app.get("/books", (req, res) => {
  const genre = req.query.genre;
  let query = "SELECT titulo, genero FROM libros";
  if (genre) {
    query += ` WHERE genero = @genre`;
  }

  const request = new sql.Request();
  if (genre) {
    request.input("genre", sql.VarChar, genre);
  }

  request.query(query, (err, result) => {
    if (err) {
      console.error("Error en la consulta:", err);
      res.status(500).send(err);
    } else {
      console.log("Datos obtenidos:", result.recordset);
      res.send(result.recordset);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
