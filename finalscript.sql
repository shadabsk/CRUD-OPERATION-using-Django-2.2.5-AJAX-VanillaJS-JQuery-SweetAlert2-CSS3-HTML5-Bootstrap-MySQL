-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DjangoDemo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DjangoDemo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DjangoDemo` DEFAULT CHARACTER SET utf8 ;
USE `DjangoDemo` ;

-- -----------------------------------------------------
-- Table `DjangoDemo`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DjangoDemo`.`Users` (
  `UID` INT NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(30) NOT NULL,
  `Password` TEXT NOT NULL,
  `EmailID` VARCHAR(60) NOT NULL,
  `ContactNo` VARCHAR(20) NOT NULL,
  `CreationTime` TIMESTAMP NOT NULL,
  `LastModified` TIMESTAMP NULL,
  PRIMARY KEY (`UID`, `Username`),
  UNIQUE INDEX `Email_ID_UNIQUE` (`EmailID` ASC) ,
  UNIQUE INDEX `Contact_no_UNIQUE` (`ContactNo` ASC) ,
  UNIQUE INDEX `UID_UNIQUE` (`UID` ASC) )
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `DjangoDemo`.`Users`
-- -----------------------------------------------------
START TRANSACTION;
USE `DjangoDemo`;
INSERT INTO `DjangoDemo`.`Users` (`UID`, `Username`, `Password`, `EmailID`, `ContactNo`, `CreationTime`, `LastModified`) VALUES (DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, NULL);

COMMIT;

