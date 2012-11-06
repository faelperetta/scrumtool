<?php

use models\entities\Project;

use models\dao\ProjectDAO;

/**
 * @property ProjectDAO $projectDAO
 * @author Rafael
 *
 */
class ProjectModel extends CI_Model {
	
	private $projectDAO;
	
	public function __construct() {
		parent::__construct();
		$this->projectDAO = new ProjectDAO($this->doctrine->em);
	}
	
	public function findByPrimaryKey($id) {
		return $this->projectDAO->findByPrimaryKey($id);
	}
	
	public function findAll() {
		return $this->projectDAO->findAll();
	}
	
	public function save($data) {
		$project = new Project();
		
		if (!empty($data['id'])) {
			$project->setId($data['id']);
		}
		
		$project->setName($data['name']);
		$project->setDescription($data['description']);
		$project->setCreateAt(new DateTime());
		
		$this->projectDAO->save($project);
		
		return $project;
	}
	
	public function delete($project) {
		$this->projectDAO->delete($project);
	}
	
}