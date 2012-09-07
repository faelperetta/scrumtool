<?php
 
/**
 * @property CategoryModel $categoryModel
 * @property Utils $utils
 * @author Rafael
 *
 */
use models\entities\Category;

class Categories extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->model("CategoryModel", "categoryModel");
	}
	
	public function all() {
		$categories = $this->categoryModel->findAll();
		echo $this->utils->returnsSuccess($categories);
	}
	
	public function testSave() {
		$category = new Category();
		$category->setName("Bugs");
		$this->categoryModel->save($category);
		echo $category->getId() . ' - ' . $category->getName();
	}
}

?>