<?php
use models\entities\User;

use models\dao\UserDAO;

class UserModel extends CI_Model {
	
	private $userDAO;
	
	public function __construct() {
		parent::__construct();
		$this->userDAO = new UserDAO($this->doctrine->em);
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
	
}