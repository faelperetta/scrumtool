SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

CREATE SCHEMA IF NOT EXISTS `scrumtool` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `scrumtool` ;

-- -----------------------------------------------------
-- Table `scrumtool`.`project`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `scrumtool`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NOT NULL ,
  `description` VARCHAR(255) NULL ,
  `create_at` TIMESTAMP NOT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scrumtool`.`user`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `scrumtool`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NOT NULL ,
  `email` VARCHAR(45) NOT NULL ,
  `password` VARCHAR(40) NOT NULL ,
  `role` VARCHAR(30) NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scrumtool`.`category`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `scrumtool`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scrumtool`.`sprint`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `scrumtool`.`sprint` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NOT NULL ,
  `start_date` DATETIME NULL ,
  `end_date` DATETIME NULL ,
  `project_id` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_sprint_project1` (`project_id` ASC) ,
  CONSTRAINT `fk_sprint_project1`
    FOREIGN KEY (`project_id` )
    REFERENCES `scrumtool`.`project` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scrumtool`.`story`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `scrumtool`.`story` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NOT NULL ,
  `description` TEXT NOT NULL ,
  `status` VARCHAR(30) NOT NULL ,
  `point` INT NULL ,
  `project_id` INT NOT NULL ,
  `user_id` INT NOT NULL ,
  `category_id` INT NOT NULL ,
  `create_at` TIMESTAMP NOT NULL ,
  `sprint_id` INT NULL ,
  `priority` INT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_story_project` (`project_id` ASC) ,
  INDEX `fk_story_user1` (`user_id` ASC) ,
  INDEX `fk_story_category1` (`category_id` ASC) ,
  INDEX `fk_story_sprint1` (`sprint_id` ASC) ,
  CONSTRAINT `fk_story_project`
    FOREIGN KEY (`project_id` )
    REFERENCES `scrumtool`.`project` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_story_user1`
    FOREIGN KEY (`user_id` )
    REFERENCES `scrumtool`.`user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_story_category1`
    FOREIGN KEY (`category_id` )
    REFERENCES `scrumtool`.`category` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_story_sprint1`
    FOREIGN KEY (`sprint_id` )
    REFERENCES `scrumtool`.`sprint` (`id` )
    ON DELETE SET NULL
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scrumtool`.`task`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `scrumtool`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `description` VARCHAR(255) NOT NULL ,
  `hours` INT NULL ,
  `story_id` INT NOT NULL ,
  `user_id` INT NULL ,
  `status` VARCHAR(30) NULL ,
  `completed_at` TIMESTAMP NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_task_story1` (`story_id` ASC) ,
  INDEX `fk_task_user1` (`user_id` ASC) ,
  CONSTRAINT `fk_task_story1`
    FOREIGN KEY (`story_id` )
    REFERENCES `scrumtool`.`story` (`id` )
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_user1`
    FOREIGN KEY (`user_id` )
    REFERENCES `scrumtool`.`user` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scrumtool`.`project_user`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `scrumtool`.`project_user` (
  `project_id` INT NOT NULL ,
  `user_id` INT NOT NULL ,
  PRIMARY KEY (`project_id`, `user_id`) ,
  INDEX `fk_user_id` (`user_id` ASC) ,
  CONSTRAINT `fk_project_id`
    FOREIGN KEY (`project_id` )
    REFERENCES `scrumtool`.`project` (`id` )
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id`
    FOREIGN KEY (`user_id` )
    REFERENCES `scrumtool`.`user` (`id` )
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
