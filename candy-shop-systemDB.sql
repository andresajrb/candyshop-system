-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: inventario-ventas
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.32-MariaDB


--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_spanish_ci NOT NULL DEFAULT '123456',
  `name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `role` varchar(100) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'USER',
  `datereg` date DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Tabla que almacena los usuarios del sistema'


--
-- Table structure for table `providers`
--

CREATE TABLE `providers` (
  `providerid` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `lname` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `description` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `address` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fphone` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `lphone` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `identityp` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `isactive` char(1) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'Y',
  `userreg` int(11) NOT NULL,
  `datereg` date DEFAULT NULL,
  PRIMARY KEY (`providerid`),
  KEY `providers_users_fk` (`userreg`),
  CONSTRAINT `providers_users_fk` FOREIGN KEY (`userreg`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Tabla que registra los proveedores'


--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `clientid` int(11) NOT NULL AUTO_INCREMENT,
  `identityc` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `description` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `address` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `phone` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `userreg` int(11) DEFAULT NULL,
  `datereg` date DEFAULT NULL,
  PRIMARY KEY (`clientid`),
  KEY `clients_users_fk` (`userreg`),
  CONSTRAINT `clients_users_fk` FOREIGN KEY (`userreg`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Tabla que registra los clientes'

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `description` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `brand` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cost` double DEFAULT '0',
  `price` double DEFAULT '0',
  `isactive` char(1) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'Y',
  `providerid` int(11) DEFAULT NULL,
  `userreg` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '0',
  `datereg` date DEFAULT NULL,
  `dateentry` date DEFAULT NULL,
  PRIMARY KEY (`productid`),
  KEY `products_fk` (`providerid`),
  KEY `products_users_fk` (`userreg`),
  CONSTRAINT `products_fk` FOREIGN KEY (`providerid`) REFERENCES `providers` (`providerid`),
  CONSTRAINT `products_users_fk` FOREIGN KEY (`userreg`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Tabla que registra los productos'

--
-- Table structure for table `hsale`
--

CREATE TABLE `hsale` (
  `hsaleid` int(11) NOT NULL AUTO_INCREMENT,
  `datesale` date DEFAULT NULL,
  `total` double NOT NULL DEFAULT '0',
  `status` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `clientid` int(11) DEFAULT NULL,
  `userreg` int(11) NOT NULL,
  PRIMARY KEY (`hsaleid`),
  KEY `hsale_fk` (`clientid`),
  KEY `hsale_users_fk` (`userreg`),
  CONSTRAINT `hsale_fk` FOREIGN KEY (`clientid`) REFERENCES `clients` (`clientid`),
  CONSTRAINT `hsale_users_fk` FOREIGN KEY (`userreg`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Table structure for table `dsale`
--

CREATE TABLE `dsale` (
  `dsaleid` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL DEFAULT '0',
  `status` int(11) DEFAULT NULL,
  `hsaleid` int(11) DEFAULT NULL,
  `productid` int(11) DEFAULT NULL,
  PRIMARY KEY (`dsaleid`),
  KEY `dsale_fk` (`hsaleid`),
  KEY `dsale_fk_1` (`productid`),
  CONSTRAINT `dsale_fk` FOREIGN KEY (`hsaleid`) REFERENCES `hsale` (`hsaleid`),
  CONSTRAINT `dsale_fk_1` FOREIGN KEY (`productid`) REFERENCES `products` (`productid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Tabla que registra el detalle de las ventas';

