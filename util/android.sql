CREATE DATABASE android;
USE android;

CREATE TABLE usuarios(
    idt_usuario INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre_completo TEXT NOT NULL,
    nombre_usuario VARCHAR(25) NOT NULL,
    correo_usuario VARCHAR(50) NOT NULL,
    nivel_accesso SET("admin", "usuario"),
    psw VARCHAR (255) NOT NULL,
    PRIMARY KEY (idt_usuario),
    CONSTRAINT UNIQUE (nombre_usuario)
);

CREATE TABLE telefono(
    idt_telf INT UNSIGNED NOT NULL AUTO_INCREMENT,
    cod_cell INT NOT NULL,
    version_modelo SET("hardware", "software"),
    nombre_marca VARCHAR(40) NOT NULL,
    ingreso TEXT (20) NOT NULL,
    egreso TEXT (20) NOT NULL,
    pago SET("bolivares", "dolares", "pesos"),
    PRIMARY KEY (idt_telf)
);
CREATE TABLE productos(
    idt_pro INT UNSIGNED NOT NULL AUTO_INCREMENT,
    cod_telefono INT NOT NULL,
    comp_telefono SET("hardware", "software"),
    nom_telefono VARCHAR(40) NOT NULL,
    model_telefono VARCHAR(40) NOT NULL,
    cantid_telefono INT NOT NULL,
    mone_pro SET("bolivares", "dolares", "pesos"),
    PRIMARY KEY (idt_pro)
);

CREATE TABLE ventas(
    refe_ven INT,
    PRIMARY KEY (refe_ven)
);

CREATE TABLE factura(
    idt_fact INT NOT NULL,
    fecha_vent DATETIME,
    PRIMARY KEY (idt_fact)
);

CREATE TABLE devolucion(
    idt_fact INT NOT NULL,
    fecha_devol DATETIME
);

CREATE TABLE delivery(
    idt_fact INT NOT NULL,
    dire_entre VARCHAR(50),
    tiem_entre VARCHAR(10)
);
