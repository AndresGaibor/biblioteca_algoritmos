-- Creacion de la tabla libros
CREATE TABLE libros (
    id INT PRIMARY KEY,
    titulo VARCHAR(100),
    genero VARCHAR(100)
);

-- Ingreso de datos en la tabla libros 
INSERT INTO libros (id, titulo, genero) 
VALUES 
(1, 'Breve historia contemporanea del Ecuador', 'Historia'),
(2, 'Coraline', 'Terror'),
(3, 'El resplandor', 'Terror'),
(4, 'El principito', 'Infantil'),
(5, 'El señor de los anillos', 'Fantasia'),
(6, 'El hobbit', 'Fantasia'),
(7, 'El codigo Da Vinci', 'Misterio'),
(8, 'El alquimista', 'Aventura'),
(9, 'El arte de la guerra', 'Filosofia'),
(10, 'El perfume', 'Drama'),
(11, 'Cien años de soledad', 'Ficción'),
(12, 'Don Quijote de la Mancha', 'Clásico'),
(13, 'Matar a un ruiseñor', 'Drama'),
(14, '1984', 'Ciencia Ficción'),
(15, 'La odisea', 'Épico'),
(16, 'La divina comedia', 'Poesía'),
(17, 'La iliada', 'Épico'),
(18, 'Fahrenheit 451', 'Ciencia Ficción'),
(19, 'Crónica de una muerte anunciada', 'Ficción'),
(20, 'El amor en los tiempos del cólera', 'Romance'),
(21, 'El gran Gatsby', 'Ficción'),
(22, 'El viejo y el mar', 'Aventura'),
(23, 'Orgullo y prejuicio', 'Romance'),
(24, 'Frankenstein', 'Terror'),
(25, 'Drácula', 'Terror'),
(26, 'Los miserables', 'Drama'),
(27, 'Las aventuras de Huckleberry Finn', 'Aventura'),
(28, 'Alicia en el país de las maravillas', 'Fantasía'),
(29, 'Cumbres borrascosas', 'Romance'),
(30, 'Jane Eyre', 'Romance');