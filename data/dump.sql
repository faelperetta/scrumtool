CREATE DATABASE  IF NOT EXISTS `scrumtool` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `scrumtool`;
-- MySQL dump 10.13  Distrib 5.5.16, for Win32 (x86)
--
-- Host: localhost    Database: scrumtool
-- ------------------------------------------------------
-- Server version	5.5.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Funcionalidades'),(2,'teste'),(3,'Bugs');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'Agenda','Agenda telefonica','2012-08-16 01:00:43'),(2,'ScrumTool','Projeto de conclusão de Curso.','2012-11-07 02:46:06'),(3,'Novo Projeto','novo projeto','2012-11-06 02:19:27'),(4,'Novo Projeto','novo projeto de testes maluco','2012-11-06 02:27:14'),(5,'Projeto 10','teste','2012-11-07 01:41:13');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;

--
-- Table structure for table `story`
--

DROP TABLE IF EXISTS `story`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `story` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `status` varchar(30) NOT NULL,
  `point` int(11) DEFAULT NULL,
  `project_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sprint_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_story_project` (`project_id`),
  KEY `fk_story_user1` (`user_id`),
  KEY `fk_story_category1` (`category_id`),
  KEY `fk_story_sprint1` (`sprint_id`),
  CONSTRAINT `fk_story_project` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_story_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_story_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_story_sprint1` FOREIGN KEY (`sprint_id`) REFERENCES `sprint` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story`
--

/*!40000 ALTER TABLE `story` DISABLE KEYS */;
INSERT INTO `story` VALUES (1,'Cadastro de Contatos','Cadastro de contatos','TO DO',2,2,1,1,'2012-11-21 00:58:33',7),(2,'Cadastro de Projetos','Teste da madrugada 1','',8,2,1,1,'2012-11-21 00:58:33',7),(3,'Visualizar Grafico','Teste da madrugada 2','',8,2,1,1,'2012-11-21 00:58:33',7),(4,'Imprimir relatório no formato Excel','Teste da madrugada 3','',8,2,1,1,'2012-11-21 00:58:33',7),(5,'Importar dados de arquivo CSV','dsfads','',20,2,1,1,'2012-11-21 00:58:33',7),(6,'Desenvolver gráfico do burndow','&lt;b&gt;teste&lt;/b&gt;','',13,2,1,1,'2012-11-21 00:58:33',17),(7,'True Story','sdfsadf','',8,2,1,1,'2012-11-21 00:58:33',1),(8,'teste','rafael &lt;i&gt;&lt;b&gt;peretta&lt;/b&gt;&lt;/i&gt; santos&lt;br&gt;','',5,2,1,1,'2012-11-21 00:58:33',19),(9,'Importar dados de contatos.','Teste&lt;br&gt;&lt;br&gt;&lt;ul&gt;&lt;li&gt;teste&lt;/li&gt;&lt;li&gt;teste&lt;/li&gt;&lt;li&gt;teste&lt;/li&gt;&lt;li&gt;teste&lt;br&gt;&lt;/li&gt;&lt;/ul&gt;','',20,2,1,2,'2012-11-21 00:58:33',NULL),(10,'Cadastro de contatos (Updated)','Cadastro de contatos','TO DO',2,2,1,1,'2012-11-21 00:58:33',18),(11,'Cadastro de contatos (NEW)','Cadastro de contatos','TO DO',2,2,1,1,'2012-11-21 00:58:33',19),(12,'Cadastro de contatos (NEW)','Cadastro de contatos','TO DO',2,2,1,1,'2012-11-21 00:58:33',1),(13,'Cadastro de contatos (Agora NAO)','Cadastro de contatos','TO DO',2,2,1,1,'2012-11-21 00:58:33',18),(14,'Criar agenda de contatos.','teste','',13,2,1,1,'2012-11-21 00:58:33',21),(15,'Criar dicionario de dados.','teste','',13,2,1,3,'2012-11-21 00:58:33',NULL),(16,'fsdf','sdafsdaf','',5,1,1,1,'2012-11-21 03:10:03',NULL),(17,'Estória do projeto Agenda','sdafsdaf','',5,1,1,1,'2012-11-21 03:11:18',NULL);
/*!40000 ALTER TABLE `story` ENABLE KEYS */;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `hours` int(11) DEFAULT NULL,
  `story_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `completed_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_task_story1` (`story_id`),
  KEY `fk_task_user1` (`user_id`),
  CONSTRAINT `fk_task_story1` FOREIGN KEY (`story_id`) REFERENCES `story` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (1,'Criar controller',8,11,3,'PARA FAZER',NULL),(2,'teste',8,11,3,'PRONTO','2012-11-21 00:00:00'),(3,'cadastro',5,8,1,'PRONTO','2012-11-16 00:00:00'),(4,'Modelagem da base de dados',7,8,1,'PRONTO','2012-11-17 00:00:00'),(5,'Modelagem da base de dados',8,12,1,'PRONTO','2012-11-15 00:00:00'),(6,'fsdfdsaf',8,12,1,'PRONTO','2012-11-15 00:00:00'),(7,'Escrever estoria',4,7,NULL,'FAZENDO',NULL),(8,'teste',3,12,3,'PRONTO','2012-11-14 00:00:00'),(9,'fsdafsda',3,12,3,'FAZENDO',NULL),(10,'fsdfsda',3,7,NULL,'PARA FAZER',NULL),(11,'teste',3,7,1,'FAZENDO',NULL),(12,'Criar tabela contato na base de dados',2,1,3,'PARA FAZER',NULL),(13,'Criar tabela projeto na base de dados',2,2,1,'PARA FAZER',NULL),(14,'Criar tela onde o gráfico será renderizado',3,3,1,'PARA FAZER',NULL);
/*!40000 ALTER TABLE `task` ENABLE KEYS */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(40) NOT NULL,
  `role` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Rafael Peretta Santos','peretta3x@gmail.com','123',NULL),(2,'Daniel Peretta Santos','dani.peretta@gmail.com','',NULL),(3,'João Roberto','joao.roberto@hotmail.com','123',NULL),(4,'Nancy De Abreu Peretta','nancy.abreu@google.com','123',NULL),(5,'Damião Mariano','dmsantos@gmail.com','123',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

--
-- Table structure for table `project_user`
--

DROP TABLE IF EXISTS `project_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_user` (
  `project_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`project_id`,`user_id`),
  KEY `fk_user_id` (`user_id`),
  CONSTRAINT `fk_project_id` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_user`
--

/*!40000 ALTER TABLE `project_user` DISABLE KEYS */;
INSERT INTO `project_user` VALUES (1,1),(2,1),(2,3);
/*!40000 ALTER TABLE `project_user` ENABLE KEYS */;

--
-- Table structure for table `sprint`
--

DROP TABLE IF EXISTS `sprint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sprint` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `project_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sprint_project1` (`project_id`),
  CONSTRAINT `fk_sprint_project1` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sprint`
--

/*!40000 ALTER TABLE `sprint` DISABLE KEYS */;
INSERT INTO `sprint` VALUES (1,'Sprint 1','2012-11-08 00:00:00','2012-11-29 23:59:59',2),(7,'Sprint 2','2012-11-08 00:00:00','2012-11-28 23:59:59',2),(8,'Sprint 3','2012-11-08 00:00:00','2012-11-21 23:59:59',2),(9,'Sprint 4','2012-11-08 00:00:00','2012-11-27 23:59:59',2),(10,'Sprint 5','2012-11-14 00:00:00','2012-11-30 23:59:59',2),(11,'Sprint 6','2012-11-17 00:00:00','2012-11-30 23:59:59',2),(12,'Sprint 7','2012-11-09 00:00:00','2012-11-29 23:59:59',2),(13,'Sprint 8','2012-11-02 00:00:00','2012-11-28 23:59:59',2),(14,'Sprint 9','2012-11-09 00:00:00','2012-11-27 23:59:59',2),(15,'Sprint 10','2012-11-01 00:00:00','2012-11-23 23:59:59',2),(16,'Sprint 11','2012-11-12 00:00:00','2012-11-30 23:59:59',2),(17,'Sprint 12','2012-11-12 00:00:00','2012-11-29 23:59:59',2),(18,'Sprint 13','2012-11-12 00:00:00','2012-11-29 23:59:59',2),(19,'Sprint 14','2012-11-01 00:00:00','2012-11-22 23:59:59',2),(21,'teste','2012-11-02 00:00:00','2012-11-16 23:59:59',2);
/*!40000 ALTER TABLE `sprint` ENABLE KEYS */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed
