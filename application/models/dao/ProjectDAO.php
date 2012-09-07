<?php

namespace models\dao;
use models\entities\Project;

use models\dao\GenericDAO;

class ProjectDAO extends GenericDAO {
	
	private static $ENTITY = 'models\entities\Project';
	
	public function findByPrimaryKey($id) {
		return parent::findByPrimaryKey(self::$ENTITY, $id);
	}
	
	public function findAll() {
		return parent::findAll(self::$ENTITY);
	}
	
	public function save(Project $project) {
		parent::save($project);
	}
	
	public function delete(Project $project) {
		parent::delete($project);
	}
	
}