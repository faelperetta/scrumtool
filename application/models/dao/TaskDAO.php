<?php

namespace models\dao;
use models\entities\Task;

use models\dao\GenericDAO;


class TaskDAO extends GenericDAO {

	private static $ENTITY = 'models\entities\Task';
	
	public function findByPrimaryKey($id) {
		return parent::findByPrimaryKey(self::$ENTITY, $id);
	}
	
	public function findAll() {
		return parent::findAll(self::$ENTITY);
	}
	
	public function save(Task $task) {
		parent::save($task);
	}
	
	public function delete(Task $task) {
		parent::delete($task);
	}

	public function findBySprint($sprintId) {
		$query = $this->entityManager
			->createQuery("SELECT t, s, sp FROM ". self::$ENTITY . " t JOIN t.story s JOIN s.sprint sp WHERE sp.id = " . $sprintId);
	 	return $query->getResult();
	}
}