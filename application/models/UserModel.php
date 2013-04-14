<?php
use models\entities\Project;

use models\entities\User;

use models\dao\UserDAO;
use models\dao\ProjectDAO;

class UserModel extends CI_Model {
	
	private $userDAO;
	
	public function __construct() {
		parent::__construct();
		$this->userDAO = new UserDAO($this->doctrine->em);
		$this->projectDAO = new ProjectDAO($this->doctrine->em);
	}
	
	public function findAll() {
		return $this->userDAO->findAll();
	}

	public function findByProject($projectId) {
		return $this->userDAO->findByProject($projectId);
	}
	
	public function save($data) {
		$user = $this->arrayToUser($data);
		$this->userDAO->save($user);
		return $user;
	}
	
	public function arrayToUser($data) {
		$user = new User();
		
		if (!empty($data['id'])) {
			$user->setId($data['id']);
		}
		
		$user->setName($data['name']);
		$user->setEmail($data['email']);
		$user->setPassword($data['password']);
		$user->setRole($data['role']);
		
		$projects = $data['projects'];
		if (is_array($projects)) {
			foreach ($projects as $projectStdClass) {
				$projectArray = (array) $projectStdClass;
				$project = $this->projectDAO->findByPrimaryKey($projectArray['id']); 
				$user->addProject($project);
			}
		}
		
		return $user;
	}
	
	public function login($username, $password) {
		$users = $this->userDAO->login($username, $password);
		
		if (is_array($users) && !empty($users[0])) {
			return $users[0];
		} else {
			return null;
		}
	}
	
	public function delete($data) {
		$user = $this->userDAO->findByPrimaryKey($data['id']);
		$user = $this->userDAO->delete($user);
	}
	
}