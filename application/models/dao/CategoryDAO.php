<?php
 
namespace models\dao;
use models\entities\Category;

use models\dao\GenericDAO;

class CategoryDAO extends GenericDAO {
	
	private static $ENTITY = 'models\entities\Category';
	
	public function findByPrimaryKey($id) {
		return parent::findByPrimaryKey(self::$ENTITY, $id);
	}
	
	public function findAll() {
		return parent::findAll(self::$ENTITY);
	}
	
	public function save(Category $category) {
		parent::save($category);
	}
	
	public function delete(Category $category) {
		parent::delete($category);
	}
	
}