<?php

use models\entities\Category;

use models\dao\CategoryDAO;

/**
 * @property CategoryDAO $categoryDAO
 * @author Rafael
 *
 */
class CategoryModel extends CI_Model {
	
	private $categoryDAO;
	
	public function __construct() {
		parent::__construct();
		$this->categoryDAO = new CategoryDAO($this->doctrine->em);
	}
	
	public function findAll() {
		return $this->categoryDAO->findAll();
	}
	
	public function save($category) {
		$this->categoryDAO->save($category);
	}
	
	
}