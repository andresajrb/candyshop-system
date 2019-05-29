-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: inventario-ventas
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients` (
  `clientid` int(11) NOT NULL AUTO_INCREMENT,
  `identityc` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `description` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `address` varchar(200) COLLATE utf8_spanish_ci DEFAULT NULL,
  `phone` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`clientid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Tabla que registra los clientes';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'1','aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ','laboris ni','consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n','adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu','nulla pariatur. Excepteur sint occaecat cupidatat non pro'),(2,'2','in culpa qui officia deserun','qui officia deserunt mollit anim id est laborum.Lo','et dolore magna','occaecat cupidatat non proident, sunt in culpa qui offici','enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a'),(3,'3','adipis','ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons','irure dolor in reprehenderit in voluptate ve','ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis ','elit, sed do eiu'),(4,'4','et dolore magna aliqua','anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing e','velit esse c','cupidatat non proident, sunt in cul','exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d'),(5,'5','dolore eu fugiat nulla pariatur. Excepteur s','Duis aute irure dolor in reprehenderit in volupta','ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r','fugiat nulla pariatur. Excepteur si','nisi ut aliquip ex ea comm');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dsale`
--

DROP TABLE IF EXISTS `dsale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dsale`
--

LOCK TABLES `dsale` WRITE;
/*!40000 ALTER TABLE `dsale` DISABLE KEYS */;
INSERT INTO `dsale` VALUES (1,27530,8015,NULL,NULL),(2,11942,11410,NULL,NULL),(3,9546,2820,NULL,NULL),(4,29281,26577,NULL,NULL),(5,16684,24082,NULL,NULL);
/*!40000 ALTER TABLE `dsale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hsale`
--

DROP TABLE IF EXISTS `hsale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hsale` (
  `hsaleid` int(11) NOT NULL AUTO_INCREMENT,
  `datesale` date DEFAULT NULL,
  `total` double NOT NULL DEFAULT '0',
  `status` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `clientid` int(11) DEFAULT NULL,
  PRIMARY KEY (`hsaleid`),
  KEY `hsale_fk` (`clientid`),
  CONSTRAINT `hsale_fk` FOREIGN KEY (`clientid`) REFERENCES `clients` (`clientid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hsale`
--

LOCK TABLES `hsale` WRITE;
/*!40000 ALTER TABLE `hsale` DISABLE KEYS */;
INSERT INTO `hsale` VALUES (1,'2005-03-07',0,'ad minim veniam,',NULL),(2,'2003-01-07',0,'amet, consectetur adipi',NULL),(3,'2012-07-09',0,'sunt in culpa qui officia deserun',NULL),(4,'2012-01-22',0,'in voluptate velit esse cillum dolore eu fug',NULL),(5,'1990-05-10',0,'Ut enim ad minim veniam, quis nostrud e',NULL);
/*!40000 ALTER TABLE `hsale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `productid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `description` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `brand` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cost` double DEFAULT '0',
  `price` double DEFAULT '0',
  `isactive` char(1) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'Y',
  `providerid` int(11) DEFAULT NULL,
  PRIMARY KEY (`productid`),
  KEY `products_fk` (`providerid`),
  CONSTRAINT `products_fk` FOREIGN KEY (`providerid`) REFERENCES `providers` (`providerid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Tabla que registra los productos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo','eiusmod tempor incididunt ut labore et dolore magna aliqua. U','ullamco laboris nisi ut aliquip ex ea commodo conse',0,0,'a',NULL),(2,'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dui','amet, consec','dolore eu fugiat nulla pariatur. Excepteur sint occae',0,0,'e',NULL),(3,'fugiat nulla pariatur. Excepteur sint occaeca','Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mol','ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v',0,0,'s',NULL),(4,'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim i','fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ','tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc',0,0,'d',NULL),(5,'est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d','elit, sed do','magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati',0,0,'u',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `providers`
--

DROP TABLE IF EXISTS `providers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  PRIMARY KEY (`providerid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Tabla que registra los proveedores';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `providers`
--

LOCK TABLES `providers` WRITE;
/*!40000 ALTER TABLE `providers` DISABLE KEYS */;
INSERT INTO `providers` VALUES (1,'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici','Duis aute irure dolor in reprehenderit in voluptate velit esse','labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni','adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu','non proident, sunt in culpa qui','vel','non proident, sunt in culpa qui offic','1','l'),(2,'sunt in culpa qui officia deserunt mollit anim id est laboru','non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor','irure dolor ','esse cillum dolore eu fugiat nulla pariatur. Exce','laboris nisi ut aliquip ex ea commodo co','ea commodo consequat. Duis aute i','dolor sit amet, conse','2','l'),(3,'ad minim veniam, quis nostrud exe','dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp','nulla pariatur. Excepteur sint occaecat ','Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod','laborum.Lorem ipsum dolor si','qui officia deserunt mollit anim id est ','quis nostrud exercitation u','3','e'),(4,'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m','magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex','est laborum.Lorem ipsu','irure dolor in reprehenderit in voluptate velit esse cillum dolore eu','proident, sunt in culpa qui officia deserunt moll','minim venia','sit amet, consect','4','d'),(5,'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip','ex ea commodo consequat. D','enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u','id est laborum.Lorem ipsum dolor sit amet, consect','Duis aute irure dolor in','do eiusmod tempor incididunt ut labore','non proiden','5','a');
/*!40000 ALTER TABLE `providers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'inventario-ventas'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-23 20:56:29
