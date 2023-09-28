DROP DATABASE IF EXISTS Libreria;

-- Creación de BD
CREATE DATABASE Libreria;
USE Libreria;

-- Tabla de Autores
CREATE TABLE Autores (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Nacionalidad VARCHAR(255),
    FechaNacimiento DATE,
    Biografia TEXT
);

-- Tabla de Usuarios
CREATE TABLE Usuarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Apellido VARCHAR(255) NOT NULL,
    Direccion VARCHAR(255),
    Telefono VARCHAR(20),
    CorreoElectronico VARCHAR(255),
    isAdmin BOOL
);

-- Tabla de Sucursales
CREATE TABLE Sucursales (
	ID INT AUTO_INCREMENT PRIMARY KEY,
    Ubicacion VARCHAR(255),
    UsuarioID INT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
);

-- Tabla de Pedidos
CREATE TABLE Pedidos (
	numPedido INT AUTO_INCREMENT PRIMARY KEY,
    Estado ENUM('Entregado', 'En camino'),
    pedidoUser INT,
    FOREIGN KEY (pedidoUser) REFERENCES Usuarios(ID)
);

-- Tabla de Libros
CREATE TABLE Libros (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(255) NOT NULL,
    ISBN VARCHAR(13) UNIQUE,
    AutorID INT,
    Genero VARCHAR(255),
    FechaPublicacion DATE,
    EjemplaresDisponibles INT,
    Editorial VARCHAR(255),
    TotalEjemplares INT,
    Ubicacion INT,
    FOREIGN KEY (Ubicacion) REFERENCES Sucursales(ID),
    FOREIGN KEY (AutorID) REFERENCES Autores(ID)
);