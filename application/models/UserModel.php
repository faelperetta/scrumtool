<?php
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
	
	public function login($username, $password) {
		$users = $this->userDAO->login($username, $password);
		
		if (is_array($users) && !empty($users[0])) {
			return $users[0];
		} else {
			return null;
		}
	}
	
}