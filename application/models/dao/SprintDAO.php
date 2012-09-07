<?php

namespace models\dao;
use models\dao\GenericDAO;


class SprintDAO extends GenericDAO {
	
	private static $ENTITY = 'models\entities\Sprint';
	
	public function findByPrimaryKey($id) {
		return parent::findByPrimaryKey(self::$ENTITY, $id);
	}
	
	public function findAll() {
		return parent::findAll(self::$ENTITY);
	}
	
	public function save(Sprint $sprint) {
		parent::save($sprint);
	}
	
	public function delete(Sprint $sprint) {
		parent::delete($sprint);
	}
	
}