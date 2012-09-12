<?php
 
use models\entities\Sprint;

use models\dao\SprintDAO;

/**
 * @property SprintDAO $sprintDAO
 * @author Rafael
 *
 */
class SprintModel extends CI_Model {
	
	private $sprintDAO;
	
	public function __construct() {
		parent::__construct();
		$this->sprintDAO = new SprintDAO($this->doctrine->em);
	}
	
	public function findByPrimaryKey($id) {
		return $this->sprintDAO->findByPrimaryKey($id);
	}
	
	public function findAll() {
		return $this->sprintDAO->findAll();
	}
	
	public function save($data) {
		$sprint = new Sprint();
		$sprint->setName($data['name']);
		
		$this->sprintDAO->save($sprint);
		return $sprint;
	}
	
	public function delete($sprint) {
		$this->sprintDAO->delete($sprint);
	}
	
}