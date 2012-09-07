<?php
namespace models\dao;

use models\entities\Story;

use models\dao\GenericDAO;

class StoryDAO extends GenericDAO {
	
	private static $ENTITY = "models\entities\Story";
	
	public function findByPrimaryKey($id) {
		return parent::findByPrimaryKey(self::$ENTITY, $id);
	}
	
	public function findAll() {
		return parent::findAll(self::$ENTITY);
	}
	
	public function save(Story $story) {
		parent::save($story);
	}
	
	public function delete(Story $story) {
		parent::delete($story);
	}
	
}