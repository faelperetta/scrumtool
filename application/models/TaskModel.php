<?php

use models\dao\TaskDAO;

/**
 * @property TaskDAO $taskDAO
 * @author Rafael
 *
 */
class TaskModel extends CI_Model {
	
	private $taskDAO;
	
	public function __construct() {
		parent::__construct();
		$this->taskDAO = new TaskDAO($this->doctrine->em);
	}
	
	public function findByPrimaryKey($id) {
		return $this->taskDAO->findByPrimaryKey($id);
	}
	
	public function findAll() {
		return $this->taskDAO->findAll();
	}
	
	public function save($task) {
		$this->taskDAO->save($task);
	}
	
	public function delete($task) {
		$this->taskDAO->delete($task);
	}	
}